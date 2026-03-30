/* ============================================================
   AUGUSTIN AGAPII — Portfolio
   main.js — Navigation · Scroll Reveal · Portfolio Grid ·
             Session Filters · Load More · Lightbox
   ============================================================ */

'use strict';

/* ============================================================
   SESSION DATA
   All images referenced relative to index.html via symlink
   "images/" → /Users/augustinagapii/Desktop/Augustin Portfolio/
   ============================================================ */
const SESSIONS = [
  {
    id: 'ferran-casanova',
    title: 'Ferran Casanova',
    year: '2025',
    images: [
      'images/IMG_9524.JPG',
      'images/IMG_9527.JPG',
      'images/IMG_9530.JPG',
      'images/IMG_9532.jpg',
      'images/IMG_9534.jpg',
      'images/IMG_9537.JPG',
      'images/IMG_9539.JPG',
      'images/IMG_9541.JPG',
      'images/IMG_9544.JPG',
      'images/IMG_9550.JPG',
      'images/IMG_9552.JPG',
      'images/IMG_9557.JPG',
      'images/Dsquared 1.JPG',
      'images/IMG_0047.JPG',
      'images/IMG_0049.JPG',
      'images/IMG_0051.JPG',
      'images/IMG_0053.JPG',
      'images/IMG_0055.JPG',
      'images/IMG_0057.JPG',
      'images/IMG_0059.JPG',
    ]
  },
  {
    id: 'architecture',
    title: 'Architecture',
    year: '2025',
    images: [
      'images/IMG_4994.JPG',
      'images/IMG_4995.jpg',
      'images/IMG_4996.JPG',
      'images/IMG_4998.JPG',
      'images/IMG_4999.JPG',
      'images/IMG_5001.JPG',
      'images/IMG_5002.jpg',
      'images/IMG_5003.JPG',
      'images/IMG_5004.JPG',
      'images/IMG_5005.JPG',
      'images/IMG_5007.JPG',
    ]
  },
  {
    id: 'lhomme-nu',
    title: "L'Homme Nu",
    subtitle: "The Perfect Man Magazine · Lovers in August",
    year: '2025',
    images: [
      'images/IMG_3351.JPG',
      'images/IMG_3352.JPG',
      'edited/IMG_3353_edit.jpg',
      'edited/IMG_3354_edit.jpg',
      'images/IMG_3355.JPG',
    ]
  },
  {
    id: 'studio',
    title: 'Ricardo Santos',
    subtitle: 'Ricardo Santos · Lisbon, Portugal',
    year: 'September 2025',
    images: [
      'images/IMG_4976.JPG',
      'images/IMG_4977.jpg',
      'images/IMG_4978.JPG',
      'images/IMG_4979.JPG',
      'images/IMG_4980.JPG',
      'images/IMG_4982.JPG',
      'images/IMG_4983.JPG',
      'images/IMG_4984.JPG',
      'images/IMG_4986.JPG',
      'images/IMG_4987.JPG',
      'images/IMG_4988.JPG',
      'images/IMG_4990.JPG',
      'images/IMG_4991.JPG',
      'images/IMG_4992.jpg',
    ]
  },
  {
    id: 'pink-prince',
    title: 'The Pink Prince',
    subtitle: 'Magazine Editorial · Labros Tyrlis · Athens, Greece',
    year: 'April 2025',
    images: [
      'images/IMG_0616.JPG',
      'images/IMG_0618.JPG',
      'images/IMG_0620.JPG',
      'images/IMG_0622.JPG',
      'images/IMG_0624.JPG',
      'images/IMG_0626.JPG',
      'images/IMG_0628.JPG',
      'images/IMG_0630.JPG',
      'images/IMG_0633.JPG',
      'images/IMG_0636.JPG',
      'images/IMG_0639.JPG',
      'images/IMG_0642.JPG',
      'images/EF6E927E-4AF0-4700-B206-BCFFFDC591E2.JPG',
      'images/IMG_0779.WEBP',
      'images/IMG_0782.WEBP',
      'images/IMG_0785.WEBP',
      'images/IMG_0787.WEBP',
      'images/0D8E4E6F-1629-47CF-B3AD-B3FF25742769.JPG',
      'images/7229EEE5-90B2-4327-8583-A9252EA6F471.JPG',
      'images/AA1CC139-A536-4C54-9487-24365AA9EE6D.JPG',
    ]
  },
  {
    id: 'aqua',
    title: 'Joey Leo',
    year: '2025',
    images: [
      'images/IMG_0700.JPG',
      'images/IMG_0857.JPG',
      'images/IMG_0701.JPG',
      'images/IMG_0860.JPG',
      'images/IMG_0706.JPG',
      'images/IMG_0863.JPG',
      'images/IMG_0711.JPG',
      'images/IMG_0865.JPG',
      'images/IMG_0712.JPG',
      'images/IMG_0868.JPG',
      'images/IMG_0702.JPG',
      'images/IMG_0871.JPG',
      'images/IMG_0713.JPG',
      'images/IMG_0875.JPG',
      'images/IMG_0703.JPG',
      'images/IMG_0880.JPG',
      'images/IMG_0715.JPG',
      'images/IMG_0883.JPG',
      'images/IMG_0719.JPG',
      'images/IMG_0886.JPG',
      'images/IMG_0720.JPG',
      'images/IMG_0889.JPG',
      'images/IMG_0729.JPG',
      'images/IMG_0892.JPG',
      'images/IMG_0730.JPG',
      'images/IMG_0896.JPG',
      'images/IMG_0733.JPG',
      'images/IMG_0900.JPG',
      'images/IMG_0704.JPG',
      'images/IMG_0739.JPG',
      'images/IMG_0742.JPG',
      'images/IMG_0750.JPG',
      'images/IMG_0759.JPG',
    ]
  },
  {
    id: 'carcavelos-beach',
    title: 'Male Model Scene Editorials',
    subtitle: 'Lucas Fonseca · Carcavelos Beach, Portugal',
    year: 'October 2024',
    images: [
      'images/IMG_6168.JPG',
      'images/IMG_6169.JPG',
      'images/IMG_6170.JPG',
      'images/IMG_6171.JPG',
      'images/IMG_6172.JPG',
      'images/IMG_6173.JPG',
      'images/IMG_6174.JPG',
      'images/IMG_6175.JPG',
      'images/IMG_6176.JPG',
      'images/IMG_6177.JPG',
      'images/IMG_6178.JPG',
      'images/IMG_6179.JPG',
      'images/IMG_6180.JPG',
      'images/IMG_6182.JPG',
      'images/IMG_6184.JPG',
      'images/IMG_6186.JPG',
      'images/IMG_6188.JPG',
      'images/IMG_6190.JPG',
      'images/IMG_6191.JPG',
      'images/IMG_6192.JPG',
      'images/IMG_6193.JPG',
      'images/EF746893-8AAB-4341-83FA-6E69B2665B23.JPG',
    ]
  },
  {
    id: 'fucking-young',
    title: 'Fucking Young!',
    year: 'Sep 2023',
    images: [
      'images/IMG_9962.JPG',
      'images/IMG_9963.JPG',
      'images/IMG_9964.JPG',
      'images/IMG_9965.JPG',
      'images/IMG_9966.JPG',
      'images/IMG_9967.JPG',
      'images/IMG_9968.JPG',
      'images/IMG_9969.JPG',
      'images/IMG_9970.JPG',
      'images/IMG_9971.JPG',
    ]
  },
];

/* ============================================================
   CURATED "ALL" VIEW — 2 picks per session for diversity
   ============================================================ */
const FEATURED_ALL = [
  // Dsquared² — first row
  { src: 'images/Dsquared 1.JPEG',            session: 'ferran-casanova', title: 'Ferran Casanova',   year: '2025' },
  { src: 'images/Instagram Dsquared2.JPEG',   session: 'ferran-casanova', title: 'Ferran Casanova',   year: '2025' },
  // Ferran Casanova
  { src: 'images/IMG_9524.JPG',   session: 'ferran-casanova', title: 'Ferran Casanova',   year: '2025' },
  { src: 'images/IMG_0047.JPG',   session: 'ferran-casanova', title: 'Ferran Casanova',   year: '2025' },
  // Architecture
  { src: 'images/IMG_4994.JPG',   session: 'architecture',    title: 'Architecture',      year: '2025' },
  { src: 'images/IMG_5003.JPG',   session: 'architecture',    title: 'Architecture',      year: '2025' },
  // L'Homme Nu
  { src: 'images/IMG_3351.JPG',   session: 'lhomme-nu',       title: "L'Homme Nu",        year: '2025' },
  { src: 'edited/IMG_3353_edit.jpg', session: 'lhomme-nu',    title: "L'Homme Nu",        year: '2025' },
  // Studio
  { src: 'images/IMG_4976.JPG',   session: 'studio',          title: 'Ricardo Santos',    year: 'September 2025' },
  { src: 'images/IMG_4987.JPG',   session: 'studio',          title: 'Ricardo Santos',    year: 'September 2025' },
  // Spring
  { src: 'images/IMG_0616.JPG',   session: 'pink-prince',     title: 'The Pink Prince',   year: 'April 2025' },
  { src: 'images/IMG_0625.JPG',   session: 'pink-prince',     title: 'The Pink Prince',   year: 'April 2025' },
  // Aqua
  { src: 'images/IMG_0700.JPG',   session: 'aqua',            title: 'Joey Leo',          year: '2025' },
  { src: 'images/IMG_0857.JPG',   session: 'aqua',            title: 'Joey Leo',          year: '2025' },
  // Carcavelos Beach
  { src: 'images/IMG_6168.JPG',   session: 'carcavelos-beach',title: 'Male Model Scene Editorials', year: 'October 2024' },
  { src: 'images/IMG_6175.JPG',   session: 'carcavelos-beach',title: 'Male Model Scene Editorials', year: 'October 2024' },
  // Fucking Young!
  { src: 'images/IMG_9962.JPG',   session: 'fucking-young',   title: 'Fucking Young!',    year: 'Sep 2023' },
  { src: 'images/IMG_9966.JPG',   session: 'fucking-young',   title: 'Fucking Young!',    year: 'Sep 2023' },
];

/* ============================================================
   BUILD FLAT IMAGE LIST
   ============================================================ */
const ALL_IMAGES = [];
SESSIONS.forEach(session => {
  session.images.forEach(src => {
    ALL_IMAGES.push({ src, session: session.id, title: session.title, year: session.year });
  });
});

/* ============================================================
   LOAD MORE CONTROL
   ============================================================ */
const BATCH = 24;
let visibleCount = BATCH;
let currentFilter = 'all';

function getFilteredImages() {
  if (currentFilter === 'all') return FEATURED_ALL;
  return ALL_IMAGES.filter(img => img.session === currentFilter);
}

/* ============================================================
   BUILD PORTFOLIO GRID
   ============================================================ */
const grid = document.getElementById('portfolioGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

function buildGrid() {
  grid.innerHTML = '';
  const filtered = getFilteredImages();
  const slice = filtered.slice(0, visibleCount);

  slice.forEach((img, i) => {
    const item = document.createElement('div');
    item.className = 'grid-item';
    item.dataset.session = img.session;
    item.dataset.index = i;
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', `Open ${img.title} photo`);

    const session = SESSIONS.find(s => s.id === img.session);
    const label = session?.subtitle ? `${img.title} — ${session.subtitle}` : img.title;
    item.innerHTML = `
      <img src="${img.src}" alt="${img.title} — editorial photography" loading="lazy" />
      <div class="grid-item-overlay">
        <span class="grid-item-label">${label}</span>
      </div>
    `;

    item.addEventListener('click', () => openLightbox(i, filtered));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(i, filtered);
      }
    });

    grid.appendChild(item);
  });

  // Load More button visibility (hidden in curated All view)
  loadMoreBtn.style.display = (currentFilter !== 'all' && filtered.length > visibleCount) ? 'inline-block' : 'none';

  // Trigger reveal for new items
  requestAnimationFrame(() => observeGridItems());
}

loadMoreBtn.addEventListener('click', () => {
  visibleCount += BATCH;
  buildGrid();
  // Smooth scroll to newly revealed items
  const items = grid.querySelectorAll('.grid-item');
  if (items.length > 0) {
    const firstNew = items[visibleCount - BATCH] || items[items.length - 1];
    firstNew.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
});

/* ============================================================
   SESSION FILTERS
   ============================================================ */
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    visibleCount = BATCH;
    buildGrid();
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  });
});

/* ============================================================
   LIGHTBOX
   ============================================================ */
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lbImg');
const lbSession = document.getElementById('lbSession');
const lbCounter = document.getElementById('lbCounter');
const lbClose   = document.getElementById('lbClose');
const lbPrev    = document.getElementById('lbPrev');
const lbNext    = document.getElementById('lbNext');

let lbImages  = [];
let lbCurrent = 0;

function openLightbox(index, images) {
  lbImages  = images;
  lbCurrent = index;
  showLbImage(lbCurrent);
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  lbClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  lbImg.src = '';
}

function showLbImage(index) {
  const img = lbImages[index];
  if (!img) return;

  // Animate out → in
  lbImg.style.opacity = '0';
  lbImg.style.transform = 'scale(0.97)';

  setTimeout(() => {
    lbImg.src   = img.src;
    lbImg.alt   = `${img.title} — editorial photography`;
    lbSession.textContent = img.title;
    lbCounter.textContent = `${index + 1} / ${lbImages.length}`;

    lbImg.onload = () => {
      lbImg.style.opacity = '1';
      lbImg.style.transform = 'scale(1)';
    };
    // Fallback if already cached
    if (lbImg.complete) {
      lbImg.style.opacity = '1';
      lbImg.style.transform = 'scale(1)';
    }
  }, 120);

  lbPrev.style.opacity = index === 0                  ? '0.3' : '1';
  lbNext.style.opacity = index === lbImages.length - 1 ? '0.3' : '1';
}

lbClose.addEventListener('click', closeLightbox);
lbPrev.addEventListener('click', () => {
  if (lbCurrent > 0) { lbCurrent--; showLbImage(lbCurrent); }
});
lbNext.addEventListener('click', () => {
  if (lbCurrent < lbImages.length - 1) { lbCurrent++; showLbImage(lbCurrent); }
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft'  && lbCurrent > 0)                  { lbCurrent--; showLbImage(lbCurrent); }
  if (e.key === 'ArrowRight' && lbCurrent < lbImages.length - 1) { lbCurrent++; showLbImage(lbCurrent); }
});

/* Touch / swipe support for lightbox */
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) < 40) return;
  if (dx < 0 && lbCurrent < lbImages.length - 1) { lbCurrent++; showLbImage(lbCurrent); }
  if (dx > 0 && lbCurrent > 0)                   { lbCurrent--; showLbImage(lbCurrent); }
}, { passive: true });

/* ============================================================
   NAVIGATION — scroll behaviour + mobile menu
   ============================================================ */
const nav      = document.getElementById('nav');
const burger   = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

burger.addEventListener('click', () => {
  nav.classList.toggle('menu-open');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('menu-open');
    navLinks.classList.remove('open');
  });
});

/* ============================================================
   SCROLL REVEAL — Intersection Observer
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

function observeRevealEls() {
  document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
    revealObserver.observe(el);
  });
}

function observeGridItems() {
  document.querySelectorAll('.grid-item').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 6) * 0.06}s`;
    revealObserver.observe(el);
  });
}

/* ============================================================
   HERO — stagger animation on load
   ============================================================ */
function initHeroReveal() {
  const heroEls = document.querySelectorAll('.hero-content .reveal-up');
  // Trigger with slight delay after DOM paint
  requestAnimationFrame(() => {
    setTimeout(() => {
      heroEls.forEach(el => el.classList.add('visible'));
    }, 200);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  buildGrid();
  observeRevealEls();
  initHeroReveal();
});
