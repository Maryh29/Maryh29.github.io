/* Progressive enhancement: project content and navigation work without JavaScript. */
document.querySelectorAll('[data-process-browser]').forEach(browser => {
  const tabs = [...browser.querySelectorAll('[role="tab"]')];
  const panels = [...browser.querySelectorAll('.process-panel')];
  const chooseTab = (tab, focus = false) => {
    tabs.forEach(t => { const active = t === tab; t.setAttribute('aria-selected', String(active)); t.tabIndex = active ? 0 : -1; });
    panels.forEach(panel => { panel.hidden = panel.id !== tab.getAttribute('aria-controls'); });
    if (focus) tab.focus();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => chooseTab(tab));
    tab.addEventListener('keydown', event => {
      let target;
      if (event.key === 'ArrowRight') target = (i + 1) % tabs.length;
      if (event.key === 'ArrowLeft') target = (i - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target !== undefined) { event.preventDefault(); chooseTab(tabs[target], true); }
    });
  });
  if (tabs.length) chooseTab(tabs[0]);
  panels.forEach(panel => {
    const steps = [...panel.querySelectorAll('[data-image]')];
    const image = panel.querySelector('.evidence-stage img');
    const caption = panel.querySelector('[data-caption]');
    const ref = panel.querySelector('[data-reference]');
    const zoom = panel.querySelector('.zoom-button');
    steps.forEach(step => step.addEventListener('click', () => {
      steps.forEach(s => s.setAttribute('aria-current', String(s === step)));
      image.src = step.dataset.image;
      image.alt = step.dataset.alt;
      caption.textContent = step.dataset.caption;
      ref.textContent = step.dataset.reference || '';
      zoom.setAttribute('aria-label', 'Enlarge: ' + step.dataset.alt);
    }));
  });
});
const dialog = document.querySelector('.lightbox');
if (dialog && typeof dialog.showModal === 'function') {
  let trigger;
  const close = () => { dialog.close(); if (trigger) trigger.focus(); };
  document.querySelectorAll('.zoom-button').forEach(button => button.addEventListener('click', () => {
    const original = button.querySelector('img');
    trigger = button;
    const enlarged = dialog.querySelector('img');
    enlarged.src = original.currentSrc || original.src;
    enlarged.alt = original.alt;
    dialog.querySelector('[data-lightbox-caption]').textContent = original.alt;
    dialog.querySelector('[data-original]').href = enlarged.src;
    dialog.showModal();
  }));
  dialog.querySelector('.lightbox-close').addEventListener('click', close);
  dialog.addEventListener('click', e => { if (e.target === dialog) close(); });
  dialog.addEventListener('cancel', () => { if (trigger) trigger.focus(); });
} else {
  document.querySelectorAll('.zoom-button').forEach(button => button.addEventListener('click', () => {
    const img = button.querySelector('img'); window.open(img.src, '_blank', 'noopener');
  }));
}
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
