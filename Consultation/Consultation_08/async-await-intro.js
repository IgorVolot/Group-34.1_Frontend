//Функция которапя возвращает промис
function getName(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("John Smith")
        },1000)
    })
}
console.log(getName());

// Как раскрыть промис? №1

getName().then((data)=>{
    console.log(data)
})

// Как раскрыть промис способ №2
async function f(){
    const response = await getName(); // с помощью await  мы можем раскрыть промис
    console.log(response) // John Smith
}
f()

//Две одинаковые функции которые выводят одно и тоже

function getFiveVer1(){
    return new Promise (function(resolve,reject){
        resolve(5)
    })
}

//тоже самое только с async
async function getFive(){
    return 5;
}
console.log(getFive())
console.log(getFiveVer1())