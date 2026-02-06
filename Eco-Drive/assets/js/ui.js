// Eco Drive - UI Davranışları
// Bu dosya menü açma/kapama, scroll efektleri gibi UI işlemlerini yönetir

/**
 * Mobil menüyü açar/kapatır
 */
function toggleMobileMenu() {
  const navbarMenu = document.querySelector('.navbar-menu');
  if (navbarMenu) {
    navbarMenu.classList.toggle('active');
  }
}

/**
 * Sayfa kaydırıldığında navbar için gölge efekti ekler
 */
function handleNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
  } else {
    navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  }
}

/**
 * Smooth scroll için link tıklamalarını yönetir
 */
function handleSmoothScroll(event) {
  const target = event.target;
  
  // Eğer tıklanan element bir internal link ise
  if (target.tagName === 'A' && target.hash) {
    const targetElement = document.querySelector(target.hash);
    
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: 'smooth' });
      
      // Mobil menüyü kapat
      const navbarMenu = document.querySelector('.navbar-menu');
      if (navbarMenu && navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
      }
    }
  }
}

/**
 * Form inputlarına animasyon efekti ekler
 */
function handleInputFocus(event) {
  const input = event.target;
  if (input.classList.contains('form-input') || input.classList.contains('form-select')) {
    input.style.borderColor = 'var(--color-primary)';
    input.style.transform = 'scale(1.01)';
    input.style.transition = 'all 0.2s ease';
  }
}

function handleInputBlur(event) {
  const input = event.target;
  if (input.classList.contains('form-input') || input.classList.contains('form-select')) {
    input.style.borderColor = '#e5e7eb';
    input.style.transform = 'scale(1)';
  }
}

/**
 * "Yukarı çık" butonunu gösterir/gizler
 */
function handleScrollToTopButton() {
  const scrollButton = document.getElementById('scrollToTop');
  if (!scrollButton) return;
  
  if (window.scrollY > 300) {
    scrollButton.style.display = 'block';
    scrollButton.style.opacity = '1';
  } else {
    scrollButton.style.opacity = '0';
    setTimeout(() => {
      if (window.scrollY <= 300) {
        scrollButton.style.display = 'none';
      }
    }, 300);
  }
}

/**
 * Sayfanın en üstüne kaydırır
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Sayfa yüklendiğinde animasyon efektleri ekler
 */
function initPageAnimations() {
  // Kartları sırayla göster
  const cards = document.querySelectorAll('.info-card, .calculator-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      card.style.transition = 'all 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });
}

/**
 * Sayfa yüklendiğinde çalışacak event listener'lar
 */
document.addEventListener('DOMContentLoaded', function() {
  // Mobil menü toggle butonu
  const navbarToggle = document.querySelector('.navbar-toggle');
  if (navbarToggle) {
    navbarToggle.addEventListener('click', toggleMobileMenu);
  }
  
  // Scroll efektleri
  window.addEventListener('scroll', handleNavbarScroll);
  window.addEventListener('scroll', handleScrollToTopButton);
  
  // Smooth scroll
  document.addEventListener('click', handleSmoothScroll);
  
  // Input focus efektleri
  document.addEventListener('focus', handleInputFocus, true);
  document.addEventListener('blur', handleInputBlur, true);
  
  // Scroll to top butonu
  const scrollButton = document.getElementById('scrollToTop');
  if (scrollButton) {
    scrollButton.addEventListener('click', scrollToTop);
  }
  
  // Sayfa animasyonları
  initPageAnimations();
  
  // Menü linklerine tıklandığında mobil menüyü kapat
  const navLinks = document.querySelectorAll('.navbar-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navbarMenu = document.querySelector('.navbar-menu');
      if (navbarMenu && navbarMenu.classList.contains('active')) {
        navbarMenu.classList.remove('active');
      }
    });
  });
});

/**
 * Dış tıklamalarda mobil menüyü kapat
 */
document.addEventListener('click', function(event) {
  const navbar = document.querySelector('.navbar');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarToggle = document.querySelector('.navbar-toggle');
  
  if (navbarMenu && navbarMenu.classList.contains('active')) {
    if (!navbar.contains(event.target)) {
      navbarMenu.classList.remove('active');
    }
  }
});

