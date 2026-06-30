// Sticky nav
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.style.background = 'rgba(255,255,255,0.96)';
      nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.08)';
      nav.style.backdropFilter = 'blur(14px)';
    } else {
      nav.style.background = 'transparent';
      nav.style.boxShadow = 'none';
      nav.style.backdropFilter = 'none';
    }
  }, { passive: true });

  // FAQ accordion
  let openFaq = null;
  document.querySelectorAll('.faq-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index);
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const sign = item.querySelector('.faq-sign');

      if (openFaq === idx) {
        answer.style.display = 'none';
        sign.textContent = '+';
        openFaq = null;
      } else {
        // Close previously open
        if (openFaq !== null) {
          const prev = document.querySelector(`.faq-btn[data-index="${openFaq}"]`).closest('.faq-item');
          prev.querySelector('.faq-answer').style.display = 'none';
          prev.querySelector('.faq-sign').textContent = '+';
        }
        answer.style.display = 'block';
        sign.textContent = '−';
        openFaq = idx;
      }
    });
  });

  // Waitlist form
  document.getElementById('waitlist-form').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email-input').value.trim();
    if (email) {
      document.getElementById('form-container').style.display = 'none';
      document.getElementById('form-success').style.display = 'block';
    }
  });