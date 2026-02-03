// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link (handled in showPage now)

// Dropdown menu toggle for mobile
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
    const dropdownLink = dropdown.querySelector('a');
    dropdownLink.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            dropdownMenu.classList.toggle('mobile-active');
        }
    });
}

// Page Navigation System with Page Turn Effect
function showPage(pageId) {
    // Validate page ID to prevent XSS
    const validPages = ['home', 'overview', 'projects', 'partners', 'contact'];
    if (!validPages.includes(pageId)) {
        console.warn('Invalid page:', pageId);
        return;
    }
    
    const currentActivePage = document.querySelector('.page.active');
    const targetPage = document.getElementById('page-' + pageId);
    
    if (!targetPage || targetPage === currentActivePage) {
        return;
    }
    
    // Add page turn out animation to current page
    if (currentActivePage) {
        currentActivePage.classList.add('inactive');
        currentActivePage.classList.remove('active');
        
        setTimeout(() => {
            currentActivePage.classList.remove('inactive');
            currentActivePage.style.display = 'none';
        }, 800);
    }
    
    // Show and animate new page
    targetPage.style.display = 'block';
    setTimeout(() => {
        targetPage.classList.add('active');
    }, 50);
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Copy Phone Number Functionality
function copyPhoneNumber(phoneNumber) {
    // Remove spaces and format
    const cleanPhone = phoneNumber.replace(/\s+/g, '');
    
    // Use Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(cleanPhone).then(() => {
            showCopyNotification('Phone number copied!');
        }).catch(() => {
            fallbackCopy(cleanPhone);
        });
    } else {
        fallbackCopy(cleanPhone);
    }
}

function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showCopyNotification('Phone number copied!');
    } catch (err) {
        showCopyNotification('Failed to copy');
    }
    document.body.removeChild(textArea);
}

function showCopyNotification(message) {
    // Remove existing notification if any
    const existing = document.querySelector('.copy-notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Hide notification after 2 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Initialize page navigation
document.addEventListener('DOMContentLoaded', () => {
    // Set up navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            if (pageId) {
                showPage(pageId);
            }
        });
    });
    
    // Copy phone number button
    const copyBtn = document.querySelector('.copy-btn');
    if (copyBtn) {
        copyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const phoneElement = copyBtn.closest('.phone-number');
            if (phoneElement) {
                const phone = phoneElement.getAttribute('data-phone') || phoneElement.textContent.trim();
                copyPhoneNumber(phone);
            }
        });
    }
    
    // Show home page by default
    showPage('home');
});

// Banner Carousel (removed - no longer needed)

function showSlide(index) {
    // Validate index to prevent out-of-bounds access
    if (!slides.length || !dots.length) return;
    
    // Reset all slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Handle wrap-around
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }
    
    // Show current slide
    if (slides[currentSlideIndex] && dots[currentSlideIndex]) {
        slides[currentSlideIndex].classList.add('active');
        dots[currentSlideIndex].classList.add('active');
    }
}

function changeSlide(direction) {
    const newIndex = currentSlideIndex + direction;
    showSlide(newIndex);
}

function currentSlide(index) {
    // Validate index before accessing
    const slideIndex = parseInt(index, 10) - 1;
    if (slideIndex >= 0 && slideIndex < slides.length) {
        showSlide(slideIndex);
    }
}

// Project filter tabs
document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const category = btn.getAttribute('data-category');
            if (category) {
                filterProjects(category);
            }
        });
    });
});

// Project Filtering - Secure implementation
function filterProjects(category) {
    // Validate category input to prevent injection
    const validCategories = ['all', 'movies', 'webseries'];
    if (!validCategories.includes(category)) {
        console.warn('Invalid category:', category);
        return;
    }
    
    const projectCards = document.querySelectorAll('.project-card');
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Update active tab using data attributes for security
    tabButtons.forEach(btn => {
        const btnCategory = btn.getAttribute('data-category');
        if (btnCategory === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Filter projects using data attributes
    projectCards.forEach(card => {
        if (category === 'all') {
            card.classList.remove('hidden');
        } else {
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

// Navbar scroll effect (simplified for page navigation)
const navbar = document.querySelector('.navbar');
if (navbar) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
}

// Intersection Observer for fade-in animations
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

// Observe project cards and news cards
document.querySelectorAll('.project-card, .news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Secure image error handling
document.querySelectorAll('img[data-placeholder]').forEach(img => {
    img.addEventListener('error', function() {
        const placeholderId = this.getAttribute('data-placeholder');
        if (placeholderId) {
            const placeholder = document.querySelector('.' + placeholderId);
            if (placeholder) {
                this.style.display = 'none';
                placeholder.style.display = 'flex';
            }
        }
    });
    
    // Also handle load success to ensure placeholder is hidden
    img.addEventListener('load', function() {
        const placeholderId = this.getAttribute('data-placeholder');
        if (placeholderId) {
            const placeholder = document.querySelector('.' + placeholderId);
            if (placeholder) {
                placeholder.style.display = 'none';
                this.style.display = 'block';
            }
        }
    });
});
