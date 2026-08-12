export class BookingModal {
    constructor() {
        this.modal = document.querySelector('[data-booking-modal]');
        this.triggers = document.querySelectorAll('[data-booking]');
        this.closeButtons = this.modal?.querySelectorAll('[data-booking-close]') || [];
        this.dialog = this.modal?.querySelector('.booking-modal__dialog');

        this.isOpen = false;
        this._escHandler = null;

        if (!this.modal || !this.triggers.length) return;

        this.init();
    }

    init() {
        // Открытие
        this.triggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();

                // Если клик пришёл из меню — закрываем его перед открытием модалки
                const inModalMenu = trigger.closest('[data-modal-menu]');
                if (inModalMenu && window.modalMenuInstance) {
                    window.modalMenuInstance.close();
                    // Небольшая задержка, чтобы анимация закрытия меню успела отрисоваться
                    setTimeout(() => this.open(), 250);
                } else {
                    this.open();
                }
            });
        });

        // Закрытие
        this.closeButtons.forEach((btn) => {
            btn.addEventListener('click', () => this.close());
        });

        // ESC
        this._escHandler = (e) => {
            if (e.key === 'Escape') this.close();
        };
        document.addEventListener('keydown', this._escHandler);
    }

    open() {
        if (this.isOpen) return;
        this.isOpen = true;

        document.body.classList.add('booking-open');
        this.modal.classList.add('is-open');
        this.modal.setAttribute('aria-hidden', 'false');

        if (window.lenis) window.lenis.stop();

        this.animateOpen();

        // Accessibility — фокус на крестике
        setTimeout(() => {
            const closeBtn = this.modal.querySelector('.booking-modal__close');
            closeBtn?.focus();
        }, 100);
    }

    close() {
        if (!this.isOpen) return;
        this.isOpen = false;

        document.body.classList.remove('booking-open');

        this.animateClose(() => {
            this.modal.classList.remove('is-open');
            this.modal.setAttribute('aria-hidden', 'true');
        });

        if (window.lenis) window.lenis.start();
    }

    animateOpen() {
        if (typeof gsap === 'undefined') return;

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(
            this.dialog,
            { scale: 0.94, y: 20, opacity: 0 },
            { scale: 1, y: 0, opacity: 1, duration: 0.5 }
        )
            .fromTo(
                '.booking-modal__tag, .booking-modal__title, .booking-modal__text',
                { y: 14, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, ease: 'power2.out' },
                '-=0.3'
            )
            .fromTo(
                '.booking-modal__action',
                { y: 16, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out' },
                '-=0.2'
            )
            .fromTo(
                '.booking-modal__footer',
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.35, ease: 'power2.out' },
                '-=0.2'
            );
    }

    animateClose(onComplete) {
        if (typeof gsap === 'undefined') {
            onComplete?.();
            return;
        }

        gsap.to(this.dialog, {
            scale: 0.96,
            y: 10,
            opacity: 0,
            duration: 0.3,
            ease: 'power3.in',
            onComplete,
        });
    }

    destroy() {
        document.removeEventListener('keydown', this._escHandler);
    }
}

export const initBookingModal = () => {
    const instance = new BookingModal();
    window.bookingModalInstance = instance;
    return instance;
};