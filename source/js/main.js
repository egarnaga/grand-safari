import {ieFix} from './utils/ie-fix';

import {initModals} from './modules/init-modals';

import {openMenu} from './modules/openMenu';

import {smoothScroll} from './modules/smoothScroll';

// Utils
// ---------------------------------

ieFix();

// Modules
// ---------------------------------

initModals();
openMenu();
smoothScroll();
