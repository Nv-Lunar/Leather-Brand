
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

    
        (function () {
      var WA_NUMBER = "6281216103059";
        var WA_TEXT = "Halo SKAKMAT Collection, saya tertarik dengan produk Anda.";
    
        var ua = navigator.userAgent || "";
        var isAndroid = /Android/i.test(ua);
        var isIOS = /iPhone|iPad|iPod/i.test(ua);
        // WhatsApp, Instagram, Facebook, TikTok, dll. in-app browser
        var isInApp = /FBAN|FBAV|Instagram|Line|TikTok|WhatsApp|wv\)/i.test(ua) ||
        (isAndroid && /; wv\)/.test(ua));
    
        var webUrl = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(WA_TEXT);
        var schemeUrl = "whatsapp://send?phone=" + WA_NUMBER + "&text=" + encodeURIComponent(WA_TEXT);
    
        function showFallback() {
        if (document.getElementById("wa-fallback")) return;
        var box = document.createElement("div");
        box.id = "wa-fallback";
        box.style.cssText =
        "position:fixed;left:12px;right:12px;bottom:12px;z-index:99999;" +
        "background:#1a1a1a;color:#fff;padding:16px;border-radius:12px;" +
        "font:14px/1.5 sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.4);";
        box.innerHTML =
        '<p style="margin:0 0 10px">Tombol WhatsApp tidak bisa dibuka dari browser ini. ' +
            'Silakan salin nomor kami atau buka website lewat Chrome.</p>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
            '<button id="wa-copy" style="flex:1;padding:10px;border:0;border-radius:8px;background:#25D366;color:#fff;font-weight:600">Salin Nomor +' + WA_NUMBER + '</button>' +
            '<button id="wa-chrome" style="flex:1;padding:10px;border:0;border-radius:8px;background:#444;color:#fff">Buka di Chrome</button>' +
            '<button id="wa-close" style="padding:10px;border:0;border-radius:8px;background:transparent;color:#aaa">Tutup</button>' +
            '</div>';
        document.body.appendChild(box);
    
        document.getElementById("wa-copy").onclick = function () {
          var num = "+" + WA_NUMBER;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(num).then(function () { alert("Nomor disalin: " + num); });
          } else {
            prompt("Salin nomor ini:", num);
          }
        };
        document.getElementById("wa-chrome").onclick = function () {
          // Intent Chrome khusus Android; membuka halaman yang sama di Chrome
          var u = location.href.replace(/^https?:\/\//, "");
        var scheme = location.protocol.replace(":", "");
        location.href = "intent://" + u + "#Intent;scheme=" + scheme +
        ";package=com.android.chrome;end";
        };
        document.getElementById("wa-close").onclick = function () {box.remove(); };
      }
    
        function openWhatsApp(e) {
        // Di browser biasa (Chrome/Safari/desktop): biarkan link berjalan normal
        if (!isInApp) {
            e.preventDefault();
        window.location.href = webUrl;
        return;
        }
    
        // Di in-app browser: coba URL scheme langsung
        e.preventDefault();
        var left = false;
        var onHide = function () {left = true; };
        document.addEventListener("visibilitychange", onHide);
        window.addEventListener("pagehide", onHide);
    
        window.location.href = schemeUrl;
    
        // Jika setelah 1,5 detik halaman masih terlihat -> gagal, tampilkan fallback
        setTimeout(function () {
            document.removeEventListener("visibilitychange", onHide);
        window.removeEventListener("pagehide", onHide);
        if (!left && !document.hidden) showFallback();
        }, 1500);
      }
    
        var links = document.querySelectorAll("a.js-wa");
        for (var i = 0; i < links.length; i++) {
            links[i].setAttribute("href", webUrl);
        links[i].removeAttribute("target");
        links[i].addEventListener("click", openWhatsApp);
      }
    })();

});    
