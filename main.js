document.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');

    Promise.all([
        fetch('header.html').then(r => r.text()),
        fetch('footer.html').then(r => r.text())
    ]).then(([headerHtml, footerHtml]) => {
        if (headerPlaceholder) headerPlaceholder.innerHTML = headerHtml;
        if (footerPlaceholder) footerPlaceholder.innerHTML = footerHtml;

        // Highlight the current page's nav link
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('#header-placeholder nav a[href]').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.remove('text-gray-600', 'text-gray-700', 'font-medium');
                link.classList.add('text-gray-900', 'font-bold');
            }
        });

        if (window.feather) feather.replace();
        if (window.AOS) AOS.init({ once: true, offset: 50 });

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = mobileMenuButton.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-feather', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
                    if (window.feather) feather.replace();
                }
            });
        }
    });
});
