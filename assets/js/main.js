/**
 * Portfolio Interactions
 * Jorge de los Santos - tebayoso.github.io
 */

// ========================================
// Typing Effect
// ========================================
const roles = [
    'Software Architect',
    'Platform Engineer',
    'Blockchain Developer',
    'Startup Founder',
    'Open Source Contributor'
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingElement = null;

function initTyping() {
    typingElement = document.getElementById('typingText');
    if (!typingElement) return;
    
    typeEffect();
}

function typeEffect() {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;
    
    if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => {
            isDeleting = true;
            typeEffect();
        }, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    
    setTimeout(typeEffect, speed);
}

// ========================================
// Navigation
// ========================================
function initNavigation() {
    const nav = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Mobile toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// ========================================
// Scroll Reveal Animations
// ========================================
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    const timelineProgress = document.querySelector('.timeline-progress');
    const statValues = document.querySelectorAll('.stat-value');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Animate skill bars
                if (entry.target.classList.contains('skill-category')) {
                    const progressBars = entry.target.querySelectorAll('.skill-progress');
                    progressBars.forEach((bar, index) => {
                        setTimeout(() => {
                            const level = bar.dataset.level;
                            bar.style.width = level + '%';
                        }, index * 100);
                    });
                }
                
                // Animate timeline progress
                if (entry.target.closest('.timeline') && timelineProgress) {
                    updateTimelineProgress();
                }
                
                // Animate stats
                if (entry.target.classList.contains('about-stats')) {
                    const stats = entry.target.querySelectorAll('.stat-value');
                    stats.forEach(stat => animateCounter(stat));
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    revealElements.forEach(el => observer.observe(el));
    
    // Also observe individual skill categories for staggered animation
    document.querySelectorAll('.skill-category').forEach(el => observer.observe(el));
    
    // Timeline progress on scroll
    if (timelineProgress) {
        window.addEventListener('scroll', () => {
            updateTimelineProgress();
        });
    }
}

function updateTimelineProgress() {
    const timeline = document.querySelector('.timeline');
    const progress = document.querySelector('.timeline-progress');
    
    if (!timeline || !progress) return;
    
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const timelineTop = rect.top;
    const timelineHeight = rect.height;
    
    if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
        const visibleHeight = Math.min(windowHeight, timelineTop + timelineHeight) - Math.max(0, timelineTop);
        const percentage = (visibleHeight / timelineHeight) * 100;
        progress.style.height = Math.max(0, Math.min(100, percentage + 20)) + '%';
    }
}

// ========================================
// Counter Animation
// ========================================
function animateCounter(element) {
    const target = parseFloat(element.dataset.target);
    const decimals = parseInt(element.dataset.decimals) || 0;
    const duration = 2000;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = target * easeOut;
        
        element.textContent = current.toFixed(decimals);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toFixed(decimals);
        }
    }
    
    requestAnimationFrame(update);
}

// ========================================
// Particle System
// ========================================
function initParticles() {
    const canvas = document.getElementById('particles');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId = null;
    let isActive = true;
    
    // Check for touch device - reduce particles
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const particleCount = isTouch ? 25 : 50;
    
    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resize();
    window.addEventListener('resize', resize);
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.opacity = Math.random() * 0.5 + 0.2;
            this.color = Math.random() > 0.5 ? '0, 245, 255' : '176, 38, 255';
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    let isMouseActive = false;
    let mouseTimeout = null;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        isMouseActive = true;
        
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => {
            isMouseActive = false;
        }, 100);
    });
    
    function drawConnections() {
        const maxDistance = 100;
        const maxConnections = 3;
        
        for (let i = 0; i < particles.length; i++) {
            let connections = 0;
            
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < maxDistance && connections < maxConnections) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 245, 255, ${0.1 * (1 - distance / maxDistance)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                    connections++;
                }
            }
            
            // Connect to mouse
            if (isMouseActive && !isTouch) {
                const dx = particles[i].x - mouseX;
                const dy = particles[i].y - mouseY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 245, 255, ${0.2 * (1 - distance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(mouseX, mouseY);
                    ctx.stroke();
                }
            }
        }
    }
    
    let frameCount = 0;
    function animate() {
        if (!isActive) return;
        
        // Render every 2nd frame for performance
        frameCount++;
        if (frameCount % 2 !== 0) {
            animationId = requestAnimationFrame(animate);
            return;
        }
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Visibility check
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            isActive = false;
            if (animationId) cancelAnimationFrame(animationId);
        } else {
            isActive = true;
            animate();
        }
    });
    
    animate();
}

// ========================================
// Back to Top Button
// ========================================
function initBackToTop() {
    const button = document.getElementById('backToTop');
    if (!button) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ========================================
// Fact Card Touch Support
// ========================================
function initFactCards() {
    const factCards = document.querySelectorAll('.fact-card');
    
    factCards.forEach(card => {
        // For touch devices, toggle on click
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initTyping();
    initNavigation();
    initScrollReveal();
    initParticles();
    initBackToTop();
    initSmoothScroll();
    initFactCards();
});

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-fast', '0.01ms');
    document.documentElement.style.setProperty('--transition-medium', '0.01ms');
    document.documentElement.style.setProperty('--transition-slow', '0.01ms');
}