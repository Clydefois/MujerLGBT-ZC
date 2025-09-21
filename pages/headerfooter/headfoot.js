// Mobile Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const body = document.body;

    // Toggle mobile menu
    function toggleMobileMenu() {
        mobileMenuToggle.classList.toggle('active');
        mobileMenuOverlay.classList.toggle('active');
        body.style.overflow = mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    }

    // Close mobile menu
    function closeMobileMenu() {
        mobileMenuToggle.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.style.overflow = '';
    }

    // Event listeners
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close menu when clicking on overlay background
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', function(e) {
            if (e.target === mobileMenuOverlay) {
                closeMobileMenu();
            }
        });
    }

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Navigation link functionality for mobile menu
    const navigationLinks = {
        'mobileHomeBtn': '/',
        'mobileServicesLink': '/pages/services-page/services-page.html',
        'mobileEventsLink': '/pages/events-page/events.html',
        'mobilePartnersLink': '/pages/partnerpage/partner.html',
        'mobileDonateLink': '/pages/forms-page/donation-form.html',
        'mobileApplicationLink': '/pages/forms-page/application-form.html',
        'mobileOtherworksLink': '/pages/other-works-page/other-works.html'
    };

    // Add click handlers for mobile navigation links
    Object.keys(navigationLinks).forEach(linkId => {
        const element = document.getElementById(linkId);
        if (element) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                closeMobileMenu();
                
                // Add a small delay for smooth transition
                setTimeout(() => {
                    window.location.href = navigationLinks[linkId];
                }, 300);
            });
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenuOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

// Existing navigation functionality (if any exists)
// Keep the existing desktop navigation functionality intact
document.addEventListener('DOMContentLoaded', function() {
    // Desktop navigation links
    const desktopNavigationLinks = {
        'homebtn': '/',
        'servicesLink': '/pages/services-page/services-page.html',
        'eventsLink': '/pages/events-page/events.html',
        'partnersLink': '/pages/partnerpage/partner.html',
        'donateLink': '/pages/forms-page/donation-form.html',
        'applicationLink': '/pages/forms-page/application-form.html',
        'otherworksLink': '/pages/other-works-page/other-works.html'
    };

    // Add click handlers for desktop navigation
    Object.keys(desktopNavigationLinks).forEach(linkId => {
        const element = document.getElementById(linkId);
        if (element) {
            element.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = desktopNavigationLinks[linkId];
            });
        }
    });
});