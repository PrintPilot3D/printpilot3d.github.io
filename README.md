# Print Pilot 3D

A small static website for a 3D-print shop in Dubai. Visitors browse prints, add them to a cart saved in the browser, and send the order by WhatsApp. The site does not take payment.

The live site is [https://printpilot3d.github.io/](https://printpilot3d.github.io/). To preview on your computer, open `index.html` in a browser.

## GitHub Pages

Source is **GitHub Actions**. A push to `main` runs `.github/workflows/pages.yml`, which uploads the files at the repo root and deploys them. `.nojekyll` is included so Pages does not run Jekyll.

In the repo on GitHub, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions** once. After that, every push to `main` publishes the site.

## Edit the product list

All prints live in the `PRODUCTS` array near the top of `script.js`. The Phone Stand and Spiral Cone Fidget are real products. A new print can start as an example. Set `example` to `false` when you are ready to sell it.

To add a print, copy one whole `{ ... }` block, paste it after the last print (keep the comma after each block), and change the values:

- `id` — a short code with no spaces, different for every print (for example `"phone-stand"`)
- `name` — the name people see
- `category` — a group, such as Desk, Tech, Gifts, or Home
- `colour` — the filament colour
- `price` — the price in AED, a number only, with no "AED" letters
- `stock` — how many you can make (`0` shows "Sold out")
- `icon` — the drawing: `stand`, `tray`, `clips`, `keyring`, `planter`, `headphones`, `earbuds`, `watch`, `charger`, or `cube`
- `image` — optional. Leave the `//` in place to keep the drawing. To show a photo, save it in the `images` folder and remove the `//`, for example `image: "images/headphone-stand.jpg",`
- `blurb` — one short sentence
- `example` — `true` shows an EXAMPLE label. Set it to `false` when the print is real

To remove a print, delete its `{ ... }` block.

Picture backgrounds for Desk, Tech, Cables, Gifts, and Home are in `style.css`. Any other category uses the purple background unless you add a colour for it.

The shop name and WhatsApp number are in the `SHOP` object in `script.js`. The WhatsApp value is digits only, in international format, with no `+` and no leading `0`. It is currently `971507591359`.

The Dubai delivery fee is the `DELIVERY_FEE` number near the top of `script.js`. Change that number to change the price. Pickup stays free.

"Pay with credit card" is always shown. Leave `CARD_PAYMENT_LINK` at the top of `script.js` as `""` and the shop sends a card-payment link on WhatsApp. Paste an https Ziina or Stripe link there to also show a Pay by card button. The allowed sites are listed in `SECURITY.md`. Do not put bank details on the site.

Reviews live in the `REVIEWS` array in `script.js`. Leave it empty until a customer really writes one. The YouTube button stays hidden while `YOUTUBE_LINK` is `""`. Paste a YouTube link there to show it.

Orders and custom print requests open WhatsApp. Each order is also emailed to `ORDER_EMAIL` (`printpilot3d123@gmail.com`) through FormSubmit. Do not change that address. There is no email address shown on the site for customers to write to.

## Files

- `index.html` — page structure
- `style.css` — layout and colours
- `script.js` — shop settings, the `PRODUCTS` list, cart, and WhatsApp messages
- `images/` — put product photos here, then turn on the `image` line in `script.js`
- `favicon.svg` — the browser tab icon
- `.nojekyll` — tells GitHub Pages to serve the files as they are
- `.github/workflows/pages.yml` — publishes the site
