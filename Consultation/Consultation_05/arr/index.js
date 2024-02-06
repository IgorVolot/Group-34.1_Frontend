const brothers = [
    { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
    { race: "human", height: 185, age: 46, name: "Aragorn" },
    { race: "elf", height: 189, age: 110, name: "Legolas" },
    { race: "dworf", height: 140, age: 150, name: "Gimly" },
    { race: "human", height: 195, age: 200, name: "Gandalf" }
];
// const frodo = brothers[0]
// const aragorn = brothers[1]

const [frodo, aragorn, legolas, gimly, gandalf] = brothers;
console.log(frodo)

//теперь у нас есть объект frodo
//как сохранить возраст фродо в отдельную переменную
const ageOfFrodo = frodo.age // достали по ключу
console.log(ageOfFrodo)

let {race, age, name, noSuchKey} = frodo;
console.log(race)
console.log(age)
console.log(name)
console.log(noSuchKey)

const user = { id:1, email:"user@email.com", login:"funny_user"}
// const email = user.email;
const {email, id: personId, login} = user
console.log(email)


// 1. Метод map
const names = brothers.map((element)=> element.name);
console.log(names)
const ages = brothers.map((brother)=> brother.age);
console.log(ages)
