const circleClass = document.querySelectorAll('.circle');

circleClass.forEach((element) => {
    const attributeValue = element.getAttribute('data-anim');

    console.log(attributeValue);
    element.classList.add(attributeValue);
    

});
