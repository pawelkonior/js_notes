// dzień 2, z.1 DOM API
//
// const h1Tag = document.querySelector('h1');
// const h1Tag2 = document.getElementsByTagName('h1');
// const title = document.querySelector('.title');
// const title2 = document.getElementsByClassName('title');
// const dataAnimation = document.querySelector('[data-animation]');
//
// // console.log(h1Tag);
// // console.log(title);
// // console.log(dataAnimation);
//
// // dzień 2, z.2 DOM API
// const divNo = document.querySelectorAll('div').length
// // console.log(divNo);
// const offersNo = document.querySelectorAll('.oferts').length
// // console.log(offersNo);
// const hrefNo = document.querySelectorAll('[href]').length
// // console.log(hrefNo);
//
// const home = document.querySelector('#home')
// const home2 = document.getElementById('home');
// // console.log(home2);
//
// const liTag = document.querySelector('li[data-direction]:first-child');
// const liTag2 = document.querySelectorAll('li[data-direction]')[0];
// // console.log(liTag2);
//
// const block = document.getElementsByClassName('block')[0];
// const block2 = document.querySelector('.block');
// // console.log(block);
//
// const liTags = document.querySelectorAll('nav:not(.navbar) li');
// // console.log(liTags);
// const paragraphs = document.querySelectorAll('div p');
// const divs2 = document.getElementsByTagName('div');
//
// const paragraphs2 = [];
//
// for (const div of divs2) {
//     const result = div.getElementsByTagName('p');
//     if (result.length) {
//         paragraphs2.push(result);
//     }
// }
//
//
// // console.log(paragraphs2);
// // console.log(paragraphs)
//
// const selector = 'article.first';
//
// const articleTag = document.querySelector(selector);
// const h2Counter = articleTag.querySelectorAll('h2');
// console.log(h2Counter.length);
//
//
// // dzień 2, z.1 DOM API Attributes
//
// function getDataInfo(elements) {
//     const data = [];
//
//     elements.forEach((element) => {
//         if (Object.keys(element.dataset).length) {
//             data.push(element.dataset)
//         }
//     });
//
//     return data;
// }
//
// // const getDataInfo2 = (elements) => [...elements]
// //     .filter((element) => Object.keys(element.dataset).length)
// //     .map((element) => element.dataset);
//
// const links = document.querySelectorAll('li');
// // console.log(getDataInfo(links));


const home = document.getElementById("home");
const children = document.querySelector(".oferts").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
// const listElements = document.querySelector(".links").querySelectorAll("li");

// for (const child of children){
//     console.log(child.tagName, child.classList, child.getAttribute('class'))
// }

// someBlocks.forEach((block) => {
//     console.log(block.tagName, block.getAttribute('class'));
// })

// for (let i = 0; i < someBlocks.length; i++){
//     someBlocks[i].innerText = 'Nowa wartość diva o klasie blocks';
// }
//
// for (const block of someBlocks){
//     block.innerText = 'Eluwina';
// }
//
// someBlocks.forEach((block) => {
//     block.innerText = 'Xd';
// })

const superFooter = document.querySelector('.superFooter');

function getId(element){
    if (element === null){
        throw new Error('Something is no yes!');
    }
    // element.getAttributes('id')
    return element.id;
}



try {
    console.log(getId(superFooter));
} catch (error) {
    console.log(error);
}




