// Время компиляции(compilation time) vs Время выполнения (runtime)
// Когда лучше обнаружить ошибку?
// - на этапе

// Плюсы использования ts:
// - безопасность типов (обнаружение ошибок на этапе компиляции)
// - удобнее работать в команде
// - транспиляция в любую удобную нам вверсию js

// Минусы:
// 


// Может ли браузер воспроизвести ts?
// нет, не может.
// Поэтому ts код преобразуется в какую-то определенную версию js - и только тогда браузер его может прочитать  

// Как можно задать тип переменной:
// - явно (эксплицитно)
// - неявно (имплицитно)

let x = 10;
// определился ли тип у переменной?
// x = "apple"; // здесь будет ошибка - нельзя присвоить string переменной с типом number

// Пример явного определения типа
let y: number = 10;

// определить тип переменной - объявление переменной
let z: string; // в JAVA  выглядело бы как String z;

// Primitive types
let isDrunk: boolean = false;
let fName: string = "John";

// Union type
// либо string либо number
let age: string | number;
age = 10;
age = "10";

// Union type string | number

// Можно указать какой-то определенный string
let gender: "male" | "female";

gender = "male";

// Мы можем сохранить юнион тип отдельно
// создал тип. Типы пишутся с большой буквы!!!
type Gender = "male" | "female";
// Объявил переменную указанного типа Gender - и инициализировал
let myGender: Gender = "male";
// let katerinasGender: Gender = "cat"; // здесь будет ошибка

// Допустим сделать тип для расширенного пола - "non-binary-person"

type ExtendedGender = Gender | "non-binary-person";

let firstPersonGender: ExtendedGender = "male";
let secondPersonGender: ExtendedGender = "female";
let thirdPersonGender: ExtendedGender = "non-binary-person";
// let fourthPersonGender: ExtendedGender = "cat"; // будет ругаться

// создайте тип NordenFruits - северный фрукт - пусть в него входят: яблоко, груша, слива - apple, pear, plum

// создайте тип ExoticFruit - mango, papaya, passion fruit

// создайте тип Fruit - включает все эти фрукты

// создайте несколько переменных указанных типов

type NordenFruit = "apple" | "pear" | "plum";

type ExoticFruit = "mango" | "papaya" | "passion fruits" | "orange";

type UniversalFruit = NordenFruit | ExoticFruit;

let myFavoriteFruit: UniversalFruit = 'mango';

let UniversalFruit = "plum";

let NordenFruit = "pear";

const ExoticFruit = "mango";

let bestNorthFruits: NordenFruit = 'apple';

// Как типизировать массив?
// массив фруктов
const fruits: UniversalFruit[] = ["apple", "mango", "orange"];

const ages: number[] = [17, 35, 18, 84, 65, 30];

// TUPLE - картеж - достаточно редко используется
// по сути это массив - у которого на разных позициях разные типы
type Info = [string, number, boolean];
const infoAlisher: Info = ["Alisher", 29, true];

// Как типизировать объекты?
// первый способ - через type - пишем имя свойство: тип - через точку с запятой
type User = { name: string; age: number };

const vitaliy: User = {
    name: "Vitaliy",
    age: 33,
};

// INTERFACE - это еще один способ типизации для объекта
// второй способ - предпочтительный - через слово interface

interface Product {
    price: number;
    title: string;
}

const iphone: Product = {price: 300, title: "iPhone 13"};
const specialPrice = 250;
const price = 350;
const iphone2: Product = {price: specialPrice, title: "iPhone 15"};
const iphone3: Product = {price, title: "iPhone 15"};

// можно наследовать один от другого
interface ProductWithDescription extends Product {
    description: string; // указал поле, которым хочу расширить Product
}

const newProduct: ProductWithDescription = {
    description: "wonderful apple pie, just like your grandmas",
    price: 10,
    title: "apple pie"
}

// Задание 2
// Создайте интерфейс Parrot - с полем имя
// создайте интерфейс Pirate - c полями name, parrot и weapon ("saber" or "pistol")
// Создайте интерфейс Captain расширяющий интерфейс Pirate
// + одно поле - название корабля - shipTitle

// Создайте объекты под эти интерфейсы

interface Parrot {
    name: string;
}

type Weapon = "saber" | "pistol";

interface Pirate {
    name: string;
    parrot: Parrot;
    weapon: Weapon;
}

interface Captain extends Pirate {
    shipTitle: string;
}

// создадим объекты
const popka: Parrot = {
    name: "Popka",
};

const blackBeard: Pirate = {
    name: "Black Beard",
    parrot: popka,
    weapon: "saber"
}

const capitanSparrow: Captain = {
    name: "Jack Sparrow",
    parrot: popka,
    weapon: "pistol",
    shipTitle: "Black Pearl"
}

// :any - любой - лучше избегать any

// Как типизировать функции?
// что принимает? какие параметры
// что возвращает? какой тип возвращаемого значения - если никакой - можно написать void

function sum(a: number, b: number): number {
    return a + b;
}

const res = sum(10, 15);
console.log(res); // 25

// пример 2 - когда функция ничего не возвращает
function printNumber(a: number): void {
    console.log(a);
}

// Как типизировать стрелочную функцию?
const subtract = (a: number, b: number): number => a - b;

// Пример 3 - напишем функцию проверки возраста для алкоголя
// если возраст >= 21 - возвращает true
// если нет - то false
const isMature = (age: number): boolean => {
    if (age >= 21) {
        return true;
    }
    return false;
}

const luisaAge = 15;
console.log(isMature(luisaAge));

// enum
enum Size {
    SMALL = 150,
    MIDDLE = 200,
    BIG = 350,
}

console.log(Size.SMALL);
console.log(typeof Size.SMALL); // number
console.log(typeof Size); // object

