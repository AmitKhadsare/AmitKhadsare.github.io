// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // Hide mobile menu on click
        if (!mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
        // Scroll to section
        const offsetTop = target.offsetTop - 80; // Account for fixed header
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Sticky navigation on scroll
  const nav = document.querySelector('.sticky-nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  // --- Carousel Functionality (Fixed) ---
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    const slides = carouselContainer.querySelectorAll('.carousel-slide');
    let currentSlideIndex = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
      });
      slides[index].classList.add('active');
    }

    function nextSlide() {
      let newIndex = currentSlideIndex + 1;
      if (newIndex >= slides.length) {
        newIndex = 0;
      }
      currentSlideIndex = newIndex;
      showSlide(currentSlideIndex);
    }
    
    if (slides.length > 1) {
        setInterval(nextSlide, 6000); // Change slide every 6 seconds
    }
  }

  // --- Intersection Observer for animations ---
  const fadeInElements = document.querySelectorAll('.fade-in');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInElements.forEach(element => {
    observer.observe(element);
  });
});
