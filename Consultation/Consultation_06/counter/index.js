const plusBtnElement = document.getElementById("plus");
const minusBtnElement = document.getElementById("minus");
const counterElement = document.getElementById("counter")

let counter = 0;

const plusHandler = ()=>{
    counter++;
    counterElement.innerText = counter;
}

const  minusHandler = ()=>{
    counterElement.innerText = --counter;
}

plusBtnElement.addEventListener('click', plusHandler);
minusBtnElement.addEventListener('click', minusHandler);