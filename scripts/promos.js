import { initPromosSlider } from './modules/promos-slider.js';

const init = () => {
    initPromosSlider();
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}