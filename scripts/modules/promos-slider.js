export const initPromosSlider = () => {
    const mainEl = document.querySelector('[data-promos-main]');
    const thumbsEl = document.querySelector('[data-promos-thumbs]');

    if (!mainEl || typeof Swiper === 'undefined') return;

    // Основной слайдер
    const mainSwiper = new Swiper(mainEl, {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 800,
        loop: false,
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        on: {
            slideChange: function () {
                updateActiveThumb(this.activeIndex);
            },
        },
    });

    // Миниатюры
    const thumbs = thumbsEl?.querySelectorAll('.promos-thumb') || [];

    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            mainSwiper.slideTo(index);
        });
    });

    const updateActiveThumb = (activeIndex) => {
        thumbs.forEach((thumb, index) => {
            thumb.classList.toggle('is-active', index === activeIndex);
        });
    };

    // Инициализация активного состояния
    updateActiveThumb(0);
};