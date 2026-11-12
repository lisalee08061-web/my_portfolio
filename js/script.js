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

/* 앨범 정보 (화면에서는 아래 albums.sort로 발매일 오래된 순 정렬). cover: Resources 폴더의 앨범 사진 / intro: 앨범 소개(비워두면 숨김)
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
   tracks:['Wishful Winter','WISH (Japanese Ver.)','Songbird (Japanese Ver.)','FAR AWAY','We Go!','Touchdown','Hands Up','Sail Away (Japanese Ver.)','CHOO CHOO','NASA','P.O.V','Tears Are Falling (Japanese Ver.)','Our Adventures']},
  {name:'Songbird',    type:'The 2nd Single Album',      date:'2024.07.01', cover:'Resources/discography_songbird.jpg',         intro:'', link:'#',
   tracks:['Songbird (Korean Ver.)','Tears Are Falling (Korean Ver.)']},
  {name:'WISH',        type:'The 1st Single Album',      date:'2024.03.04', cover:'Resources/discography_wish.jpeg',            intro:'', link:'#',
   tracks:['WISH (Korean Ver.)','Sail Away (Korean Ver.)']}
];
// 화면에는 발매일 오래된 순(왼쪽 위 → 오른쪽 아래)으로 보여줌 — 위 목록 순서와 상관없이 날짜로 정렬 (같은 날짜는 목록 순서 유지)
albums.sort((a,b)=>a.date.localeCompare(b.date));

/* 수상 이력 — 전부 자리표시입니다 */
/* 수상 이력 — 최신순.
   logo: 시상식 로고 (전부 배경이 투명한 파일) / h: 로고 자리(높이 120px) 안에서 로고 높이(%) — 로고 모양이 달라서 눈으로 볼 때 비슷한 크기가 되도록 따로 맞춤 */
const LOGO = {
  golden: {src:'Resources/awards_ 골든디스크어워즈.webp',     h:92},
  first:  {src:'Resources/awards_퍼스트브랜드 대상.webp',     h:92},
  hanteo: {src:'Resources/awards_한터뮤직어워즈.png',          h:100},
  mma:    {src:'Resources/awards_ 멜론뮤직어워드.svg',        h:38},
  seoul:  {src:'Resources/awards_ 서울가요대상.png',           h:92},
  dawards:{src:'Resources/awards_ 디 어워즈.webp',            h:58},
  aaa:    {src:'Resources/awards_ 아시아아티스트어워즈.svg',  h:58}
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
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
/* ABOUT: 문장이 화면에 들어오면 단어·사진이 차례로 떠오름 */
const kwSentence = document.querySelector('.kw-sentence');
const kwGallery = document.querySelector('.kw-gallery');
const aboutIO = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    kwSentence.classList.add('in');
    setTimeout(()=>kwSentence.classList.add('settled'), 1600);
    aboutIO.unobserve(e.target);
  }
}),{threshold:.4});
// 제목·소개 줄이 보이면 바로 떠오르게 (히어로 아래에 살짝 보이는 첫 화면에서도)
aboutIO.observe(kwSentence.querySelector('.kw-head'));
/* ABOUT: 사진 줄이 화면에 들어오면 사진 5장이 정해진 순서(--a)로 하나씩 페이드인 */
const galleryIO = new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){
    kwGallery.classList.add('show');
    setTimeout(()=>kwGallery.classList.add('settled'), 2800);   // 마지막 사진(.2s + 4×.35s + 1s)이 다 나타난 뒤
    galleryIO.unobserve(kwGallery);
  }
}),{threshold:.3});
galleryIO.observe(kwGallery);

/* ABOUT: 제목·문장 윗부분이 헤더 아래선에 닿은 뒤부터 위로 올라가는 만큼 --out 을 0→1 로 (다시 내려오면 되돌아옴)
   → 섹션에 도착해서 조금 스크롤해도 그대로 읽히고, 헤더 밑으로 밀려 들어갈 때부터 사라짐 */
const headerH = document.querySelector('.site-header').offsetHeight;
function onKwScroll(){
  const top = kwSentence.getBoundingClientRect().top;
  const p = (headerH - top) / (window.innerHeight * .4);
  kwSentence.style.setProperty('--out', Math.min(1, Math.max(0, p)).toFixed(3));
  // 사진 줄: 윗부분이 헤더 아래선에 닿으면 0 → 화면 높이의 60%만큼 더 올라가면 1
  const gTop = kwGallery.getBoundingClientRect().top;
  const g = (headerH - gTop) / (window.innerHeight * .6);
  kwSentence.style.setProperty('--gout', Math.min(1, Math.max(0, g)).toFixed(3));
}
window.addEventListener('scroll', onKwScroll, {passive:true});
window.addEventListener('resize', onKwScroll);
onKwScroll();

/* HERO: 스크롤할수록 크기는 그대로, 흰 바탕 속으로 서서히 사라짐 */
const stage = document.getElementById('heroStage');
function onScroll(){
  const p = Math.min(window.scrollY / (stage.offsetHeight * .8), 1);
  stage.style.opacity = 1 - p;
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

/* HERO 캐릭터: 앞·오른쪽·뒤·왼쪽 사진 4장을 지금 각도에 가까운 것부터 보여주고, 사이 각도에서는 살짝 기울이며 겹쳐 바꿔서 3D로 도는 것처럼
   좌우로 끌면 그 방향으로 돌고, 놓으면 관성으로 조금 더 돌다가 멈춤 / 마우스는 위아래로 끌면 살짝 앞뒤로 기울었다가 제자리로 */
const heroChar = document.getElementById('heroChar');
const heroTurn = document.getElementById('heroTurn');
const heroHint = document.getElementById('heroHint');
const heroViews = [...heroTurn.querySelectorAll('.hero-view')].map(img=>({img, a:+img.dataset.a}));
// rotY·rotX = 가야 할 각도(목표), curY·curX = 화면에 보이는 각도 → 매 프레임 목표 쪽으로 조금씩 따라가서 손 떨림·끊김 없이 부드럽게
let rotY = 0, rotX = 0, curY = 0, curX = 0, velY = 0, charDrag = false, lastX = 0, lastY = 0, spinRaf = 0;
const smooth = t=>t * t * (3 - 2 * t);   // 0~1을 양끝이 부드러운 곡선으로
function renderChar(){
  // 지금 각도와 가까운 순서로: 가장 가까운 사진은 늘 또렷하게, 두 번째 사진은 경계(45°) 앞뒤 넓은 구간에서 천천히 겹쳐 나타남
  const list = heroViews.map(v=>({v, d:((curY - v.a) % 360 + 540) % 360 - 180}))   // 이 사진 각도와의 차이 (-180 ~ 180)
    .sort((p, q)=>Math.abs(p.d) - Math.abs(q.d));
  list.forEach(({v, d}, k)=>{
    const op = k === 0 ? 1 : k === 1 ? smooth(Math.min(1, Math.max(0, (60 - Math.abs(d)) / 30))) : 0;
    v.img.style.opacity = op.toFixed(3);
    v.img.style.zIndex = k === 1 ? 2 : 1;
    v.img.style.transform = `rotateY(${(d * .35).toFixed(2)}deg)`;   // 사진끼리 넘어갈 때 기울기 차이가 작도록 살짝만
  });
  heroTurn.style.transform = `rotateX(${curX.toFixed(2)}deg)`;
}
function spinChar(){
  if(!charDrag){
    velY *= .95;       // 놓은 뒤 관성: 천천히 줄어듦
    rotY += velY;
    rotX *= .9;        // 기울기는 제자리로
  }
  curY += (rotY - curY) * .14;
  curX += (rotX - curX) * .14;
  renderChar();
  const moving = charDrag || Math.abs(velY) > .01 || Math.abs(rotY - curY) > .05 || Math.abs(rotX - curX) > .05 || Math.abs(rotX) > .05;
  spinRaf = moving ? requestAnimationFrame(spinChar) : 0;
}
function startSpin(){ if(!spinRaf) spinRaf = requestAnimationFrame(spinChar); }
function hideHint(){ heroHint.classList.add('hide'); }
heroChar.addEventListener('pointerdown', e=>{
  if(e.pointerType === 'mouse' && e.button !== 0) return;
  charDrag = true;
  lastX = e.clientX;
  lastY = e.clientY;
  velY = 0;
  heroChar.setPointerCapture(e.pointerId);
  heroChar.classList.add('dragging');
  hideHint();
  startSpin();
});
heroChar.addEventListener('pointermove', e=>{
  if(!charDrag) return;
  const dx = e.clientX - lastX, dy = e.clientY - lastY;
  lastX = e.clientX;
  lastY = e.clientY;
  rotY += dx * .5;
  velY = Math.min(6, Math.max(-6, velY * .6 + dx * .2));   // 놓을 때의 속도 (최근 움직임 위주, 너무 세게 돌지 않게 최대 6)
  if(e.pointerType === 'mouse') rotX = Math.min(20, Math.max(-20, rotX - dy * .3));
});
function endDrag(){
  if(!charDrag) return;
  charDrag = false;
  heroChar.classList.remove('dragging');
  startSpin();
}
heroChar.addEventListener('pointerup', endDrag);
heroChar.addEventListener('pointercancel', endDrag);
// 키보드: 좌우 방향키로 돌리기
heroChar.addEventListener('keydown', e=>{
  if(e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
  e.preventDefault();
  velY = e.key === 'ArrowRight' ? 3 : -3;
  hideHint();
  startSpin();
});
renderChar();

/* MEMBERS: 왼쪽 큰 사진 + 오른쪽 세로 슬라이더
   섹션을 지나는 동안 무대는 고정 → 스크롤한 만큼 슬라이더 줄이 위로 올라가고, 가운데 온 멤버를 왼쪽에 크게 보여줌 */
const membersSec = document.getElementById('members');
const memStage = document.getElementById('memStage');
const memMain = document.getElementById('memMain');
const memInfo = document.getElementById('memInfo');
const memTrack = document.getElementById('memTrack');
memInfo.insertAdjacentHTML('beforebegin', members.map(m=>`<img class="mem-photo" src="${m.photo}" alt="${m.name} 프로필 사진" style="object-position:${m.pos};${m.zoom || ''}">`).join(''));
memTrack.innerHTML = members.map((m,k)=>`<li><button class="mem-thumb" type="button" data-i="${k}" aria-label="${m.name} 보기"><img src="${m.photo}" alt="" style="object-position:${m.pos}"></button></li>`).join('');
const memPhotos = memMain.querySelectorAll('.mem-photo');
const memThumbs = [...memTrack.querySelectorAll('.mem-thumb')];
const isNarrow = matchMedia('(max-width:960px)');
const PER_MEMBER = .6;   // 멤버 한 명이 넘어가는 데 필요한 스크롤 = 무대 높이의 60%
let curMember = -1, mTravel = 0;

function setMember(i){
  if(i === curMember) return;
  const first = curMember < 0;
  curMember = i;
  memPhotos.forEach((p,k)=>p.classList.toggle('on', k === i));
  memThumbs.forEach((t,k)=>{ t.classList.toggle('on', k === i); t.setAttribute('aria-current', k === i ? 'true' : 'false'); });
  const m = members[i];
  const fill = ()=>{
    memInfo.querySelector('h3').textContent = m.name;
    const ps = memInfo.querySelectorAll('p');
    ps[0].textContent = m.nation;
    ps[1].textContent = m.birth;
    memInfo.classList.remove('swap');
  };
  if(first){ fill(); return; }
  memInfo.classList.add('swap');      // 글자 잠깐 흐리게 → 바꾸고 → 다시 보이게
  clearTimeout(setMember.t);
  setMember.t = setTimeout(fill, 200);
}
function layoutMembers(){
  if(isNarrow.matches){ membersSec.style.height = ''; memTrack.style.transform = ''; return; }
  mTravel = memStage.clientHeight * PER_MEMBER * (members.length - 1);
  membersSec.style.height = `${memStage.clientHeight + mTravel}px`;
  onMembersScroll();
}
let mTick = false;
function onMembersScroll(){
  mTick = false;
  if(isNarrow.matches) return;
  const stickTop = parseFloat(getComputedStyle(memStage).top) || 0;
  const scrolled = Math.min(mTravel, Math.max(0, stickTop - membersSec.getBoundingClientRect().top));
  const p = mTravel ? scrolled / mTravel * (members.length - 1) : 0;    // 0 ~ 5 (소수점 = 다음 멤버로 넘어가는 중)
  // 슬라이더 줄: p 위치의 사진 가운데가 오른쪽 판 가운데에 오도록 (사진 사이를 부드럽게 이어서)
  const centers = memThumbs.map(t=>{ const li = t.parentElement; return li.offsetTop + li.offsetHeight / 2; });
  const k = Math.floor(p), f = p - k;
  const c = centers[k] + ((centers[k + 1] ?? centers[k]) - centers[k]) * f;
  memTrack.style.transform = `translateY(${(memTrack.parentElement.clientHeight / 2 - c).toFixed(1)}px)`;
  setMember(Math.round(p));
}
// 슬라이더 사진을 누르면: 넓은 화면은 그 멤버 위치로 스크롤, 좁은 화면은 바로 바꿈
memThumbs.forEach(t=>t.addEventListener('click', ()=>{
  const i = +t.dataset.i;
  if(isNarrow.matches){ setMember(i); return; }
  const stickTop = parseFloat(getComputedStyle(memStage).top) || 0;
  const secTop = membersSec.getBoundingClientRect().top + window.scrollY - stickTop;
  window.scrollTo({top: secTop + mTravel * i / (members.length - 1), behavior: 'smooth'});
}));
window.addEventListener('scroll', ()=>{ if(!mTick){ mTick = true; requestAnimationFrame(onMembersScroll); } }, {passive:true});
window.addEventListener('resize', layoutMembers);
isNarrow.addEventListener('change', layoutMembers);
setMember(0);
layoutMembers();

/* ALBUMS: 커버를 누르면 오른쪽(좁은 화면은 아래)에 설명 영역이 열림 — 같은 커버를 다시 누르거나 ×·Esc로 닫기 */
const disco = document.getElementById('disco');
const discoGrid = document.getElementById('discoGrid');
const discoPanel = document.getElementById('discoPanel');
const tracksEl = document.getElementById('aTracks');
const moreBtn = document.getElementById('aMore');
discoGrid.innerHTML = albums.map((a,i)=>`<li><button class="disco-cover" type="button" data-i="${i}" aria-label="${a.name} 앨범 설명 보기" aria-expanded="false" aria-controls="discoPanel"><img src="${a.cover}" alt=""></button></li>`).join('');
const discoCovers = [...discoGrid.querySelectorAll('.disco-cover')];

// 처음 섹션에 도달하면: 첫 번째 앨범 자리(왼쪽 위)에 카드 더미처럼 쌓여 있던 커버들이 각자 제자리로 퍼짐 ("동작 줄이기"면 생략)
if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
  const discoItems = [...discoGrid.children];
  const pileTilt = [-4, 7, -9, 3, 9, -6, 5, -3];          // 더미 안에서 각 커버 기울기(도)
  const pileShift = [[0,0],[8,-6],[-6,-10],[10,4],[-8,6],[4,-12],[-10,-4],[6,10]];   // 더미 안에서 살짝 어긋나는 정도(px)
  const measureStack = ()=>{
    // 각 커버 제자리 → 첫 번째 커버 자리까지의 거리 (transform은 레이아웃 위치에 영향이 없어서 offset으로 바로 계산)
    const first = discoItems[0];
    const cx = first.offsetLeft + first.offsetWidth / 2, cy = first.offsetTop + first.offsetHeight / 2;
    discoItems.forEach((li,k)=>{
      const [ox, oy] = pileShift[k % pileShift.length];
      li.style.setProperty('--k', k);
      li.style.setProperty('--pr', `${pileTilt[k % pileTilt.length]}deg`);
      li.style.setProperty('--sx', `${(cx - li.offsetLeft - li.offsetWidth / 2 + ox).toFixed(1)}px`);
      li.style.setProperty('--sy', `${(cy - li.offsetTop - li.offsetHeight / 2 + oy).toFixed(1)}px`);
    });
  };
  measureStack();
  discoGrid.classList.add('stacked');
  const spread = ()=>{
    window.removeEventListener('scroll', checkPile);
    discoGrid.classList.add('spreading');
    discoGrid.classList.remove('stacked');
    // 다 퍼진 뒤에는 원래 짧은 움직임(마우스 올림)으로 돌아감
    setTimeout(()=>discoGrid.classList.remove('spreading'), 1000 + discoItems.length * 90);
  };
  // 더미(첫 번째 커버 자리)가 화면 위에서 60% 지점까지 올라오면 → 더미를 잠깐 보여준 뒤 퍼짐
  let pileTimer = 0;
  function checkPile(){
    const r = discoItems[0].getBoundingClientRect();
    const pileY = r.top + r.height / 2;
    if(pileY < window.innerHeight * .6 && !pileTimer) pileTimer = setTimeout(spread, 600);
  }
  window.addEventListener('scroll', checkPile, {passive:true});
  window.addEventListener('resize', ()=>{ if(discoGrid.classList.contains('stacked')) measureStack(); });
  checkPile();
}
let openAlbum = -1;
function fillAlbum(a){
  // 정보가 비어 있는 칸은 빼고 이어 붙임 (아직 정보가 없는 앨범은 '정보 준비 중')
  const meta = [a.type, a.date, a.tracks.length ? `${a.tracks.length}곡` : ''].filter(Boolean).join(' · ');
  document.getElementById('aType').textContent = meta || '정보 준비 중';
  document.getElementById('aName').textContent = a.name;
  const intro = document.getElementById('aIntro');
  intro.textContent = a.intro;
  intro.hidden = !a.intro;
  tracksEl.innerHTML = a.tracks.map((t,k)=>`<li><span>${String(k+1).padStart(2,'0')}</span>${t}</li>`).join('');
  // MORE → 이 앨범의 정보 페이지로 이동 (새 탭)
  moreBtn.href = a.link;
  moreBtn.setAttribute('aria-label', `${a.name} 앨범 정보 더보기 (새 탭)`);
}
function showAlbum(i){
  openAlbum = i;
  fillAlbum(albums[i]);
  discoCovers.forEach((b,k)=>{ b.classList.toggle('on', k === i); b.setAttribute('aria-expanded', k === i); });
  discoPanel.hidden = false;
  requestAnimationFrame(()=>disco.classList.add('open'));   // hidden을 푼 다음 프레임에 열어야 밀리는 움직임이 보임
  document.getElementById('aName').focus({preventScroll:true});
  if(matchMedia('(max-width:960px)').matches) discoPanel.scrollIntoView({behavior:'smooth', block:'start'});
}
function closeAlbum(){
  if(openAlbum < 0) return;
  const last = discoCovers[openAlbum];
  openAlbum = -1;
  disco.classList.remove('open');
  discoCovers.forEach(b=>{ b.classList.remove('on'); b.setAttribute('aria-expanded', 'false'); });
  // 칸이 다 닫힌 뒤에 숨김 (화면낭독기에서도 사라지게)
  setTimeout(()=>{ if(openAlbum < 0) discoPanel.hidden = true; }, 500);
  last.focus({preventScroll:true});
}
discoGrid.addEventListener('click', e=>{
  const b = e.target.closest('.disco-cover');
  if(!b) return;
  const i = +b.dataset.i;
  if(i === openAlbum) closeAlbum(); else showAlbum(i);
});
document.getElementById('discoClose').addEventListener('click', closeAlbum);
document.addEventListener('keydown', e=>{ if(e.key === 'Escape') closeAlbum(); });

/* AWARDS: 가로로 흐르는 목록 (끊김 없이 두 번 반복) */
const awardHTML = awards.map(a=>{
  const lg = LOGO[a.logo];
  return `<div class="award"><div class="award-logo"><img src="${encodeURI(lg.src)}" alt="" loading="lazy" style="height:${lg.h}%"></div><div><div class="yr">${a.yr}</div><h3>${a.title}</h3><p>${a.desc}</p></div></div>`;
}).join('');
document.getElementById('awardsTrack').innerHTML = awardHTML + awardHTML.replaceAll('class="award"','class="award" aria-hidden="true"');

/* MEDIA: 영상 카드는 섹션이 화면에 보일 때만 재생 (안 보이면 멈춤). "동작 줄이기"를 켠 사용자에게는 재생하지 않음 */
const mediaVideo = document.getElementById('mediaVideo');
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting) mediaVideo.play().catch(()=>{}); else mediaVideo.pause();
  }),{threshold:.3}).observe(mediaVideo);
}

/* MEDIA: 섹션에 도착하면 영상 카드가 보드 좌우 끝까지 꽉 찬 상태 → 무대가 고정된 채로 스크롤하면 카드가 줄어들며 원래 자리(왼쪽 6칸)로, 오른쪽 화보 카드가 드러남
   위로 다시 스크롤하면 반대로 커짐 / 좁은 화면·"동작 줄이기"에서는 효과 없음 */
const mediaSec = document.getElementById('media');
const mediaStage = document.getElementById('mediaStage');
const mediaBoard = mediaSec.querySelector('.media-board');
const mediaCard = mediaSec.querySelector('.m-video');
const noMotion = matchMedia('(prefers-reduced-motion: reduce)');
let mdOn = false, mdTravel = 0, mdW = 0;
function layoutMedia(){
  // 원래 모습으로 되돌린 뒤 크기를 잼
  mdOn = false;
  mediaCard.style.width = mediaCard.style.height = '';
  mediaBoard.classList.remove('zoom');
  mediaStage.classList.remove('no-pin');
  mediaSec.style.height = '';
  if(isNarrow.matches || noMotion.matches) return;
  if(mediaStage.scrollHeight > mediaStage.clientHeight){ mediaStage.classList.add('no-pin'); return; }
  const r = mediaCard.getBoundingClientRect();
  mdW = r.width;
  mdTravel = mediaStage.clientHeight * 1.1;
  mediaSec.style.height = `${mediaStage.clientHeight + mdTravel}px`;
  mediaCard.style.height = `${r.height}px`;   // 높이는 그대로, 폭만 바뀜
  mediaBoard.classList.add('zoom');
  mdOn = true;
  onMediaScroll();
}
let mdTick = false;
function onMediaScroll(){
  mdTick = false;
  if(!mdOn) return;
  const stickTop = parseFloat(getComputedStyle(mediaStage).top) || 0;
  const scrolled = Math.min(mdTravel, Math.max(0, stickTop - mediaSec.getBoundingClientRect().top));
  // 처음 20%는 꽉 찬 상태로 잠깐 머물고, 그다음 50% 동안 줄어듦
  // 마지막 30%는 원래 자리로 다 돌아간 상태에서 화면이 그대로 멈춰 있음 → 오른쪽 화보까지 다 본 뒤에야 아래로 내려감
  const t = Math.min(1, Math.max(0, (scrolled / mdTravel - .2) / .5));
  const e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;   // 천천히 시작해서 천천히 멈춤
  const full = mediaBoard.clientWidth;
  mediaCard.style.width = `${(full + (mdW - full) * e).toFixed(1)}px`;
  mediaBoard.style.setProperty('--mp', Math.min(1, Math.max(0, (e - .4) / .6)).toFixed(3));
}
window.addEventListener('scroll', ()=>{ if(!mdTick){ mdTick = true; requestAnimationFrame(onMediaScroll); } }, {passive:true});
window.addEventListener('resize', layoutMedia);
isNarrow.addEventListener('change', layoutMedia);
layoutMedia();

/* NOTICE: 공지 목록 (없으면 안내 문구) */
document.getElementById('noticeList').innerHTML = notices.length
  ? notices.map(n=>`<li><a href="${n.href}"><span class="n-tag">${n.tag}</span><span class="n-title">${n.title}</span><span class="n-date">${n.date}</span></a></li>`).join('')
  : '<li class="notice-empty">등록된 공지가 없습니다.</li>';

/* INTRO CAPTCHA: 칸을 고르면 SKIP → VERIFY. VERIFY·SKIP 모두 누르면 히어로로 넘어감 (새로고침하면 다시 뜸) */
(function(){
  const cap = document.getElementById('captcha');
  if(!cap) return;
  if(!window.SHOW_CAPTCHA){ cap.remove(); return; }   // 캡차 꺼둠 (index.html의 SHOW_CAPTCHA)
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
