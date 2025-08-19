// Portfolio theme behavior: theme switching, smooth scroll, dynamic year
(function initPortfolioTheme() {
  const select = document.getElementById('themeSelect');
  const storageKey = 'portfolio-theme';
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    document.body.setAttribute('data-theme', saved);
    if (select) select.value = saved;
  }
  if (select) {
    select.addEventListener('change', () => {
      document.body.setAttribute('data-theme', select.value);
      localStorage.setItem(storageKey, select.value);
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Dynamic year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();