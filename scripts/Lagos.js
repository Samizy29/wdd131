document.addEventListener('DOMContentLoaded', () => {
  // Responsive Menu Toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Lazy Load Script
  const lazyImages = document.querySelectorAll(".lazy-image");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const dataSrc = img.getAttribute("data-src");
        if (dataSrc) {
          img.src = dataSrc;
          img.removeAttribute("data-src"); // optional, cleanup
        }
        img.classList.remove("lazy-image");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));

  // Menu Open/Close Buttons
  const menuOpenBtn = document.getElementById('menu-open');
  const menuCloseBtn = document.getElementById('menu-close');
  const navLinks = document.getElementById('nav-links');
  if (menuOpenBtn && menuCloseBtn && navLinks) {
    const navItems = navLinks.querySelectorAll('a');

    function openMenu() {
      navLinks.classList.add('show');
      menuOpenBtn.style.display = 'none';
      menuCloseBtn.style.display = 'block';
    }

    function closeMenu() {
      navLinks.classList.remove('show');
      menuOpenBtn.style.display = 'block';
      menuCloseBtn.style.display = 'none';
    }

    menuOpenBtn.addEventListener('click', openMenu);
    menuCloseBtn.addEventListener('click', closeMenu);

    // Auto-close when link is clicked (for mobile UX)
    navItems.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
});
