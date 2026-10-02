// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add to cart button functionality
const addToCartButtons = document.querySelectorAll('.phone-card .btn');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const phoneName = this.parentElement.querySelector('h3').textContent;
        alert('تمت إضافة ' + phoneName + ' إلى السلة!');
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('شكراً لك! سيتم الرد على رسالتك قريباً.');
        this.reset();
    });
}

// Shop visit button
const shopButtons = document.querySelectorAll('.shop-card .btn');
shopButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('سيتم تحويلك إلى موقع المحل قريباً...');
    });
});

// Offer button functionality
const offerButtons = document.querySelectorAll('.offer-card .btn');
offerButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('عرض رائع! اضغط على زر الشراء الآن!');
    });
});

// Scroll animation - add fade-in effect
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
const cards = document.querySelectorAll('.shop-card, .phone-card, .service-card, .offer-card');
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Add active state to navigation
const sections = document.querySelectorAll('section');
const navItems2 = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems2.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Add scroll to top button
window.addEventListener('scroll', () => {
    const scrollToTopBtn = document.querySelector('.scroll-to-top');
    if (window.pageYOffset > 300) {
        if (!scrollToTopBtn) {
            const btn = document.createElement('button');
            btn.className = 'scroll-to-top';
            btn.innerHTML = '↑';
            btn.style.cssText = `
                position: fixed;
                bottom: 20px;
                left: 20px;
                background-color: #0066cc;
                color: white;
                border: none;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                font-size: 24px;
                cursor: pointer;
                z-index: 999;
                opacity: 0.7;
                transition: opacity 0.3s;
            `;
            btn.onmouseover = () => btn.style.opacity = '1';
            btn.onmouseout = () => btn.style.opacity = '0.7';
            btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.appendChild(btn);
        }
    }
});

console.log('تم تحميل موقع محلات الهواتف بنجاح!');