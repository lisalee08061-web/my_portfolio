/* 멤버 정보 */
/* photo: Resources 폴더의 멤버 사진 / pos: 사진에서 보여줄 위치 (얼굴이 잘리지 않게)
   zoom: 얼굴이 작게 찍힌 사진만 확대해서 얼굴을 가운데로 (확대 배율 + 확대 기준점) */
const members = [
  {name:'SION',   nation:'대한민국', birth:'2002.05.11', photo:'Resources/member_intro_sion.webp',   pos:'58% 30%'},
  {name:'RIKU',   nation:'일본',     birth:'2003.06.28', photo:'Resources/member_intro_riku.webp',   pos:'50% 30%'},
  {name:'YUSHI',  nation:'일본',     birth:'2004.04.05', photo:'Resources/member_intro_yushi.webp',  pos:'50% 40%'},
  {name:'JAEHEE', nation:'대한민국', birth:'2005.06.21', photo:'Resources/member_intro_jaehee.webp', pos:'50% 25%'},
  {name:'RYO',    nation:'일본',     birth:'2007.08.04', photo:'Resources/member_intro_ryo.webp',    pos:'50% 30%'},
  {name:'SAKUYA', nation:'일본',     birth:'2007.11.18', photo:'Resources/member_intro_sakuya.webp', pos:'50% 60%', zoom:'transform:scale(1.5);transform-origin:29% 77%'}
];

/* 앨범 정보 — 발매일 최신순. cover: Resources 폴더의 앨범 사진 / intro: 앨범 소개(비워두면 숨김)
   link: MORE를 눌렀을 때 열 앨범 정보 주소 — '#'을 실제 주소로 바꿔주세요 */
const albums = [
  {name:'I SPY',       type:'The 4th Mini Album',        date:'2026.10.12', cover:'Resources/discography_I%20SPY.webp',        intro:'', link:'#',
   tracks:['I SPY','We Own This Street','UPGRADE','Super Major','Hubble Time','꿈결 (Like A Dream)']},
  {name:'Ode to Love', type:'The 1st Album',             date:'2026.04.20', cover:'Resources/discography_ode%20to%20love.webp', intro:'', link:'#',
   tracks:['2.0 (TWO POINT O)','Ode to Love','Sticky','Feel The Beat','여우비 (Crush)','Street (2AM)','Glow Up','Everglow','Don’t Say You Love Me','Voyage']},
  {name:'WISHLIST',    type:'Japan 1st Mini Album',      date:'2026.01.14', cover:'Resources/discography_Wishlist.webp',        intro:'', link:'#',
   tracks:['Hello Mellow','ZONE','BUBBLE GUM','DREAMCATCHER','SOMEDAY','Good Morning','Poppop (Japanese ver.)']},
  {name:'Color',       type:'The 2nd Mini Album',        date:'2025.04.14', cover:'Resources/discography_color.webp',           intro:'', link:'#',
   tracks:['Color','Baby Blue','Surf','Cheat Code','Videohood','WICHU','고양이 릴스 (Reel-ationship)']},
  {name:'poppop',      type:'The 2nd Mini Album',        date:'2025.04.14', cover:'Resources/discography_poppop.webp',          intro:'', link:'#',
   tracks:['poppop','Melt Inside My Pocket','Design','1000','Silly Dance','만약 네가 4시에 온다면 (Still 3PM)']},
  {name:'WISHFUL',     type:'The 1st Japanese Album',    date:'2024.12.25', cover:'Resources/discography_wishful.webp',         intro:'', link:'#',
   tracks:['Wishful Winter','WISH (Japanese Ver.)','Songbird (Japanese Ver.)','FAR AWAY','We Go!','Touchdown','Hands Up','Sail Away (Japanese Ver.)','CHOO CHOO','NASA','P.O.V','Tears Are Falling (Japanese Ver.)','Our Adventures']}
];

/* 수상 이력 — 전부 자리표시입니다 */
/* 수상 이력 — 최신순.
   logo: 시상식 로고 / h: 로고 자리(높이 120px) 안에서 로고 높이(%) — 로고 모양이 달라서 눈으로 볼 때 비슷한 크기가 되도록 따로 맞춤
   blend: 흰 배경이 있는 로고 → 페이지 배경색에 섞이게 */
const LOGO = {
  golden: {src:'Resources/awards_ 골든디스크어워즈.webp',     h:92},
  first:  {src:'Resources/awards_퍼스트브랜드 대상.webp',     h:92},
  hanteo: {src:'Resources/awards_한터뮤직어워즈.png',          h:100},
  mma:    {src:'Resources/awards_ 멜론뮤직어워드.svg',        h:38},
  seoul:  {src:'Resources/awards_ 서울가요대상.jpeg',          h:92, blend:true},
  dawards:{src:'Resources/awards_ 디 어워즈.webp',            h:58},
  aaa:    {src:'Resources/awards_ 아시아아티스트어워즈.svg',  h:58, blend:true}
};
const awards = [
  {yr:'2026', title:'제40회 골든디스크어워즈',        desc:'음반 부문 본상 — COLOR',               logo:'golden'},
  {yr:'2026', title:'2026 대한민국 퍼스트브랜드 대상', desc:'남자 아이돌 부문 핫트렌드상',          logo:'first'},
  {yr:'2026', title:'제33회 한터뮤직어워즈',          desc:'올해의 아티스트상 (본상)',             logo:'hanteo'},
  {yr:'2025', title:'2025 멜론뮤직어워드 (MMA)',      desc:'TOP 10 아티스트상',                    logo:'mma'},
  {yr:'2025', title:'2025 멜론뮤직어워드 (MMA)',      desc:'카카오뱅크 모두의 스타상',             logo:'mma'},
  {yr:'2025', title:'제34회 서울가요대상',            desc:'베스트 그룹상',                        logo:'seoul'},
  {yr:'2025', title:'제34회 서울가요대상',            desc:'본상',                                 logo:'seoul'},
  {yr:'2025', title:'제2회 디 어워즈 (D Awards)',     desc:'올해의 신인상 (아이코닉 블랙 라벨)',   logo:'dawards'},
  {yr:'2025', title:'제39회 골든디스크어워즈',        desc:'신인상 (음반 부문)',                   logo:'golden'},
  {yr:'2024', title:'아시아 아티스트 어워즈 (AAA)',   desc:'AAA 포텐셜상',                         logo:'aaa'}
];

/* 공지 — 최신순. href는 실제 공지 주소로 바꿔주세요 */
const notices = [
  {tag:'공지', title:'NCT WISH 월드 투어 티켓팅 안내', date:'2026.09.24', href:'#'},
  {tag:'공지', title:'아티스트 사생활 보호 관련 안내',  date:'2026.09.18', href:'#'},
  {tag:'공지', title:'9/11 뮤직뱅크 추첨 안내',         date:'2026.09.12', href:'#'},
  {tag:'공지', title:'9/10 인기가요 추첨 안내',         date:'2026.09.05', href:'#'}
];

/* reveal */
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
}),{threshold:.2});
document.querySelectorAll('.reveal,.members-sticky').forEach(el=>io.observe(el));
/* ABOUT: 문장이 화면에 들어오면 단어·사진이 차례로 떠오름 */
const kwSentence = document.querySelector('.kw-sentence');
const kwGallery = document.querySelector('.kw-gallery');
const aboutIO = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    e.target.classList.add('in');
    setTimeout(()=>e.target.classList.add('settled'), 1600);
    aboutIO.unobserve(e.target);
  }
}),{threshold:.4});
aboutIO.observe(kwSentence);

/* ABOUT: 문장 윗부분이 화면 위쪽 30% 지점을 지나 올라가는 만큼 --out 을 0→1 로 (다시 내려오면 되돌아옴)
   → 문장이 화면 가운데 있을 때는 온전히 보이고, 위로 밀려 올라갈 때부터 사라짐 */
function onKwScroll(){
  const top = kwSentence.getBoundingClientRect().top;
  const p = (window.innerHeight * .3 - top) / (window.innerHeight * .35);
  kwSentence.style.setProperty('--out', Math.min(1, Math.max(0, p)).toFixed(3));
  // 사진 줄: 윗부분이 화면 45% 지점을 지나 올라가기 시작하면 0 → 화면 위로 거의 나갈 때 1
  const gTop = kwGallery.getBoundingClientRect().top;
  const g = (window.innerHeight * .45 - gTop) / (window.innerHeight * .5);
  kwSentence.style.setProperty('--gout', Math.min(1, Math.max(0, g)).toFixed(3));
}
window.addEventListener('scroll', onKwScroll, {passive:true});
window.addEventListener('resize', onKwScroll);
onKwScroll();

/* HERO: 스크롤할수록 흐려지고 작아짐 */
const stage = document.getElementById('heroStage');
function onScroll(){
  const p = Math.min(window.scrollY / (stage.offsetHeight * .8), 1);
  stage.style.opacity = 1 - p;
  stage.style.transform = `scale(${1 - p * .08})`;
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

/* HERO MV: 멈춤/재생 버튼. "동작 줄이기"를 켠 사용자에게는 처음부터 멈춘 상태 */
const heroVideo = document.getElementById('heroVideo');
const heroToggle = document.getElementById('heroToggle');
function setHeroPlaying(play){
  if(play){ heroVideo.play().catch(()=>{}); } else { heroVideo.pause(); }
  heroToggle.textContent = play ? 'PAUSE' : 'PLAY';
  heroToggle.setAttribute('aria-pressed', !play);
  heroToggle.setAttribute('aria-label', play ? '뮤직비디오 멈추기' : '뮤직비디오 재생');
}
heroToggle.addEventListener('click', ()=>setHeroPlaying(heroVideo.paused));
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) setHeroPlaying(false);
else setHeroPlaying(true);

/* MEMBERS: 섹션이 화면에 고정된 동안 스크롤한 만큼 6등분해서, 해당 멤버 사진을 보여주고 왼쪽 이름 색을 바꿈 */
const membersSec = document.getElementById('members');
const membersSticky = document.getElementById('membersSticky');
document.getElementById('names').innerHTML = members.map(m=>`<li class="name">${m.name}</li>`).join('');
document.getElementById('memberPanel').innerHTML = members.map(m=>`<div class="member-slide"><img src="${m.photo}" alt="${m.name} 프로필 사진" style="object-position:${m.pos};${m.zoom || ''}"><div class="info"><h3>${m.name}</h3><p>${m.nation}</p><p>${m.birth}</p></div></div>`).join('');
const names = document.querySelectorAll('.name');
const slides = document.querySelectorAll('.member-slide');
let currentMember = -1;
function setMember(i){
  if(i === currentMember) return;
  currentMember = i;
  names.forEach((n,k)=>n.classList.toggle('on', k === i));
  slides.forEach((s,k)=>s.classList.toggle('on', k === i));
}
function onMembersScroll(){
  const stickTop = parseFloat(getComputedStyle(membersSticky).top) || 0;
  const distance = membersSec.offsetHeight - membersSticky.offsetHeight;
  const p = distance > 0 ? (stickTop - membersSec.getBoundingClientRect().top) / distance : 0;
  setMember(Math.min(members.length - 1, Math.max(0, Math.floor(p * members.length))));
}
window.addEventListener('scroll', onMembersScroll, {passive:true});
window.addEventListener('resize', onMembersScroll);
onMembersScroll();

/* ALBUMS: 선택한 앨범 표시 + 오른쪽 목록은 화살표로 한 칸씩 이동 */
const tracksEl = document.getElementById('aTracks');
const moreBtn = document.getElementById('aMore');
function showAlbum(i){
  const a = albums[i];
  document.getElementById('aType').textContent = `${a.type} · ${a.date} · ${a.tracks.length}곡`;
  document.getElementById('aName').textContent = a.name;
  const intro = document.getElementById('aIntro');
  intro.textContent = a.intro;
  intro.hidden = !a.intro;
  const cover = document.getElementById('aCover');
  cover.src = a.cover;
  cover.alt = `${a.name} 앨범 커버`;
  tracksEl.innerHTML = a.tracks.map((t,k)=>`<li><span>${String(k+1).padStart(2,'0')}</span>${t}</li>`).join('');
  // MORE → 이 앨범의 정보 페이지로 이동 (새 탭)
  moreBtn.href = a.link;
  moreBtn.setAttribute('aria-label', `${a.name} 앨범 정보 더보기 (새 탭)`);
  document.querySelectorAll('.album-thumb').forEach(b=>{
    const on = b.dataset.i == i;
    b.classList.toggle('on', on);
    b.setAttribute('aria-pressed', on);
  });
}
const thumb = (a,i) => `<button class="album-thumb" type="button" data-i="${i}" aria-label="${a.name}"><img src="${a.cover}" alt=""></button>`;
const track = document.getElementById('albumTrack');
const view = track.parentElement;
const up = document.getElementById('albumUp');
const down = document.getElementById('albumDown');
track.innerHTML = albums.map(thumb).join('');
track.addEventListener('click', e=>{ const b = e.target.closest('.album-thumb'); if(b) showAlbum(b.dataset.i); });

let pos = 0;
function moveAlbums(step){
  const items = track.children;
  const max = Math.max(0, track.scrollHeight - view.clientHeight);
  // 한 번 누를 때 썸네일 한 칸만큼 이동
  const unit = items.length > 1 ? items[1].offsetTop - items[0].offsetTop : 0;
  pos = Math.min(Math.max(pos + step * unit, 0), max);
  track.style.transform = `translateY(${-pos}px)`;
  up.disabled = pos <= 0;
  down.disabled = pos >= max;
}
up.addEventListener('click', ()=>moveAlbums(-1));
down.addEventListener('click', ()=>moveAlbums(1));
window.addEventListener('resize', ()=>moveAlbums(0));
showAlbum(0);
moveAlbums(0);

/* AWARDS: 가로로 흐르는 목록 (끊김 없이 두 번 반복) */
const awardHTML = awards.map(a=>{
  const lg = LOGO[a.logo];
  return `<div class="award"><div class="award-logo"><img src="${encodeURI(lg.src)}" alt="" loading="lazy" style="height:${lg.h}%"${lg.blend ? ' class="blend"' : ''}></div><div><div class="yr">${a.yr}</div><h3>${a.title}</h3><p>${a.desc}</p></div></div>`;
}).join('');
document.getElementById('awardsTrack').innerHTML = awardHTML + awardHTML.replaceAll('class="award"','class="award" aria-hidden="true"');

/* MEDIA: 영상 카드는 섹션이 화면에 보일 때만 재생 (안 보이면 멈춤). "동작 줄이기"를 켠 사용자에게는 재생하지 않음 */
const mediaVideo = document.getElementById('mediaVideo');
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting) mediaVideo.play().catch(()=>{}); else mediaVideo.pause();
  }),{threshold:.3}).observe(mediaVideo);
}

/* NOTICE: 공지 목록 (없으면 안내 문구) */
document.getElementById('noticeList').innerHTML = notices.length
  ? notices.map(n=>`<li><a href="${n.href}"><span class="n-tag">${n.tag}</span><span class="n-title">${n.title}</span><span class="n-date">${n.date}</span></a></li>`).join('')
  : '<li class="notice-empty">등록된 공지가 없습니다.</li>';

/* INTRO CAPTCHA: 칸을 고르면 SKIP → VERIFY. VERIFY·SKIP 모두 누르면 히어로로 넘어감 (새로고침하면 다시 뜸) */
(function(){
  const cap = document.getElementById('captcha');
  if(!cap) return;
  const root = document.documentElement;
  const btn = document.getElementById('capBtn');
  const tiles = cap.querySelectorAll('.cap-tile');
  const page = [document.querySelector('.site-header'), document.querySelector('main'), document.querySelector('footer.site')];
  page.forEach(el=>el && el.setAttribute('inert',''));           // 캡차가 떠 있는 동안 뒤쪽 페이지는 조작 불가
  function update(){
    const n = cap.querySelectorAll('.cap-tile[aria-pressed="true"]').length;
    btn.textContent = n ? 'VERIFY' : 'SKIP';
  }
  tiles.forEach(t=>t.addEventListener('click', ()=>{
    t.setAttribute('aria-pressed', t.getAttribute('aria-pressed') !== 'true');
    update();
  }));
  function pass(){
    page.forEach(el=>el && el.removeAttribute('inert'));
    root.classList.remove('captcha-open');
    cap.classList.add('is-done');
    window.scrollTo(0,0);
    setTimeout(()=>cap.remove(), 700);
  }
  btn.addEventListener('click', pass);
  cap.focus();   // 키보드·화면낭독기 사용자가 바로 캡차 안에서 시작하도록
})();
