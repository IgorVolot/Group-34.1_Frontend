class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(employee) {
        const index = this._employees.findIndex(({ id }) => id === employee.id);
        if (index < 0) {
            this._employees.push(employee);
        }
        return index < 0;
    }

    removeEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            this._employees.splice(index, 1);
        }
        return index >= 0;
    }

    get size() {
        return this._employees.length;
    }

    // method operated by / "Get stats" button/; creating statistical data; formation and filling "stats" fields
    getStats() {
        const divStats = document.createElement('div');
        try {
            let age = Math.floor(this._employees.reduce((accum, employee) => accum + employee.age, 0) / this._employees.length);
            const h3avg = createInfoElement(`Average age: ${age.toFixed(1)}`, 'h4');
            age = this._employees.reduce((min, employee) => employee.age < min ? employee.age : min, this._employees[0].age);
            const h3min = createInfoElement(`Min age: ${age}`, 'h4');
            age = this._employees.reduce((max, employee) => employee.age > max ? employee.age : max, this._employees[0].age);
            const h3max = createInfoElement(`Max age: ${age}`, 'h4');
            let totalSalary = this._employees.reduce((acc, employee) => acc + employee.salary, 0);
            const h4sal = createInfoElement(`Total salary: ${totalSalary}`, 'h4');
            let averageSalary = totalSalary / this._employees.length;
            const h5avg = createInfoElement(`Average salary: ${averageSalary.toFixed(1)}`, 'h4');
            divStats.append(h3avg, h3min, h3max, h4sal, h5avg);
        } catch (e) {
            console.log(e);
            const h3Error = createInfoElement('No data for processing', 'h4');
            divStats.append(h3Error);
        }
        stats.appendChild(divStats);
    }

    // method to clear "stats" list if new person added or "stats" element changed
    clearStatistics() {
        while (stats.childNodes.length > 2) {
            stats.lastChild.remove();
        }
    }
}