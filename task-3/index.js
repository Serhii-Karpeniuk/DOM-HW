document.addEventListener("DOMContentLoaded", function () {
    const newElement = document.createElement('main');
    const divElement = document.createElement('div');
    const paragraphElement = document.createElement('p');

    newElement.className = 'mainClass check item';
    divElement.id = "myDiv";

    document.body.appendChild(newElement);
    newElement.appendChild(divElement);
    divElement.appendChild(paragraphElement);

    paragraphElement.innerHTML = 'First paragraph';

    const script = document.querySelector('script');
    newElement.after(script);
});
