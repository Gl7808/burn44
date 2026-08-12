export class ModalMenu {
    constructor() {
        this.menu = document.querySelector('[data-modal-menu]');
        this.burger = document.querySelector('[data-burger]');
        this.backdrop = this.menu?.querySelector('[data-modal-menu-close]');
        this.closeBtn = this.menu?.querySelector('[data-modal-menu-close-btn]');
        this.links = this.menu?.querySelectorAll('[data-modal-menu-link]') || [];
        this.panel = this.menu?.querySelector('.modal-menu__panel');

        this.isOpen = false;
        this._escHandler = null;

        if (!this.menu || !this.burger) return;

        this.init();
    }

    init() {
        this.burger.addEventListener('click', () => this.toggle());
        this.backdrop?.addEventListener('click', () => this.close());
        this.closeBtn?.addEventListener('click', () => this.close());

        // Клик по ссылке — закрыть меню
        this.links.forEach((link) => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                // Если это якорь — прокручиваем через Lenis
                if (href?.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        this.close();
                        setTimeout(() => {
                            if (window.lenis) {
                                window.lenis.scrollTo(target, { duration: 1.4 });
                            } else {
                                target.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 350);
                    }
                } else {
                    this.close();
                }
            });
        });

        // ESC для закрытия
        this._escHandler = (e) => {
            if (e.key === 'Escape') this.close();
        };
        document.addEventListener('keydown', this._escHandler);
    }

    toggle() {
        this.isOpen ? this.close() : this.open();
    }

    open() {
        if (this.isOpen) return;
        this.isOpen = true;

        document.body.classList.add('menu-open');
        this.burger.classList.add('is-open');
        this.burger.setAttribute('aria-expanded', 'true');
        this.menu.classList.add('is-open');
        this.menu.setAttribute('aria-hidden', 'false');

        // Останавливаем Lenis
        if (window.lenis) window.lenis.stop();

        this.animateOpen();
    }

    close() {
        if (!this.isOpen) return;
        this.isOpen = false;

        document.body.classList.remove('menu-open');
        this.burger.classList.remove('is-open');
        this.burger.setAttribute('aria-expanded', 'false');

        this.animateClose(() => {
            this.menu.classList.remove('is-open');
            this.menu.setAttribute('aria-hidden', 'true');
        });

        // Возобновляем Lenis
        if (window.lenis) window.lenis.start();
    }

    animateOpen() {
        if (typeof gsap === 'undefined') return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
            this.panel,
            { x: '-100%' },
            { x: '0%', duration: 0.55 }
        )
            .fromTo(
                '.modal-menu__logo, .modal-menu__link, .modal-menu__contact, .modal-menu__social, .modal-menu__footer .btn',
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.45,
                    stagger: 0.04,
                    ease: 'power2.out',
                },
                '-=0.3'
            );
    }

    animateClose(onComplete) {
        if (typeof gsap === 'undefined') {
            onComplete?.();
            return;
        }

        gsap.to(this.panel, {
            x: '-100%',
            duration: 0.4,
            ease: 'power3.in',
            onComplete,
        });
    }

    destroy() {
        document.removeEventListener('keydown', this._escHandler);
    }
}

export const initModalMenu = () => new ModalMenu();