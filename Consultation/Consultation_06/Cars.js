const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const newCars = cars.map((car)=>{
    return { brand: car.brand, isDiesel: car.isDiesel}
});
console.log(newCars)

//Задание 2 
//Создать массив в котором будут только дизельные машины

const dieselCars =cars.filter((car)=> car.isDiesel)
console.log(dieselCars)

// Задание 3 
const nondieselCars =cars.filter((car)=> !car.isDiesel)
console.log(nondieselCars)

//Задача 4
//Посчитать общую стоимость всех машин не с дизельным двигателем
const sum =cars
.filter((car)=>!car.isDiesel)
.map((car)=> car.price)
.reduce((acc, price )=> acc + price, 0);
console.log(sum)

// Задача 5
// Повысить цену всех машин в массиве на 20%
cars.forEach((car)=> car.price *= 1.2)
console.log(cars)

// Задача 6 
//Создать новый массив  где все дизельные машины будут заменены на Tesla
// { brand: "Tesla", price: 25000, isDiesel:false}

const cars3 = cars.map((car)=>
car.isDiesel ? {brand: "Tesla", price: 25000, isDiesel:false }: car)
console.log(cars3)
