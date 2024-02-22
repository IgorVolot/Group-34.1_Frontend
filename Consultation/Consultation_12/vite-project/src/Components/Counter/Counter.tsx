import React, { useEffect, useState } from 'react'
import styles from './Counter.module.css'

export default function Counter():JSX.Element {
    const [counter,setCounter]= useState<number>(0)
    const [age, setAge]= useState<number>(30)
// В жизненом цикле компонента React есть 3 фазы
// Сборка (mounting)
// Обновление(updating)
// Разборка(unmounting)

    function handleAge():void{
        setAge(age+1);
    }
    function handlePlus():void{
        setCounter(counter+1);
    }
    function handleMinus():void{
        setCounter(counter-1);
    }
    function handlePlusTen():void{
        setCounter(counter+10);
    }
    // Случай 1 пустой массив зависимостей []

    useEffect(()=>{
        console.log("useEffect 1 - только при первом рендеренге")
    },[])
// Случай 2 массив зависимостей не указан
useEffect(()=>{
    console.log("useEffect 2 при первом рендеренге и при любых изменениях ")
})

// Случай 3 укажем зависимость [counter]
useEffect(()=>{
    console.log("useEffect 3 при первом рендеренге и при каждом изменении counter ")
},[counter])
// useEffect принимает два аргумента и не возвращает ничего
// (1) принимает колбек функцию и (2)массив зависимостей(опционально)

// Случай 4  указали зависимости [age, counter]
useEffect(()=>{
    console.log("useEffect 4 при первом рендеренге и при каждом изменении counter и age ")
},[counter,age])
  return (
    <div>
        <h2>Добавление денег</h2>
        <img src="https://www.zastavki.com/pictures/originals/2020Finance_Wallpapers___Money_Lot_of_euro_bills_close_up_145693_.jpg" alt="" />
        <div className={`${styles.container} ${styles.counterClass}`}>
        <button className={styles.btn} type="button" onClick={handleMinus}>Убрать лишние деньги</button>
        <span style={{color:'red'}}>{counter}</span>
        <button className={styles.btn} type="button" onClick={handlePlus}>Добавить денег на счет</button>
        <span>Возраст:{age}</span>
        <button type="button" onClick={handleAge} className={styles.btn}>Увеличить возраст</button>
        <button type="button" className={styles.btn} onClick={handlePlusTen}>+10</button>
        </div>
    </div>
  )
}
