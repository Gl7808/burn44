export const initScrollNav = () => {
    const nav = document.querySelector('[data-scroll-nav]');
    if (!nav) return;

    const items = [...nav.querySelectorAll('[data-target]')];
    const pairs = items
        .map((item) => ({ item, section: document.getElementById(item.dataset.target) }))
        .filter(({ section }) => section);

    if (!pairs.length) return;

    const setActive = (id) => {
        pairs.forEach(({ item, section }) => {
            const isActive = section.id === id;
            item.classList.toggle('is-active', isActive);
        });
    };

    // Секция считается активной, когда попадает в «полосу» по центру экрана
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive(entry.target.id);
            });
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    pairs.forEach(({ section }) => observer.observe(section));

    const scrollToSection = (section) => {
        if (window.lenis) {
            window.lenis.scrollTo(section, { duration: 1.4 });
        } else {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    items.forEach((item) => {
        item.addEventListener('click', () => {
            const section = document.getElementById(item.dataset.target);
            if (section) scrollToSection(section);
        });
    });

    setActive(pairs[0].section.id);
};