/* =====================================================================
   SHOP SETTINGS — edit these first
   ===================================================================== */
const SHOP = {
  name: "Print Pilot 3D",   // also used in the page title
  whatsapp: "971507591359", // digits only. 971 is the UAE. No + and no leading 0.
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
   blurb     – one short sentence about the print
   example   – true shows an EXAMPLE label.
               Change it to false when this is a real print you are selling.

   HOW TO REMOVE A PRODUCT
   Delete its whole { ... } block.

   The Phone Stand is a real product (example is false). The other
   prints are EXAMPLES. Replace those before you take orders for them.
   You can delete an example, or change its words and set example to false.
   ===================================================================== */
const PRODUCTS = [
  {
    id: "phone-stand",
    name: "Phone Stand",
    category: "Desk",
    colour: "Cyan",
    price: 25,
    stock: 6,
    icon: "stand",
    blurb: "Holds a phone upright on a desk.",
    example: false,
  },
  {
    id: "headphone-stand",
    name: "Headphone Stand",
    category: "Tech",
    colour: "Violet",
    price: 35,
    stock: 4,
    icon: "headphones",
    // image: "images/headphone-stand.jpg",
    blurb: "A desk stand that keeps your headphones tidy.",
    example: true,
  },
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
function productImage(p) {
  const src = String(p && p.image || "").trim();
  if (!src || /[\s"'<>]/.test(src)) return "";
  if (/^[a-z][a-z0-9+.-]*:/i.test(src) || src.startsWith("//")) return "";
  return src;
}
function productArt(p) {
  const src = productImage(p);
  if (!src) return iconSvg(p.icon);
  return `<img class="photo" src="${esc(src)}" alt="">`;
}

let fulfillment = "pickup";
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
      <div class="thumb ${categoryClass(p.category)}${productImage(p) ? " has-photo" : ""}">
        ${p.example ? '<span class="tag">EXAMPLE</span>' : ""}
        <div class="art">${productArt(p)}</div>
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

function waLink(text) {
  return `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
}
function showWhatsApp(linkId, text) {
  const url = waLink(text);
  const link = $(linkId);
  link.href = url;
  link.hidden = false;
  window.open(url, "_blank", "noopener");
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
  for (const key in data) data[key] = String(data[key]).trim();
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

  renderFilters();
  renderGrid();
  renderCart();

  ["#search", "#categoryFilter", "#priceFilter", "#sort"].forEach((sel) => {
    $(sel).addEventListener("input", renderGrid);
    $(sel).addEventListener("change", renderGrid);
  });
  $("#grid").addEventListener("click", (e) => {
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
    if (e.target.name !== "fulfillment") return;
    fulfillment = e.target.value === "delivery" ? "delivery" : "pickup";
    $("#formError").hidden = true;
    saveCart();
    renderCart();
  });
  $("#orderForm").addEventListener("submit", handleCheckout);
  $("#customForm").addEventListener("submit", handleCustom);
  $("#clearCart").addEventListener("click", () => { cart = {}; saveCart(); renderCart(); toast("Cart cleared"); });
  $("#customFromCart").addEventListener("click", () => openCart(false));
}

init();
