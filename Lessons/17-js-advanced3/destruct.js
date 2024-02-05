console.log('=========  Destructuring of array  ========');

const arr = [2, 3, 5, 7, 11];
let [a, b, ...c] = arr;
console.log(a, b);
console.log(c);

console.log('============ swap ==========');
let x = 10;
let y = 15;
console.log(x, y);
[y, x] = [x, y];
console.log(x, y);

console.log('=========  Destructuring of object  ========');
const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    'my hobby': 'chess'
}

let {firstName: fName, 'my hobby': hobby, lastName, ...rest} = person;
console.log(fName);
console.log(lastName);
console.log(rest);
personInfo(person);
console.log(person['my hobby']);
console.log(hobby);

function personInfo({lastName, age}) {  // let {lastName, age} = person;
    console.log(`${lastName} - ${age}`);
}

