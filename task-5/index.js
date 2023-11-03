const circleClass = document.querySelectorAll('.circle');

circleClass.forEach((element) => {
    const attributeValue = element.getAttribute('data-anim');
    
    element.classList.add(attributeValue);
    

});
