const paragraphElement = document.getElementById("text");
const changeButtonElement = document.getElementById("btn-change");
const flowerElement = document.getElementById("flowers");
const changeFlowerButtonElement = document.getElementById("btn-change-flower");
const pandaImageElement = document.getElementById("panda");
const pandaButtonElement = document.getElementById("add-panda");

// мы можем повесить на кнопку слушатель событий
// когда произойдет событие клика - то есть нажатие на кнопку
// слушатель событи вызовет тот код, который ме ему предоставили
// addEventListener принимает в себя название события: 'click'
// и колбек-функция(callback) - это функция которую можно будет вызвать при определенных условиях

changeButtonElement.addEventListener('click', ()=>{
    paragraphElement.style.backgroundColor = "yellow";
} )

changeFlowerButtonElement.addEventListener('click', ()=>{
    flowerElement.textContent = "Ягодки"
})

pandaButtonElement.addEventListener('click', ()=>{
    pandaImageElement.src = "https://i.pinimg.com/236x/79/93/21/7993211d8980249cfa7059daf45abeb4.jpg"
})