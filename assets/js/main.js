/**
 * StudySmart AI - Minimalist & Accessible Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Check user motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Mobile Menu Navigation ---------------- */
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.focus();
      }
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target) && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------------- Tasteful Scroll Reveal Animation ---------------- */
  const revealElements = document.querySelectorAll('.reveal');

  if (prefersReducedMotion) {
    // Immediately show all elements if user prefers reduced motion
    revealElements.forEach(el => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------------- Reading Progress Bar (Article Pages) ---------------- */
  const progressBar = document.querySelector('.reading-progress-bar');
  const articleContent = document.querySelector('article');

  if (progressBar && articleContent) {
    const updateProgress = () => {
      const rect = articleContent.getBoundingClientRect();
      const articleHeight = rect.height - window.innerHeight;
      const progress = Math.max(0, Math.min(100, (-rect.top / articleHeight) * 100));
      progressBar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }
});
