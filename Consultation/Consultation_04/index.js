// Примитивные типы данных 

// 1. String
let str = 'Hello "world"!';
let str2 = "Hello";

// 2. Number
let num = 10;
let num2 = 10.5;
// Диапозон
console.log(Number.MAX_SAFE_INTEGER);

// 3. bigInt
// Если вам нужно работать с большими числамими и пишется он постфиксом n
let num3 =1239n

// 4. Boolean
let bool = true;
let bool2 = false;

let isDrunk = true;
// условная конструкция
if (isDrunk){
    console.log("Давай давай опа опа па")
}
// тернарная конструкция
const result = isDrunk ? "пьяный" : "трезвый";

// 5. undefined
let undef;
console.log(undef);

// 6. null
let nullVar = null;
console.log(nullVar);

// 7. symbol
let sym = Symbol();
let sym2 = Symbol();

// ПРЕОБРАЗОВАНИЕ ТИПОВ
//1 Преобразование в строку
// неявное преобразование
 let str7 = "" + 9; //
 console.log(str7);
 // явное преобразование из любого другого типа 
 const num4 = 10;
 let str8= String(num4);// '10'
 console.log(str8);
const res = 9 + 12 + +"5";
console.log(res);
const res2 = "5" + 9 + 12;
console.log(res2);

const res3 =  + "5";
console.log(typeof res3);
const sum = +"9" +  +"12";
console.log(sum);

// явное преобразование в число
const num6 = Number("118");// 118
console.log(typeof num6);
const  num7 = Number("129%^#");// NaN
console.log(typeof num7);

// 2. Преобразование в булевое значение
const bool3 = Boolean(0);// false
console.log(bool3);
const bool4 = Boolean(1);// true
console.log(bool4);
const res7 = Boolean(NaN);
console.log(res7);

// преобразование строки в boolean
const res8 = Boolean("hey");
console.log(res8);

const res9 =Boolean(" ");
console.log(res9);

const res10 =Boolean(null);
console.log(res10);

const res11 = Boolean(undefined);
console.log(res11);

// Равенство строгое vs нестрогое
console.log(9==="9");// false
console.log(9=="9");// true


// Методы массивов

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.push(11); // добавляем элемент в конец массива
numbers.unshift(0)// добавляем элемент в начало массива
numbers.pop()   // удаляем последний элемент массива
numbers.shift() // удаляем первый элемент массива
numbers.splice(0, 1); // удаляем первый элемент массива
numbers.reverse(); // переворачиваем массив
numbers.sort(); // сортируем массив

