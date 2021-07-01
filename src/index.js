'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import scroll from './modules/scroll';
import tabs from './modules/tabs';
import slider from './modules/slider';
import commandBlock from './modules/commandBlock';
import formsRules from './modules/formsRules';
import calc from './modules/calculator';
import sendForm from './modules/sendForm';

//!timer
countTimer('18 june 2023');

//!menu
toggleMenu();

//!popup
togglePopUp();

//!scroll
scroll();

//! табы
tabs();

//!slaider
slider();

//! comands
commandBlock();

//!questions
formsRules();

//!calculator
calc(100);

//! send-ajax-form
sendForm();
