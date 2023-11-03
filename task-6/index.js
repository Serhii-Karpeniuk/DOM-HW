const colors = document.querySelectorAll('.color');
const imageChange = document.querySelectorAll('.shoe');
const sizes = document.querySelectorAll('.size');

let discount = 0;

document.addEventListener("DOMContentLoaded", function() {
    const defaultActiveColor = document.querySelector('.color[color="red"]');
    defaultActiveColor.classList.remove('active');
});

function toggleImageShow(color, img) {
    if (img.getAttribute('color') === color.getAttribute('color')) {
        img.classList.toggle('show');
    } else {
        img.classList.remove('show');
    }
}

function updatePrice(color) {
    const oldPrice = document.getElementById("oldprice");
    const newPrice = document.getElementById("newprice");

    const allPrice = parseInt(color.getAttribute('data-price'));
    let discount = parseInt(color.getAttribute('data-discount'));

    if (color.getAttribute('color') === 'green') {
        discount = 9; 
    } else {
        discount = 0;
    }

    const finalPrice = allPrice - discount;

    oldPrice.innerText = allPrice;
    if (color.getAttribute('color') === 'green') {
        newPrice.innerText =  finalPrice;
    } else {
        newPrice.innerText = "";
    }

    if(color.getAttribute('color') !== 'green') {
        oldPrice.classList.add('line__throught')
    } else {
        oldPrice.classList.remove('line__throught')
    }
}


colors.forEach(function(color) {
    color.addEventListener('click', function() {
        imageChange.forEach(function(img) {
            toggleImageShow(color, img);
        });

        updatePrice(color);

        colors.forEach(function(item){
            if(item !== color) {
                item.classList.remove('active')
            } 
        });

        color.classList.toggle('active')
    });
});

sizes.forEach(function(size) {
    size.addEventListener('click', function() {
        const price = parseInt(size.getAttribute('data-price'));
        const oldPrice = document.getElementById("oldprice");

        sizes.forEach(function(item) {
            item.classList.remove('active')
        })

        if (!isNaN(price)) {
            oldPrice.innerText = price;
        };
        if(size.classList.contains('active')) {
            oldPrice.classList.add('active')
        } else {
            oldPrice.classList.remove('active')
        }

        size.classList.toggle('active')
    });
});



