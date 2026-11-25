// Initialize Vanta.js 3D Background on dedicated full-screen fixed container
window.addEventListener('load', function() {
  const bgElement = document.getElementById("vanta-bg") || document.body;
  if (typeof VANTA !== 'undefined' && VANTA.NET) {
    VANTA.NET({
      el: bgElement,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xe64a1e,
      backgroundColor: 0x0f0f12,
      points: 11.00,
      maxDistance: 22.00,
      spacing: 18.00
    });
  }
});

// Interactive Accordion & Navigation
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.clickable-section');
  const navLinks = document.querySelectorAll('.nav-link');

  sections.forEach(section => {
    const header = section.querySelector('.section-header');
    if (!header) return;

    // Click header to toggle section expand/collapse
    header.addEventListener('click', function(e) {
      const isAlreadyActive = section.classList.contains('active');

      if (isAlreadyActive) {
        section.classList.remove('active');
      } else {
        section.classList.add('active');
        section.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  });

  // Smooth scroll and active indicator on Navbar click
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // If clicking a section link, ensure it expands
          if (targetElement.classList.contains('clickable-section')) {
            targetElement.classList.add('active');
          }
          
          navLinks.forEach(l => l.classList.remove('active'));
          this.classList.add('active');
        }
      }
    });
  });

  // Highlight active navbar link on scroll
  window.addEventListener('scroll', function() {
    let currentSection = '';
    const scrollPos = window.scrollY + 200;

    const allSections = document.querySelectorAll('header, section');
    allSections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    if (currentSection) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
  });
});