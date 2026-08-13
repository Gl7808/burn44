export const initScrollTop = () => {
    const btn = document.querySelector('[data-scroll-top]');
    if (!btn) return;

    const showThreshold = 600; // показываем после 600px скролла

    const toggleVisibility = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        btn.classList.toggle('is-visible', scrollY > showThreshold);
    };

    const scrollToTop = () => {
        if (window.lenis) {
            window.lenis.scrollTo(0, { duration: 1.6 });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Отслеживаем скролл
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    // Клик
    btn.addEventListener('click', scrollToTop);

    // Первичная проверка
    toggleVisibility();
};