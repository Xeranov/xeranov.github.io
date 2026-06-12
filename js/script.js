(function () {
    'use strict';

    /* ─── Language Toggle ─────────────────────────────────── */
    var body = document.body;
    var langToggle = document.getElementById('langToggle');
    var lang = localStorage.getItem('portfolio-lang') || 'en';

    function applyLang(l) {
        lang = l;
        body.setAttribute('data-lang', l);
        localStorage.setItem('portfolio-lang', l);

        document.querySelectorAll('[data-id][data-en]').forEach(function (el) {
            if (el.children.length === 0) {
                el.textContent = el.getAttribute('data-' + l);
            }
        });
    }

    langToggle.addEventListener('click', function () {
        applyLang(lang === 'id' ? 'en' : 'id');
    });

    applyLang(lang);

    /* ─── Navbar Scroll Effect ────────────────────────────── */
    var navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        navbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

    /* ─── Hamburger / Mobile Menu ─────────────────────────── */
    var hamburger  = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobileMenu');

    function toggleMenu(force) {
        var open = force !== undefined ? force : !mobileMenu.classList.contains('open');
        hamburger.classList.toggle('active', open);
        mobileMenu.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', String(open));
        mobileMenu.setAttribute('aria-hidden', String(!open));
    }

    hamburger.addEventListener('click', function () { toggleMenu(); });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { toggleMenu(false); });
    });

    document.addEventListener('click', function (e) {
        if (mobileMenu.classList.contains('open') && !navbar.contains(e.target)) {
            toggleMenu(false);
        }
    });

    /* ─── Typewriter ─────────────────────────────────────── */
    var phrases = ['Roblox Scripter', 'Game Developer', 'Fullstack Developer', 'Web Developer', 'Mobile Developer', 'DevOps Engineer'];
    var tw      = document.getElementById('typewriter');
    var pIdx    = 0;
    var cIdx    = 0;
    var deleting = false;

    function type() {
        var current = phrases[pIdx];
        if (deleting) {
            cIdx--;
            tw.textContent = current.slice(0, cIdx);
        } else {
            cIdx++;
            tw.textContent = current.slice(0, cIdx);
        }

        var delay = deleting ? 50 : 90;

        if (!deleting && cIdx === current.length) {
            delay = 2400;
            deleting = true;
        } else if (deleting && cIdx === 0) {
            deleting = false;
            pIdx = (pIdx + 1) % phrases.length;
            delay = 360;
        }

        setTimeout(type, delay);
    }

    setTimeout(type, 700);

    /* ─── IntersectionObserver — Reveal Animations ────────── */
    var revealEls = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var revealObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08 });

        revealEls.forEach(function (el) { revealObs.observe(el); });
    } else {
        revealEls.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ─── Active Nav Link on Scroll ─────────────────────── */
    var sections   = document.querySelectorAll('section[id]');
    var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

    if ('IntersectionObserver' in window) {
        var navObs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var id = '#' + entry.target.id;
                    navAnchors.forEach(function (a) {
                        a.classList.toggle('active', a.getAttribute('href') === id);
                    });
                }
            });
        }, { threshold: 0.45 });

        sections.forEach(function (s) { navObs.observe(s); });
    }

})();
