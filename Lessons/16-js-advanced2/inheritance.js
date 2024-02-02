const human = {
    hobby: 'chess',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

console.log(john);
console.log(john.hobby);

john.__proto__ = human;
console.log(john);
console.log(john.hobby);

john.hobby = 'cannabis';
console.log(john.hobby);
console.log(john.__proto__);
console.log(john.fullName());

console.log('=========== Constructor ============');
// Person.prototype = human;
Person.prototype.fullName = human.fullName;
Person.prototype.hobby = 'JS';
console.log(Person.prototype.constructor);
const peter = new Person('Peter', 'Jackson');
const marry = new Person('Marry', 'Smith');
console.log(peter);
console.log(marry);
// peter.__proto__ = human;
// marry.__proto__ = human;
console.log(peter.fullName());
console.log(marry.fullName());
console.log('=========== Arrays ============');

Array.prototype.printArray = function () {
    for (let i = 0; i < this.length; i++) {
        console.log(this[i])
    }
    console.log('-----------------------------');
}
const numbers = new Array(2, 3, 5, 7, 11, 13);
console.log(numbers);
numbers.printArray();

const arr = ['one', 'two', 'three'];
arr.printArray();
console.log('=========== for-in Arrays ============');

for (let i in arr){
    console.log(arr[i]);
}

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
