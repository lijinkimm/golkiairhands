(() => {
  'use strict';

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------- size selector ----------
  document.querySelectorAll('.size-option').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.size-option').forEach((b) => b.classList.remove('is-selected'));
      btn.classList.add('is-selected');
    });
  });

  // ---------- target & effect ----------
  const targetEffects = [
    { n: '1', title: '하악(턱) 라인 케어', desc: '턱선 부위의 부종을 완화하고 흐트러진 라인을 정돈하여\n날렵한 V라인을 완성합니다.' },
    { n: '2', title: '광대 & 중안면부 케어', desc: '광대 주변의 근육과 지방을 압박하여 볼륨을 정리하고\n탄력 있는 입체감을 선사합니다.' },
    { n: '3', title: '두피 & 상악 케어', desc: '두피의 혈자리를 자극하여 혈액순환을 촉진하고\n상악 라인까지 이어지는 전체 순환을 돕습니다.' },
  ];
  document.getElementById('targetEffectList').innerHTML = targetEffects.map((t) => `
    <div class="d-numbered-item">
      <div class="d-numbered-item__n">${t.n}</div>
      <div>
        <div class="d-numbered-item__title">${escapeHtml(t.title)}</div>
        <div class="d-numbered-item__desc">${escapeHtml(t.desc)}</div>
      </div>
    </div>
  `).join('');

  // ---------- memory features ----------
  const memoryFeatures = [
    { glyph: '↻', title: '자동 기억', desc: '마지막 사용 모드와 강도 저장' },
    { glyph: '☺', title: '간편 사용', desc: '전원 ON 시 이전 설정 자동 복원' },
    { glyph: '⚉', title: '개인 맞춤', desc: '나만의 루틴을 쉽고 편리하게 유지' },
  ];
  document.getElementById('memoryFeatureList').innerHTML = memoryFeatures.map((f) => `
    <div class="d-glyph-item">
      <div class="d-glyph-item__icon">${f.glyph}</div>
      <div>
        <div class="d-glyph-item__title">${escapeHtml(f.title)}</div>
        <div class="d-glyph-item__desc">${escapeHtml(f.desc)}</div>
      </div>
    </div>
  `).join('');

  // ---------- acupressure balls ----------
  const acupressureBalls = [
    { n: '1', name: '마이크로 돌기볼', effect: '표면 순환 촉진' },
    { n: '2', name: '소프트 지압볼', effect: '림프 순환 도움' },
    { n: '3', name: '스탠다드 지압볼', effect: '경락 포인트 자극' },
    { n: '4', name: '하드 지압볼', effect: '깊은 근육치 자극' },
    { n: '5', name: '볼록 지압볼', effect: '광대 & 두피 집중 자극' },
    { n: '6', name: '라운드 에어볼', effect: '넓은 면적 압박' },
  ];
  document.getElementById('acupressureBallList').innerHTML = acupressureBalls.map((ab) => `
    <div class="d-ball-item">
      <div class="d-ball-item__n">${ab.n}</div>
      <div class="d-ball-item__name">${escapeHtml(ab.name)}</div>
      <div class="d-ball-item__sep">|</div>
      <div class="d-ball-item__effect">${escapeHtml(ab.effect)}</div>
    </div>
  `).join('');

  // ---------- comparison table ----------
  const comparisonRows = [
    { label: '압력 방식', golki: '물리적 에어 압착 & 지압볼', vibration: '단순 진동', led: 'LED + 미세 진동 (일부)' },
    { label: '작동 원리', golki: '실제 손의 압력과 유사한 무빙 자극', vibration: '진동을 통한 표면 자극', led: '빛 에너지 위주의 관리' },
    { label: '관리 범위', golki: '턱, 광대, 두피, 두피라인, 상악까지 입체 케어', vibration: '일부 부위만 제한적 관리', led: '얼굴 전체 (집중 포인트 없음)' },
    { label: '효과', golki: '즉각적인 리프팅 & 순환 개선', vibration: '일시적 진동감', led: '장기적 피부 톤 개선' },
    { label: '집중 케어', golki: '5단계 강도 조절 & 5가지 모드', vibration: '강도 조절 미흡', led: '단일 모드 위주' },
  ];
  document.getElementById('comparisonRows').innerHTML = comparisonRows.map((row) => `
    <div class="d-comparison__row">
      <div class="d-comparison__row-label">${escapeHtml(row.label)}</div>
      <div class="d-comparison__row-golki">${escapeHtml(row.golki)}</div>
      <div class="d-comparison__row-other">${escapeHtml(row.vibration)}</div>
      <div class="d-comparison__row-other">${escapeHtml(row.led)}</div>
    </div>
  `).join('');

  // ---------- mechanism 4 steps ----------
  const mechanismSteps = [
    { title: '압박', desc: '에어백이 정교하게 수축하며 강력하면서도 균일한 압력을 생성합니다.\n얼굴 전체를 안정적으로 감싸 깊은 밀착감을 제공하고,\n지압 시스템과 함께 최적의 압박 환경을 형성하여 보다\n효과적인 페이스 케어를 지원합니다.' },
    { title: '자극', desc: '특수 지압볼 시스템이 얼굴의 주요 경락 포인트를 섬세하고 정밀하게 자극합니다.\n에어백의 압박과 유기적으로 결합되어 깊고 균일한 자극을 전달하며,\n얼굴 윤곽을 따라 편안하면서도 효과적인 케어 환경을 제공합니다.' },
    { title: '순환', desc: '에어백의 리드미컬한 압박과 특수 지압볼 시스템이 함께 작용하여 혈액과 림프의 순환을 활성화합니다.\n부드럽고 균일한 자극이 얼굴 전체의 순환을 도와 피부에 생기를 더하고,\n더욱 건강하고 탄력 있는 페이스 컨디션을 유지할 수 있도록 지원합니다.' },
    { title: '탄력', desc: '에어백의 리드미컬한 압박과 특수 지압볼 시스템이 긴장된 얼굴 근육을\n부드럽게 이완시키고 피부 탄력 개선에 도움을 줍니다.\n얼굴 전체에 균일한 케어를 제공하여 보다 탄탄하고 매끄러운\n페이스 라인을 유지할 수 있도록 지원합니다.' },
  ];
  document.getElementById('mechanismList').innerHTML = mechanismSteps.map((s) => `
    <div class="d-mechanism-item">
      <div class="d-mechanism-item__title">${escapeHtml(s.title)}</div>
      <div class="d-mechanism-item__desc">${escapeHtml(s.desc)}</div>
    </div>
  `).join('');

  // ---------- care programs + intensity ----------
  const carePrograms = [
    { n: '01', title: '리프팅 케어', desc: '처진 피부와 윤곽 라인을 끌어올려 탄력 있고 또렷한 V라인으로 케어', time: '15 min' },
    { n: '02', title: '슬리밍 케어', desc: '부기와 노폐물을 케어하여 갸름하고 슬림한 페이스 라인 완성', time: '15 min' },
    { n: '03', title: '릴렉싱 케어', desc: '긴장을 풀어주고 얼굴 근육의 피로를 완화하여 편안한 이완 케어', time: '15 min' },
    { n: '04', title: '두피 밸런스 케어', desc: '두피의 혈액순환을 촉진하고 탄력 있는 두피 환경으로 케어', time: '15 min' },
    { n: '05', title: '토탈 케어', desc: '리프팅+슬리밍+릴렉싱을 결합한 프리미엄 통합 케어 프로그램', time: '20 min' },
  ];
  document.getElementById('careProgramList').innerHTML = carePrograms.map((p) => `
    <div class="d-care-item">
      <div class="d-care-item__badge">
        <div class="d-care-item__badge-label">MODE</div>
        <div class="d-care-item__badge-n">${p.n}</div>
      </div>
      <div style="flex:1;min-width:0;">
        <div class="d-care-item__title">${escapeHtml(p.title)}</div>
        <div class="d-care-item__desc">${escapeHtml(p.desc)}</div>
      </div>
      <div style="flex:0 0 auto;text-align:right;">
        <div class="d-care-item__time-label">권장 시간</div>
        <div class="d-care-item__time">${escapeHtml(p.time)}</div>
      </div>
    </div>
  `).join('');

  const intensityLevels = [1, 2, 3, 4, 5];
  document.getElementById('intensityGrid').innerHTML = intensityLevels.map((n) => `
    <div>
      <div class="d-intensity__label">${n}단계</div>
      <div class="d-intensity__dots">${'<span></span>'.repeat(n)}</div>
    </div>
  `).join('');

  // ---------- clinical proof stats ----------
  const clinicalStats = [
    { label: '턱선 리프팅 개선', value: '23.6%' },
    { label: '광대 볼륨 개선', value: '19.8%' },
    { label: '피부 탄력 개선', value: '18.7%' },
    { label: '피부 보습 개선', value: '21.4%' },
    { label: '안색(피부톤) 개선', value: '17.9%' },
  ];
  document.getElementById('clinicalStatsGrid').innerHTML = clinicalStats.map((cs) => `
    <div>
      <div class="d-clinical-stat__label">${escapeHtml(cs.label)}</div>
      <div class="d-clinical-stat__value">${cs.value}<span> UP</span></div>
    </div>
  `).join('');

  // ---------- before & after ----------
  const beforeAfter = [
    { beforeSrc: './assets/detail/ba-1-before.webp', afterSrc: './assets/detail/ba-1-after.webp', caption: '턱선 정리 & 이중턱 완화',
      beforePoints: ['처진 턱선과 흐릿한 페이스 라인', '이중턱으로 인해 둔해 보이는 윤곽', '얼굴과 목의 경계가 불분명한 상태'],
      afterPoints: ['한층 또렷해진 턱선과 페이스 라인', '이중턱이 정돈되어 슬림한 인상', '얼굴과 목의 경계가 더욱 선명한 V라인'] },
    { beforeSrc: './assets/detail/ba-2-before.webp', afterSrc: './assets/detail/ba-2-after.webp', caption: '광대 라인 정돈 & 볼륨 감소',
      beforePoints: ['도드라져 보이는 광대와 넓어 보이는 얼굴형', '볼 주변의 불필요한 부기와 볼륨감', '얼굴 중심이 퍼져 보이는 인상'],
      afterPoints: ['광대 라인이 자연스럽게 정돈된 얼굴 윤곽', '볼 부위가 슬림하게 정리되어 균형감 있는 실루엣', '보다 입체적이고 작아 보이는 페이스 라인'] },
  ];
  document.getElementById('beforeAfterList').innerHTML = beforeAfter.map((ba) => `
    <div class="d-ba-row">
      <div class="d-ba-row__text">
        <div class="d-kicker">BEFORE &amp; AFTER</div>
        <div class="d-ba-row__caption">${escapeHtml(ba.caption)}</div>
        <div class="d-ba-row__group">
          <div class="d-ba-row__group-label">BEFORE</div>
          ${ba.beforePoints.map((p) => `<div class="d-ba-row__point">· ${escapeHtml(p)}</div>`).join('')}
        </div>
        <div class="d-ba-row__group">
          <div class="d-ba-row__group-label">AFTER</div>
          ${ba.afterPoints.map((p) => `<div class="d-ba-row__point">· ${escapeHtml(p)}</div>`).join('')}
        </div>
      </div>
      <div class="d-ba-row__images">
        <div class="d-ba-row__img-wrap">
          <img src="${ba.beforeSrc}" alt="BEFORE">
          <div class="d-ba-row__img-label">BEFORE</div>
        </div>
        <div class="d-ba-row__img-wrap">
          <img src="${ba.afterSrc}" alt="AFTER">
          <div class="d-ba-row__img-label">AFTER</div>
        </div>
      </div>
    </div>
  `).join('');

  // ---------- timeline ----------
  const timeline = [
    { year: '1979', phase: '시작', desc: ['정통 수기 테라피의', '철학으로', '약손명가 설립'], future: false },
    { year: '1990s', phase: '성장', desc: ['독자적 골기테라피', '개발 및', '전문성 강화'], future: false },
    { year: '2000s', phase: '확장', desc: ['전국 지점 확장과', '체계적인 교육', '시스템 구축'], future: false },
    { year: '2010s', phase: '혁신', desc: ['피부 & 바디 통합', '솔루션 연구 및', '융합 기술 개발'], future: false },
    { year: '2020s', phase: '진화', desc: ['홈 케어 디바이스', '개발로', '케어의 일상화'], future: false },
    { year: '미래', phase: '약속', desc: ['더 많은 사람들에게', '전문 케어의 가치를', '전합니다'], future: true },
  ];
  document.getElementById('timelineRow').innerHTML = timeline.map((tl, i) => `
    <div class="d-timeline-item">
      <div class="d-timeline-item__circle${tl.future ? ' d-timeline-item__circle--future' : ''}">${tl.year}</div>
      <div class="d-timeline-item__phase">${tl.phase}</div>
      <div class="d-timeline-item__desc">${tl.desc.join('<br>')}</div>
    </div>
    ${i < timeline.length - 1 ? '<div class="d-timeline__sep">·</div>' : ''}
  `).join('');

  // ---------- 46 years promises ----------
  const fortySixYears = [
    { title: '전문성의 약속', desc: ['46년의 노하우와 전문성을 바탕으로', '최고의 품질을 약속합니다.'] },
    { title: '안전의 약속', desc: ['엄격한 안전 기준과 품질 관리로', '안심하고 사용할 수 있습니다.'] },
    { title: '효과의 약속', desc: ['과학적 검증과 임상 데이터를 통해', '확실한 효과를 약속합니다.'] },
    { title: '지속가능성의 약속', desc: ['사람과 환경을 생각하는', '지속가능한 아름다움을 추구합니다.'] },
  ];
  document.getElementById('promiseList').innerHTML = fortySixYears.map((fy) => `
    <div class="d-promise-item">
      <div class="d-promise-item__title">${escapeHtml(fy.title)}</div>
      <div class="d-promise-item__desc">${fy.desc.map(escapeHtml).join('<br>')}</div>
    </div>
  `).join('');

  // ---------- reviews ----------
  const reviewList = [
    { name: '민지', stars: '★★★★★', date: '5일 전', text: '착용감이 생각보다 훨씬 가볍고 자연스러워요. 외출할 때도 부담없이 쓸 수 있어서 좋아요.' },
    { name: '서연', stars: '★★★★☆', date: '12일 전', text: '골격 라인 따라 딱 맞게 잡아주는 느낌이 확실히 있어요. 다만 사이즈 선택은 신중하게 하세요.' },
    { name: '지훈', stars: '★★★★★', date: '19일 전', text: '매일 저녁 30분씩 착용 중인데 얼굴선이 정돈되는 느낌이라 만족스럽습니다.' },
    { name: '하은', stars: '★★★★★', date: '한달 전', text: '디자인이 의료기기처럼 안 보여서 마음에 들어요. 선물용으로도 좋을 것 같아요.' },
  ];
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

  // ---------- FAQ accordion ----------
  const faqs = [
    { q: 'AIRHANDS는 의료기기인가요?', open: true, a: '아니요, AIRHANDS는 의료기기가 아닌 뷰티 웨어러블 제품입니다. 일상에서 편안하게 착용할 수 있도록 설계되었습니다.' },
    { q: '하루에 얼마나 착용해야 하나요?', open: false, a: '하루 20~30분, 주 3~4회 착용을 권장합니다.' },
    { q: '착용 중 답답하지 않나요?', open: false, a: '통기성 소재와 인체공학 설계로 장시간 착용해도 편안하도록 제작되었습니다.' },
    { q: '세척은 어떻게 하나요?', open: false, a: '미온수로 가볍게 세척 후 자연 건조해 주세요.' },
    { q: '사이즈는 어떻게 선택하나요?', open: false, a: '얼굴 폭에 따라 S/M/L 중 선택하시면 됩니다. 사이즈 가이드를 참고해 주세요.' },
    { q: '반품 및 교환이 가능한가요?', open: false, a: '수령 후 7일 이내 미개봉 상품에 한해 반품 및 교환이 가능합니다.' },
  ];
  const accordionFAQ = document.getElementById('accordionFAQ');
  faqs.forEach((f) => {
    const row = document.createElement('div');
    row.className = 'accordion__item' + (f.open ? ' is-open' : '');
    row.innerHTML = `
      <button class="accordion__head" type="button">
        <span>${escapeHtml(f.q)}</span>
        <span class="accordion__symbol">${f.open ? '−' : '+'}</span>
      </button>
      <div class="accordion__body">${escapeHtml(f.a)}</div>
    `;
    const head = row.querySelector('.accordion__head');
    const symbol = row.querySelector('.accordion__symbol');
    head.addEventListener('click', () => {
      const isOpen = row.classList.toggle('is-open');
      symbol.textContent = isOpen ? '−' : '+';
    });
    accordionFAQ.appendChild(row);
  });

  // ---------- autoplay videos (Safari sometimes needs a nudge) ----------
  document.querySelectorAll('video[autoplay]').forEach((el) => {
    el.muted = true;
    el.playsInline = true;
    const tryPlay = () => {
      const p = el.play();
      if (p && p.catch) p.catch(() => setTimeout(tryPlay, 300));
    };
    tryPlay();
  });
})();
