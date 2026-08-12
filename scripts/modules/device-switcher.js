export const initDeviceSwitcher = () => {
    const switcher = document.querySelector('[data-device-switcher]');
    if (!switcher) return;

    const buttons = [...switcher.querySelectorAll('[data-device]')];

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('is-active')) return;

            buttons.forEach((b) => {
                const isActive = b === btn;
                b.classList.toggle('is-active', isActive);
                b.setAttribute('aria-selected', isActive ? 'true' : 'false');
            });

            document.dispatchEvent(
                new CustomEvent('device:change', { detail: { device: btn.dataset.device } })
            );
        });
    });
};