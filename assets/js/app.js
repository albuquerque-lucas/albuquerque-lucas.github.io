import {Menu} from './Classes/Menu.js';
import { TecnogyHoverEffect } from './Classes/TecnologyHoverEffect.js';

const navbarMenu = document.querySelector('#navbar');
const trigger = document.querySelector('#menu-trigger');
const tecnologyBrief = document.querySelector('.tecnology-brief');

const cardHTML = document.querySelector('#card-html');
const cardCSS = document.querySelector('#card-css');
const cardJavacript = document.querySelector('#card-javascript');
const cardPHP = document.querySelector('#card-php');

const htmlId = '#html-content';
const cssId = '#css-content';
const javascriptId = '#javascript-content';
const phpId = '#php-content';

const contentHTML = document.querySelector(htmlId);
const contentCSS = document.querySelector(cssId);
const contentJs = document.querySelector(javascriptId);
const contentPHP = document.querySelector(phpId);

const htmlColor = 'rgb(206, 18, 18)';
const cssColor = 'rgb(152, 193, 217)';
const javascriptColor = 'rgb(245, 131, 1)';
const phpColor = 'rgb(171,0,255)';

const menu = new Menu(navbarMenu, trigger);
const tecnogyHoverEffectHTML = new TecnogyHoverEffect(cardHTML, contentHTML, tecnologyBrief, htmlColor, htmlId);
const tecnogyHoverEffectCSS = new TecnogyHoverEffect(cardCSS, contentCSS, tecnologyBrief, cssColor, cssId);
const tecnogyHoverEffectJs = new TecnogyHoverEffect(cardJavacript, contentJs, tecnologyBrief, javascriptColor, javascriptId);
const tecnogyHoverEffectPHP = new TecnogyHoverEffect(cardPHP, contentPHP, tecnologyBrief, phpColor, phpId);


menu.handle();
tecnogyHoverEffectHTML.iluminateCard();
tecnogyHoverEffectCSS.iluminateCard();
tecnogyHoverEffectJs.iluminateCard();
tecnogyHoverEffectPHP.iluminateCard();