const addPerson = document.getElementById('addPerson');
const calcStats = document.getElementById('calcStats');
const currentDate = new Date();

const persons = [];

// getting stats and personList elements
const stats = document.getElementById('stats');
const personsList = document.getElementById('personsList');

// fields borders arrangement
stats.style.border = '1px solid black';
personsList.style.border = '1px solid blue';


// function /"Add person" button/ to add persons to list; checking for unique to avoid duplicate
addPerson.onclick = function () {
    // birthDate conversion into Date object
    const birthDateValue = new Date(birthDate.value);

    // add persons with check for unique
    if (findId(persons, personId.value) === -1) {
        clearStats();
        const person = new Person(personId.value, firstName.value, lastName.value, birthDateValue);
        persons.push(person);
        displayPersons();
    } else {
        alert(`Person with this id = ${personId.value} exists`);
    }

    // input fields clearance
    personId.value = firstName.value = lastName.value = birthDate.value = '';
}

// function to clear "stats" list if new person added or "stats" element changed
function clearStats() {
    try {
        (stats.firstElementChild.nextElementSibling)
        // creating <h2> element for statistic list "stats"
        const h2Element = document.createElement('h2');
        h2Element.textContent = 'Stats';

        // clearance "stats" field and adding <h2>
        stats.textContent = '';
        stats.appendChild(h2Element);
    } catch (e) {
        console.log(e)
        alert('Enter personal data to get statistic');
    }


}

// function to display persons list
function displayPersons() {
    const listOfPersons = document.createElement('ol');
    for (let i = 0; i < persons.length; i++) {
        const text = document.createTextNode(persons[i].toString());
        const li = document.createElement('li');
        li.appendChild(text);

        // Adding delete button for each person
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            persons.splice(i, 1);
            displayPersons();
            clearStats();
        };

        li.appendChild(deleteButton);
        listOfPersons.appendChild(li);
    }

    personsList.innerHTML = '';
    personsList.appendChild(listOfPersons);
}


// function / "Get stats" button/ creating statistical data; formation and filling "stats" fields
calcStats.onclick = function () {
    clearStats();

    // calculation of oldest, youngest persons and average age -> "stats"
    const oldestPerson = persons.reduce((accum, p) => p.age() < accum.age() ? p : accum);
    const youngestPerson = persons.reduce((accum, p) => p.age() > accum.age() ? p : accum);
    const totalAge = persons.reduce((accum, p) => accum + p.age(), 0);
    const averageAge = Math.round(totalAge / persons.length);

    // creating statistic elements for output in "stats"
    const oldestPersonP = document.createElement('p');
    oldestPersonP.textContent = `Oldest person: ${oldestPerson.toString()}`;
    const youngestPersonP = document.createElement('p');
    youngestPersonP.textContent = `Youngest person: ${youngestPerson.toString()}`;
    const averageAgeP = document.createElement('p');
    averageAgeP.textContent = `Average age: ${averageAge}`;

    // adding list of "stats" into appropriate container
    stats.appendChild(oldestPersonP);
    stats.appendChild(youngestPersonP);
    stats.appendChild(averageAgeP);
}


function findId(persons, id) {
    // find person by id; return index of person if person exists, otherwise returns -1;
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].personId === id) {
            return i;
        }
    }
    return -1;
}

function Person(personId, firstName, lastName, birthDate) {
    // Constructor
    this.personId = personId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.age = function () {
        return Math.floor((currentDate - this.birthDate) / (365.25 * 24 * 60 * 60 * 1000));
    };
    this.toString = function () {
        return `ID: ${this.personId}, First name: ${this.firstName}, Last name: ${this.lastName}, Age: ${this.age()}`
    };
}