const arr = ['one', 'two', 'threE', 'eight', 'tHree', 'three', 'six'];
let res = arr.indexOf('three');
console.log(res);
console.log('==================================');

res = arr.includes('nine');
console.log(res);
console.log('==================================');

res = arr.findIndex((e, index) => index > 2 && e.toLowerCase() === 'three');
console.log(res);

// const predicateLength3 = (e, index) => index >= 2 && e.length === 3;
// res = arr.findIndex(predicateLength3);
res = arr.findIndex((e, index) => index >= 2 && e.length === 3);
console.log(res);
console.log('==================================');

const persons = [
    {
        name: 'Peter',
        age: 23
    },
    {
        name: 'John',
        age: 28
    },
    {
        name: 'Tigran',
        age: 26
    },
    {
        name: 'Rabindranate',
        age: 23
    }
];
res = persons.findIndex((p, i) => i >= 1 && p.age < 25);
console.log(res);
console.log('==================================');

persons.forEach((p, i) => console.log(`${i + 1}) ${p.name}, age: ${p.age}`));

// res = [];
// persons.forEach(p => {
//     if (p.age < 25){
//         res.push(p);
//     }
// })
// console.log(res);
console.log('==================================');

res = persons.filter(p => p.age < 25);
console.log(res);
console.log('==================================');

res = persons.map((p, i) => `${i + 1}) ${p.name}, age: ${p.age}`);
console.log(res);
console.log('==================================');

res = persons.map((p, i) => document.createTextNode(`${i + 1}) ${p.name}, age: ${p.age}`));
console.log(res);
console.log('==================================');

res = persons.map((p, i) => {
    const paragraph = document.createElement('p');
    paragraph.append(`${i + 1}) ${p.name}, age: ${p.age}`);
    return paragraph;
});
console.log(res);
console.log('==================================');

persons.filter(p => p.age > 23)
    .map((p, i) => `${i + 1}) ${p.name}, age: ${p.age}`)
    .map(s => document.createTextNode(s))
    .map(t => {
        const p = document.createElement('p');
        p.append(t);
        return p;
    })
    .forEach(p => document.body.append(p));
console.log('==================================');

const numbers = [5, 9, 11, 2, 7, 13, 2];
res = numbers.reduce((accum, e) => accum + e);
console.log(res);
console.log('==================================');

res = numbers.reduce((accum, e) => accum + e, 'Concat = ');
console.log(res);
console.log('==================================');

res = numbers.reduce((accum, e) => accum * e);
console.log(res);
console.log('==================================');

res = persons.reduce((accum, p) => accum + p.age, 0) / persons.length;
console.log(res);
console.log('==================================');

res = numbers.reduce((max, n) => n > max ? n : max);
console.log(res);
console.log('==================================');

numbers.sort((a, b) => a - b);
console.log(numbers);
console.log('==================================');

persons.sort((p1, p2) => p2.age - p1.age);
console.log(persons);