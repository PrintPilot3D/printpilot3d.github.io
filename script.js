/* =====================================================================
   SHOP SETTINGS — edit these first
   ===================================================================== */
const WHATSAPP_NUMBER = "971507591359";
const SHOP = {
  name: "Print Pilot 3D",   // also used in the page title
  whatsapp: "971507591359", // must stay 971507591359. Orders always use this number.
  currency: "AED",
};

/* =====================================================================
   DELIVERY FEE — the extra charge for "Delivery in Dubai"
   ---------------------------------------------------------------------
   Change the number below to change the delivery price.
   It is in AED. Type a number only. Do not type the letters AED.
   Pickup stays free. This fee is added only when delivery is chosen.
   ===================================================================== */
const DELIVERY_FEE = 15;

/* =====================================================================
   CARD PAYMENT LINK — online card payments
   ---------------------------------------------------------------------
   Leave this as "" and the "Card payment online" choice stays hidden.
   To turn it on, paste one https payment link between the quotes.
   The site only accepts these sites: ziina.com (and its subdomains,
   including pay.ziina.com), buy.stripe.com, and checkout.stripe.com.
   Example: https://buy.stripe.com/your-link
   Any other link is ignored and the card choice stays hidden.
   Do not put bank account numbers on this site. See SECURITY.md.
   ===================================================================== */
const CARD_PAYMENT_LINK = "";

/* =====================================================================
   YOUTUBE LINK — a button in the header
   ---------------------------------------------------------------------
   Leave this as "" and the YouTube button stays hidden.
   To show it, paste your YouTube link between the quotes, like
   https://www.youtube.com/@yourchannel
   The button opens in a new tab.
   ===================================================================== */
const YOUTUBE_LINK = "https://www.youtube.com/@PrintPilot3D-p1t/shorts";

/* =====================================================================
   PRODUCTS — the prints for sale
   ---------------------------------------------------------------------
   HOW TO ADD A PRODUCT
   1. Copy one whole { ... } block below (the curly braces and everything inside).
   2. Paste it after the last product. Keep the comma after each block.
   3. Change the values. Every id has to be different.

   id        – a short code with no spaces, like "phone-stand"
   name      – the name people see, like "Phone Stand"
   category  – a group, like "Desk", "Tech", "Gifts", or "Home"
   colour    – the filament colour, like "Cyan"
   price     – the price in AED. Type a number only. Do not type the letters AED.
   stock     – how many you can make. 0 shows "Sold out".
   icon      – which drawing to show. Use one of these words:
               "stand", "tray", "clips", "keyring", "planter",
               "headphones", "earbuds", "watch", "charger", or "cube"
   image     – optional photo. Leave the line starting with // so the
               drawing shows. To use a photo instead:
               1. Save the picture in the images folder.
                  Example: images/headphone-stand.jpg
               2. Delete the // so the line looks like this:
                  image: "images/headphone-stand.jpg",
               The photo then replaces the drawing. Use a picture you took.
               Do not use brand logos.
   image2    – optional second photo, like "images/phone-stand-front.jpg".
               It shows when someone hovers or taps the picture.
               Leave it out if you only have one photo.
   blurb     – one short sentence about the print
   example   – true shows an EXAMPLE label.
               Change it to false when this is a real print you are selling.

   HOW TO REMOVE A PRODUCT
   Delete its whole { ... } block.

   The Phone Stand and Spiral Cone Fidget are real products (example
   is false). A new print can start as an example. Set example to
   false when you are ready to sell it.
   ===================================================================== */
const PRODUCTS = [
  {
    id: "phone-stand",
    name: "Phone Stand",
    category: "Desk",
    colour: "Black",
    price: 20,
    stock: 6,
    icon: "stand",
    image: "images/phone-stand-side.jpg",
    image2: "images/phone-stand-front.jpg",
    blurb: "Holds a phone upright on a desk.",
    example: false,
  },
  {
    id: "spiral-cone-fidget",
    name: "Spiral Cone Fidget",
    category: "Fidget",
    colour: "Black & White",
    price: 25,
    stock: 4,
    icon: "cube",
    image: "images/spiral-cone-fidget.jpg",
    blurb: "A satisfying 3D-printed spiral fidget toy. The inner cone twists through the outer spiral.",
    example: false,
  },
];

/* =====================================================================
   REVIEWS — what customers said
   ---------------------------------------------------------------------
   HOW TO ADD A REVIEW
   1. Copy the sample line below.
   2. Paste it inside the [ ] of REVIEWS. Delete the // at the start.
   3. Change the words. Keep a comma after each review.

   name    – the customer's first name, like "Sara"
   text    – what they said. Use their real words.
   product – which print it is about, like "Phone Stand"
   stars   – optional. A number from 1 to 5. Leave it out for no stars.

   Sample line (keep the // until it is a real review):
   // { name: "Sara", text: "The stand is just the right size.", product: "Phone Stand", stars: 5 },

   Leave the list empty until someone really reviews a print.
   Do not make up reviews.
   ===================================================================== */
const REVIEWS = [
];

/* =====================================================================
   You normally don't need to edit anything below this line.
   The drawings for the icon names live here.
   ===================================================================== */
const ICONS = {
  stand: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="82" cy="108" rx="48" ry="7" fill="rgba(28,35,64,.15)"/>
    <path d="M34 104 L66 74 H118 L142 104 Z" fill="#ffffff" stroke="#1c2340" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M66 74 L78 56 H128 L118 74 Z" fill="#fff4c2" stroke="#1c2340" stroke-width="3.5" stroke-linejoin="round"/>
    <g transform="rotate(-16 100 58)">
      <rect x="84" y="16" width="42" height="72" rx="8" fill="#1c2340"/>
      <rect x="89" y="22" width="32" height="54" rx="3" fill="#e8fbff"/>
      <circle cx="105" cy="80" r="2.4" fill="#fff"/>
    </g>
  </svg>`,
  tray: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="22" y="34" width="116" height="70" rx="14" fill="#fff" stroke="#1c2340" stroke-width="3.5"/>
    <path d="M62 34 v70 M104 34 v70" stroke="#1c2340" stroke-width="3.5"/>
    <rect x="34" y="48" width="14" height="42" rx="7" fill="#ff4d8d" stroke="#1c2340" stroke-width="2.5"/>
    <rect x="36.5" y="48" width="9" height="8" rx="2" fill="#ffd23f" stroke="#1c2340" stroke-width="2"/>
    <rect x="72" y="48" width="24" height="28" rx="4" fill="#fffdf2" stroke="#1c2340" stroke-width="2.5" transform="rotate(-8 84 62)"/>
    <path d="M76 58 h16 M76 64 h16 M76 70 h10" stroke="#14c4d4" stroke-width="2" stroke-linecap="round"/>
    <rect x="114" y="48" width="16" height="16" rx="3" fill="#14c4d4" stroke="#1c2340" stroke-width="2.5"/>
    <rect x="114" y="72" width="16" height="16" rx="3" fill="#ffd23f" stroke="#1c2340" stroke-width="2.5"/>
  </svg>`,
  clips: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 74 C36 74 40 96 64 86 C88 76 96 58 122 64 C140 68 146 78 152 78" fill="none" stroke="#1c2340" stroke-width="7" stroke-linecap="round"/>
    <path d="M12 74 C36 74 40 96 64 86 C88 76 96 58 122 64 C140 68 146 78 152 78" fill="none" stroke="#ffe08a" stroke-width="3.5" stroke-linecap="round"/>
    <g fill="none" stroke-width="8" stroke-linecap="round">
      <path d="M34 46 v26 a12 12 0 0 0 24 0 V46" stroke="#14c4d4"/>
      <path d="M68 46 v26 a12 12 0 0 0 24 0 V46" stroke="#ff4d8d"/>
      <path d="M102 46 v26 a12 12 0 0 0 24 0 V46" stroke="#6d56e8"/>
    </g>
    <g fill="none" stroke="#1c2340" stroke-width="2.5" stroke-linecap="round">
      <path d="M34 46 v26 a12 12 0 0 0 24 0 V46"/>
      <path d="M68 46 v26 a12 12 0 0 0 24 0 V46"/>
      <path d="M102 46 v26 a12 12 0 0 0 24 0 V46"/>
    </g>
  </svg>`,
  keyring: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="52" cy="52" r="28" fill="none" stroke="#ffd23f" stroke-width="10"/>
    <circle cx="52" cy="52" r="28" fill="none" stroke="#1c2340" stroke-width="3"/>
    <rect x="70" y="70" width="12" height="14" rx="2" fill="#1c2340"/>
    <g transform="rotate(-8 112 92)">
      <rect x="78" y="76" width="70" height="36" rx="8" fill="#fff" stroke="#1c2340" stroke-width="3.5"/>
      <circle cx="92" cy="94" r="4" fill="#14c4d4" stroke="#1c2340" stroke-width="2"/>
      <path d="M118 86 l3.2 7 7.6.6 -5.8 4.8 1.8 7.4 -6.8-4.2 -6.8 4.2 1.8-7.4 -5.8-4.8 7.6-.6 z" fill="#ff4d8d" stroke="#1c2340" stroke-width="1.5" stroke-linejoin="round"/>
    </g>
  </svg>`,
  planter: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="78" cy="108" rx="46" ry="7" fill="rgba(28,35,64,.12)"/>
    <ellipse cx="62" cy="46" rx="16" ry="24" fill="#8be07a" stroke="#1c2340" stroke-width="3" transform="rotate(-28 62 46)"/>
    <ellipse cx="96" cy="44" rx="16" ry="24" fill="#3aaa55" stroke="#1c2340" stroke-width="3" transform="rotate(24 96 44)"/>
    <rect x="76" y="48" width="8" height="24" rx="4" fill="#1c2340"/>
    <path d="M46 72 H114 L104 110 H56 Z" fill="#ff4d8d" stroke="#1c2340" stroke-width="3.5" stroke-linejoin="round"/>
    <rect x="40" y="62" width="80" height="14" rx="5" fill="#ffd23f" stroke="#1c2340" stroke-width="3.5"/>
    <ellipse cx="80" cy="72" rx="30" ry="6" fill="#6b4423"/>
  </svg>`,
  headphones: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="80" cy="108" rx="48" ry="7" fill="rgba(28,35,64,.12)"/>
    <rect x="48" y="94" width="64" height="12" rx="6" fill="#ffffff" stroke="#1c2340" stroke-width="3.5"/>
    <rect x="74" y="48" width="12" height="50" rx="4" fill="#fff4c2" stroke="#1c2340" stroke-width="3.5"/>
    <rect x="40" y="38" width="80" height="12" rx="6" fill="#6d56e8" stroke="#1c2340" stroke-width="3.5"/>
    <path d="M52 40 C52 16 108 16 108 40" fill="none" stroke="#1c2340" stroke-width="5" stroke-linecap="round"/>
    <rect x="34" y="34" width="18" height="36" rx="9" fill="#ff4d8d" stroke="#1c2340" stroke-width="3"/>
    <rect x="108" y="34" width="18" height="36" rx="9" fill="#14c4d4" stroke="#1c2340" stroke-width="3"/>
  </svg>`,
  earbuds: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="80" cy="108" rx="46" ry="7" fill="rgba(28,35,64,.12)"/>
    <path d="M34 102 H126 L114 78 H46 Z" fill="#ffffff" stroke="#1c2340" stroke-width="3.5" stroke-linejoin="round"/>
    <rect x="42" y="68" width="76" height="14" rx="6" fill="#ffd23f" stroke="#1c2340" stroke-width="3.5"/>
    <rect x="56" y="22" width="48" height="54" rx="14" fill="#ffffff" stroke="#1c2340" stroke-width="3.5"/>
    <path d="M62 46 H98" stroke="#1c2340" stroke-width="3" stroke-linecap="round"/>
    <circle cx="72" cy="35" r="6" fill="#14c4d4" stroke="#1c2340" stroke-width="2.5"/>
    <circle cx="88" cy="35" r="6" fill="#ff4d8d" stroke="#1c2340" stroke-width="2.5"/>
  </svg>`,
  charger: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="78" cy="108" rx="48" ry="7" fill="rgba(28,35,64,.12)"/>
    <path d="M30 102 H126 L114 84 H42 Z" fill="#ffffff" stroke="#1c2340" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M56 84 L70 34 H112 L98 84 Z" fill="#fff4c2" stroke="#1c2340" stroke-width="3.5" stroke-linejoin="round"/>
    <circle cx="86" cy="72" r="13" fill="#ffd23f" stroke="#1c2340" stroke-width="3"/>
    <circle cx="86" cy="72" r="5" fill="#ffffff" stroke="#1c2340" stroke-width="2.5"/>
    <g transform="rotate(-8 84 56)">
      <rect x="62" y="26" width="46" height="54" rx="14" fill="#1c2340"/>
      <rect x="67" y="31" width="36" height="44" rx="9" fill="#e8fbff"/>
    </g>
    <path d="M114 96 H136" stroke="#6d56e8" stroke-width="4" stroke-linecap="round"/>
  </svg>`,
  watch: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="80" cy="108" rx="36" ry="7" fill="rgba(28,35,64,.12)"/>
    <rect x="62" y="98" width="36" height="10" rx="5" fill="#ffffff" stroke="#1c2340" stroke-width="3.5"/>
    <path d="M58 62 C58 30 102 30 102 62 C102 94 58 94 58 62" fill="none" stroke="#6d56e8" stroke-width="10"/>
    <ellipse cx="80" cy="62" rx="26" ry="38" fill="#ffd23f" stroke="#1c2340" stroke-width="3.5"/>
    <path d="M54 62 C54 34 106 34 106 62" fill="none" stroke="#6d56e8" stroke-width="8" stroke-linecap="round"/>
    <path d="M54 62 C54 90 106 90 106 62" fill="none" stroke="#6d56e8" stroke-width="8" stroke-linecap="round"/>
    <circle cx="80" cy="62" r="18" fill="#ffffff" stroke="#1c2340" stroke-width="3.5"/>
    <circle cx="80" cy="62" r="12" fill="#e8fbff" stroke="#1c2340" stroke-width="2.5"/>
    <path d="M80 62 V52" stroke="#ff4d8d" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M80 62 L88 67" stroke="#1c2340" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="80" cy="62" r="2.2" fill="#1c2340"/>
  </svg>`,
  cube: `<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="80" cy="104" rx="46" ry="8" fill="rgba(28,35,64,.12)"/>
    <rect x="36" y="74" width="88" height="18" rx="6" fill="#14c4d4" stroke="#1c2340" stroke-width="3.5"/>
    <rect x="46" y="52" width="68" height="18" rx="6" fill="#ff4d8d" stroke="#1c2340" stroke-width="3.5"/>
    <rect x="56" y="30" width="48" height="18" rx="6" fill="#ffd23f" stroke="#1c2340" stroke-width="3.5"/>
  </svg>`,
};

const CART_KEY = "printpilot3d-cart-v1";
const $ = (sel) => document.querySelector(sel);
const byId = (id) => PRODUCTS.find((p) => p.id === id);

function priceOf(p) {
  const n = Number(p && p.price);
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
}
function stockOf(p) {
  const n = Math.floor(Number(p && p.stock));
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
}
function money(n) {
  const rounded = Math.round((Number(n) + Number.EPSILON) * 100) / 100;
  const text = Number.isInteger(rounded)
    ? rounded.toLocaleString("en-AE")
    : rounded.toLocaleString("en-AE", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return `${text} ${SHOP.currency}`;
}
function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}
function categoryClass(category) {
  const slug = String(category || "other").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `t-${slug || "other"}`;
}
function iconSvg(name) {
  return ICONS[name] || ICONS.cube;
}
function safeImage(src) {
  const s = String(src || "").trim();
  if (!s || /[\s"'<>]/.test(s)) return "";
  if (/^[a-z][a-z0-9+.-]*:/i.test(s) || s.startsWith("//")) return "";
  return s;
}
function productImage(p) {
  return safeImage(p && p.image);
}
function productArt(p, swap) {
  const src = productImage(p);
  if (!src) return iconSvg(p.icon);
  const main = `<img class="photo" src="${esc(src)}" alt="">`;
  const extra = swap ? safeImage(p && p.image2) : "";
  if (!extra) return main;
  return main + `<img class="photo photo-alt" src="${esc(extra)}" alt="">`;
}

let fulfillment = "pickup";
let payment = "cash";
let cart = loadCart();

function cleanItems(raw) {
  const clean = {};
  if (!raw || typeof raw !== "object") return clean;
  for (const [id, q] of Object.entries(raw)) {
    const p = byId(id);
    const qty = Math.floor(Number(q));
    if (p && stockOf(p) > 0 && qty > 0) clean[id] = Math.min(qty, stockOf(p));
  }
  return clean;
}
function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY)) || {};
    // New carts are { items, fulfillment }. Older carts were just { id: qty }.
    const items = raw && typeof raw.items === "object" ? raw.items : raw;
    fulfillment = raw && raw.fulfillment === "delivery" ? "delivery" : "pickup";
    return cleanItems(items);
  } catch {
    fulfillment = "pickup";
    return {};
  }
}
function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify({ items: cart, fulfillment }));
  } catch { /* private mode */ }
}
function feeAmount() {
  const n = Number(DELIVERY_FEE);
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
}
function currentFee() {
  return fulfillment === "delivery" ? feeAmount() : 0;
}
function optionLabel() {
  return fulfillment === "delivery" ? `Delivery in Dubai (+${money(feeAmount())})` : "Pickup (free)";
}
function youtubeLink() {
  const url = String(YOUTUBE_LINK || "").trim();
  if (!/^https:\/\/\S+$/i.test(url)) return "";
  let host = "";
  try { host = new URL(url).hostname.replace(/^www\./, "").toLowerCase(); } catch { return ""; }
  if (host !== "youtube.com" && host !== "m.youtube.com" && host !== "youtu.be" && host !== "youtube-nocookie.com") return "";
  return url;
}
function starRow(stars) {
  const n = Number(stars);
  if (!Number.isInteger(n) || n < 1 || n > 5) return "";
  return `<p class="stars" aria-label="${n} out of 5 stars">${"★".repeat(n)}${"☆".repeat(5 - n)}</p>`;
}
function renderReviews() {
  const list = (Array.isArray(REVIEWS) ? REVIEWS : []).filter((r) => r && String(r.name || "").trim() && String(r.text || "").trim());
  const empty = $("#reviewEmpty");
  const box = $("#reviewList");
  empty.hidden = list.length > 0;
  box.hidden = list.length === 0;
  box.innerHTML = list.map((r) => {
    const product = String(r.product || "").trim();
    return `
    <article class="review">
      ${starRow(r.stars)}
      <p class="review-text">${esc(r.text)}</p>
      <p class="review-who">${esc(r.name)}</p>
      ${product ? `<p class="review-product">${esc(product)}</p>` : ""}
    </article>`;
  }).join("");
}
function paymentHostAllowed(hostname) {
  const host = String(hostname || "").toLowerCase();
  if (host === "ziina.com" || host.endsWith(".ziina.com")) return true;
  return host === "buy.stripe.com" || host === "checkout.stripe.com";
}
function cardPaymentLink() {
  const raw = String(CARD_PAYMENT_LINK || "").trim();
  if (!raw) return "";
  let parsed;
  try { parsed = new URL(raw); } catch { parsed = null; }
  if (!parsed || parsed.protocol !== "https:" || !paymentHostAllowed(parsed.hostname)) {
    console.warn("CARD_PAYMENT_LINK was ignored. Use an https link on ziina.com, pay.ziina.com, buy.stripe.com, or checkout.stripe.com.");
    return "";
  }
  return raw;
}
function chosenPayment() {
  if (payment === "transfer") return "transfer";
  if (payment === "card" && cardPaymentLink()) return "card";
  return "cash";
}
function paymentLabel() {
  const choice = chosenPayment();
  if (choice === "transfer") return "Bank transfer";
  if (choice === "card") return "Card";
  return "Cash";
}
function syncPayment() {
  const link = cardPaymentLink();
  const cardOption = $("#cardOption");
  if (cardOption) cardOption.hidden = !link;
  if (!link && payment === "card") payment = "cash";
  document.querySelectorAll('input[name="payment"]').forEach((input) => {
    const on = input.value === payment;
    input.checked = on;
    input.closest(".ship-option")?.classList.toggle("selected", on);
  });
}

function renderFilters() {
  const categories = [...new Set(PRODUCTS.map((p) => p.category).filter(Boolean))];
  categories.sort((a, b) => a.localeCompare(b));
  const select = $("#categoryFilter");
  select.insertAdjacentHTML("beforeend", categories.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join(""));
}

function inPriceBand(price, band) {
  if (band === "under-25") return price < 25;
  if (band === "25-40") return price >= 25 && price <= 40;
  if (band === "over-40") return price > 40;
  return true;
}

function filtered() {
  const q = $("#search").value.trim().toLowerCase();
  const category = $("#categoryFilter").value;
  const band = $("#priceFilter").value;
  let list = PRODUCTS.filter((p) => {
    const hay = `${p.name} ${p.category} ${p.colour} ${p.blurb}`.toLowerCase();
    return (!q || hay.includes(q)) &&
      (category === "all" || p.category === category) &&
      inPriceBand(priceOf(p), band);
  });
  const sort = $("#sort").value;
  if (sort === "price-asc") list.sort((a, b) => priceOf(a) - priceOf(b) || a.name.localeCompare(b.name));
  if (sort === "price-desc") list.sort((a, b) => priceOf(b) - priceOf(a) || a.name.localeCompare(b.name));
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));
  return list;
}

function renderGrid() {
  const list = filtered();
  const empty = $("#empty");
  if (PRODUCTS.length === 0) {
    empty.hidden = false;
    empty.textContent = "No prints are listed yet. Use the custom print request if you need something made.";
  } else {
    empty.hidden = list.length > 0;
    empty.textContent = "No prints match that search. Try a different word.";
  }
  $("#grid").innerHTML = list.map((p) => {
    const sold = stockOf(p) <= 0;
    return `
    <article class="product" data-id="${esc(p.id)}">
      <div class="thumb ${categoryClass(p.category)}${productImage(p) ? " has-photo" : ""}${safeImage(p.image2) ? " has-swap" : ""}">
        ${p.example ? '<span class="tag">EXAMPLE</span>' : ""}
        <div class="art">${productArt(p, true)}</div>
      </div>
      <div class="p-body">
        <h3>${esc(p.name)}</h3>
        <p class="blurb">${esc(p.blurb)}</p>
        <div class="p-meta">${esc(p.category)} · ${esc(p.colour)}</div>
        ${p.example ? '<p class="example-note">Sample to replace</p>' : ""}
        <div class="p-foot">
          <div class="price">${esc(money(priceOf(p)).replace(` ${SHOP.currency}`, ""))} <small>${esc(SHOP.currency)}</small></div>
          <button type="button" class="btn btn-primary add" data-add="${esc(p.id)}" ${sold ? "disabled" : ""}>${sold ? "Sold out" : "Add +"}</button>
        </div>
      </div>
    </article>`;
  }).join("");
}

function cartLines() {
  return Object.entries(cart).map(([id, qty]) => ({ p: byId(id), qty })).filter((l) => l.p);
}
function cartTotal() {
  return cartLines().reduce((sum, l) => sum + priceOf(l.p) * l.qty, 0);
}

function addToCart(id) {
  const p = byId(id);
  if (!p || stockOf(p) <= 0) return;
  const cur = cart[id] || 0;
  if (cur >= stockOf(p)) { toast(`Only ${stockOf(p)} in stock`); return; }
  cart[id] = cur + 1;
  saveCart();
  renderCart();
  toast(`Added ${p.name}`);
  const button = $("#cartOpen");
  button.classList.remove("bump");
  void button.offsetWidth;
  button.classList.add("bump");
}
function setQty(id, qty) {
  const p = byId(id);
  if (!p) return;
  const stock = stockOf(p);
  if (qty <= 0 || stock <= 0) delete cart[id];
  else {
    if (qty > stock) toast(`Only ${stock} in stock`);
    cart[id] = Math.min(qty, stock);
  }
  saveCart();
  renderCart();
}

function renderCart() {
  const lines = cartLines();
  const count = lines.reduce((sum, l) => sum + l.qty, 0);
  $("#cartCount").textContent = String(count);
  $("#cartOpen").setAttribute("aria-label", `Open cart, ${count} item${count === 1 ? "" : "s"}`);
  const fee = currentFee();
  $("#cartSubtotal").textContent = money(cartTotal());
  $("#feeLabel").textContent = fulfillment === "delivery" ? "Delivery in Dubai" : "Pickup (free)";
  $("#cartFee").textContent = money(fee);
  $("#cartTotal").textContent = money(cartTotal() + fee);
  document.querySelectorAll('input[name="fulfillment"]').forEach((input) => {
    input.checked = input.value === fulfillment;
    input.closest(".ship-option")?.classList.toggle("selected", input.checked);
  });
  const delivering = fulfillment === "delivery";
  $("#addressFields").hidden = !delivering;
  $("#areaInput").required = delivering;
  $("#buildingInput").required = delivering;
  const optionName = $("#deliveryOptionName");
  if (optionName) optionName.textContent = `Delivery in Dubai (+${money(feeAmount())})`;
  syncPayment();
  $("#cartItems").innerHTML = lines.length ? lines.map(({ p, qty }) => `
    <div class="ci">
      <div class="ci-thumb ${categoryClass(p.category)}${productImage(p) ? " has-photo" : ""}">${productArt(p)}</div>
      <div>
        <div class="ci-name">${esc(p.name)}</div>
        <div class="ci-sub">${esc(p.colour)} · ${esc(money(priceOf(p)))} each</div>
        <button type="button" class="ci-remove" data-remove="${esc(p.id)}">Remove</button>
      </div>
      <div class="qty">
        <button type="button" data-dec="${esc(p.id)}" aria-label="Decrease ${esc(p.name)}">−</button>
        <span>${qty}</span>
        <button type="button" data-inc="${esc(p.id)}" aria-label="Increase ${esc(p.name)}">+</button>
      </div>
    </div>`).join("") : '<p class="cart-empty">Your cart is empty. Add a print from the shop.</p>';
}

function openCart(open) {
  $("#drawer").classList.toggle("open", open);
  $("#drawer").setAttribute("aria-hidden", String(!open));
  $("#overlay").hidden = !open;
  document.body.classList.toggle("lock", open);
  if (open) $("#cartClose").focus();
}

function stripMarkup(value) {
  return String(value ?? "").replace(/\0/g, "").replace(/<[^>]*>/g, "").replace(/[<>]/g, "");
}
function cleanField(value, multiline) {
  let text = stripMarkup(value);
  text = multiline
    ? text.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    : text.replace(/[\u0000-\u001F\u007F]/g, " ");
  return text.trim().slice(0, multiline ? 400 : 120);
}
function waLink(text) {
  if (SHOP.whatsapp !== WHATSAPP_NUMBER || WHATSAPP_NUMBER !== "971507591359") {
    console.warn("WhatsApp number did not match 971507591359. The order still uses that number.");
  }
  const message = stripMarkup(text);
  return "https://wa.me/971507591359?text=" + encodeURIComponent(message);
}
function setExternal(el, url) {
  if (!el) return;
  el.href = url;
  el.target = "_blank";
  el.rel = "noopener noreferrer";
}
function showWhatsApp(linkId, text) {
  const url = waLink(text);
  const link = $(linkId);
  setExternal(link, url);
  link.hidden = false;
  window.open(url, "_blank", "noopener,noreferrer");
  return url;
}
function buildOrderMessage(data) {
  const lines = cartLines();
  const fee = currentFee();
  const itemLines = lines.map(({ p, qty }) =>
    `• ${qty} x ${p.name} (${p.category}, ${p.colour}) at ${money(priceOf(p))} each - ${money(priceOf(p) * qty)}`);
  const parts = [
    `Hi! I'd like to order from ${SHOP.name}:`,
    "",
    ...itemLines,
    "",
    `Subtotal: ${money(cartTotal())}`,
    `Option: ${optionLabel()}`,
    `Delivery fee: ${money(fee)}`,
    `Total: ${money(cartTotal() + fee)}`,
    `Payment: ${paymentLabel()}`,
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
  ];
  if (fulfillment === "delivery") {
    parts.push(`Area: ${data.area}`);
    parts.push(`Building / villa: ${data.building}`);
  }
  if (data.notes) parts.push(`Notes: ${data.notes}`);
  if (lines.some(({ p }) => p.example)) {
    parts.push("", "Some of these are still example products on the website.");
  }
  return parts.join("\n");
}
function buildCustomMessage(data) {
  const parts = [
    `Hi! I'd like a custom print from ${SHOP.name}.`,
    "",
    `What I want: ${data.idea}`,
  ];
  if (data.colour) parts.push(`Colour: ${data.colour}`);
  if (data.notes) parts.push(`Size or notes: ${data.notes}`);
  parts.push(`Name: ${data.name}`);
  return parts.join("\n");
}
function readForm(form) {
  const data = Object.fromEntries(new FormData(form));
  const multiline = new Set(["notes", "idea"]);
  for (const key in data) data[key] = cleanField(data[key], multiline.has(key));
  return data;
}

function handleCheckout(e) {
  e.preventDefault();
  const err = $("#formError");
  const data = readForm(e.target);
  if (!cartLines().length) { err.textContent = "Your cart is empty."; err.hidden = false; return; }
  if (!data.name || !data.phone) { err.textContent = "Please add your name and phone."; err.hidden = false; return; }
  if (fulfillment === "delivery" && (!data.area || !data.building)) {
    err.textContent = "Please add the area and the building or villa for delivery.";
    err.hidden = false;
    return;
  }
  err.hidden = true;
  showWhatsApp("#orderWaLink", buildOrderMessage(data));
  const cardButton = $("#cardPayLink");
  const link = chosenPayment() === "card" ? cardPaymentLink() : "";
  if (link) {
    setExternal(cardButton, link);
    cardButton.hidden = false;
  } else {
    cardButton.hidden = true;
    cardButton.removeAttribute("href");
  }
  toast("Order message ready — just hit send");
}
function handleCustom(e) {
  e.preventDefault();
  const err = $("#customError");
  const data = readForm(e.target);
  if (!data.name || !data.idea) { err.textContent = "Please add your name and what you want printed."; err.hidden = false; return; }
  err.hidden = true;
  showWhatsApp("#customWaLink", buildCustomMessage(data));
  toast("Custom print request ready — just hit send");
}

let toastTimer;
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 1800);
}

function init() {
  document.title = `${SHOP.name} – 3D prints in Dubai`;
  document.querySelectorAll("[data-shop-name]").forEach((el) => { el.textContent = SHOP.name; });
  $("#year").textContent = String(new Date().getFullYear());
  $("#exampleBanner").hidden = !PRODUCTS.some((p) => p.example);
  $("#waContact").href = waLink(`Hi! I have a question about ${SHOP.name}.`);
  const yt = youtubeLink();
  const ytLink = $("#youtubeLink");
  if (yt) {
    setExternal(ytLink, yt);
    ytLink.hidden = false;
  } else {
    ytLink.hidden = true;
    ytLink.removeAttribute("href");
  }

  renderFilters();
  renderReviews();
  renderGrid();
  renderCart();

  ["#search", "#categoryFilter", "#priceFilter", "#sort"].forEach((sel) => {
    $(sel).addEventListener("input", renderGrid);
    $(sel).addEventListener("change", renderGrid);
  });
  $("#grid").addEventListener("click", (e) => {
    const thumb = e.target.closest(".thumb.has-swap");
    if (thumb && !e.target.closest("button")) thumb.classList.toggle("show-alt");
    const id = e.target.closest("[data-add]")?.dataset.add;
    if (id) addToCart(id);
  });
  $("#cartItems").addEventListener("click", (e) => {
    const t = e.target.closest("button");
    if (!t) return;
    if (t.dataset.inc) setQty(t.dataset.inc, (cart[t.dataset.inc] || 0) + 1);
    if (t.dataset.dec) setQty(t.dataset.dec, (cart[t.dataset.dec] || 0) - 1);
    if (t.dataset.remove) setQty(t.dataset.remove, 0);
  });
  $("#cartOpen").addEventListener("click", () => openCart(true));
  $("#cartClose").addEventListener("click", () => openCart(false));
  $("#overlay").addEventListener("click", () => openCart(false));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") openCart(false); });
  $("#orderForm").addEventListener("change", (e) => {
    if (e.target.name === "fulfillment") {
      fulfillment = e.target.value === "delivery" ? "delivery" : "pickup";
      $("#formError").hidden = true;
      saveCart();
      renderCart();
    }
    if (e.target.name === "payment") {
      const value = e.target.value;
      payment = value === "transfer" || value === "card" ? value : "cash";
      $("#formError").hidden = true;
      $("#cardPayLink").hidden = true;
      syncPayment();
    }
  });
  $("#orderForm").addEventListener("submit", handleCheckout);
  $("#customForm").addEventListener("submit", handleCustom);
  $("#clearCart").addEventListener("click", () => { cart = {}; saveCart(); renderCart(); toast("Cart cleared"); });
  $("#customFromCart").addEventListener("click", () => openCart(false));
}

init();
