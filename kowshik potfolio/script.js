// Sticky Navbar
let header = document.querySelector('header');
window.onscroll = () => {
    header.classList.toggle('sticky', window.scrollY > 100);
}

// Dark Mode Toggle
let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('light-mode');
};

// Slow & Clear Typing Effect
const typingText = document.querySelector('.typing-text');
const words = ["CSE Student", "Web Developer", "Cloud Enthusiast", "Tech Learner"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if(isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    let typeSpeed = 200; // Normal slow typing
    if(isDeleting) { typeSpeed = 100; }

    if(!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typeSpeed = 2500; // Pause for reading
    } else if(isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
    }
    
    setTimeout(type, typeSpeed);
}
document.addEventListener('DOMContentLoaded', type);

// --- SCROLL ANIMATION (Interactive) ---
// Idhu dhaan website-a 'uyirottama' aakkum
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-animate'); // Scroll pannum bodhu class add agum
        } else {
            // Remove this line if you want animation only once
            // entry.target.classList.remove('show-animate'); 
        }
    });
});

// Ella animate class irukura elements-ayum select panrom
const hiddenElements = document.querySelectorAll('.animate-text, .animate-img, .animate-scroll');
hiddenElements.forEach((el) => observer.observe(el));