class Person {
    constructor(id, firstName, lastName, birthDate) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthDate = new Date(birthDate);
    }

    get id() {
        return this._id;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get age() {
        const ageDiffMs = (new Date()) - this._birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    }

    get birthDate() {
        return this._birthDate;
    }

    fullName = function () {
        return `${this._firstName} ${this._lastName}`;
    }

    toString() {
        return `ID: ${this._id}, ${this.fullName()}, age: ${this.age}`;
    }
}

class Employee extends Person {
    constructor(id, firstName, lastName, birthDate, salary) {
        super(id, firstName, lastName, birthDate);
        this._salary = +salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value > this._salary) {
            this._salary = +value;
        }
    }

    toString() {
        return super.toString() + `, salary: ${this._salary}`;
    }

    createEmployeeDOMElement(tag) {
        return createInfoElement(this.toString(), tag);
    }
}