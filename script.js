// AOS Animation

AOS.init({
  duration: 1000,
  once: true
});


// Smooth Scroll Navigation

document.querySelectorAll('nav a').forEach(anchor => {

  anchor.addEventListener('click', function(e){

    e.preventDefault();

    const targetId = this.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth'
    });

  });

});


// Contact Form Alert

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e){

  e.preventDefault();

  alert("Message Sent Successfully!");

  contactForm.reset();

});


// Navbar Background Change On Scroll

window.addEventListener('scroll', function(){

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){

    navbar.style.background = "#0f172a";
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

  }

  else{

    navbar.style.background = "#111827";
    navbar.style.boxShadow = "none";

  }

});


// Typing Effect

const roles = [
  "Data Analyst",
  "AI Engineer",
  "Machine Learning Enthusiast",
  "DevOps Learner"
];

let roleIndex = 0;
let charIndex = 0;

const typingText = document.querySelector(".hero-content h3");

function typeEffect(){

  if(charIndex < roles[roleIndex].length){

    typingText.textContent += roles[roleIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 100);

  }

  else{

    setTimeout(eraseEffect, 1500);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typingText.textContent =
      roles[roleIndex].substring(0, charIndex - 1);

    charIndex--;

    setTimeout(eraseEffect, 50);

  }

  else{

    roleIndex++;

    if(roleIndex >= roles.length){

      roleIndex = 0;

    }

    setTimeout(typeEffect, 500);

  }

}

typingText.textContent = "";

typeEffect();


// Fade-in Animation On Scroll

const fadeElements = document.querySelectorAll(
  '.project-card, .skill-card, .cert-card, .achievement-card, .internship-card'
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

    }

  });

}, {
  threshold: 0.2
});

fadeElements.forEach(el => {
  observer.observe(el);
});


// Dynamic Year Footer

const footer = document.querySelector("footer p");

const currentYear = new Date().getFullYear();

footer.innerHTML =
  `© ${currentYear} Britto Y | All Rights Reserved`;


// Mobile Menu Toggle

const nav = document.querySelector("nav ul");

const menuBtn = document.createElement("div");

menuBtn.innerHTML = '<i class="fas fa-bars"></i>';

menuBtn.classList.add("menu-btn");

document.querySelector(".navbar .container").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {

  nav.classList.toggle("active");

});


// Add Active Class CSS Dynamically

const style = document.createElement('style');

style.innerHTML = `

@media(max-width:768px){

  nav ul{

    display:none;
    flex-direction:column;
    background:#111827;
    position:absolute;
    top:80px;
    right:20px;
    width:220px;
    padding:20px;
    border-radius:10px;

  }

  nav ul.active{

    display:flex;

  }

  .menu-btn{

    display:block;
    color:white;
    font-size:1.5rem;
    cursor:pointer;

  }

}

`;

document.head.appendChild(style);
