// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock


// const submitButton = document.querySelector('.btn')

document.querySelector('.btn').addEventListener('click', function(){
    const fullName = document.querySelector('.text-data.arr').value;
    const phoneNumber = document.querySelectorAll('.arr')[1].value;
    const birthDate = document.querySelectorAll('.arr')[2].value;
    const emailInput = document.querySelectorAll('.arr')[3].value;

    const outBlock = document.querySelector('.out');
    outBlock.innerHTML = `<p>ПІБ: ${fullName}</p>
                          <p>Номер телефону: ${phoneNumber}</p> 
                          <p>Дата народження: ${birthDate}</p>
                          <p>Емейл: ${emailInput}</p>`
});

