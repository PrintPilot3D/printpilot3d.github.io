# Security

This shop is a static site. It does not take card details itself. Orders are sent on WhatsApp. These locks stop a changed file from sending orders somewhere else, or from loading a script or payment page we did not choose.

## WhatsApp number

Orders always open `https://wa.me/971507591359`. That number is `WHATSAPP_NUMBER` in `script.js`, and it is also listed in `security-fingerprint.json`. Do not change it. The deploy check refuses any other number.

## Payment link

`CARD_PAYMENT_LINK` in `script.js` starts as `""`. "Pay with credit card" is still shown. With the link empty, the shop sends a secure card-payment link on WhatsApp after the order.

To also show a Pay by card button, paste one `https://` link from a site on this list:

- `ziina.com`, `pay.ziina.com`, and other subdomains of `ziina.com`
- `buy.stripe.com`
- `checkout.stripe.com`

Any other link is ignored, and the browser console shows a warning. Do not put bank account numbers, card numbers, or passwords in the site.

## Deploy check

A push to `main` runs `scripts/security-check.js` before the site is published. The deploy stops if the WhatsApp number changes, a `wa.me` link uses another number, the payment link is not on the list above, a script is loaded from another site, or the Content-Security-Policy tag is missing. The last published version stays live.

## What the page is allowed to load

The Content-Security-Policy tag lets the page load its own files and the Fredoka font from Google Fonts (`fonts.googleapis.com` and `fonts.gstatic.com`). Pictures must come from this site. Scripts must come from this site. Forms on the page do not submit to another address. YouTube, WhatsApp, and the payment page open as normal links in a new tab.
