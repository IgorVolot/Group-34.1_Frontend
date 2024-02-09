const dogImageElement = document.getElementById("dog-image");

fetch("https://dog.ceo/api/breeds/image/random")// Promise<response>
.then((response)=> response.json()) // Promise <объекта>
.then((obj)=>{
    console.log(obj) //посмотрим какие есть ключи
    const { message } = obj;
    console.log(message)
    dogImageElement.src = message
})