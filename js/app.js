'use strict';

function generateRandomIndex() {
    return Math.floor(Math.random() * Product.allProduct.length);
}

let leftIndex;
let middleIndex;
let rightIndex;
let count = 0;
let maxAttempt = 25;
Product.allProduct = [];
let leftProductElement = document.getElementById('left-image');
let middleProductElement = document.getElementById('middle-image');
let rightProductElement = document.getElementById('right-image');



function Product(name, source) {
    this.name = name;
    this.source = source;
    this.timesShow = 0;
    Product.allProduct.push(this)
}



new Product('bag', '../img/bag.jpg')
new Product('banana', '../img/banana.jpg')
new Product('bathroom', '../img/bathroom.jpg')
new Product('boots', '../img/boots.jpg')
new Product('breakfast', '../img/breakfast.jpg')
new Product('bubblegum', '../img/bubblegum.jpg')
new Product('chair', '../img/chair.jpg')
new Product('cthulhu', '../img/cthulhu.jpg')
new Product('dog-duck', '../img/dog-duck.jpg')
new Product('dragon', '../img/dragon.jpg')
new Product('pen', '../img/pen.jpg')
new Product('pet-sweep', '../img/pet-sweep.jpg')
new Product('scissors', '../img/scissors.jpg')
new Product('shark', '../img/shark.jpg')
new Product('sweep', '../img/sweep.png')
new Product('tauntaun', '../img/tauntaun.jpg')
new Product('unicorn', '../img/unicorn.jpg')
new Product('usb', '../img/usb.gif')
new Product('water-can', '../img/water-can.jpg')
new Product('wine-glass', '../img/wine-glass.jpg')

console.log(Product.allProduct);


function renderThreeProduct() {
    leftIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();

    while (leftIndex === middleIndex || leftIndex === rightIndex || rightIndex === middleIndex) {
        leftIndex = generateRandomIndex();
        middleIndex = generateRandomIndex();
        rightIndex = generateRandomIndex();
    }
    leftProductElement.src = Product.allProduct[leftIndex].source;
    middleProductElement.src = Product.allProduct[middleIndex].source;
    rightProductElement.src = Product.allProduct[rightIndex].source;
    Product.allProduct[leftIndex].timesShow++;
    Product.allProduct[middleIndex].timesShow++;
    Product.allProduct[rightIndex].timesShow++;
    console.log(Product.allProduct[leftIndex]);
    console.log(Product.allProduct[middleIndex]);
    console.log(Product.allProduct[rightIndex]);
}
renderThreeProduct();


leftProductElement.addEventListener('click', handleClicking);
middleProductElement.addEventListener('click', handleClicking);
rightProductElement.addEventListener('click', handleClicking);

function handleClicking(event) {
    count++;
    if (maxAttempt >= count) {
        renderThreeProduct();
    } else {
        renderList();
        leftProductElement.removeEventListener('click', handleClicking);
        middleProductElement.removeEventListener('click', handleClicking);
        rightProductElement.removeEventListener('click', handleClicking);
    }
}


function renderList() {
    let ul = document.getElementById('unList');
    for (let i = 0; i < Product.allProduct.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = ` ${Product.allProduct[i].name} it is show  ${Product.allProduct[i].timesShow} times `;

    }

}


