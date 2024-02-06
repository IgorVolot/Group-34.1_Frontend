//Спред массива
const fruits = ["apple", "orange", "lime"];
const newFruits =[...fruits, "banana"];

console.log(newFruits)

//Спред объекта
const fruit = { title:"orange",color:"yellow", weight:200};
console.log(fruit)
const specialOrange ={...fruit, country:"Maroco"}
console.log(specialOrange)

const redOrange ={...fruit, color:"red"}
console.log(redOrange)

const cars = [
    { color: "black", brand: "Mercedes" },
    { color: "green", brand: "Mercedes" },
    { color: "blue", brand: "Porsche" },
    { color: "yellow", brand: "Porsche" }
]
// Создать массив и заменить цвет у всех порше на red
const newCars = cars.map((car)=>{
    if (car.brand === "Porsche"){
        return{...car,color:"red"}
    }
    return {...car};
});
console.log(newCars)
console.log(cars)
newCars[0].color = "purple"
console.log(newCars)
console.log(cars)

const panda = {name:"Po", age:18};
const newPanda = panda
newPanda.name = "Vladimir";
console.log(panda)
console.log(newPanda)
// переменные содержат ссылку на один и тот же объект

const giraffe = {name:"Melman", age: 46};
const newGiraffe ={ ...giraffe};
newGiraffe.name = "Simon"
console.log(giraffe)
console.log(newGiraffe)
