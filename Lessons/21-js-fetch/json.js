const person = {
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
}
console.log(person);
console.log(typeof person);

const personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(typeof personJSON);

const personObj = JSON.parse(personJSON);
console.log(personObj);
console.log(typeof personObj);