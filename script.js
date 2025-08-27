// Custom Cursor Functionality
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let followerX = 0, followerY = 0;

function animateCursor() {
    // Smoothly interpolate cursor position
    cursorX += (mouseX - cursorX) * 0.25;
    cursorY += (mouseY - cursorY) * 0.25;
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    requestAnimationFrame(animateCursor);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Add hover effect to interactive elements
function addCursorHover() {
    const interactiveElements = document.querySelectorAll('a, button, .work-item, .title-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
        });
    });
}

// Initialize custom cursor
document.addEventListener('DOMContentLoaded', () => {
    animateCursor();
    addCursorHover();
});



// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
}

navToggle.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    });
});

// Smooth scrolling for anchor links
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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe work items for animation
document.querySelectorAll('.work-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// Add loading animation to hero content
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-image');
    
    if (hero && heroImage) {
        const rate = scrolled * -0.5;
        heroImage.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to work items
document.querySelectorAll('.work-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect if desired
// Uncomment the following lines to enable typing effect
/*
document.addEventListener('DOMContentLoaded', () => {
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        const text = line.textContent;
        setTimeout(() => {
            typeWriter(line, text, 150);
        }, index * 1000);
    });
});
*/

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.style.transform = 'none';
            span.style.opacity = '1';
        });
    }
});



// Preload critical resources
function preloadResources() {
    const links = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
    ];
    
    links.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadResources();

// Dynamic Loading Messages System
const loadingMessages = {
    'home': ['Hello!'],
    'design': ['Hello!'],
    'ml': ['Hello!'],
    'contact': ['Hello!'],
    '404': ['Hello!']
};

let currentMessageIndex = 0;
let messageInterval;

function showLoadingMessage(section = 'home') {
    const loadingTitle = document.getElementById('loading-title');
    if (!loadingTitle) return;
    
    const messages = loadingMessages[section] || loadingMessages['home'];
    
    // Clear existing interval
    if (messageInterval) {
        clearInterval(messageInterval);
    }
    
    // Show "Hello!" message
    loadingTitle.textContent = messages[0];
}

function stopLoadingMessages() {
    if (messageInterval) {
        clearInterval(messageInterval);
        messageInterval = null;
    }
}

// Loading Screen Animation
window.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        // Check if this is the first visit in this session
        const hasSeenLoading = sessionStorage.getItem('hasSeenLoading');
        
        if (!hasSeenLoading) {
            // First time visiting - show loading screen
            let pageType = 'home';
            const currentPath = window.location.pathname;
            
            if (currentPath.includes('design.html')) {
                pageType = 'design';
            } else if (currentPath.includes('404.html')) {
                pageType = '404';
            }
            
            // Start with appropriate messages
            showLoadingMessage(pageType);
            
            // Add initial loading class
            loadingScreen.classList.add('initial-load');
            
            setTimeout(() => {
                loadingScreen.classList.add('loaded');
                stopLoadingMessages();
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    loadingScreen.classList.remove('initial-load');
                }, 600);
            }, 1100); // Show loading for at least 1.1s
            
            // Mark that we've seen the loading screen in this session
            sessionStorage.setItem('hasSeenLoading', 'true');
        } else {
            // Not first visit - hide loading screen immediately
            loadingScreen.style.display = 'none';
        }
    }
});

// Dynamic Loading Title for Navigation
function setLoadingTitle() {
    let section = 'home';
    
    // Check for hash-based navigation
    if (window.location.hash) {
        const hash = window.location.hash.replace('#', '');
        if (hash === 'design' || hash === 'ml') {
            section = hash;
        }
    }
    
    // Check if we're in a specific section based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100; // Offset for better detection
    
    sections.forEach(sectionElement => {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            section = sectionElement.id;
        }
    });
    
    return section;
}

// Show loading screen for section transitions
function showSectionLoading(section) {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;
    
    // Remove any existing section classes
    loadingScreen.classList.remove('design-section', 'ml-section', 'contact-section', 'section-transition');
    
    // Add section-specific class
    if (section === 'design') {
        loadingScreen.classList.add('design-section', 'section-transition');
    } else if (section === 'ml') {
        loadingScreen.classList.add('ml-section', 'section-transition');
    } else if (section === 'contact') {
        loadingScreen.classList.add('contact-section', 'section-transition');
    } else {
        loadingScreen.classList.add('section-transition');
    }
    
    // Show loading screen
    loadingScreen.style.display = 'flex';
    loadingScreen.classList.remove('loaded');
    
    // Show appropriate messages
    showLoadingMessage(section);
    
    // Hide after a short delay
    setTimeout(() => {
        loadingScreen.classList.add('loaded');
        stopLoadingMessages();
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            // Remove section classes after hiding
            loadingScreen.classList.remove('design-section', 'ml-section', 'contact-section', 'section-transition');
        }, 600);
    }, 800);
}

// Smooth scrolling for anchor links
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

// Handle navigation to design page
// document.querySelectorAll('a[href="design.html"]').forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
        
//         // Show loading screen for page transition
//         showSectionLoading('design');
        
//         // Navigate to design page after loading
//         setTimeout(() => {
//             window.location.href = 'design.html';
//         }, 400);
//     });
// });

// // Track scroll position for dynamic loading messages
// let lastScrollPosition = 0;
// let scrollTimeout;

// window.addEventListener('scroll', () => {
//     clearTimeout(scrollTimeout);
    
//     scrollTimeout = setTimeout(() => {
//         const currentSection = setLoadingTitle();
//         const loadingTitle = document.getElementById('loading-title');
        
//         // Update loading title if it's visible (for debugging or future use)
//         if (loadingTitle && loadingTitle.textContent !== currentSection) {
//             // Only update if we want to show current section in title
//             // loadingTitle.textContent = currentSection;
//         }
        
//         lastScrollPosition = window.scrollY;
//     }, 100);
// });

// Initialize on page load
setLoadingTitle();

// Cursor position gradient hover effect for buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.cta-button');
    
    buttons.forEach(button => {
        function onMouseMove(event) {
            // get cursor coordinates to container (the button itself).
            const { x, y } = button.getBoundingClientRect();

            // get relative coordinates.
            const relativeX = event.clientX - x;
            const relativeY = event.clientY - y;

            // apply coordinates values to CSS variables.
            button.style.setProperty("--x-cursor-position", relativeX);
            button.style.setProperty("--y-cursor-position", relativeY);
        }

        button.addEventListener('mousemove', onMouseMove);
    });
}); 

