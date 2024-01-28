const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
    // ,
    // getAge: function (){
    //     return this.age;
    // },
    // setAge: function (age){
    //     this.age = age;
    // }
}
console.log(typeof person);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.fullName());
person.age = 28;
console.log(person.age);
// person.setAge(27.5);
// console.log(person.getAge());
console.log(person);

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson',
    age: 34
}
console.log(peter);
peter.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
}
console.log(peter.fullName());
console.log(peter.id);
console.log(peter.hobby);
peter['id'] = 2000;
console.log(peter.id);
let info = 'age';
// console.log(peter.info);
console.log(peter[info]);
const obj = {};  // disregard obj to next function

console.log('====================');
printObject(peter);
printObject(person);
const mary = new Person(3000, 'Mary', 'Smith', 19); // new -> makes constructor, without new -> just a function
console.log(mary);
mary.hobby = 'cooking';
printObject(mary);
console.log(mary.fullName());

const persons = [mary, peter, new Person(4000, 'Rabindranate', 'Anand', 33), {
    firstName: 'John',
    lastName: 'Smith',
    age: 27,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}]
console.log(persons.length);
for (let i = 0; i < persons.length; i++) {
    // console.log(persons[i]);
    printObject(persons[i])
}

function printObject(obj) {
    console.log('====================');
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(`${key} -> ${obj[key]()}`);
        } else {
            console.log(`${key} -> ${obj[key]}`);
        }
    }
    console.log('====================');
}

function Person(id, firstName, lastName, age) {  // constructor mostly begins from Cap Letter
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}