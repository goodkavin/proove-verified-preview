# Proove Verified — landing-page prototype (staging)

A **staging prototype** of the "Proove Verified" QR landing page, for Pimmy and Gift
to review and comment on before the real page is built into the Shopify theme.

- **Not** the production page. Production stays `v.prooveclub.com` → `prooveclub.com`
  once approved.
- Lab images are hot-linked from the live prooveclub.com Shopify CDN — nothing is
  invented. Everything unknown is shown as `ต้องยืนยัน`.
- `noindex, nofollow` + `robots.txt` disallow.

## Simulating a QR scan

The printed QR carries a flavour code (`v.prooveclub.com/pr-cm`). Append it here:

```
?p=pr-cm       ช็อกโกแลตมอลต์
?p=clr-tf      Clear Creatine+ ทรอปิคอล ยูซุ
?p=pr-e        ชาเอิร์ลเกรย์  (no flavour-specific evidence — the gap case)
```

Or use the selector at the top of the page.

## Comment mode

Tap **💬 คอมเมนต์** (bottom right) → tap any section → write a note. Notes are stored
in the reviewer's own browser; **คัดลอกความเห็นทั้งหมด** copies them all as text to
paste back into chat.

Requirements + design docs: `company-os/docs/proove/design/2026-08-31-verified-landing-page-*.md`
