import { toggleMobileMenu, initMobileMenu } from './menu.js';
import { initFaq } from './content.js';

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFaq();
});
