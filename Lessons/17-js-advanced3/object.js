const person = {
    firstName: 'John',
    lastName: 'Smith',
    salary: 3500,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    address: {
        city: 'Hamburg',
        street: 'Hauptstrasse',
        building: 3
    },
    salary: 3600
}

let arr = Object.keys(person);
console.log(arr)
arr.forEach(item => console.log(item));

console.log('=========================================');
arr = Object.values(person);
console.log(arr)
arr.forEach(item => console.log(item));

console.log('=========================================');
arr = Object.entries(person);
console.log(arr)
arr.forEach(item => console.log(item));
console.log(arr[2][1]);

console.log('===========  Legacy object clone  ============');
const legacyClone = Object.assign({}, person, {hobby: 'chess', salary: 3800});
console.log(person === legacyClone);
console.log(legacyClone);

console.log('=========  Shuffle  ===========');
const arr1 = [6, 2, 8, 1, 4];
arr1.sort((a,b) => Math.random() - 0.5);
console.log(arr1);
