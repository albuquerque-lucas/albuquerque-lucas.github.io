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








// //TECNOLOGIAS

// //CONTEUDO DAS TECNOLOGIAS POR ID
// const htmlContent = document.querySelector('#html-content');
// const cssContent = document.querySelector('#css-content');
// const javascriptContent = document.querySelector('#javascript-content');
// const phpContent = document.querySelector('#php-content');


// //CORES USADAS PARA CADA TECNOLOGIA
// const htmlColor = 'rgb(206, 18, 18)';
// const cssColor = 'rgb(152, 193, 217)';
// const javascriptColor = 'rgb(245, 131, 1)';
// const phpColor = 'rgb(171,0,255)';
// const borderThickness = '2px';

// function iluminateCard(tecnologyCard, tecnologyContent){

//     const card = document.querySelector(tecnologyCard);
//     const content = document.querySelector(tecnologyContent);


//     const tecnolofyBrief = document.querySelector('.tecnology-brief');
//     let tecnologyBriefChild = tecnolofyBrief.querySelector(tecnologyContent);

//     card.addEventListener('mouseover', event=>{
//         event.preventDefault();

//         changeProperties(tecnologyBriefChild, htmlContent, htmlColor, content);
//         changeProperties(tecnologyBriefChild, cssContent, cssColor, content);
//         changeProperties(tecnologyBriefChild, javascriptContent, javascriptColor, content);
//         changeProperties(tecnologyBriefChild, phpContent, phpColor, content);


//     })

//     card.addEventListener('mouseout', event=>{
//         event.preventDefault();

//         tecnolofyBrief.style.boxShadow = 'none';
//         tecnolofyBrief.style.border = 'none';
//         content.style.display = 'none';
//     })
// }

// function changeProperties(listItem, itemWithId, color, content)
// {
//     const tecnologyBrief = document.querySelector('.tecnology-brief');

//     if(listItem === itemWithId)
//     {
//         tecnologyBrief.style.boxShadow = `0 0 15px ${color}`;
//         tecnologyBrief.style.border = `${borderThickness} solid ${color}`;
//         tecnologyBrief.style.borderLeft = 'none';
//         content.style.display = 'block';
//     }
// }

// iluminateCard('#card-html','#html-content');
// iluminateCard('#card-css', '#css-content');
// iluminateCard('#card-javascript','#javascript-content');
// iluminateCard('#card-php', '#php-content');