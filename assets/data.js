/* =============================================================================
   Proove Verified — data model
   Mirrors Pimmy's brief (Landing_Page_Sitemap_Copy_Library_v3.docx, 2026-08-30).
   Grain is SERIES x PROOF_TYPE, refreshed quarterly, never per batch or per SKU
   (brief §6.4). This file maps 1:1 onto the Shopify metaobject `verified_proof`.

   COPY RULE — a source is client-originated only:
     BRIEF  Pimmy's brief          SITE   live prooveclub.com
     PACK   printed on the tub     LAB    the report image itself
     VOID-DRAFT  written by Void, awaiting the copywriter
   Void's own output is never a source for Void's next output.
   ========================================================================== */
var CDN = "https://cdn.shopify.com/s/files/1/0746/5946/3457/files/";

/* Source articles the report images live in ------------------------------- */
var ART = {
  A5:{t:"Proove ใส่จริง ตรงฉลาก พิสูจน์ได้ มีงานวิจัยรองรับ ตรวจสอบได้จริง!", d:"2025-09-18",
      u:"https://prooveclub.com/blogs/news/we-dont-promise-we-proove-เราไม่แค่บอก-แต่เรา-พูดจริง-ใส่จริง-ตรวจสอบได้จริง"},
  A4:{t:"Proove โปรตีนพืชที่ปลอดภัย ไร้สารตะกั่ว ตรวจสอบได้จริง", d:"2025-11-27",
      u:"https://prooveclub.com/blogs/news/proove-โปรตีนพืชที่ปลอดภัย-ไร้สารตะกั่ว-ตรวจสอบได้จริง"},
  A3:{t:"Proove ปลอดภัย พิสูจน์ได้ ไร้เชื้อจุลินทรีย์ก่อโรค ตรวจสอบได้จริง!", d:"2026-03-17",
      u:"https://prooveclub.com/blogs/news/proove-ปลอดภัย-พิสูจน์ได้-ไร้เชื้อจุลินทรีย์ก่อโรค-ตรวจสอบได้จริง"},
  A2:{t:"Proove Creatine+ ครีเอทีนตรงฉลาก ไร้จุลินทรีย์ก่อโรคและโลหะหนัก มีผลตรวจรองรับ", d:"2026-07-17",
      u:"https://prooveclub.com/blogs/news/proove-creatine-ครีเอทีนตรงฉลาก-ไร้จุลิทนรีย์และโลหะหนัก-มีผลตรวจรองรับ"},
  A1:{t:"Proove Clear Protein Creatine+ โปรตีนใสตรงฉลาก … NO Amino Spiking", d:"2026-08-20",
      u:"https://prooveclub.com/blogs/news/proove-clear-protein-creatineplus"}
};

/* Proof types A–F — titles verbatim from brief §3 and §4 ------------------- */
var PROOF = {
  A:{c:"A", th:"ผลตรวจโปรตีน",        en:"Protein content"},
  B:{c:"B", th:"ผลตรวจโลหะหนัก",       en:"Heavy metals"},
  C:{c:"C", th:"ผลตรวจเชื้อจุลินทรีย์", en:"Microbial safety"},
  D:{c:"D", th:"ผลตรวจครีเอทีน",       en:"Creatine content"},
  E:{c:"E", th:"NO Amino Spiking",     en:"NO Amino Spiking"},
  F:{c:"F", th:"ผลตรวจสารสกัด",        en:"Active ingredient"}
};
var FIXED_LINE = "มั่นใจ ไม่ตกฉลาก";                                   /* BRIEF specimen */
var FOOTNOTE   = "*ผลตรวจโลหะหนักและจุลินทรีย์เพิ่มเติม ดูได้ที่ www.prooveclub.com"; /* BRIEF specimen */

/* Labs — accreditations from the report images ----------------------------- */
var LABS = [
  {n:"CHEMLAB Services (Thailand)", a:"ISO/IEC 17025 · accreditation no. 103047",
   s:["Total Arsenic · Lead · Mercury · Cadmium (LOD/LOQ)","AOAC 2023 · ประกาศกระทรวงสาธารณสุข ฉบับที่ 414 (พ.ศ. 2563)","Amino acid profile — 20 aminos, mg/100g"]},
  {n:"AMARC", a:"Asia Medical and Agricultural Laboratory and Research Center · ISO/IEC 17025 · accreditation no. 1126/50",
   s:["Heavy metals + microbial","Clostridium · E. coli · S. aureus · Salmonella","USP 44/NF 39 · FDA-BAM · ISO 6888-1 · ISO 6579-1"]}
];

/* Series — membership read off Proove's own series cards -------------------- */
var SERIES = {
  classic:  {n:"Classic Series",  tag:"Plant-powered protein, quality verified", pill:"true to the label.",
             img:"classic.png?v=1773744847",
             tubs:["งาดำ Black Sesame","ชาดำ Black Tea","วานิลลาอัญชัน Vanilla Butterfly Pea","ดาร์กช็อกโก Dark Choco","ชาเอิร์ลเกรย์ Earl Grey"]},
  soyfree:  {n:"Soy Free Series", tag:"Plant-powered protein, quality verified", pill:"true to the label.",
             img:"soy_free.png?v=1773744847",
             tubs:["ออริจินอล โอ๊ต Original Oat","ชาไทย Thai Tea","กาแฟ House Blended Coffee","โฮจิฉะ Premium Houjicha","มัทฉะ Premium Matcha","นมชมพู Nom Chompooh","เก็นไมฉะ Premium Genmaicha","ช็อกโกแลตมอลต์ Chocolate Malt"]},
  allergen: {n:"Allergen Series", tag:"Plant-powered protein, quality verified", pill:"true to the label.",
             img:"allergen.png?v=1773744847",
             tubs:["พรีเมียมคาเคา Premium Cacao","ออริจินอล Original","มิกซ์เบอร์รี่ Mixed Berries"]},
  crunch:   {n:"Protein Crunch",  tag:"Plant-powered protein, quality verified", pill:"true to the label.",
             img:"protein_crunch.png?v=1773744847", tubs:[]},
  moro:     {n:"Moro+",     sub:"Morosil™ 400mg blood orange extract", tubs:[]},
  astaglow: {n:"AstaGlow+", sub:"NatAxtin™ Astaxanthin 6mg from Haematococcus pluvialis", tubs:[]},
  gudilia:  {n:"Gudilia+",  sub:"Odilia™ 300mg · 5 colours of phytonutrients", tubs:[]},
  magday:   {n:"MagDay+",   sub:"Magnesium Complex + L-Theanine + Vitamin B Complex", tubs:[]},
  magnight: {n:"MagNight+", sub:"Albion™ Magnesium Bisglycinate · PharmaGABA™", tubs:[]},
  creatine: {n:"Creatine+", tubs:[]},
  clear:    {n:"Clear Protein Creatine+", tubs:[]}
};

/* verified_proof — series x proof_type. The ONLY table R&D/Gift edits.
   `imgs` are the REAL report images that exist for tubs in that series. The
   series marketing card is NOT evidence and is never used here — it is the
   series header (SERIES[].img). value/lab/quarter left null render ต้องยืนยัน. */
var PROOFS = {
  "classic|A":  {value:"32", unit:"g", claim:"โปรตีน", art:"A5", imgs:[
                  ["sesame.png?v=1773744847","งาดำ Black Sesame"]],
                  partial:"มีผลตรวจ 1 จาก 5 รสในซีรีส์"},
  "classic|C":  {result:"ตรวจไม่พบ", art:"A3", imgs:[
                  ["dark_choc.png?v=1773745403","ดาร์กช็อกโก Dark Choco"]],
                  partial:"มีผลตรวจ 1 จาก 5 รสในซีรีส์"},

  "soyfree|A":  {value:"32", unit:"g", claim:"โปรตีน", art:"A5", imgs:[
                  ["original_oat.png?v=1773744846","ออริจินอล โอ๊ต"],
                  ["thai_tea.png?v=1773744847","ชาไทย"],
                  ["coffee_0ef00254-a670-4a50-b96a-3b577869726c.png?v=1773744847","กาแฟ"],
                  ["hojicha_681d59c5-c538-4f77-8ab2-8db5ebac6455.png?v=1773744847","โฮจิฉะ"],
                  ["matcha_3b81e17c-77a2-4413-92d3-df56eaa9f2c9.png?v=1773744846","มัทฉะ"],
                  ["nom_chompooh.png?v=1773744847","นมชมพู"],
                  ["genmaicha_f93d647d-87b7-4d6c-a17b-cf3a6c8990c0.png?v=1773744847","เก็นไมฉะ"],
                  ["choc_malt.png?v=1773744847","ช็อกโกแลตมอลต์"]],
                  partial:"ครบทั้ง 8 รสในซีรีส์"},
  "soyfree|B":  {result:"ตรวจไม่พบ", art:"A4", imgs:[
                  ["original-oat.png?v=1764236890","ออริจินอล โอ๊ต"]],
                  partial:"มีผลตรวจ 1 จาก 8 รสในซีรีส์"},
  "soyfree|C":  {result:"ตรวจไม่พบ", art:"A3", imgs:[
                  ["matcha_3b976900-d452-4838-80a8-640d9aad143e.png?v=1773745403","มัทฉะ"]],
                  partial:"มีผลตรวจ 1 จาก 8 รสในซีรีส์"},

  "allergen|A": {value:"32", unit:"g", claim:"โปรตีน", art:"A5", imgs:[
                  ["cacao_429a9711-6f4b-4152-b6b8-d3484e6bc0c7.png?v=1773744846","พรีเมียมคาเคา"],
                  ["original_b9b79fe7-96ba-465d-8c73-831c101bf50d.png?v=1773744847","ออริจินอล"]],
                  partial:"มีผลตรวจ 2 จาก 3 รสในซีรีส์"},
  "allergen|B": {result:"ตรวจไม่พบ", art:"A4", imgs:[
                  ["original-allergen.png?v=1764236874","ออริจินอล"]],
                  partial:"มีผลตรวจ 1 จาก 3 รสในซีรีส์"},
  "allergen|C": {result:"ตรวจไม่พบ", art:"A3", imgs:[
                  ["mixed_berry_2af1e2eb-ce90-4811-80f2-3d3c9c266acc.png?v=1773745403","มิกซ์เบอร์รี่"]],
                  partial:"มีผลตรวจ 1 จาก 3 รสในซีรีส์"},

  "crunch|A":   {claim:"โปรตีน", art:"A5", imgs:[
                  ["protein_crunch.png?v=1773744847","Protein Crunch"],
                  ["crunch_original.png?v=1773744846","Crunch Original"]]},

  "creatine|D": {claim:"ครีเอทีน", art:"A2", imgs:[
                  ["Post_Instagram_Creatine_-06.jpg","Creatine+"]]},
  "creatine|C": {result:"ตรวจไม่พบ", art:"A2", imgs:[
                  ["Post_Instagram_Creatine_-08.jpg","Creatine+"]]},
  "creatine|B": {result:"ตรวจไม่พบ", art:"A2", imgs:[
                  ["Post_Instagram_Creatine_-07.jpg","Creatine+"]]},

  "clear|A":    {value:"11", unit:"g", claim:"Protein ใส", art:"A1", imgs:[
                  ["amino-yuzu.png?v=1787199981","ทรอปิคอล ยูซุ"],
                  ["amino-kombucha_b8bb8ad6-e56f-40ab-8eaa-51efdb68aa90.png?v=1787209333","คอมบูฉะ"],
                  ["amino-kyoho.png?v=1787199981","องุ่นเคียวโฮ"]],
                  partial:"ครบทั้ง 3 รส"},
  "clear|E":    {result:"ไม่พบการเติมกรดอะมิโน", art:"A1", imgs:[
                  ["amino-yuzu.png?v=1787199981","ทรอปิคอล ยูซุ — กรดอะมิโน"],
                  ["amino-kombucha_b8bb8ad6-e56f-40ab-8eaa-51efdb68aa90.png?v=1787209333","คอมบูฉะ — กรดอะมิโน"],
                  ["amino-kyoho.png?v=1787199981","องุ่นเคียวโฮ — กรดอะมิโน"]],
                  partial:"ครบทั้ง 3 รส"},
  "clear|C":    {result:"ตรวจไม่พบ", art:"A1", imgs:[
                  ["heavy-kyoho.png?v=1787199980","องุ่นเคียวโฮ"]]},
  "clear|B":    {result:"ตรวจไม่พบ", art:"A1", imgs:[
                  ["heavy-yuzu.png?v=1787199980","ทรอปิคอล ยูซุ"],
                  ["heavy-kombucha.png?v=1787199980","คอมบูฉะ"],
                  ["heavy-kyoho.png?v=1787199980","องุ่นเคียวโฮ"]],
                  partial:"ครบทั้ง 3 รส"}
};

/* Categories — 5, per brief §1. Order of proofs is brief §4. --------------- */
var SUBCOPY = "เบื้องหลังทุกคำเคลม มีผลตรวจจริงที่คุณตรวจสอบได้ เพื่อให้มั่นใจในทุกสิ่งที่เลือก และดูแลตัวเองได้อย่างสบายใจ";
var CATS = [
  {slug:"verified-plant-based-protein", n:"Plant-based Protein", toc:true,
   series:[{k:"classic",p:["A","B","C"]},{k:"soyfree",p:["A","B","C"]},{k:"allergen",p:["A","B","C"]}]},
  {slug:"verified-protein-crunch", n:"Protein Crunch", toc:false,
   series:[{k:"crunch",p:["A"]}]},
  {slug:"verified-superfood-powder", n:"Superfood Powder", toc:true,
   series:[{k:"moro",p:["F"]},{k:"astaglow",p:["F"]},{k:"gudilia",p:["F"]},{k:"magday",p:["F"]},{k:"magnight",p:["F"]}]},
  {slug:"verified-creatine", n:"Creatine+", toc:false,
   series:[{k:"creatine",p:["D","C","B"]}]},
  {slug:"verified-clear-protein-creatine", n:"Clear Protein Creatine+", toc:false,
   series:[{k:"clear",p:["A","E","C","B"]}]}
];
