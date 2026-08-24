document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', String(open));
        });

        // Collapse the mobile menu once a destination is chosen.
        nav.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && nav.classList.contains('is-open')) {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
});
