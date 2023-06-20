// Togle nav
const barIcon = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-item');
barIcon.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
navLinks.classList.remove('show');
window.addEventListener('resize', () => {
  navLinks.classList.remove('show');
});
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.classList.contains('fa-bars')) {
    navLinks.classList.remove('show');
  }
});

// F.A.Q Accordion.............
var acc = document.querySelectorAll('.accordion');
acc.forEach((btn) => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    this.style.color = 'orange';
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      this.style.color = '';
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
// Client Swiper...............
new Swiper('.clients-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 80,
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 120,
    },
  },
});
// Gallery
const portfolioLightbox = GLightbox({
  selector: '.portfolio-lightbox',
});

// protfolio fiter................
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card_wrapper');
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    cards.forEach((card) => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.classList.remove('show');
      } else {
        card.classList.add('show');
      }
    });
  });
});
// backto top
const backTop = document.querySelector('.back-to');
if (window.scrollY > 100) {
  backTop.classList.add('active');
} else {
  backTop.classList.remove('active');
}
