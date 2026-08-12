export const initAbout = () => {
    // Swiper — coverflow: центральный слайд + соседние
    const swiperEl = document.querySelector('[data-about-swiper]');
    if (swiperEl && typeof Swiper !== 'undefined') {
        new Swiper(swiperEl, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            speed: 700,
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 120,
                modifier: 1.5,
                slideShadows: true,
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
            },
            keyboard: { enabled: true, onlyInViewport: true },
            pagination: { el: '[data-about-pagination]', clickable: true },
            navigation: { nextEl: '[data-about-next]', prevEl: '[data-about-prev]' },
        });
    }

    // GSAP ScrollTrigger — анимация при скролле
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // Заголовок + текст
        gsap.from('[data-about-animate]', {
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#about',
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });

        // Слайдер выезжает с лёгким масштабированием
        gsap.from('[data-about-slider-block]', {
            scale: 0.94,
            opacity: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '[data-about-slider-block]',
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });

        // Карточки фич появляются поочерёдно
        gsap.from('.about__feature', {
            y: 30,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.about__features',
                start: 'top 85%',
                toggleActions: 'play none none none',
            },
        });
    }
};