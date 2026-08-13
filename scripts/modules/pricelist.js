export const initPricelist = () => {
    const root = document.querySelector('[data-pricelist]');
    if (!root) return;

    const buttons = root.querySelectorAll('[data-pricelist-btn]');
    const tables = root.querySelectorAll('[data-pricelist-table]');
    const specs = root.querySelectorAll('[data-pricelist-specs]');
    const badge = root.querySelector('[data-pricelist-badge]');

    const switchTo = (id) => {
        buttons.forEach((btn) => {
            const isActive = btn.dataset.pricelistBtn === id;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        tables.forEach((table) => {
            table.hidden = table.dataset.pricelistTable !== id;
        });

        specs.forEach((spec) => {
            spec.hidden = spec.dataset.pricelistSpecs !== id;
        });

        if (badge) {
            badge.textContent = id === 'vip' ? 'VIP' : 'Standart';
            badge.classList.toggle('pricelist__hardware-badge--vip', id === 'vip');
        }
    };

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (!btn.classList.contains('is-active')) {
                switchTo(btn.dataset.pricelistBtn);
            }
        });
    });

    // Слайдер акций
    initPromoSlider();
};

const initPromoSlider = () => {
    const el = document.querySelector('[data-promo-swiper]');
    if (!el || typeof Swiper === 'undefined') return;

    new Swiper(el, {
        effect: 'cube',
        fadeEffect: { crossFade: true },
        loop: true,
        speed: 700,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
        },
        pagination: { el: '[data-promo-pagination]', clickable: true },
        navigation: { nextEl: '[data-promo-next]', prevEl: '[data-promo-prev]' },
        on: {
            init(s) {
                requestAnimationFrame(() => s.update());
            },
        },
    });
};