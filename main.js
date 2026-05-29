
function toggleNav(){
  const nav = document.getElementById('nav');
  if(nav) nav.classList.toggle('open');
}
function fmtDate(d){
  const y=d.getFullYear();
  const m=String(d.getMonth()+1).padStart(2,'0');
  const day=String(d.getDate()).padStart(2,'0');
  return `${y}-${m}-${day}`;
}
function renderFooter(){
  const loc=document.getElementById('locationLine');
  const p=document.getElementById('phoneLink');
  const e=document.getElementById('emailLink');
  if(loc) loc.textContent=SITE_CONFIG.locationLine;
  if(p){ p.textContent=SITE_CONFIG.contact.phone; p.href='tel:'+SITE_CONFIG.contact.phone.replace(/[^0-9+]/g,''); }
  if(e){ e.textContent=SITE_CONFIG.contact.email; e.href='mailto:'+SITE_CONFIG.contact.email; }
}
function renderSeasonal(){
  const st=SITE_CONFIG.seasonal.status;
  document.querySelectorAll('[data-seasonal-show="available"]').forEach(el=>el.style.display=(st==='available')?'':'none');
  document.querySelectorAll('[data-seasonal-show="full"]').forEach(el=>el.style.display=(st==='full')?'':'none');
  document.querySelectorAll('[data-deposit]').forEach(el=>el.textContent='$'+Number(SITE_CONFIG.seasonal.waitlistDeposit).toLocaleString('en-CA'));
  const grid=document.getElementById('seasonalSitesGrid');
  if(grid){
    const sites=SITE_CONFIG.seasonal.sites;
    grid.innerHTML=Object.keys(sites).map(id=>{
      const isAvail=(st==='available') && sites[id]===true;
      return `<div class="site-chip ${isAvail?'available':'occupied'}" title="${isAvail?'Available':'Occupied'}">${id}</div>`;
    }).join('');
  }
}
function renderDaily(){
  const cal=document.getElementById('dailyCalendar');
  if(!cal) return;
  const detail=document.getElementById('dailySiteDetail');
  const title=document.getElementById('dailySiteDetailTitle');
  const body=document.getElementById('dailySiteDetailBody');
  const t=new Date();
  const total=SITE_CONFIG.daily.totalSites;
  let html='';
  for(let i=0;i<30;i++){
    const d=new Date(t.getFullYear(),t.getMonth(),t.getDate()+i);
    const key=fmtDate(d);
    const entry=SITE_CONFIG.daily.calendar[key];
    const avail=(entry && typeof entry.availableSites==='number')?entry.availableSites:total;
    const full=avail<=0;
    html += `<div class="day ${full?'full':''}" data-date="${key}"><div class="d">${d.toLocaleDateString('en-CA',{weekday:'short',month:'short',day:'numeric'})}</div><div class="a">${full?'Fully booked':avail+' of '+total+' sites available'}</div></div>`;
  }
  cal.innerHTML=html;
  cal.querySelectorAll('.day').forEach(el=>{
    el.addEventListener('click',()=>{
      const date=el.getAttribute('data-date');
      const entry=SITE_CONFIG.daily.calendar[date];
      if(entry && Array.isArray(entry.sites) && entry.sites.length){
        detail.style.display='';
        title.textContent=`Available sites for ${date}`;
        body.innerHTML=`<div class="sites-grid">${entry.sites.map(s=>`<div class="site-chip available">${s}</div>`).join('')}</div>`;
      } else {
        if(detail) detail.style.display='none';
        if(title) title.textContent='';
        if(body) body.innerHTML='';
      }
    });
  });
}
function renderDocuments(){
  const lt=document.getElementById('docsLongTerm');
  const sh=document.getElementById('docsShared');
  if(lt){ lt.innerHTML = SITE_CONFIG.documents.longTerm.map(d=>`<a href="${d.file}" target="_blank" rel="noopener">${d.name}</a>`).join('<br>'); }
  if(sh){ sh.innerHTML = SITE_CONFIG.documents.shared.map(d=>`<a href="${d.file}" target="_blank" rel="noopener">${d.name}</a>`).join('<br>'); }
}
function renderRentals(){
  const wrap=document.getElementById('rentalCards');
  if(!wrap) return;
  wrap.innerHTML = SITE_CONFIG.rentals.map(r=>`<div class="card"><div class="media"><img src="${r.img}" alt="${r.name}" onerror="this.src='assets/listing-placeholder.svg'"></div><div class="body"><div class="kicker">${r.group}</div><h3>${r.name}</h3><p>Book directly with the operator on VRBO.</p><div class="actions"><a class="btn btn-primary" href="${r.url}" target="_blank" rel="noopener">Book on VRBO</a></div></div></div>`).join('');
}
document.addEventListener('DOMContentLoaded',()=>{renderFooter();renderSeasonal();renderDaily();renderDocuments();renderRentals();});
