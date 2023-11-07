const title = document.querySelector('h1')
 title.classList.add('title');

const elementsP = document.querySelectorAll('#myDiv p');
const names = ['first', 'second', 'third', 'four'];
for (let i = 0; i < elementsP.length; i++) {
    elementsP[i].classList.add(`${names[i]}__paragraph`);
}

const elementsLi = document.getElementById('myList');
elementsLi.style = 'display:flex; list-style:none;'

document.querySelector('span').hidden = true;



