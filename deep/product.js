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
});
