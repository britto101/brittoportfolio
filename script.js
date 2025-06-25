// Particles.js Configuration
  
  // Dark mode toggle
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  darkModeToggle.addEventListener('click', () => {
      const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
      darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
      localStorage.setItem('darkMode', !isDarkMode);
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Intersection Observer for fade-in sections
  const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
          }
      });
  }, observerOptions);
  
  document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
  });
  
  // Typewriter effect for hero section
  const typewriterText = document.querySelector('.typewriter');
  const phrases = ['Cloud', 'Artificial Intelligence'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function typeWriter() {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
          typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
      } else {
          typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
      }
  
      if (!isDeleting && charIndex === currentPhrase.length) {
          isDeleting = true;
          typingSpeed = 1500; // Pause at end
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
      }
  
      setTimeout(typeWriter, typingSpeed);
  }
  
  // Start the typewriter effect
  typeWriter();
  
  // Form submission handling
  const form = document.querySelector('.contact-form');
  form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('.submit-btn');
      const originalText = submitBtn.innerHTML;
      
      try {
          submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
          submitBtn.disabled = true;
          
          const formData = new FormData(form);
          const response = await fetch(form.action, {
              method: 'POST',
              body: formData,
              headers: {
                  'Accept': 'application/json'
              }
          });
  
          const data = await response.json();
  
          if (data.success) {
              // Success
              submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
              submitBtn.style.backgroundColor = '#10B981';
              form.reset();
          } else {
              throw new Error(data.message || 'Form submission failed');
          }
  
      } catch (error) {
          console.error('Error:', error);
          submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to Send';
          submitBtn.style.backgroundColor = '#EF4444';
      }
  
      // Reset button after 3 seconds
      setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.disabled = false;
      }, 3000);
  });
  
  // Initialize AOS with enhanced settings
  AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
      delay: 100,
      mirror: true,
      anchorPlacement: 'top-bottom'
  });
  
  // Mobile Menu
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('nav ul');
  
  mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu-btn') && !e.target.closest('nav')) {
      navMenu.classList.remove('show');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.replace('fa-times', 'fa-bars');
    }
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      const icon = mobileMenuBtn.querySelector('i');
      icon.classList.replace('fa-times', 'fa-bars');
    });
  });
