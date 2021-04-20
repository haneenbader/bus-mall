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
let arrayOFShown = [];
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

    previousProduct = [leftIndex, middleIndex, rightIndex];

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
        arrayOFShown.push(Product.allProduct[i].timesShow);
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = ` ${Product.allProduct[i].name} it is show  ${Product.allProduct[i].timesShow} times and its have ${Product.allProduct[i].votes} votes . `;
    }
}
console.log(arrayOfVotes);


function saveToLs() {
    let allProductSaved = JSON.stringify(Product.allProduct);
    localStorage.setItem('allProductSaved', allProductSaved);

}


function gettingVotesFromLs() {
    let dataVotes = localStorage.getItem('allProductSaved')
    console.log(dataVotes);
   let  previousArrayOfVotes = JSON.parse(dataVotes);
    if (previousArrayOfVotes !== null) {
        Product.allProduct = previousArrayOfVotes;
    }
}
gettingVotesFromLs();




button.addEventListener('click', showingList);

function showingList() {
    if (count > maxAttempt) {
        saveToLs();
        renderList();
        chart();
        button.removeEventListener('click', showingList)
       
    }
}




function chart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrayOfName,
            datasets: [{
                label: ' Votes product',
                data: arrayOfVotes,
                backgroundColor: 'rgba(235, 151, 78, 1)',
                borderWidth: 1
            }, {
                label: ' shown product',
                data: arrayOFShown,
                backgroundColor: 'rgba(149, 165, 166, 1)',
                borderWidth: 1
            }
            ]
        }

    })
}

