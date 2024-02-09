// Интервалы
setInterval(()=>{
    console.log("Tick")
},5000) //будет вызывать функцию-колбек каждые 5 секунд

const interval = setInterval(()=>{
    console.log("Tac")// задали интервал
},1000)

setTimeout(()=>{
    clearInterval(interval);
   
},5000);