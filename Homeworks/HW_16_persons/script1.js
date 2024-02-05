const persons = [];
addPerson.onclick = function () {
    const person = new Person(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), birthDate.value);
    if (persons.findIndex(({id}) => id === person.id) >= 0) {
        alert(`Person with id = ${person.id} exists`);
    } else {
        clearStats();
        persons.push(person);
        const li = createInfoElement(person.toString(), 'li');
        personsList.append(li);
    }
    personId.value = firstName.value = lastName.value = birthDate.value = '';
};

calcStats.onclick = function () {
    clearStats();
    const divStats = document.createElement('div');
    try {
        let age = persons.reduce((accum, p) => accum + p.getAge(), 0) / persons.length;
        const h3avg = createInfoElement(`Average age: ${age.toFixed(1)}`, 'h3');
        age = persons.reduce((min, p) => p.getAge() < min ? p.getAge() : min, persons[0].getAge());
        const h3min = createInfoElement(`Min age: ${age}`, 'h3');
        age = persons.reduce((max, p) => p.getAge() > max ? p.getAge() : max, persons[0].getAge());
        const h3max = createInfoElement(`Max age: ${age}`, 'h3');
        divStats.append(h3avg, h3min, h3max);
    } catch (e) {
        const h3Error = createInfoElement('No data for processing', 'h3');
        divStats.append(h3Error);
    }
    stats.appendChild(divStats);
};

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.firstElementChild.nextElementSibling.remove();
    }
}

function Person(id, firstName, lastName, date) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(date);
    this.getAge = function(){
        const ageDiffMs = (new Date()) - this.birthDate;
        const ageDate = new Date(ageDiffMs);
        return (ageDate.getUTCFullYear() - 1970);
    };
    this.toString = function () {
        return `ID: ${this.id}, ${this.firstName}, ${this.lastName}, age: ${this.getAge()}`;
    }
}

function createInfoElement(content, tag) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);
    element.appendChild(text);
    return element;
}