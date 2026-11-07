
/* =========================================
   SKAKMAT COLLECTION
   WEBSITE INTERACTIONS
========================================= */


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

});


/* =========================================
   CLOSE MOBILE NAVBAR AFTER CLICK
========================================= */

const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {

    link.addEventListener('click', () => {

        if (navCollapse && navCollapse.classList.contains('show')) {

            bootstrap.Collapse
                .getOrCreateInstance(navCollapse)
                .hide();

        }

    });

});


/* =========================================
   HERO VIDEO
========================================= */

const heroVideo = document.querySelector('.hero-video');

if (heroVideo) {

    heroVideo.muted = true;
    heroVideo.setAttribute('playsinline', '');

    const playVideo = () => {

        const playPromise = heroVideo.play();

        if (playPromise !== undefined) {

            playPromise.catch(() => {

                console.log(
                    'Hero video autoplay is unavailable. ' +
                    'The browser may require user interaction.'
                );

            });

        }

    };

    if (heroVideo.readyState >= 2) {

        playVideo();

    } else {

        heroVideo.addEventListener('loadeddata', playVideo, {
            once: true
        });

    }

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    '.intro-section .col-lg-9, ' +
    '.section-heading, ' +
    '.product-card, ' +
    '.story-image, ' +
    '.story-section .col-lg-5, ' +
    '.value-card, ' +
    '.custom-section .row, ' +
    '.contact-section .container'
);

revealElements.forEach(element => {

    element.classList.add('reveal');

});

const revealObserver = new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add('active');

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   PRODUCT CARD HOVER EFFECT
========================================= */

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.classList.add('hovered');

    });

    card.addEventListener('mouseleave', () => {

        card.classList.remove('hovered');

    });

});


/* =========================================
   SMOOTH SCROLL
========================================= */

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {

    link.addEventListener('click', function (event) {

        const targetId = this.getAttribute('href');

        if (targetId === '#') {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({

                behavior: 'smooth',
                block: 'start'

            });

        }

    });

});
