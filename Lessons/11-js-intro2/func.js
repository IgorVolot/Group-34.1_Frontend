// const subtract = function (a, b) { // function through variable should be written in the beginning only
//     return a - b;
// }

const subtract = (a, b) => a - b; // "arrow function" in the beginning only

const pow2 = a => a * a;  // "arrow function"

console.log(typeof subtract);
console.log(typeof add);
console.log(typeof pow2);
console.log(subtract);
console.log(add);
console.log(pow2);
const fn1 = subtract;
const fn2 = add;

let res = add(5, 3);
console.log(`sum = ${res}`);
res = subtract(5, 3);
console.log(`subtract = ${res}`);
// subtract = 42;
res = fn1(12, 7);
console.log(`subtract = ${res}`);
res = fn2(10, 7);
console.log(`sum = ${res}`);
res = pow2(7);
console.log(`pow2 = ${res}`);

console.log('==========================')
res = uniFunction(4, pow2, x => x + 10);
console.log(`res = ${res}`);
res = uniFunction(-3, pow2, x => x + 10);
console.log(`res = ${res}`);
res = uniFunction(10, x => x * 3, x => x / 3);
console.log(`res = ${res}`);
res = uniFunction(10, 20, 30);
console.log(`res = ${res}`);


function uniFunction(a, fn1, fn2) {  // a = 4, fn1 = pow2, fn2 = x => x + 10
    a = +a; // the same as  typeof a = Number
    if (isNaN(a) || !isFinite(a) || typeof fn1 !== 'function' || typeof fn2 !== 'function') {
        return 'Error';
    }
    if (a < 0) {
        return fn1(a);
    } else {
        return fn2(a);
    }
}

function add(a, b) {  // function declaration in any place of code
    return a + b;
}