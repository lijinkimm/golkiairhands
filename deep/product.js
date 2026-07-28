document.addEventListener('DOMContentLoaded', () => {
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    })[c]);
  }

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

  // ---------- numbered step list renderer ----------
  document.querySelectorAll('[data-step-list]').forEach((el) => {
    const steps = JSON.parse(el.getAttribute('data-step-list'));
    el.innerHTML = steps.map((s) => `
      <div class="dp-step">
        <div class="dp-step__n">${escapeHtml(s.n)}</div>
        <div>
          <div class="dp-step__title">${escapeHtml(s.title)}</div>
          <div class="dp-step__desc">${escapeHtml(s.desc)}</div>
        </div>
      </div>
    `).join('');
  });

  // ---------- who-is-it-for / simple text list renderer ----------
  document.querySelectorAll('[data-text-list]').forEach((el) => {
    const items = JSON.parse(el.getAttribute('data-text-list'));
    el.innerHTML = items.map((t) => `<div class="dp-whofor__item">${escapeHtml(t)}</div>`).join('');
  });

  // ---------- generic N-column card grid (title + desc cards) ----------
  document.querySelectorAll('[data-card-grid]').forEach((el) => {
    const items = JSON.parse(el.getAttribute('data-card-grid'));
    const cols = el.getAttribute('data-cols') || items.length;
    el.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    el.innerHTML = items.map((c) => `
      <div class="dp-card-grid__item">
        <div class="dp-card-grid__item-title">${escapeHtml(c.title)}</div>
        <div class="dp-card-grid__item-desc">${escapeHtml(c.desc)}</div>
      </div>
    `).join('');
  });

  // ---------- simple 2-col comparison rows renderer ----------
  document.querySelectorAll('[data-compare-rows]').forEach((el) => {
    const rows = JSON.parse(el.getAttribute('data-compare-rows'));
    el.innerHTML = rows.map((r) => `
      <div class="dp-simple-compare__row">
        <div>${escapeHtml(r.a)}</div>
        <div>${escapeHtml(r.b)}</div>
      </div>
    `).join('');
  });

  // ---------- 3-col comparison rows renderer (label / general / deep) ----------
  document.querySelectorAll('[data-compare3-rows]').forEach((el) => {
    const rows = JSON.parse(el.getAttribute('data-compare3-rows'));
    el.innerHTML = rows.map((r) => `
      <div class="dp-comparison-row">
        <div class="dp-comparison-row__label">${escapeHtml(r.label)}</div>
        <div class="dp-comparison-row__other">${escapeHtml(r.general)}</div>
        <div class="dp-comparison-row__deep">${escapeHtml(r.deep)}</div>
      </div>
    `).join('');
  });

  // ---------- ratio/ingredient table renderer ----------
  document.querySelectorAll('[data-ratio-table]').forEach((el) => {
    const rows = JSON.parse(el.getAttribute('data-ratio-table'));
    el.innerHTML = rows.map((r) => `
      <div class="dp-ratio-table__row">
        <div>${escapeHtml(r.name)}</div>
        <div>${escapeHtml(r.percent)}</div>
        <div>${escapeHtml(r.role)}</div>
      </div>
    `).join('');
  });

  // ---------- numbered single-line list renderer ----------
  document.querySelectorAll('[data-numbered-lines]').forEach((el) => {
    const items = JSON.parse(el.getAttribute('data-numbered-lines'));
    el.innerHTML = items.map((s) => `
      <div class="dp-numbered-line">
        <div class="dp-numbered-line__n">${escapeHtml(s.n)}</div>
        <div class="dp-numbered-line__text">${escapeHtml(s.text)}</div>
      </div>
    `).join('');
  });
});
