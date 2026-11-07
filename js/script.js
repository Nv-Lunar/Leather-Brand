
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
   COLLECTION CAROUSEL
========================================= */

const collectionProducts = [
    { image: "assets/1.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-1" },
    { image: "assets/2.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-2" },
    { image: "assets/3.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-3" },
    { image: "assets/4.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-4" },
    { image: "assets/5.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-5" },
    { image: "assets/6.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-6" },
    { image: "assets/7.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-7" },
    { image: "assets/8.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-8" },
    { image: "assets/9.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-9" },
    { image: "assets/10.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-10" },
    { image: "assets/11.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-11" },
    { image: "assets/12.jpg", shopee: "https://shopee.co.id/LINK-PRODUK-12" }
];


// Left, Center, Right
const collectionGroups = [
    [1, 0, 2],
    [4, 3, 5],
    [7, 6, 8],
    [10, 9, 11]
];

let collectionIndex = 0;

const collectionLeft = document.querySelector("#collectionLeft");
const collectionCenter = document.querySelector("#collectionCenter");
const collectionRight = document.querySelector("#collectionRight");

const collectionPrev = document.querySelector("#collectionPrev");
const collectionNext = document.querySelector("#collectionNext");

const collectionCounter = document.querySelector("#collectionCounter");


function updateCollection() {

    const group = collectionGroups[collectionIndex];

    const leftProduct = collectionProducts[group[0]];
    const centerProduct = collectionProducts[group[1]];
    const rightProduct = collectionProducts[group[2]];


    // Left
    collectionLeft.href = leftProduct.shopee;
    collectionLeft.querySelector("img").src = leftProduct.image;


    // Center
    collectionCenter.href = centerProduct.shopee;
    collectionCenter.querySelector("img").src = centerProduct.image;


    // Right
    collectionRight.href = rightProduct.shopee;
    collectionRight.querySelector("img").src = rightProduct.image;


    // Counter
    collectionCounter.textContent =
        `${String(collectionIndex + 1).padStart(2, "0")} — ${String(collectionGroups.length).padStart(2, "0")}`;

}


// Previous
collectionPrev.addEventListener("click", () => {

    collectionIndex--;

    if (collectionIndex < 0) {
        collectionIndex = collectionGroups.length - 1;
    }

    updateCollection();

});


// Next
collectionNext.addEventListener("click", () => {

    collectionIndex++;

    if (collectionIndex >= collectionGroups.length) {
        collectionIndex = 0;
    }

    updateCollection();

});


// Initial display
updateCollection();



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
