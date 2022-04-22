import config from "./config"
const { tabTrapEls } = config;

import pressEnter from "./_press-enter";
import pressSpace from "./_press-space";
import tabTrap from "./_tab-trap";

export let accessibilityTest = (() => {
    let init = () => {
        pressEnter();
        pressSpace();
        tabTrap(tabTrapEls);
    }

    return {
        init
    };
})();