document.addEventListener('DOMContentLoaded', () => {

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------- hero carousel: loop back to slide 1 after the last slide ----------
  // append a clone of slide 1 at the end; once the user settles on it
  // (visually identical to slide 1), silently jump back to the real
  // slide 1 with no animation so the loop reads as seamless
  (() => {
    const carousel = document.querySelector('.dp-hero__carousel');
    if (!carousel) return;
    const slides = carousel.querySelectorAll('.dp-hero__slide');
    if (!slides.length) return;
    const clone = slides[0].cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    carousel.appendChild(clone);
    const total = slides.length + 1;
    let settleTimer;
    carousel.addEventListener('scroll', () => {
      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        const slideWidth = carousel.clientWidth;
        if (!slideWidth) return;
        const index = Math.round(carousel.scrollLeft / slideWidth);
        if (index >= total - 1) {
          carousel.scrollTo({ left: 0, behavior: 'auto' });
        }
      }, 120);
    });
  })();

  // ---------- force-start every video (mobile browsers can silently
  // ignore the autoplay attribute; retry play() until it sticks) ----------
  document.querySelectorAll('video').forEach((el) => {
    el.muted = true;
    el.playsInline = true;
    el.loop = true;
    const tryPlay = () => {
      const p = el.play();
      if (p && p.catch) p.catch(() => setTimeout(tryPlay, 300));
    };
    if (el.readyState >= 2) tryPlay();
    else el.addEventListener('loadeddata', tryPlay, { once: true });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && el.paused) tryPlay();
    });
  });

  // ---------- smooth scroll for nav/footer links ----------
  document.querySelectorAll('[data-scroll]').forEach((el) => {
    el.addEventListener('click', (e) => {
      const target = document.getElementById(el.dataset.scroll);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ---------- how to use: 5-step ritual table ----------
  const stepIcons = {
    EMPTY: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" stroke-width="1.6"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8" stroke-opacity="0.4"/></svg>',
    ACTIVATE: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" stroke-width="1.6"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" stroke-linejoin="round"/></svg>',
    RECOVER: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" stroke-width="1.6"><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/><circle cx="12" cy="12" r="3.2"/></svg>',
    SEAL: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" stroke-width="1.6"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" stroke-linejoin="round"/></svg>',
  };
  const ritualSteps = [
    { n: '01', name: 'DEEP BOOSTER TONER', system: 'EMPTY · AWAKEN', desc: '세안 직후 적당량을 덜어 거품 또는 에센스 타입으로 얼굴 전체에 고르게 발라줍니다.', icon: stepIcons.EMPTY },
    { n: '02', name: 'NEYO AMPOULE', system: 'ACTIVATE', desc: '토너 흡수 후 안색과 톤 관리가 필요한 부위에 적당량을 도포하고 가볍게 두드려 흡수시킵니다.', icon: stepIcons.ACTIVATE },
    { n: '03', name: 'SIYO AMPOULE', system: 'ACTIVATE', desc: '탄력 케어가 필요한 부위 위주로 소량을 덜어 위쪽 방향으로 마사지하듯 흡수시킵니다.', icon: stepIcons.ACTIVATE },
    { n: '04', name: 'DEEP AZUL COOLING GEL CRÈME', system: 'RECOVER', desc: '관리 직후 또는 열감이 느껴지는 부위에 넉넉히 발라 쿨링감이 사라질 때까지 가볍게 흡수시킵니다.', icon: stepIcons.RECOVER },
    { n: '05', name: 'DEEP LIRA CRÈME', system: 'SEAL', desc: '마지막 단계에서 적당량을 손으로 녹여 얼굴 전체에 밀착시켜 마무리합니다.', icon: stepIcons.SEAL },
  ];
  const ritualRowsEl = document.getElementById('ritualRows');
  if (ritualRowsEl) {
    ritualRowsEl.innerHTML = ritualSteps.map((s) => `
      <div class="dp-ritual-row">
        <div class="dp-ritual-row__n">${s.n}</div>
        <div class="dp-ritual-row__icon">${s.icon}</div>
        <div class="dp-ritual-row__name">${escapeHtml(s.name)}</div>
        <div class="dp-ritual-row__system">${escapeHtml(s.system)}</div>
        <div class="dp-ritual-row__desc">${escapeHtml(s.desc)}</div>
      </div>
    `).join('');
  }

  // ---------- routine by goal ----------
  const goalIcons = {
    BRIGHTENING: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" stroke-width="1.6"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
    GOLD: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" stroke-width="1.6"><path d="M12 20V4M6 10l6-6 6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    ANTIAGING: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" stroke-width="1.6"><rect x="4" y="4" width="16" height="6" rx="1"/><rect x="4" y="14" width="16" height="6" rx="1"/></svg>',
    RECOVERY: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8a6a4a" stroke-width="1.6"><path d="M12 3c3 4 6 7 6 11a6 6 0 01-12 0c0-4 3-7 6-11z"/></svg>',
  };
  const routinesByGoal = [
    { concern: '안색이 칙칙하고 색소침착이 고민이라면', title: 'BRIGHTENING RITUAL', steps: '부스터 토너 → NEYO 앰플 → 아줄 젤 크림 → 리라 크림', keywords: 'CLEAR · DEFEND · BRIGHTEN · SEAL', tagline: '', icon: goalIcons.BRIGHTENING },
    { concern: '피부 탄력과 처짐이 고민이라면', title: 'GOLD LIFTING RITUAL', steps: '부스터 토너 → SIYO 앰플 → 아줄 젤 크림 → 리라 크림', keywords: 'AWAKEN · FIRM · RECOVER · FIX', tagline: '', icon: goalIcons.GOLD },
    { concern: '복합적인 노화 징후를 관리하고 싶다면', title: 'SUPER ANTI-AGING RITUAL', steps: '부스터 토너 → NEYO 앰플 → SIYO 앰플 → 아줄 젤 크림 → 리라 크림', keywords: 'BRIGHTEN THE TONE · DEFINE THE FIRMNESS · SEAL THE RESULT', tagline: '안색은 맑게, 탄력은 밀도 있게, 관리의 결과는 깊게.', icon: goalIcons.ANTIAGING },
    { concern: '골기 관리 직후라면', title: 'POST-GOLKI RECOVERY RITUAL', steps: '아줄 젤 크림 → 리라 크림', keywords: 'FIRST, COOL · THEN, SEAL', tagline: '먼저 식히고, 마지막으로 지키다.', icon: goalIcons.RECOVERY },
  ];
  const routineGridEl = document.getElementById('routineGrid');
  if (routineGridEl) {
    routineGridEl.innerHTML = routinesByGoal.map((r) => `
      <div class="dp-routine">
        <div class="dp-routine__icon">${r.icon}</div>
        <div>
          <div class="dp-routine__concern">${escapeHtml(r.concern)}</div>
          <div class="dp-routine__title">${escapeHtml(r.title)}</div>
          <div class="dp-routine__steps">${escapeHtml(r.steps)}</div>
          <div class="dp-routine__keywords">${escapeHtml(r.keywords)}</div>
          ${r.tagline ? `<div class="dp-routine__tagline">"${escapeHtml(r.tagline)}"</div>` : ''}
        </div>
      </div>
    `).join('');
  }

  // ---------- comparison table ----------
  const comparisonRows = [
    {
      label: '관리 원리 · 핵심 원료',
      deep: '40년 골기 테라피 기반 단계별 설계\n해양 추출물 성분',
      general: '단일 컨셉 위주\n일반 보습 성분',
      single: '단일 성분 집중\n단일 유효 성분',
    },
    {
      label: '탄력 기술 · 관리 후 케어 · 사용 목적',
      deep: 'DEEP COLLAGEN RECOVERY\n나노 콜라겐\n쿨링 + 멜팅 픽싱까지 단계적 설계\n관리 전~후 전체 리추얼',
      general: '일반 콜라겐 배합\n단일 크림 위주\n일상 스킨케어',
      single: '해당 없음\n해당 없음\n특정 고민 집중',
    },
  ];
  const comparisonRowsEl = document.getElementById('comparisonRows');
  if (comparisonRowsEl) {
    comparisonRowsEl.innerHTML = comparisonRows.map((row) => `
      <div class="dp-comparison-row">
        <div class="dp-comparison-row__label">${escapeHtml(row.label)}</div>
        <div class="dp-comparison-row__deep">${escapeHtml(row.deep)}</div>
        <div class="dp-comparison-row__other">${escapeHtml(row.general)}</div>
        <div class="dp-comparison-row__other">${escapeHtml(row.single)}</div>
      </div>
    `).join('');
  }

  // ---------- ingredient map ----------
  const ingredientMap = [
    { product: 'DEEP BOOSTER TONER', keyIngredient: 'Giant Kelp', role: '노폐물 정돈 및 흡수 환경 준비' },
    { product: 'DEEP NEYO AMPOULE', keyIngredient: '순수 비타민 15% + 비타민 E 1%\n+ 페룰릭 애시드 0.5%', role: '산화 스트레스 방어 및 안색 개선' },
    { product: 'DEEP SIYO AMPOULE', keyIngredient: 'DEEP COLLAGEN RECOVERY', role: '탄력 및 밀도 집중 케어' },
    { product: 'DEEP AZUL COOLING GEL CRÈME', keyIngredient: '아줄렌 + 해양 추출물', role: '즉각적인 진정 및 쿨링' },
    { product: 'DEEP LIRA CRÈME', keyIngredient: 'Giant Kelp + 고밀도 보습 성분', role: '수분 및 유효 성분 보호막 형성' },
  ];
  const ingredientRowsEl = document.getElementById('ingredientRows');
  if (ingredientRowsEl) {
    ingredientRowsEl.innerHTML = ingredientMap.map((im) => `
      <div class="dp-ingredient-row">
        <div class="dp-ingredient-row__product">${escapeHtml(im.product)}</div>
        <div class="dp-ingredient-row__key">${escapeHtml(im.keyIngredient)}</div>
        <div class="dp-ingredient-row__role">${escapeHtml(im.role)}</div>
      </div>
    `).join('');
  }

  // ---------- safety & sourcing ----------
  const safetyPoints = [
    { title: '인증된 공급처', desc: '엄격한 품질 기준을 통과한 인증 공급처에서만 원료를 소싱합니다.' },
    { title: '전 성분 안전성 테스트', desc: '배합 전 전 성분에 대한 안전성 및 자극 테스트를 거칩니다.' },
    { title: '지속가능한 채취', desc: '해양 생태계를 고려한 지속가능한 방식으로\nGiant Kelp를 채취합니다.' },
  ];
  const safetyGridEl = document.getElementById('safetyGrid');
  if (safetyGridEl) {
    safetyGridEl.innerHTML = safetyPoints.map((sp) => `
      <div class="dp-safety-item">
        <div class="dp-safety-item__title">${escapeHtml(sp.title)}</div>
        <div class="dp-safety-item__desc">${escapeHtml(sp.desc)}</div>
      </div>
    `).join('');
  }

  // ---------- reviews ----------
  const reviews = [
    { name: '수빈', stars: '★★★★★', date: '4일 전', text: '골기 관리 후 아줄 젤을 쓰니 열감이 확실히 빨리 가라앉아요. 붓기도 다음날 훨씬 덜해요.' },
    { name: '예린', stars: '★★★★★', date: '9일 전', text: '골드 앰플 쓰고 나서 피부가 탄탄해진 느낌이 확실히 들어요. 얼굴선도 또렷해진 것 같고요.' },
    { name: '소윤', stars: '★★★★☆', date: '17일 전', text: '리라 크림 텍스처가 신기해요. 처음엔 꾸덕한데 바르면 스르륵 녹아서 편안하게 감싸주는 느낌.' },
    { name: '지안', stars: '★★★★★', date: '한달 전', text: '토너부터 크림까지 5단계 다 쓰니 확실히 관리 후 피부 진정이 빨라요.' },
  ];
  const reviewListEl = document.getElementById('reviewList');
  if (reviewListEl) {
    reviewListEl.innerHTML = reviews.map((r) => `
      <div class="dp-review">
        <div class="dp-review__top">
          <div class="dp-review__stars">${r.stars}</div>
          <div class="dp-review__date">${escapeHtml(r.date)}</div>
        </div>
        <div class="dp-review__name">${escapeHtml(r.name)}</div>
        <div class="dp-review__text">${escapeHtml(r.text)}</div>
      </div>
    `).join('');

    const searchInput = document.querySelector('.dp-reviews__search');
    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim().toLowerCase();
        reviewListEl.querySelectorAll('.dp-review').forEach((el, i) => {
          const r = reviews[i];
          const match = !q || r.name.toLowerCase().includes(q) || r.text.toLowerCase().includes(q);
          el.style.display = match ? '' : 'none';
        });
      });
    }
  }

  // ---------- FAQ accordion ----------
  const faqs = [
    { q: '5가지 제품을 모두 사용해야 하나요?', open: true, a: '가장 완성도 높은 리추얼은 5가지 제품을 순서대로 사용하는 것이지만, 피부 고민에 맞춰 필요한 제품만 선택해 사용하실 수도 있습니다.' },
    { q: '민감성 피부에도 사용 가능한가요?', open: false, a: '아줄 젤 크림은 민감해진 피부를 진정시키는 제품으로 대부분의 피부 타입에 사용 가능하며, 사용 전 패치 테스트를 권장합니다.' },
    { q: 'Giant Kelp 성분은 무엇인가요?', open: false, a: '자이언트 켈프는 해양 생명력을 담은 해조 추출물로, 피부 컨디셔닝과 항산화 케어에 도움을 주는 핵심 원료입니다.' },
    { q: '골기 관리와 함께 사용해야 하나요?', open: false, a: '골기 관리 전후 사용 시 시너지가 가장 크지만, 홈케어만으로도 효능을 충분히 경험하실 수 있습니다.' },
    { q: '반품 및 교환이 가능한가요?', open: false, a: '수령 후 7일 이내 미개봉 상품에 한해 반품 및 교환이 가능합니다.' },
  ];
  const faqAccordionEl = document.getElementById('faqAccordion');
  if (faqAccordionEl) {
    faqs.forEach((f) => {
      const row = document.createElement('div');
      row.className = 'dp-accordion__item' + (f.open ? ' is-open' : '');
      row.innerHTML = `
        <button class="dp-accordion__head" type="button">
          <span>${escapeHtml(f.q)}</span>
          <span class="dp-accordion__symbol">${f.open ? '−' : '+'}</span>
        </button>
        <div class="dp-accordion__body">${escapeHtml(f.a)}</div>
      `;
      const head = row.querySelector('.dp-accordion__head');
      const symbol = row.querySelector('.dp-accordion__symbol');
      head.addEventListener('click', () => {
        const isOpen = row.classList.toggle('is-open');
        symbol.textContent = isOpen ? '−' : '+';
      });
      faqAccordionEl.appendChild(row);
    });
  }

});
