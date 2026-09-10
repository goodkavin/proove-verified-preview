/* Proove Verified — renderer. One script serves the hub and all 5 category
   pages; the page declares which via window.PAGE. Mirrors how the Shopify
   section will read the `verified_proof` metaobject. */
(function(){
var $=function(s,r){return (r||document).querySelector(s)};
var el=function(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
var esc=function(s){return String(s).replace(/[&<>]/g,function(m){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[m]})};
var TBC='<span class="tbc">ต้องยืนยัน</span>';

/* ---------- chrome ---------- */
function chrome(){
  var d=el('div','draftbar');
  d.setAttribute('data-nosrc','1');
  d.innerHTML='ร่างเพื่อรีวิวเท่านั้น ยังไม่ใช่หน้าเว็บจริง · กดปุ่ม “ที่มาของข้อความ” เพื่อดูว่าข้อความไหนมาจากบรีฟ/เว็บไซต์จริง (เขียว) และข้อความไหน Void ร่างเอง ยังรอทีม Proove ยืนยัน (เหลือง)';
  document.body.insertBefore(d,document.body.firstChild);
  var s=el('div','srcbar');
  s.innerHTML='<button class="srcbtn" id="srcbtn">แสดงที่มาของข้อความ</button>'+
    '<span class="u">'+(window.PAGE==='hub'?'v.prooveclub.com → /pages/verified':'/pages/'+window.PAGE)+'</span>';
  d.after(s);
  $('#srcbtn').onclick=function(){document.body.classList.toggle('showsrc')};

  var a=el('div','announce');a.setAttribute('data-src','SITE');
  a.textContent='ช้อปครบ 2,000.- รับส่วนลด 10% (สูงสุด 200.-)';
  s.after(a);
  var h=el('header','site','<div class="bar"><span class="burger">☰</span>'+
    '<a class="logo" href="https://prooveclub.com" target="_blank" rel="noopener">'+
    '<img src="https://prooveclub.com/cdn/shop/files/LOGO-2025.png?v=1754565949&width=180" alt="Proove.club"></a>'+
    '<span class="icons"><span>⌕</span><span>⛨</span></span></div>');
  a.after(h);
}
function footer(){
  var f=el('footer','site','<div class="wrap" data-src="SITE">'+
    '<h3>Thank you for loving yourself</h3>'+
    '<p>Proove love seeing everyone happy with your fit and healthy body &amp; soul</p>'+
    '<h4>Address</h4><p>FINE SOLUTION 2020 CO., LTD.<br>110, SOI SATHU PRADIT 58 YAEK 4,<br>BANG PONG PANG, YAN NAWA,<br>BANGKOK, THAILAND 10120</p>'+
    '<h4>LINE OA</h4><p>@proove.club</p><h4>Email Address</h4><p>hello@prooveclub.com</p>'+
    '<p class="fine">หน้านี้เป็นตัวอย่างสำหรับรีวิวภายใน ไม่ใช่หน้าเว็บที่เผยแพร่จริง · จัดทำโดย Void Engineering</p></div>');
  document.body.appendChild(f);
}
function closing(){
  var c=el('div','closing anchor','<div class="st en" data-src="BRIEF">Proove It Yourself.</div>'+
    '<div class="tl en" data-src="BRIEF">We Don\'t Promise, We Proove</div>');
  c.setAttribute('data-a','closing');
  document.body.appendChild(c);
}

/* ---------- hub ---------- */
function hub(){
  var h=el('div','hero','<span class="mark" aria-hidden="true">oo</span><div class="inner">'+
    '<span class="kick en" data-src="BRIEF">VERIFIED BATCH</span>'+
    '<h1 class="en" data-src="BRIEF">THE PROOVE BEHIND EVERY CLAIM.</h1>'+
    '<p class="lead" data-src="BRIEF">เบื้องหลังทุกคำเคลม มีผลตรวจจริงที่คุณตรวจสอบได้ เพื่อให้ทุกคนมั่นใจในทุกสิ่งที่เลือก และดูแลตัวเองได้อย่างสบายใจ</p>'+
    '<p class="leaden" data-src="BRIEF">Every claim is backed by real results you can verify, so you can care for yourself with confidence and simply live.</p>'+
    '</div>');
  document.body.appendChild(h);

  var sec=el('section'),w=el('div','wrap'),a=el('div','anchor');a.setAttribute('data-a','hub-buttons');
  var g=el('div','cats');g.setAttribute('data-src','BRIEF');
  CATS.forEach(function(c){
    var have=0,tot=0;
    c.series.forEach(function(s){s.p.forEach(function(p){tot++;if(PROOFS[s.k+'|'+p])have++})});
    var link=el('a','cat'+(have?'':' none'));link.href=c.slug+'.html';
    link.innerHTML='<span><span class="t">'+esc(c.n)+'</span><span class="m">'+
      (have? have+' จาก '+tot+' ผลตรวจ พร้อมแสดง' : 'ยังไม่มีผลตรวจเผยแพร่')+'</span></span><span class="go">›</span>';
    g.appendChild(link);
  });
  a.appendChild(g);w.appendChild(a);sec.appendChild(w);document.body.appendChild(sec);
  labs();
}

/* ---------- category ---------- */
function category(){
  var c=null;CATS.forEach(function(x){if(x.slug===window.PAGE)c=x});
  if(!c)return;
  document.title='Proove Verified — '+c.n;
  var h=el('div','hero','<span class="mark" aria-hidden="true">oo</span><div class="inner">'+
    '<div class="crumb"><a href="index.html">← Verified Batch</a></div>'+
    '<h1 class="en" data-src="BRIEF">'+esc(c.n)+'</h1>'+
    '<p class="lead" data-src="BRIEF">'+SUBCOPY+'</p></div>');
  document.body.appendChild(h);

  var sec=el('section'),w=el('div','wrap');
  if(c.toc){
    var t=el('div','toc anchor');t.setAttribute('data-a','toc');
    var ul='<ul>'+c.series.map(function(s){return '<li><a href="#'+s.k+'">'+esc(SERIES[s.k].n)+'</a></li>'}).join('')+'</ul>';
    t.innerHTML='<span class="lbl" data-src="BRIEF">Go to your series</span>'+ul;
    w.appendChild(t);
  }
  c.series.forEach(function(s){ w.appendChild(seriesBlock(s)) });
  sec.appendChild(w);document.body.appendChild(sec);
  labs();
}

function seriesBlock(s){
  var S=SERIES[s.k],d=el('div','series anchor');d.id=s.k;d.setAttribute('data-a','series-'+s.k);
  var head='<h2 class="ser-h en">'+esc(S.n)+'</h2>';
  if(S.tag) head+='<div class="ser-tag" data-src="BRIEF">'+esc(S.tag)+'</div><span class="ser-pill" data-src="BRIEF">'+esc(S.pill)+'</span>';
  if(S.sub) head+='<div class="ser-sub" data-src="PACK">'+esc(S.sub)+'</div>';
  if(S.tubs&&S.tubs.length) head+='<div class="tubs" data-src="PACK"><b>ในซีรีส์นี้:</b> '+S.tubs.map(esc).join(' · ')+'</div>';
  d.innerHTML=head;
  var box=el('div','proofs');
  s.p.forEach(function(p){ box.appendChild(proofBlock(s.k,p,S)) });
  d.appendChild(box);
  return d;
}

function proofBlock(sk,pc,S){
  var P=PROOF[pc],r=PROOFS[sk+'|'+pc],b=el('div','proof'+(r?'':' gap'));
  var h='<div class="pf-h"><div class="pf-code en">'+P.c+' · '+esc(P.en)+'</div>'+
        '<div class="pf-t" data-src="BRIEF">'+esc(P.th)+'</div>';
  if(!r){
    h+='<div class="pf-note">ยังไม่มีผลตรวจของซีรีส์นี้เผยแพร่บนเว็บไซต์ — ต้องขอจากทีม R&amp;D</div></div>';
    b.innerHTML=h;return b;
  }
  if(r.value) h+='<div class="pf-claim" data-src="PACK">'+esc(r.claim||'')+' '+esc(r.value)+'<span class="u">'+esc(r.unit||'')+'</span></div>';
  else if(r.claim) h+='<div class="pf-claim" data-src="BRIEF">'+esc(r.claim)+' '+TBC+'</div>';
  h+='<div class="pf-fixed" data-src="BRIEF">'+FIXED_LINE+'</div>';
  if(r.result) h+='<span class="pf-res" data-src="LAB">'+esc(r.result)+'</span>';
  if(r.partial) h+='<div class="pf-note">'+esc(r.partial)+'</div>';
  h+='</div>';
  var A=ART[r.art]||{};
  h+='<div class="pf-meta"><b>ห้องแล็บ</b><span>'+TBC+'</span>'+
     '<b>ไตรมาสที่ตรวจ</b><span>'+TBC+'</span>'+
     '<b>เผยแพร่</b><span>'+esc(A.d||'')+'</span>'+
     '<b>ที่มา</b><span><a href="'+(A.u||'#')+'" target="_blank" rel="noopener">บทความผลตรวจ</a></span>'+
     '<b>ไฟล์ต้นฉบับ</b><span>'+TBC+' (PDF)</span></div>';
  if(r.imgs&&r.imgs.length){
    h+='<div class="rep"><div class="rep-h">ผลตรวจ '+r.imgs.length+' ฉบับ — แตะเพื่อดูเต็มจอ</div><div class="rep-g">'+
       r.imgs.map(function(x){
         return '<figure class="rep-i" data-img="'+esc(x[0])+'" data-cap="'+esc(S.n+' — '+P.th+' — '+x[1])+'">'+
                '<img loading="lazy" src="'+CDN+x[0]+'" alt="'+esc(x[1])+'">'+
                '<figcaption>'+esc(x[1])+'</figcaption></figure>';
       }).join('')+'</div></div>';
  }
  h+='<div class="pf-foot" data-src="BRIEF">'+FOOTNOTE+'</div>';
  b.innerHTML=h;
  return b;
}

function labs(){
  var sec=el('section','cream'),w=el('div','wrap'),a=el('div','anchor');a.setAttribute('data-a','labs');
  a.innerHTML='<h2 class="sec-h" data-src="VOID-DRAFT">ห้องปฏิบัติการที่ตรวจ</h2>'+
    '<p class="sec-p" data-src="VOID-DRAFT">ผลตรวจทั้งหมดมาจากห้องแล็บอิสระที่ได้รับการรับรอง ISO/IEC 17025</p>';
  var g=el('div','labgrid');
  LABS.forEach(function(L){
    g.appendChild(el('div','lab','<div class="n">'+esc(L.n)+'</div><div class="a">'+esc(L.a)+'</div><ul>'+
      L.s.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul>'));
  });
  g.setAttribute('data-src','LAB');
  a.appendChild(g);w.appendChild(a);sec.appendChild(w);document.body.appendChild(sec);
}

/* ---------- lightbox ---------- */
function lightbox(){
  var lb=el('div','lb','<button class="x">✕</button><img alt=""><div class="cap"></div>');
  lb.id='lb';document.body.appendChild(lb);
  document.addEventListener('click',function(e){
    var b=e.target.closest('.rep-i');
    if(b){ $('img',lb).src=CDN+b.dataset.img; $('.cap',lb).textContent=b.dataset.cap; lb.classList.add('on'); }
    if(e.target.closest('.lb .x')||e.target===lb) lb.classList.remove('on');
  });
}

/* ---------- comment layer ---------- */
function comments(){
  var KEY='proove-verified-notes-v2';
  var load=function(){try{return JSON.parse(localStorage.getItem(KEY)||'[]')}catch(e){return[]}};
  var save=function(n){try{localStorage.setItem(KEY,JSON.stringify(n))}catch(e){}};
  var notes=load();
  var btn=el('button','cbtn','คอมเมนต์ <span class="n">0</span>');btn.id='cbtn';document.body.appendChild(btn);
  var panel=el('div','panel','<div class="ph"><h3 style="font-size:17px;color:var(--green)">ความเห็นทั้งหมด</h3>'+
    '<button class="pbtn ghost" style="width:auto;margin:0;padding:6px 12px" id="pclose">ปิด</button></div><div class="pb" id="pbody"></div>');
  panel.id='panel';document.body.appendChild(panel);
  function mark(){
    document.querySelectorAll('.anchor').forEach(function(a){
      a.classList.toggle('has', notes.some(function(n){return n.a===a.dataset.a && n.p===window.PAGE}));
    });
    $('.n',btn).textContent=notes.length;
  }
  function render(){
    var b=$('#pbody');b.innerHTML='';
    if(!notes.length){b.appendChild(el('div','empty','ยังไม่มีความเห็น — กดปุ่มคอมเมนต์แล้วแตะส่วนที่ต้องการ'));}
    notes.forEach(function(n,i){
      var d=el('div','note','<div class="where en">'+esc(n.p)+' · '+esc(n.a)+'</div><div class="txt">'+esc(n.t)+'</div><div class="del">ลบ</div>');
      $('.del',d).onclick=function(){notes.splice(i,1);save(notes);render();mark()};
      b.appendChild(d);
    });
    var cp=el('button','pbtn sec','คัดลอกความเห็นทั้งหมด');
    cp.onclick=function(){
      var t=notes.map(function(n){return '['+n.p+' · '+n.a+']\n'+n.t}).join('\n\n');
      navigator.clipboard.writeText(t).then(function(){cp.textContent='คัดลอกแล้ว ✓';setTimeout(function(){cp.textContent='คัดลอกความเห็นทั้งหมด'},1600)});
    };
    b.appendChild(cp);
  }
  btn.onclick=function(){
    if(document.body.classList.contains('cmode')){document.body.classList.remove('cmode');panel.classList.add('on');render();}
    else {document.body.classList.add('cmode');panel.classList.remove('on');btn.firstChild.textContent='แตะส่วนที่ต้องการ ';}
  };
  $('#pclose').onclick=function(){panel.classList.remove('on');btn.firstChild.textContent='คอมเมนต์ '};
  document.addEventListener('click',function(e){
    if(!document.body.classList.contains('cmode'))return;
    var a=e.target.closest('.anchor');if(!a)return;
    e.preventDefault();
    var t=prompt('ความเห็นสำหรับส่วน: '+a.dataset.a);
    if(t&&t.trim()){notes.push({p:window.PAGE,a:a.dataset.a,t:t.trim()});save(notes);mark();}
    document.body.classList.remove('cmode');btn.firstChild.textContent='คอมเมนต์ ';
  },true);
  mark();
}

/* ---------- boot ---------- */
document.addEventListener('DOMContentLoaded',function(){
  chrome();
  if(window.PAGE==='hub') hub(); else { category(); closing(); }
  footer();lightbox();comments();
});
})();
