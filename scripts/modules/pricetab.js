export const initPriceTabs = () => {
    const tabs = document.querySelector('[data-price-tabs]');
    const panels = document.querySelector('[data-price-panels]');
    if (!tabs || !panels) return;

    const buttons = [...tabs.querySelectorAll('[data-price-tab]')];
    const items = [...panels.querySelectorAll('[data-price-panel]')];

    const activate = (id) => {
        buttons.forEach((btn) => {
            const isActive = btn.dataset.priceTab === id;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        items.forEach((panel) => {
            const isActive = panel.dataset.pricePanel === id;
            panel.classList.toggle('is-active', isActive);
            panel.hidden = !isActive;
        });
    };

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.priceTab;
            if (!btn.classList.contains('is-active')) {
                activate(id);
            }
        });
    });

    // Старт с первого активного
    const activeBtn = buttons.find((b) => b.classList.contains('is-active'));
    if (activeBtn) activate(activeBtn.dataset.priceTab);
};