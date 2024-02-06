
// setting stats, personList elements and variables
const personId = document.getElementById('personId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const birthDate = document.getElementById('birthDate');
const salary = document.getElementById('salary');
const addPerson = document.getElementById('addPerson');
const calcStats = document.getElementById('calcStats');
const stats = document.getElementById('stats');
const personsList = document.getElementById('personsList');

// fields borders arrangement
stats.style.border = '1px solid black';
personsList.style.border = '1px solid blue';

const firm = new Company();

// function /"Add person" button/ to add persons to list; checking for unique to avoid duplicate
addPerson.onclick = function () {
    const employee = new Employee(personId.value.trim(), firstName.value.trim(), lastName.value.trim(), birthDate.value, salary.value);
    if (firm.employees.findIndex(({id}) => id === employee.id) >= 0) {
        alert(`Person with id = ${employee.id} exists`);
    } else {
        firm.clearStatistics();
        firm.addEmployee(employee);
        const li = createInfoElement(employee.toString(), 'li');
        const buttonDel = createButtonDel(() => {
            Company.clearStatistics;
            firm.removeEmployee(employee.id);
            firm.clearStatistics();
        });
        li.append(buttonDel);
        personsList.append(li);
    }
    personId.value = firstName.value = lastName.value = birthDate.value = salary.value = '';
};

// function operated by / "Get stats" button/ --> remove statistic field then formation and filling new "stats" fields
calcStats.onclick = function () {
    firm.clearStatistics();
    firm.getStats();

};



