document.querySelector('.btn').addEventListener('click', function(){
    const inputs = document.querySelectorAll('.arr');
    let outputHTML = '';

    inputs.forEach(input => {
        const getDataForm = input.getAttribute('data-form');
        const getValue = input.value;
        outputHTML += `<p>${getDataForm}: ${getValue}</p>`;
    });
    const outBlock = document.querySelector('.out');
    outBlock.innerHTML = outputHTML;
});


