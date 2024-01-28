// Number
let a = -10.7;
let res = Math.floor(a);
console.log(res);
res = Math.round(a);
console.log(res);
res = Math.trunc(a);
console.log(res);

console.log(Math.PI);
res = Math.pow(2, 4);
console.log(res);
res = Math.random();
console.log(res);
a = 2.718281828;
res = a.toFixed(2);
console.log(res);

// String
a = '    Two beer or not two beer     ';
console.log(a);
a = a.trim();
console.log(a);

res = a.split(' ');

console.log(res);
res = a.toUpperCase();
console.log(res);
res = a.toLowerCase();
console.log(res);

console.log(a.length);

res = a.charAt(2);
console.log(res);
res = a[2];
console.log(res);

res = a.indexOf('ee');
console.log(res);

res = a.substring(4, 8);
res = a.slice(4, 8);
console.log(res);