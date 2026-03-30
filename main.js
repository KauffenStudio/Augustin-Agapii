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
    id: 'corneliani',
    title: 'Corneliani',
    subtitle: 'Corneliani A/W 2025 Collection',
    year: '2025',
    images: [
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0779.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0780.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0781.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0782.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0783.jpg',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0784.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0784.jpg',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0785.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0786.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_0787.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_1504.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_1506.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_1507.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_1508.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_1509.WEBP',
      'images/Corneliani Autumn Winter 2025 Collection/IMG_1510.WEBP',
    ]
  },
  {
    id: 'ferran-casanova',
    title: 'Ferran Casanova',
    year: '2025',
    images: [
      'images/Ferran Casanova/Dsquared 1.JPEG',
      'images/Ferran Casanova/IMG_9524.JPG',
      'images/Ferran Casanova/IMG_9527.JPG',
      'images/Ferran Casanova/IMG_9529.JPG',
      'images/Ferran Casanova/IMG_9532.jpg',
      'images/Ferran Casanova/IMG_9534.jpg',
      'images/Ferran Casanova/IMG_9537.JPG',
      'images/Ferran Casanova/IMG_9539.JPG',
      'images/Ferran Casanova/IMG_9541.JPG',
      'images/Ferran Casanova/IMG_9544.JPG',
      'images/Ferran Casanova/IMG_9550.JPG',
      'images/Ferran Casanova/IMG_9552.JPG',
      'images/Ferran Casanova/IMG_9557.JPG',
    ]
  },
  {
    id: 'jose-martinez',
    title: 'Jose Martinez',
    year: '2025',
    images: [
      'images/Jose Martinez/IMG_0047.JPG',
      'images/Jose Martinez/IMG_0049.JPG',
      'images/Jose Martinez/IMG_0051.JPG',
      'images/Jose Martinez/IMG_0053.JPG',
      'images/Jose Martinez/IMG_0055.JPG',
      'images/Jose Martinez/IMG_0057.JPG',
      'images/Jose Martinez/IMG_0059.JPG',
    ]
  },
  {
    id: 'labros-athens',
    title: 'Labros Athens',
    subtitle: 'Labros Tyrlis · Athens, Greece',
    year: 'April 2025',
    images: [
      'images/Labros Athens/IMG_0616.JPG',
      'images/Labros Athens/IMG_0617.JPG',
      'images/Labros Athens/IMG_0618.JPG',
      'images/Labros Athens/IMG_0619.JPG',
      'images/Labros Athens/IMG_0620.JPG',
      'images/Labros Athens/IMG_0621.JPG',
      'images/Labros Athens/IMG_0622.JPG',
      'images/Labros Athens/IMG_0623.JPG',
      'images/Labros Athens/IMG_0624.JPG',
      'images/Labros Athens/IMG_0625.JPG',
      'images/Labros Athens/IMG_0626.JPG',
      'images/Labros Athens/IMG_0627.JPG',
      'images/Labros Athens/IMG_0628.JPG',
      'images/Labros Athens/EF6E927E-4AF0-4700-B206-BCFFFDC591E2.JPG',
    ]
  },
  {
    id: 'joey-leo-body',
    title: 'Joey Leo',
    subtitle: 'Joey Leo · Body',
    year: '2025',
    images: [
      'images/Joey Leo Body/IMG_0700.JPG',
      'images/Joey Leo Body/IMG_0701.JPG',
      'images/Joey Leo Body/IMG_0702.JPG',
      'images/Joey Leo Body/IMG_0703.JPG',
      'images/Joey Leo Body/IMG_0704.JPG',
      'images/Joey Leo Body/IMG_0706.JPG',
      'images/Joey Leo Body/IMG_0711.JPG',
      'images/Joey Leo Body/IMG_0712.JPG',
      'images/Joey Leo Body/IMG_0713.JPG',
      'images/Joey Leo Body/IMG_0715.JPG',
      'images/Joey Leo Body/IMG_0719.JPG',
      'images/Joey Leo Body/IMG_0720.JPG',
      'images/Joey Leo Body/IMG_0729.JPG',
      'images/Joey Leo Body/IMG_0730.JPG',
      'images/Joey Leo Body/IMG_0733.JPG',
      'images/Joey Leo Body/IMG_0739.JPG',
      'images/Joey Leo Body/IMG_0742.JPG',
      'images/Joey Leo Body/IMG_0750.JPG',
      'images/Joey Leo Body/IMG_0759.JPG',
      'images/Joey Leo Body/0D8E4E6F-1629-47CF-B3AD-B3FF25742769.JPG',
      'images/Joey Leo Body/7229EEE5-90B2-4327-8583-A9252EA6F471.JPG',
      'images/Joey Leo Body/AA1CC139-A536-4C54-9487-24365AA9EE6D.JPG',
    ]
  },
  {
    id: 'joey-leo-august',
    title: 'Joey Leo',
    subtitle: 'Joey Leo · August Lover',
    year: '2025',
    images: [
      'images/Joey Leo August Lover/IMG_0857.JPG',
      'images/Joey Leo August Lover/IMG_0860.JPG',
      'images/Joey Leo August Lover/IMG_0863.JPG',
      'images/Joey Leo August Lover/IMG_0865.JPG',
      'images/Joey Leo August Lover/IMG_0868.JPG',
      'images/Joey Leo August Lover/IMG_0871.JPG',
      'images/Joey Leo August Lover/IMG_0875.JPG',
      'images/Joey Leo August Lover/IMG_0880.JPG',
      'images/Joey Leo August Lover/IMG_0883.JPG',
      'images/Joey Leo August Lover/IMG_0886.JPG',
      'images/Joey Leo August Lover/IMG_0889.JPG',
      'images/Joey Leo August Lover/IMG_0892.JPG',
      'images/Joey Leo August Lover/IMG_0896.JPG',
      'images/Joey Leo August Lover/IMG_0900.JPG',
      'images/Joey Leo August Lover/IMG_3351.JPG',
      'images/Joey Leo August Lover/IMG_3352.JPG',
      'edited/IMG_3353_edit.jpg',
      'edited/IMG_3354_edit.jpg',
      'images/Joey Leo August Lover/IMG_3355.JPG',
    ]
  },
  {
    id: 'ricardo-santos-2025',
    title: 'Ricardo Santos',
    subtitle: 'Ricardo Santos · Lisbon, Portugal',
    year: 'September 2025',
    images: [
      'images/Ricardo Santos September 2025/IMG_4976.JPG',
      'images/Ricardo Santos September 2025/IMG_4977.jpg',
      'images/Ricardo Santos September 2025/IMG_4978.JPG',
      'images/Ricardo Santos September 2025/IMG_4979.JPG',
      'images/Ricardo Santos September 2025/IMG_4980.JPG',
      'images/Ricardo Santos September 2025/IMG_4981.JPG',
      'images/Ricardo Santos September 2025/IMG_4982.JPG',
      'images/Ricardo Santos September 2025/IMG_4983.JPG',
      'images/Ricardo Santos September 2025/IMG_4984.JPG',
      'images/Ricardo Santos September 2025/IMG_4985.JPG',
      'images/Ricardo Santos September 2025/IMG_4986.JPG',
      'images/Ricardo Santos September 2025/IMG_4987.JPG',
      'images/Ricardo Santos September 2025/IMG_4988.JPG',
      'images/Ricardo Santos September 2025/IMG_4989.JPG',
      'images/Ricardo Santos September 2025/IMG_4990.JPG',
      'images/Ricardo Santos September 2025/IMG_4991.JPG',
      'images/Ricardo Santos September 2025/IMG_4992.jpg',
    ]
  },
  {
    id: 'porto',
    title: 'Porto',
    year: '2025',
    images: [
      'images/Porto/IMG_4994.JPG',
      'images/Porto/IMG_4995.jpg',
      'images/Porto/IMG_4996.JPG',
      'images/Porto/IMG_4998.JPG',
      'images/Porto/IMG_4999.JPG',
      'images/Porto/IMG_5001.JPG',
      'images/Porto/IMG_5002.jpg',
      'images/Porto/IMG_5003.JPG',
      'images/Porto/IMG_5004.JPG',
      'images/Porto/IMG_5005.JPG',
      'images/Porto/IMG_5007.JPG',
      'images/Porto/IMG_6168.JPG',
      'images/Porto/IMG_6169.JPG',
    ]
  },
  {
    id: 'carcavelos-beach',
    title: 'Male Model Scene',
    subtitle: 'Lucas Fonseca · Carcavelos Beach, Portugal',
    year: 'October 2024',
    images: [
      'images/Lucas Fonseca Carcavelos /EF746893-8AAB-4341-83FA-6E69B2665B23.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6170.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6171.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6172.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6173.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6174.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6175.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6176.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6177.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6178.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6179.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6180.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6182.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6184.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6186.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6188.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6190.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6191.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6192.JPG',
      'images/Lucas Fonseca Carcavelos /IMG_6193.JPG',
    ]
  },
  {
    id: 'fucking-young',
    title: 'Fucking Young!',
    subtitle: 'Cruel Summer · 2023',
    year: 'Sep 2023',
    images: [
      'images/Fucking Young Cruel Summer 2023/IMG_9962.JPG',
      'images/Fucking Young Cruel Summer 2023/IMG_9963.JPG',
      'images/Fucking Young Cruel Summer 2023/IMG_9964.JPG',
      'images/Fucking Young Cruel Summer 2023/IMG_9965.JPG',
      'images/Fucking Young Cruel Summer 2023/IMG_9966.JPG',
      'images/Fucking Young Cruel Summer 2023/IMG_9967.JPG',
      'images/Fucking Young Cruel Summer 2023/IMG_9968.JPG',
      'images/Fucking Young Cruel Summer 2023/IMG_9969.JPG',
      'images/Fucking Young Cruel Summer 2023/IMG_9970.JPG',
      'images/Fucking Young Cruel Summer 2023/IMG_9971.JPG',
    ]
  },
  {
    id: 'ricardo-santos-2023',
    title: 'Ricardo Santos',
    subtitle: 'Ricardo Santos · 2023',
    year: '2023',
    images: [
      'images/Ricardo SANTOS 2023/IMG_1986.JPG',
      'images/Ricardo SANTOS 2023/IMG_1996.JPG',
      'images/Ricardo SANTOS 2023/IMG_1998.JPG',
      'images/Ricardo SANTOS 2023/IMG_2001.JPG',
      'images/Ricardo SANTOS 2023/IMG_2005.JPG',
      'images/Ricardo SANTOS 2023/0E75F600-B78C-4EF5-B005-88A708DFF13D.JPG',
      'images/Ricardo SANTOS 2023/0bc520e0-34d6-4300-b61f-3f8849cd4c8f.JPG',
      'images/Ricardo SANTOS 2023/13869cd8-776e-4a5a-aa7d-672bd4b5cd12.JPG',
      'images/Ricardo SANTOS 2023/2DF4ABE3-AF55-4015-947E-C9513EB8E31F.JPG',
      'images/Ricardo SANTOS 2023/37F200EC-7A61-43AB-8B61-6220446E215B.JPG',
      'images/Ricardo SANTOS 2023/4cd21a3d-b267-4445-8276-442693315e45.JPG',
      'images/Ricardo SANTOS 2023/7fc213f7-dbce-4096-a4ea-32304e0bb99c.JPG',
      'images/Ricardo SANTOS 2023/FF47BFCC-7DBE-4AAE-9D20-1CF12DCB695F.JPG',
      'images/Ricardo SANTOS 2023/a90428ec-dd82-4e86-a519-2c5c062cad6c.JPG',
      'images/Ricardo SANTOS 2023/fbe30791-a3f3-471f-9b06-a537f8c55633.JPG',
    ]
  },
  {
    id: 'fivefourFive',
    title: 'FiveFourFive',
    year: '2025',
    images: [
      'images/FiveFourFive/IMG_1577.jpg',
      'images/FiveFourFive/84EF85F6-562F-44F6-A544-92F4E29A93FF.JPG',
    ]
  },
  {
    id: 'nude-project',
    title: 'Nude Project',
    year: '2025',
    images: [
      'images/Nude Project/IMG_9270.jpg',
      'images/Nude Project/IMG_9271.jpg',
      'images/Nude Project/IMG_9272.jpg',
    ]
  },
];

/* ============================================================
   CURATED "ALL" VIEW — best picks per session for diversity
   ============================================================ */
const FEATURED_ALL = [
  // Corneliani
  { src: 'images/Corneliani Autumn Winter 2025 Collection/IMG_0783.jpg', session: 'corneliani',          title: 'Corneliani',        year: '2025' },
  { src: 'images/Corneliani Autumn Winter 2025 Collection/IMG_1504.WEBP', session: 'corneliani',         title: 'Corneliani',        year: '2025' },
  // Ferran Casanova
  { src: 'images/Ferran Casanova/Dsquared 1.JPEG',  session: 'ferran-casanova', title: 'Ferran Casanova',   year: '2025' },
  { src: 'images/Ferran Casanova/IMG_9524.JPG',     session: 'ferran-casanova', title: 'Ferran Casanova',   year: '2025' },
  // Jose Martinez
  { src: 'images/Jose Martinez/IMG_0047.JPG',       session: 'jose-martinez',   title: 'Jose Martinez',     year: '2025' },
  { src: 'images/Jose Martinez/IMG_0053.JPG',       session: 'jose-martinez',   title: 'Jose Martinez',     year: '2025' },
  // Labros Athens
  { src: 'images/Labros Athens/IMG_0616.JPG',       session: 'labros-athens',   title: 'Labros Athens',     year: 'April 2025' },
  { src: 'images/Labros Athens/EF6E927E-4AF0-4700-B206-BCFFFDC591E2.JPG', session: 'labros-athens', title: 'Labros Athens', year: 'April 2025' },
  // Joey Leo Body
  { src: 'images/Joey Leo Body/IMG_0700.JPG',       session: 'joey-leo-body',   title: 'Joey Leo',          year: '2025' },
  { src: 'images/Joey Leo Body/IMG_0712.JPG',       session: 'joey-leo-body',   title: 'Joey Leo',          year: '2025' },
  // Joey Leo August Lover
  { src: 'images/Joey Leo August Lover/IMG_0857.JPG', session: 'joey-leo-august', title: 'Joey Leo',        year: '2025' },
  { src: 'images/Joey Leo August Lover/IMG_3351.JPG', session: 'joey-leo-august', title: 'Joey Leo',        year: '2025' },
  // Ricardo Santos Sep 2025
  { src: 'images/Ricardo Santos September 2025/IMG_4976.JPG', session: 'ricardo-santos-2025', title: 'Ricardo Santos', year: 'September 2025' },
  { src: 'images/Ricardo Santos September 2025/IMG_4987.JPG', session: 'ricardo-santos-2025', title: 'Ricardo Santos', year: 'September 2025' },
  // Porto
  { src: 'images/Porto/IMG_4994.JPG',               session: 'porto',           title: 'Porto',             year: '2025' },
  { src: 'images/Porto/IMG_5003.JPG',               session: 'porto',           title: 'Porto',             year: '2025' },
  // Male Model Scene
  { src: 'images/Lucas Fonseca Carcavelos /IMG_6175.JPG', session: 'carcavelos-beach', title: 'Male Model Scene', year: 'October 2024' },
  { src: 'images/Lucas Fonseca Carcavelos /IMG_6180.JPG', session: 'carcavelos-beach', title: 'Male Model Scene', year: 'October 2024' },
  // Fucking Young!
  { src: 'images/Fucking Young Cruel Summer 2023/IMG_9962.JPG', session: 'fucking-young', title: 'Fucking Young!', year: 'Sep 2023' },
  { src: 'images/Fucking Young Cruel Summer 2023/IMG_9966.JPG', session: 'fucking-young', title: 'Fucking Young!', year: 'Sep 2023' },
  // Ricardo Santos 2023
  { src: 'images/Ricardo SANTOS 2023/IMG_1986.JPG', session: 'ricardo-santos-2023', title: 'Ricardo Santos', year: '2023' },
  { src: 'images/Ricardo SANTOS 2023/IMG_2001.JPG', session: 'ricardo-santos-2023', title: 'Ricardo Santos', year: '2023' },
  // FiveFourFive
  { src: 'images/FiveFourFive/IMG_1577.jpg',        session: 'fivefourFive',    title: 'FiveFourFive',      year: '2025' },
  // Nude Project
  { src: 'images/Nude Project/IMG_9270.jpg',        session: 'nude-project',    title: 'Nude Project',      year: '2025' },
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
    if (lbImg.complete) {
      lbImg.style.opacity = '1';
      lbImg.style.transform = 'scale(1)';
    }
  }, 120);

  lbPrev.style.opacity = index === 0                   ? '0.3' : '1';
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
  if (e.key === 'ArrowLeft'  && lbCurrent > 0)                   { lbCurrent--; showLbImage(lbCurrent); }
  if (e.key === 'ArrowRight' && lbCurrent < lbImages.length - 1) { lbCurrent++; showLbImage(lbCurrent); }
});

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
