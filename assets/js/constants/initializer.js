import {Menu} from '../Classes/Menu.js';
import { TecnogyHoverEffect } from '../Classes/TecnologyHoverEffect.js';
import { tecnologyBrief, cardHTML, cardCSS, cardJavascript, cardPHP } from './cards.js';
import { htmlId, cssId, javascriptId, phpId, contentHTML, contentCSS, contentJs, contentPHP } from './idQueries.js';
import { htmlColor, cssColor, javascriptColor, phpColor } from './colors.js';
import { navbarMenu, trigger } from './navComponents.js';


const menu = new Menu(navbarMenu, trigger);
const tecnogyHoverEffectHTML = new TecnogyHoverEffect(cardHTML, contentHTML, tecnologyBrief, htmlColor, htmlId);
const tecnogyHoverEffectCSS = new TecnogyHoverEffect(cardCSS, contentCSS, tecnologyBrief, cssColor, cssId);
const tecnogyHoverEffectJs = new TecnogyHoverEffect(cardJavascript, contentJs, tecnologyBrief, javascriptColor, javascriptId);
const tecnogyHoverEffectPHP = new TecnogyHoverEffect(cardPHP, contentPHP, tecnologyBrief, phpColor, phpId);


export { menu, tecnogyHoverEffectHTML, tecnogyHoverEffectCSS, tecnogyHoverEffectJs, tecnogyHoverEffectPHP};