// Eco Drive - Enhanced Animations & Effects

// Confetti Animation
function createConfetti() {
  const colors = ['#FF6B9D', '#FFA07A', '#FFD93D', '#6BCF7F', '#4D96FF', '#9B59B6'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.opacity = '1';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);
    
    const duration = Math.random() * 3 + 2;
    const rotation = Math.random() * 360;
    const xMovement = (Math.random() - 0.5) * 200;
    
    confetti.animate([
      { 
        transform: 'translateY(0) translateX(0) rotate(0deg)',
        opacity: 1
      },
      { 
        transform: `translateY(${window.innerHeight + 10}px) translateX(${xMovement}px) rotate(${rotation}deg)`,
        opacity: 0
      }
    ], {
      duration: duration * 1000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    setTimeout(() => {
      confetti.remove();
    }, duration * 1000);
  }
}

// Number Counter Animation
function animateNumber(element, start, end, duration) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.round(current);
  }, 16);
}

// Scroll Animations with Intersection Observer
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.info-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
}

// Scroll to Top Button
function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTop');
  if (!scrollBtn) return;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.display = 'block';
      setTimeout(() => {
        scrollBtn.style.opacity = '1';
      }, 10);
    } else {
      scrollBtn.style.opacity = '0';
      setTimeout(() => {
        scrollBtn.style.display = 'none';
      }, 300);
    }
  });
}

// Add sparkle effect on hover
function addSparkleEffect(element) {
  element.addEventListener('mouseenter', function() {
    const sparkle = document.createElement('span');
    sparkle.textContent = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '1.5rem';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (Math.random() * rect.width) + 'px';
    sparkle.style.top = (Math.random() * rect.height) + 'px';
    
    element.style.position = 'relative';
    element.appendChild(sparkle);
    
    setTimeout(() => sparkle.remove(), 1000);
  });
}

// Add sparkle animation CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes sparkleFloat {
    0% {
      transform: translateY(0) scale(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-50px) scale(1.5);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initScrollToTop();
  
  // Add sparkle effects to buttons
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
    addSparkleEffect(btn);
  });
  
  // Add sparkle effects to info card icons
  document.querySelectorAll('.info-card-icon').forEach(icon => {
    addSparkleEffect(icon);
  });
});

// Export functions for use in calculator.js
window.ecoAnimations = {
  createConfetti,
  animateNumber
};
