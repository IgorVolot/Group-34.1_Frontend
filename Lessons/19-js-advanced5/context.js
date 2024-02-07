console.log(this === window);

// const getFullName = function () {
//     console.log(this);
//     return `${this.firstName} ${this.lastName}`;
// }

window.firstName = 'Super';
window.lastName = 'Boss';
const getFullName = () => {    // arrow function doesn't have its "this"
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
}

const john = {
    firstName: 'John',
    lastName: 'Smith'
}

const peter = {
    firstName: 'Peter',
    lastName: 'Jackson'
}

john.fullName = getFullName;
peter.fullName = getFullName;

console.log(john.fullName());
console.log(peter.fullName());

console.log(getFullName());
console.log(getFullName.bind(peter)());