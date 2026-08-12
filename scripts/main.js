import { initScrollNav } from './modules/scroll-nav.js';
import { initHero } from './modules/hero.js';
import { initModalMenu } from './modules/modal.js';
import { initBookingModal } from './modules/booking-modal.js';
import { initGamesSlider } from './modules/slider.js';
import { initDeviceSwitcher } from './modules/device-switcher.js';
import { initPriceTabs } from './modules/pricetab.js';
import { initAbout } from './modules/about.js';


const init = () => {
    initScrollNav();
    initHero();
    initModalMenu();
    initBookingModal();
    initGamesSlider();
    initDeviceSwitcher();
    initPriceTabs();
    initAbout();

};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}