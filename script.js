// nav script
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('ftco-navbar');
    if (window.scrollY > 100) {
      navbar.classList.add('scrolled-navbar');
    } else {
      navbar.classList.remove('scrolled-navbar');
    }
  });

// Home script

 window.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".content-wrapper");
    wrapper.classList.add("active");
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll('#home-section .carousel-slide');
  const dots = document.querySelectorAll('#home-section .dot');

  function showSlide(index) {
    if(index === currentSlide) return;
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');

    currentSlide = index;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  // Auto-slide every 6 seconds
  setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, 6000);

// skill script
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.progress-circle').forEach(circle => {
    const value = circle.getAttribute('data-value');
    setTimeout(() => {
      circle.style.setProperty('--value', value);
    }, 300);
  });
});

 const skillCards = document.querySelectorAll('.skill-card');

  const VIEW = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.style.transitionDelay = `${index * 100}ms`;
      }
    });
  }, {
    threshold: 0.1
  });
  skillCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 150}ms`;
  VIEW.observe(card);
});

// Service script

  const certCards = document.querySelectorAll('.cert-card');

  const obSRV = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

 certCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 150}ms`;
  obSRV.observe(card);
});


  const projectCards = document.querySelectorAll('.project-card');

  const observe = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.style.transitionDelay = `${index * 150}ms`; // Stagger effect
      }
    });
  }, {
    threshold: 0.2
  });

   projectCards.forEach(card => {
    observe.observe(card);
  });



