# Proove Verified — staging prototype

Review-only prototype of the **Verified Batch** site, built to Pimmy's brief
(`Landing_Page_Sitemap_Copy_Library_v3.docx`, 2026-08-30).

Live: <https://goodkav.in/proove-verified-preview/> · `noindex`, `robots` disallow.

## Structure — hub + 5 category pages (brief §1)

| Page | Series | Proof order (brief §4) |
|---|---|---|
| `index.html` (hub) | — | — |
| `verified-plant-based-protein` | Classic · Soy Free · Allergen | A → B → C |
| `verified-protein-crunch` | — | A |
| `verified-superfood-powder` | Moro+ · AstaGlow+ · Gudilia+ · MagDay+ · MagNight+ | F |
| `verified-creatine` | — | D → C → B |
| `verified-clear-protein-creatine` | — | A → E → C → B |

## Files

- `assets/data.js` — the entity model. **Maps 1:1 onto the Shopify metaobject
  `verified_proof`.** `PROOFS` (series × proof type) is the only table R&D or Gift edits.
- `assets/site.css` — live Dawn 13.0.1 tokens, not the R5 palette.
- `assets/site.js` — one renderer for the hub and all category pages, the way the
  Liquid section will read the metaobject.

## Rules this prototype holds to

- **Grain is series, not flavour** (brief). This is what closes the evidence gaps that
  the earlier flavour-keyed design manufactured.
- **A missing value renders `ต้องยืนยัน`.** Never an invented lab name, quarter or number.
- **A proof type with no report image renders as an explicit gap**, never hidden.
- **Copy sources**: `BRIEF` (Pimmy) · `SITE` (live prooveclub.com) · `PACK` (printed on
  the tub) · `LAB` (the report image). `VOID-DRAFT` in gold = written by Void, awaiting
  the copywriter. Void's own output is never a source for Void's next output.

Toggle the badges with **แสดงที่มาของข้อความ** at the top of any page.

## Not built here

The shipping site is Shopify pages on a **duplicate of the live Dawn 13 theme**, not the
Dawn 16 `proove-shopify-theme` repo (never connected to a store). HLD:
`assistant:void/1-projects/proove-tech-setup/design/shopify-rebuild/verified-site-hld.md`.
