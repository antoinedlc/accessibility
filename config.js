const tabTrapEls = [
    '[tabindex = "0"]',
    '.form-popup__content__close',
    'a[href]:not([disabled])',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input[type="text"]:not([disabled])',
    'input[type="radio"]:not([disabled])',
    'input[type="checkbox"]:not([disabled])',
    'input[type="submit"]:not([disabled])',
    'select:not([disabled])'
];

const config = {
    tabTrapEls
}

export default config;