let a = true;
let b = false;
let res = a || b;
console.log(res);
res = a && b;
console.log(res);

console.log('===================');
a = 'John';
// let nickName = (a !== null && a !== undefined) ? a : 'Anonymous';
let nickName = a || 'Anonymous';
console.log(nickName);

console.log('===================');
greeting('Rabindranate');

function greeting(name = 'Anonymous') {  // this syntax for undefined ONLY
    // name = name || 'Anonymous';
    // name = name ?? 'Anonymous';   // this is || for only null and undefined

    console.log(`Hello ${name}`);
}