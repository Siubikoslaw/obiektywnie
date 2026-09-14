document.addEventListener('DOMContentLoaded', () => {
    // Highlight the current page's nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentPageWithoutExt = currentPage.replace(/\.[^/.]+$/, '');
    document.querySelectorAll('#header-placeholder nav a[href]').forEach(link => {
        const href = link.getAttribute('href');
        const hrefWithoutExt = href.replace(/\.[^/.]+$/, '').replace(/^\//, '');
        if (href === currentPage || href === '/' + currentPage || currentPageWithoutExt === hrefWithoutExt) {
            link.classList.add('font-bold');
        }
    });

    if (window.feather) feather.replace();
    if (window.AOS) AOS.init({ once: true, offset: 50 });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconOpen = document.getElementById('mobile-menu-icon-open');
    const menuIconClose = document.getElementById('mobile-menu-icon-close');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const isOpen = !mobileMenu.classList.contains('hidden');
            mobileMenuButton.setAttribute('aria-expanded', String(isOpen));
            mobileMenuButton.setAttribute('aria-label', isOpen ? 'Zamknij menu' : 'Otwórz menu');
            if (menuIconOpen && menuIconClose) {
                menuIconOpen.classList.toggle('hidden', isOpen);
                menuIconClose.classList.toggle('hidden', !isOpen);
            }
        });
    }
});
