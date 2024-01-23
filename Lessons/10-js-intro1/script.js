console.log("Hello World!");
let a; // undefined
console.log(a);
a = 7;  // not strict data type
console.log(a);
a = 'bye';  // not strict data type
console.log(a);
const pi = 3.1415926;  // strict data type - unable to change
console.log(pi);
// pi = 3.14;
a = true;
console.log(a);
// a = undefined;
// console.log(a);
a = null;
console.log(a);
console.log('pi = ' + pi); // concatination
a = `Hello`;
console.log(a);
const pi1 = 3.14;
a = 'pi = ' + pi + ', or ' + pi1;
console.log(a);
a = `pi = ${pi1}, or ${pi}`;  // шаблонная строка `...`
console.log(a);
let res = 7 % 3;
console.log(`result = ${res}`);
res = 3 ** 4;
console.log(`result = ${res}`);
a = 3 - true;  // true = 1
console.log(a);
a = 3 + true;
console.log(a);
a = 3 * false;  // false = 0
console.log(a);
a = 3 / false;
console.log(a);
a = 0 / 0;
console.log(a);
a = 3 * '5';
console.log(a);
a = 3 * 'five';
console.log(a);
res = 2 == '2'; // equals (value)
console.log(`result = ${res}`);
res = 2 === '2';  // strict equals (type + value)
console.log(`result = ${res}`);

res = '5';
switch (res) {
    case 5:
        console.log(`number: ${res}`);
        break;

    case '5':
        console.log(`string: ${res}`);
        break;
    default:
        console.log(`Not a 5`);
}

res = -res;
console.log(res);
res++;
console.log(res);

console.log('=========== loop =========================');
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log('=========== types =========================');
console.log(typeof res);
res = '5';
console.log(typeof (res));
res = undefined;
console.log(typeof res);
res = null;
console.log(typeof res);  // this is error -   null != object
