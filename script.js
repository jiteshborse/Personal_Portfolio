// Theme Management
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.theme);
        this.bindEvents();
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    updateThemeIcon() {
        const icon = document.querySelector('#themeToggle i');
        if (icon) {
            icon.className = this.theme === 'light' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
        }
    }

    bindEvents() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// Scroll Manager - Optimized with throttling
class ScrollManager {
    constructor() {
        this.isScrolling = false;
        this.sections = [];
        this.navLinks = [];
        this.init();
    }

    init() {
        this.cacheDOMElements();
        this.bindEvents();
        this.updateActiveSection();
    }

    cacheDOMElements() {
        this.sections = Array.from(document.querySelectorAll('section[id]'));
        this.navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
        this.backToTopBtn = document.querySelector('.back-to-top');
    }

    bindEvents() {
        // Throttled scroll handler
        window.addEventListener('scroll', this.throttle(() => {
            this.updateActiveSection();
            this.toggleBackToTop();
        }, 16));

        // Smooth scroll for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    updateActiveSection() {
        const scrollPos = window.pageYOffset + 100;
        
        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.setActiveNavLink(sectionId);
            }
        });
    }

    setActiveNavLink(activeId) {
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeId}`) {
                link.classList.add('active');
            }
        });
    }

    toggleBackToTop() {
        if (this.backToTopBtn) {
            if (window.pageYOffset > 300) {
                this.backToTopBtn.style.display = 'flex';
            } else {
                this.backToTopBtn.style.display = 'none';
            }
        }
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
}

// Form Handler
class FormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.init();
    }

    init() {
        if (this.form) {
            this.bindEvents();
        }
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    async handleSubmit() {
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await this.simulateSubmission(data);
            this.showSuccessMessage();
            this.form.reset();
        } catch (error) {
            this.showErrorMessage();
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }

    simulateSubmission(data) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form submitted:', data);
                resolve();
            }, 1000);
        });
    }

    showSuccessMessage() {
        this.showMessage('Thank you! Your message has been sent successfully.', 'success');
    }

    showErrorMessage() {
        this.showMessage('Sorry, there was an error sending your message. Please try again.', 'error');
    }

    showMessage(text, type) {
        // Remove existing messages
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const message = document.createElement('div');
        message.className = `form-message alert alert-${type === 'success' ? 'success' : 'danger'}`;
        message.textContent = text;
        message.style.marginTop = '1rem';
        message.style.padding = '1rem';
        message.style.borderRadius = '10px';
        message.style.backgroundColor = type === 'success' ? 'var(--success-color)' : 'var(--danger-color)';
        message.style.color = 'white';
        
        this.form.appendChild(message);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, 5000);
    }
}

// Animation Observer
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            this.observer = new IntersectionObserver(
                (entries) => this.handleIntersection(entries),
                { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
            );
            this.observeElements();
        }
    }

    observeElements() {
        const elements = document.querySelectorAll('[data-aos]');
        elements.forEach(el => {
            el.classList.add('fade-in');
            this.observer.observe(el);
        });
    }

    handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                this.observer.unobserve(entry.target);
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all managers
    new ThemeManager();
    new ScrollManager();
    new FormHandler();
    new AnimationObserver();
    
    // Set current year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }
});

// Back to top functionality
document.addEventListener('click', (e) => {
    if (e.target.closest('.back-to-top')) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});