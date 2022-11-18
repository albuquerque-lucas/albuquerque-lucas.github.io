import Menu from "./Classes/Menu";

const menu = new Menu();

menu.handle();






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