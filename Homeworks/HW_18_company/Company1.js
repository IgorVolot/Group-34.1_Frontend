class Company {
    constructor() {
        this._employees = [];
    }

    get employees() {
        return [...this._employees];
    }

    addEmployee(emloyee) {
        const index = this._employees.findIndex(({ id }) => id === emloyee.id);
        if (index < 0) {
            this._employees.push(emloyee);
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

    get size(){
        return this._employees.length;
    }

    findEmployee(id) {
        const index = this._employees.findIndex(e => e.id === id);
        if (index >= 0) {
            return this._employees[index];
        }
    }

    get avgAge() {
        return this._employees.reduce((sum, e) => sum + e.age, 0) / this._employees.length;
    }

    get minAge() {
        // return Math.min(...this._employees.map(e => e.age))
        return this._employees.reduce((min, e) => e.age < min ? e.age : min, this._employees[0].age)
    }

    get maxAge() {
        return this._employees.reduce((max, e) => e.age > max ? e.age : max, this._employees[0].age)
    }

    get totalSalary() {
        return this._employees.reduce((sum, e) => sum + e.salary, 0);
    }

    get avgSalary() {
        return this.totalSalary / this._employees.length;
    }

    createCompanyStatsDOMElement() {
        const divStats = document.createElement('div');
        const stats = [];
        stats[0] = createInfoElement(`Average age: ${this.avgAge.toFixed(1)}`, 'h3');
        stats[1] = createInfoElement(`Min age: ${this.minAge.toFixed(1)}`, 'h3');
        stats[2] = createInfoElement(`Max age: ${this.maxAge.toFixed(1)}`, 'h3');
        stats[3] = createInfoElement(`Average salary: ${this.avgSalary.toFixed(2)}`, 'h3');
        stats[4] = createInfoElement(`Total salary: ${this.totalSalary.toFixed(2)}`, 'h3');
        divStats.append(...stats);
        return divStats;
    }
}