// Создать интерфейс город City
//  со следующими свойствами:
//  name
//  population
// riversName - опциональное поле названия реки
// isCapital - опциональное поле является ли город столицей
// isTouristic - опциональное поле является ли город туристическим
// Создайте  объктов для этого интерфейса
// Дополнительно сделайте интерфейс расширяющий город
//  со следующими свойствами: добавить дату основания


//Опциональные поля

interface Food {
    title: string;
    isSweet?:boolean;
}
const pancake: Food = {title:"Pancakes", isSweet:true};
const carrot:Food ={title:"Carrot"}
console.log(pancake)
console.log(carrot)





