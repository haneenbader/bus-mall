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
let container = document.getElementById('sec-one');
let button = document.getElementById('btn');
let arrayOfName = [];




function Product(name, source) {
    this.name = name;
    this.source = source;
    this.timesShow = 0;
    this.votes = 0;
    Product.allProduct.push(this)
    arrayOfName.push(this.name)
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

let previousProduct = [];

function renderThreeProduct() {
    leftIndex = generateRandomIndex();
    middleIndex = generateRandomIndex();
    rightIndex = generateRandomIndex();

    while (leftIndex === middleIndex || leftIndex === rightIndex || rightIndex === middleIndex || previousProduct.includes(leftIndex) || previousProduct.includes(middleIndex) || previousProduct.includes(rightIndex)) {
        leftIndex = generateRandomIndex();
        middleIndex = generateRandomIndex();
        rightIndex = generateRandomIndex();

    }
    leftProductElement.src = Product.allProduct[leftIndex].source;
    Product.allProduct[leftIndex].timesShow++;
    middleProductElement.src = Product.allProduct[middleIndex].source;
    Product.allProduct[middleIndex].timesShow++;
    rightProductElement.src = Product.allProduct[rightIndex].source;
    Product.allProduct[rightIndex].timesShow++;
    // console.log(Product.allProduct[leftIndex]);
    // console.log(Product.allProduct[middleIndex]);
    // console.log(Product.allProduct[rightIndex]);
    //     for (let i = 0; i < previousProduct.length; i++) {
    //         while (previousProduct[i] === Product.allProduct[leftIndex].name || previousProduct[i] === Product.allProduct[middleIndex].name || previousProduct[i] === Product.allProduct[rightIndex.name]) {
    // console.log(Product.allProduct[leftIndex].name);
    // console.log(previousProduct);
    //             leftIndex = generateRandomIndex();
    //             middleIndex = generateRandomIndex();
    //             rightIndex = generateRandomIndex();
    //         }
    //     }
    //     console.log(Product.allProduct[leftIndex].name);
    //     console.log(previousProduct);
    previousProduct[0] = leftIndex;
    previousProduct[1] = middleIndex;
    previousProduct[2] = rightIndex;
}

renderThreeProduct();

container.addEventListener('click', handleClicking);

function handleClicking(event) {
    count++;
    if (maxAttempt >= count) {
        if (event.target.id === 'left-image') {
            Product.allProduct[leftIndex].votes++;
        } else if (event.target.id === 'right-image') {
            Product.allProduct[rightIndex].votes++;
        } else if (event.target.id === 'middle-image') {
            Product.allProduct[middleIndex].votes++;
        } else {
            alert('you should click on the image');
            counts--;
        }
        renderThreeProduct();

        // previousProduct = [Product.allProduct[leftIndex].name, Product.allProduct[middleIndex].name, Product.allProduct[rightIndex].name];
        // console.log(previousProduct);

    }
    else {

        container.removeEventListener('click', handleClicking);
    }
}

let arrayOfVotes = [];
function renderList() {
    let ul = document.getElementById('unList');
    for (let i = 0; i < Product.allProduct.length; i++) {
        arrayOfVotes.push(Product.allProduct[i].votes);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = ` ${Product.allProduct[i].name} it is show  ${Product.allProduct[i].timesShow} times and its have ${Product.allProduct[i].votes} votes . `;
    }
}


button.addEventListener('click', showingList);

function showingList() {
    if (count > maxAttempt) {
        renderList();
        chart();
        button.removeEventListener('click', showingList)
    }
}
function chart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayOfName,
            datasets: [{
                label: ' Votes product',
                data: arrayOfVotes,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1
            }]
        },

    });
}

