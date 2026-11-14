// Fails the Pages deploy if the shop's safety locks have been changed.
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const errors = [];
const fail = (message) => errors.push(message);

function read(name) {
  return fs.readFileSync(path.join(root, name), "utf8");
}

let fingerprint;
try {
  fingerprint = JSON.parse(read("security-fingerprint.json"));
} catch (err) {
  fail("Could not read security-fingerprint.json: " + err.message);
}

const expected = fingerprint && fingerprint.whatsapp;
const hosts = (fingerprint && fingerprint.paymentHosts) || [];
if (expected !== "971507591359") {
  fail("security-fingerprint.json whatsapp must be exactly 971507591359.");
}
if (!hosts.includes("buy.stripe.com") || !hosts.includes("checkout.stripe.com") || !hosts.includes("ziina.com")) {
  fail("security-fingerprint.json payment allowlist is missing ziina.com, buy.stripe.com, or checkout.stripe.com.");
}
if (!fingerprint || fingerprint.orderEmail !== "printpilot3d123@gmail.com") {
  fail("security-fingerprint.json orderEmail must be exactly printpilot3d123@gmail.com.");
}

const script = read("script.js");
const html = read("index.html");

const numberConstants = [...script.matchAll(/const\s+WHATSAPP_NUMBER\s*=\s*["'](\d+)["']/g)];
if (numberConstants.length !== 1 || numberConstants[0][1] !== "971507591359") {
  fail('WhatsApp number constant must be exactly const WHATSAPP_NUMBER = "971507591359".');
}
const shopNumbers = [...script.matchAll(/whatsapp:\s*["'](\d+)["']/g)];
if (shopNumbers.length !== 1 || shopNumbers[0][1] !== "971507591359") {
  fail('SHOP.whatsapp must be exactly "971507591359".');
}
const emailConstants = [...script.matchAll(/const\s+ORDER_EMAIL\s*=\s*["']([^"']+)["']/g)];
if (emailConstants.length !== 1 || emailConstants[0][1] !== "printpilot3d123@gmail.com") {
  fail('ORDER_EMAIL must be exactly "printpilot3d123@gmail.com".');
}
const otherEmails = [...script.matchAll(/formsubmit\.co\/ajax\/([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+)/g)];
for (const match of otherEmails) {
  if (match[1] !== "printpilot3d123@gmail.com") {
    fail(`formsubmit.co is used with ${match[1]} instead of printpilot3d123@gmail.com.`);
  }
}
if (!script.includes('formsubmit.co/ajax/" + ORDER_EMAIL') && !script.includes("formsubmit.co/ajax/printpilot3d123@gmail.com")) {
  fail("Orders must be emailed through https://formsubmit.co/ajax/ using ORDER_EMAIL.");
}

function checkWa(source, file) {
  for (const match of source.matchAll(/wa\.me\/(\d+)/g)) {
    if (match[1] !== "971507591359") {
      fail(`${file} has a wa.me link to ${match[1]}. Orders must use 971507591359.`);
    }
  }
  for (const match of source.matchAll(/wa\.me\/\$\{([^}]+)\}/g)) {
    fail(`${file} builds a wa.me link from \${${match[1].trim()}}. Use the fixed number 971507591359.`);
  }
}
checkWa(script, "script.js");
checkWa(html, "index.html");

function hostAllowed(hostname) {
  const host = String(hostname || "").toLowerCase();
  return hosts.some((rule) => {
    if (rule.startsWith("*.")) {
      const base = rule.slice(2).toLowerCase();
      return host === base || host.endsWith("." + base);
    }
    return host === String(rule).toLowerCase();
  });
}

const payment = script.match(/const\s+CARD_PAYMENT_LINK\s*=\s*(["'`])([\s\S]*?)\1/);
if (!payment) {
  fail("CARD_PAYMENT_LINK constant is missing from script.js.");
} else if (payment[2].trim() !== "") {
  let ok = false;
  try {
    const url = new URL(payment[2].trim());
    ok = url.protocol === "https:" && hostAllowed(url.hostname);
  } catch {
    ok = false;
  }
  if (!ok) {
    fail(`CARD_PAYMENT_LINK "${payment[2].trim()}" is not an https link on the allowlist (ziina.com and its subdomains, buy.stripe.com, checkout.stripe.com).`);
  }
}

const scriptTags = [...html.matchAll(/<script\b[^>]*>/gi)];
if (scriptTags.length === 0) fail("index.html has no script tag.");
for (const tag of scriptTags) {
  const src = tag[0].match(/\bsrc\s*=\s*["']([^"']+)["']/i);
  if (!src) {
    fail("index.html has a script tag without a local src. Inline scripts are not allowed.");
    continue;
  }
  if (/^[a-z][a-z0-9+.-]*:/i.test(src[1]) || src[1].startsWith("//")) {
    fail(`index.html loads an external script: ${src[1]}`);
  }
}

const csp = html.match(/<meta\b[^>]*http-equiv\s*=\s*["']Content-Security-Policy["'][^>]*>/i);
if (!csp) {
  fail("The Content-Security-Policy meta tag is missing from index.html.");
} else {
  const content = (csp[0].match(/\bcontent\s*=\s*"([^"]*)"/i) || [])[1] || "";
  if (!/default-src\s+'self'/.test(content) || !/object-src\s+'none'/.test(content)) {
    fail("The Content-Security-Policy meta tag is present but does not lock default-src to 'self' and object-src to 'none'.");
  }
  const connect = content.split(";").map((part) => part.trim()).find((part) => part.startsWith("connect-src"));
  const tokens = connect ? connect.replace(/^connect-src\s+/, "").split(/\s+/).filter(Boolean) : [];
  const allowed = ["'self'", "https://formsubmit.co"];
  if (!connect || tokens.length !== allowed.length || allowed.some((token) => !tokens.includes(token))) {
    fail("CSP connect-src must allow only 'self' and https://formsubmit.co. Found: " + (tokens.join(" ") || "(missing)"));
  }
}

if (errors.length) {
  console.error("Security check failed:");
  for (const message of errors) console.error(" - " + message);
  process.exit(1);
}
console.log("Security check passed.");
