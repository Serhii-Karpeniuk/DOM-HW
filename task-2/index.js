const title = document.querySelector('h1')
title.classList.add('title');

const firstParagraph = document.querySelector('#myDiv p:first-child');
firstParagraph.classList.add('first__paragraph');

const secondParagraph = document.querySelector('#myDiv p:nth-child(2)');
secondParagraph.classList.add('second__paragraph');

const thirdParagraph = document.querySelector('#myDiv p:nth-child(3)');
thirdParagraph.classList.add('third__paragraph');

const fourParagraph = document.querySelector('#myDiv p:nth-child(4)');
fourParagraph.classList.add('four__paragraph');

const firstElement = document.querySelector('#myList li:first-child');
const secondElement = document.querySelector('#myList li:nth-child(2)');
const thirdElement = document.querySelector('#myList li:nth-child(3)');

const concat = firstElement.innerText + secondElement.innerText + thirdElement.innerText;
// console.log(concat)

const remove = document.querySelector('span')
remove.remove();



// title.innerHTML += (' Serhii Developer')
// console.log(title)