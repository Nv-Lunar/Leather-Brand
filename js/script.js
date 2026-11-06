
// Navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile navbar after clicking a link
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const navCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
            bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        }
    });
});
