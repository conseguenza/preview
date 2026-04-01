// Navigation scroll effect
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

// Mobile menu
let mobileOpen = false;
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileOpen = !mobileOpen;
    mobileMenu.style.display = mobileOpen ? 'flex' : 'none';
  });
}

window.closeMobile = function() {
  mobileOpen = false;
  if (mobileMenu) mobileMenu.style.display = 'none';
};

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 90);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Hero slideshow
(function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('heroSlideDots');
  if (!slides.length || !dotsWrap) return;
  
  let current = 0;
  let timer;
  
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-slide-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetTimer();
    });
    dotsWrap.appendChild(dot);
  });
  
  function goToSlide(n) {
    slides[current].classList.remove('active');
    dotsWrap.children[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsWrap.children[current].classList.add('active');
  }
  
  function nextSlide() {
    goToSlide(current + 1);
  }
  
  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(nextSlide, 4500);
  }
  
  resetTimer();
})();

// Menu page panel switching
window.showPanel = function(name, btn) {
  const panels = document.querySelectorAll('.panel');
  const buttons = document.querySelectorAll('.tab-btn');
  
  panels.forEach(p => p.classList.remove('active'));
  buttons.forEach(b => b.classList.remove('active'));
  
  const targetPanel = document.getElementById('panel-' + name);
  if (targetPanel) targetPanel.classList.add('active');
  if (btn) btn.classList.add('active');
  
  // Smooth scroll to tabs
  const tabsWrap = document.querySelector('.tabs-wrap');
  if (tabsWrap) {
    tabsWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// TripAdvisor carousel
(function initTaCarousel() {
  const track = document.getElementById('taTrack');
  const dotsWrap = document.getElementById('taDots');
  if (!track || !dotsWrap) return;
  
  const cards = track.querySelectorAll('.ta-card');
  const total = cards.length;
  let current = 0;
  let autoTimer;
  
  function visibleCount() {
    const w = window.innerWidth;
    if (w < 600) return 1;
    if (w < 900) return 2;
    return 3;
  }
  
  function maxIndex() {
    return Math.max(0, total - visibleCount());
  }
  
  function buildDots() {
    dotsWrap.innerHTML = '';
    const n = maxIndex() + 1;
    for (let i = 0; i < n; i++) {
      const dot = document.createElement('span');
      dot.className = 'ta-dot' + (i === current ? ' active' : '');
      dot.addEventListener('click', () => goToSlide(i));
      dotsWrap.appendChild(dot);
    }
  }
  
  function updateDots() {
    const dots = dotsWrap.querySelectorAll('.ta-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
  }
  
  function goToSlide(idx) {
    current = Math.max(0, Math.min(idx, maxIndex()));
    const cardWidth = cards[0]?.offsetWidth + 19 || 300;
    track.style.transform = `translateX(-${current * cardWidth}px)`;
    updateDots();
  }
  
  const prevBtn = document.getElementById('taPrev');
  const nextBtn = document.getElementById('taNext');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      resetAuto();
      goToSlide(current - 1);
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      resetAuto();
      goToSlide(current + 1);
    });
  }
  
  // Touch swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  
  track.addEventListener('touchend', e => {
    const dx = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 40) {
      resetAuto();
      dx > 0 ? goToSlide(current + 1) : goToSlide(current - 1);
    }
  }, { passive: true });
  
  function startAuto() {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      goToSlide(current >= maxIndex() ? 0 : current + 1);
    }, 4200);
  }
  
  function resetAuto() {
    clearInterval(autoTimer);
    startAuto();
  }
  
  window.addEventListener('resize', () => {
    buildDots();
    goToSlide(Math.min(current, maxIndex()));
  });
  
  buildDots();
  goToSlide(0);
  startAuto();
})();

// Sticky call button visibility on menu page
const footer = document.querySelector('.menu-footer');
const sticky = document.getElementById('sticky-cta');

if (footer && sticky) {
  const footerObserver = new IntersectionObserver(([entry]) => {
    sticky.style.opacity = entry.isIntersecting ? '0' : '1';
    sticky.style.pointerEvents = entry.isIntersecting ? 'none' : 'auto';
  });
  footerObserver.observe(footer);
}