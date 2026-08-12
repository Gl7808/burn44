export const initHero = () => {
    const hero = document.querySelector('[data-hero]');
    if (!hero || typeof gsap === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = hero.querySelectorAll('[data-hero-item]');
    gsap.set(items, { y: 34, opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });

    tl.from(hero.querySelector('.hero__bg img'), {
        scale: 1.12,
        duration: 1.6,
        ease: 'power2.out',
    })
        .to(items, {
            y: 0,
            opacity: 1,
            stagger: 0.09,
        }, '-=1.2');
};