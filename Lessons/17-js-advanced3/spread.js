console.log('===========  Spread Array  =============');
const arr1 = [2, 3, 5];
const arr2 = [7, 11];
const arr3 = [...arr1, 0, ...arr2, 17, 19];
console.log(arr3);
const arrClone = [...arr1];
let res = Math.min(6, 2, 8, 1, 4);
console.log(res);
res = Math.min(...arr3);
console.log(res);

console.log('===========  Spread Object  =============');

const person = {
    firstName: 'John',
    lastName: 'Smith',
    salary: 3600,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    address: {
        city: 'Hamburg',
        street: 'Hauptstrasse',
        building: 3
    },
    salary: 3600,
}
// const personClone = person;
// console.log(personClone === person);
console.log(person);
const job = {company: 'IBM', position: 'developer'};
const personClone = {salary: 3700, ...person, hobby: 'chess', ...job};
console.log(personClone === person);
console.log(personClone);
console.log(person.address === personClone.address);
person.address.building = 5;
console.log(personClone.address.building);
personClone.firstName = 'Mary';
console.log(person.firstName);

let firstName = 'Peter';
let lastName = 'Jackson';
// const peter = {firstName: firstName, lastName: lastName};
const peter = {firstName, lastName};
console.log(peter);

firstName = 'Bob';
peter.firstName = 'Pete';

console.log('=======  Durdom  =======');
console.log(firstName);
console.log(peter.firstName);
console.log(person.firstName);
console.log(personClone.firstName);
