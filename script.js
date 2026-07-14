(() => {
  'use strict';

  // ---------- content data ----------
  const suggestionList = [
    { label: 'AirHands Pro 제품 정보', target: 'section-f' },
    { label: '사용법 안내', target: 'section-g' },
    { label: '실제 후기 보기', target: 'section-h' },
    { label: '자주 묻는 질문', target: 'section-i' },
    { label: '숏폼 영상 모아보기', target: 'section-b' },
    { label: '브랜드 소개', target: 'section-a' },
  ];

  const detailsF = [
    { title: 'DETAILS', open: true, body: `46년 역사 약손명가의 골기테라피 수기 노하우를 정밀 공학 기술로 재해석한 프리미엄 홈케어 디바이스입니다.

Mechanism ㅣ 기술
내부 에어백의 강한 압착력과 타겟 지압볼을 통해 턱선부터 광대, 두피까지 실제 손으로 꾹꾹 눌러주는 '물리적 무빙 경락'을 실현합니다.

Purchase value l 구매가치
매일 집에서 약손명가에서 전문 윤곽 및 축소 관리 효과를 누리며, 집중관리 후 홈케어용으로 얼굴형 관리의 부스터 역활을 하는 약손명가만의 제품입니다.

How to wear it ㅣ 착용법
제품을 턱에 맞춘 뒤 정수리 밸크로로 단단히 밀착 고정하고, 컨트롤러로 원하는 압박 세기를 선택해 사용합니다.` },
    { title: '소재', open: false, body: '피부 자극을 최소화한 저자극 실리콘 및 통기성 매쉬 소재를 사용했습니다.' },
    { title: '관리 방법', open: false, body: '미온수로 가볍게 세척 후 그늘에서 건조해 주세요.' },
  ];

  const detailsG = [
    { title: 'How to wear it ㅣ 착용법', open: false, body: '제품을 턱에 맞춘 뒤 정수리 밸크로로 단단히 밀착 고정하고, 컨트롤러로 원하는 압박 세기를 선택해 사용합니다.' },
    { title: 'Story ㅣ 스토리', open: false, body: "약손명가의 철학을 담은 골기랩은 얼굴 골격과 근육을 직접 자극하는 '진짜 물리적 경락'을 홈케어로 대중화하기 위해 탄생했습니다. 시공간의 제약 없이 에스테틱 샵의 압도적인 라인 정리 후 효과적인 홈케어 서비스를 그대로 선사합니다." },
    { title: '제품 특징 및 구매 이유', open: false, body: '디바이스 내부의 입체 에어백과 맞춤형 지압볼이 유기적으로 작동하여 하악, 안면부, 두피를 전방위로 강하게 압박합니다. 단 1회 사용만으로도 즉각적인 붓기 완화와 리프팅감을 선사하며, 매일 지속적인 페이스 라인 관리가 가능해 비용과 시간을 혁신적으로 아껴줍니다.' },
  ];

  const faqs = [
    { q: 'AIRHANDS는 의료기기인가요?', open: true, a: '아니요, AIRHANDS는 의료기기가 아닌 뷰티 웨어러블 제품입니다. 일상에서 편안하게 착용할 수 있도록 설계되었습니다.' },
    { q: '하루에 얼마나 착용해야 하나요?', open: false, a: '하루 20~30분, 주 3~4회 착용을 권장합니다.' },
    { q: '착용 중 답답하지 않나요?', open: false, a: '통기성 소재와 인체공학 설계로 장시간 착용해도 편안하도록 제작되었습니다.' },
    { q: '세척은 어떻게 하나요?', open: false, a: '미온수로 가볍게 세척 후 자연 건조해 주세요.' },
    { q: '사이즈는 어떻게 선택하나요?', open: false, a: '얼굴 폭에 따라 S/M/L 중 선택하시면 됩니다. 사이즈 가이드를 참고해 주세요.' },
    { q: '반품 및 교환이 가능한가요?', open: false, a: '수령 후 7일 이내 미개봉 상품에 한해 반품 및 교환이 가능합니다.' },
  ];

  const reviewList = [
    { name: '민지', stars: '★★★★★', date: '5일 전', text: '착용감이 생각보다 훨씬 가볍고 자연스러워요. 외출할 때도 부담없이 쓸 수 있어서 좋아요.' },
    { name: '서연', stars: '★★★★☆', date: '12일 전', text: '골격 라인 따라 딱 맞게 잡아주는 느낌이 확실히 있어요. 다만 사이즈 선택은 신중하게 하세요.' },
    { name: '지훈', stars: '★★★★★', date: '19일 전', text: '매일 저녁 30분씩 착용 중인데 얼굴선이 정돈되는 느낌이라 만족스럽습니다.' },
    { name: '하은', stars: '★★★★★', date: '한달 전', text: '디자인이 의료기기처럼 안 보여서 마음에 들어요. 선물용으로도 좋을 것 같아요.' },
  ];

  const shortSrcMap = {
    1: './assets/short-1.mp4', 2: './assets/short-2.mp4', 3: './assets/short-7.mp4', 4: './assets/short-4.mp4',
    5: './assets/short-5.mp4', 6: './assets/short-6.mp4', 7: './assets/short-3.mp4', 8: './assets/short-8.mp4',
  };

  // ---------- media fallback: label placeholders when real assets are missing ----------
  function armMediaFallback(root) {
    root.querySelectorAll('[data-media]').forEach((el) => {
      const label = el.dataset.label || el.querySelector('img,video')?.getAttribute('alt') || '';
      if (label) el.setAttribute('data-fallback-label', label.toUpperCase());
      const media = el.querySelector('img,video');
      if (!media) return;
      const markMissing = () => el.classList.add('media-missing');
      if (media.tagName === 'IMG') {
        if (!media.getAttribute('src')) { markMissing(); return; }
        media.addEventListener('error', markMissing, { once: true });
      } else {
        media.addEventListener('error', markMissing, { once: true });
        media.addEventListener('stalled', markMissing, { once: true });
      }
    });
  }

  // ---------- header / footer smooth scroll ----------
  document.querySelectorAll('[data-scroll]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      closeSuggestions();
      const el = document.getElementById(a.dataset.scroll);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ---------- section A: search + suggestions ----------
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const suggestionsBox = document.getElementById('searchSuggestions');
  const searchWrap = document.getElementById('search');

  function renderSuggestions() {
    const q = searchInput.value.trim().toLowerCase();
    const matches = q ? suggestionList.filter((s) => s.label.toLowerCase().includes(q)) : suggestionList;
    suggestionsBox.innerHTML = '';
    if (matches.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'search__no-results';
      empty.textContent = '검색 결과가 없습니다';
      suggestionsBox.appendChild(empty);
    } else {
      matches.forEach((item) => {
        const row = document.createElement('div');
        row.className = 'search__suggestion';
        row.textContent = item.label;
        row.addEventListener('click', () => {
          closeSuggestions();
          const el = document.getElementById(item.target);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        });
        suggestionsBox.appendChild(row);
      });
    }
  }

  function openSuggestions() {
    renderSuggestions();
    suggestionsBox.hidden = false;
  }
  function closeSuggestions() {
    suggestionsBox.hidden = true;
  }

  searchInput.addEventListener('input', openSuggestions);
  searchInput.addEventListener('focus', openSuggestions);
  searchBtn.addEventListener('click', openSuggestions);
  document.addEventListener('click', (e) => {
    if (!searchWrap.contains(e.target)) closeSuggestions();
  });

  // ---------- section C: mouse-paint color reveal ----------
  const sectionC = document.getElementById('section-c');
  const sectionCColor = sectionC.querySelector('.section-c__color');
  let cMaskCanvas = null;

  function cEnsureCanvas(rect) {
    if (!cMaskCanvas) cMaskCanvas = document.createElement('canvas');
    const w = Math.round(rect.width);
    const h = Math.round(rect.height);
    if (cMaskCanvas.width !== w || cMaskCanvas.height !== h) {
      cMaskCanvas.width = w;
      cMaskCanvas.height = h;
    }
    return cMaskCanvas;
  }

  sectionC.addEventListener('mousemove', (e) => {
    const rect = sectionC.getBoundingClientRect();
    const canvas = cEnsureCanvas(rect);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const half = 60;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#fff';
    ctx.filter = 'blur(18px)';
    ctx.fillRect(x - half, y - half, half * 2, half * 2);
    ctx.filter = 'none';

    const url = canvas.toDataURL();
    sectionCColor.style.webkitMaskImage = `url(${url})`;
    sectionCColor.style.maskImage = `url(${url})`;
    sectionC.classList.add('is-hovering');
  });

  sectionC.addEventListener('mouseleave', () => {
    sectionC.classList.remove('is-hovering');
  });

  // ---------- section B: video grid ----------
  const videoGrid = document.getElementById('videoGrid');
  for (let n = 1; n <= 8; n++) {
    const src = shortSrcMap[n];
    const cell = document.createElement('div');
    cell.className = 'video-cell';
    if (src) {
      cell.innerHTML = `<video autoplay muted loop playsinline><source src="${src}" type="video/mp4"></video>`;
      cell.querySelector('video').addEventListener('error', () => {
        cell.innerHTML = `<div class="video-cell__play"><span></span></div><div class="video-cell__label">SHORT_${n}.MP4</div>`;
      });
    } else {
      cell.innerHTML = `<div class="video-cell__play"><span></span></div><div class="video-cell__label">SHORT_${n}.MP4</div>`;
    }
    videoGrid.appendChild(cell);
  }

  // ---------- section E: size selector ----------
  document.querySelectorAll('.size-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-option').forEach((b) => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');
    });
  });

  // ---------- accordions (F / G / FAQ) ----------
  function buildAccordion(containerId, items, titleKey, bodyKey) {
    const container = document.getElementById(containerId);
    items.forEach((item, idx) => {
      const row = document.createElement('div');
      row.className = 'accordion__item' + (item.open ? ' is-open' : '');
      row.innerHTML = `
        <button class="accordion__head" type="button">
          <span>${item[titleKey]}</span>
          <span class="accordion__symbol">${item.open ? '−' : '+'}</span>
        </button>
        <div class="accordion__body">${escapeHtml(item[bodyKey])}</div>
      `;
      const head = row.querySelector('.accordion__head');
      const symbol = row.querySelector('.accordion__symbol');
      head.addEventListener('click', () => {
        const isOpen = row.classList.toggle('is-open');
        symbol.textContent = isOpen ? '−' : '+';
      });
      container.appendChild(row);
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  buildAccordion('accordionF', detailsF, 'title', 'body');
  buildAccordion('accordionG', detailsG, 'title', 'body');
  buildAccordion('accordionFAQ', faqs, 'q', 'a');

  // ---------- section H: reviews ----------
  const reviewListEl = document.getElementById('reviewList');
  const reviewSearch = document.getElementById('reviewSearch');

  function renderReviews() {
    const q = reviewSearch.value.trim().toLowerCase();
    const filtered = q
      ? reviewList.filter((r) => r.name.toLowerCase().includes(q) || r.text.toLowerCase().includes(q))
      : reviewList;
    reviewListEl.innerHTML = filtered.map((r) => `
      <div class="review">
        <div class="review__top">
          <div class="review__stars">${r.stars}</div>
          <div class="review__date">${r.date}</div>
        </div>
        <div class="review__name">${r.name}</div>
        <div class="review__text">${escapeHtml(r.text)}</div>
      </div>
    `).join('');
  }
  reviewSearch.addEventListener('input', renderReviews);
  renderReviews();

  // ---------- media fallback labels ----------
  armMediaFallback(document);
})();
