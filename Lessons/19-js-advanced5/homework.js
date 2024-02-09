// Option 1

// let group ={
//     title: 'Cochort 34.1',
//     students: ['Irina', 'Kateryna', 'Marina', 'Oksana', 'Tatiana'],
//     showList: function () {
//         const show = (name) => {
//             console.log(`${this.title}: ${name}`);
//         }
//         this.students.forEach(show);
//     }
// }
// console.log(group);
//
// // Unmodified
//
// group.showList();
// const newGroup = group;
// group = null;
// console.log('======================');
// newGroup.showList();


// Option 2
let group = {
    title: 'Cochort 34.1',
    students: ['Irina', 'Kateryna', 'Marina', 'Oksana', 'Tatiana'],
    showList: function () {
        const t = this.title;
        const show = function (name) {
            console.log(`${t}: ${name}`);
        }
        this.students.forEach(show);
    }
}
console.log(group);

// Unmodified

group.showList();
const newGroup = group;
group = null;
console.log('======================');
newGroup.showList();

// // Option 3
//
// let group ={
//     title: 'Cochort 34.1',
//     students: ['Irina', 'Kateryna', 'Marina', 'Oksana', 'Tatiana'],
//     showList: function () ({
//         const show = function (name) {
//             console.log(`${this.title}: ${name}`);
//         }).bind(this.title);
//         this.students.forEach(show);
//     }
// }
// console.log(group);
//
// // Unmodified
//
// group.showList();
// const newGroup = group;
// group = null;
// console.log('======================');
// newGroup.showList();

// Option 4
//
// let group = {
//     title: 'Cochort 34.1',
//     students: ['Irina', 'Kateryna', 'Marina', 'Oksana', 'Tatiana'],
//     showList: function () {
//         const show = function (name) {
//             console.log(`${this.title}: ${name}`);
//         }
//         this.students.forEach(show.bind(this));
//     }
// }
// console.log(group);
//
// // Unmodified
//
// group.showList();
// const newGroup = group;
// group = null;
// console.log('======================');
// newGroup.showList();