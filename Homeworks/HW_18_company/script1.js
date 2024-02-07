//Add to stats total salary and average salary
const firm = new Company();

addPerson.onclick = function () {
    const employee = new Employee(personId.value.trim(), firstName.value.trim(),
        lastName.value.trim(), birthDate.value, salary.value);
    if (firm.addEmployee(employee)) {
        clearStats();
        const li = employee.createEmployeeDOMElement('li');
        const buttonDel = createButtonDel(function () {
            firm.removeEmployee(employee.id);
            clearStats();
        });
        buttonDel.classList.add('del');
        li.append(buttonDel);
        personsList.append(li);
    } else {
        alert(`Employee with id = ${employee.id} exists`);
    }
    personId.value = firstName.value = lastName.value = birthDate.value = salary.value = '';
}
calcStats.onclick = function () {
    clearStats();
    try {
        stats.appendChild(firm.createCompanyStatsDOMElement());
    } catch (e) {
        const divStats = document.createElement('div');
        const h3Error = createInfoElement('No data for processing', 'h3');
        divStats.append(h3Error);
        stats.appendChild(divStats);
    }
}

function clearStats() {
    if (stats.firstElementChild.nextElementSibling) {
        stats.removeChild(stats.firstElementChild.nextElementSibling);
    }
}