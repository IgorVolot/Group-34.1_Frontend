/*
Создайте юнион тип Engine с тремя возможными значениями: electric, petrol, diesel.
Создайте интерфейс Car с полями:
бренд (текстовое поле),
двигатель,
мощность (количество л.c.)
На основе Car создайте интерфейс FirefighterCar (пожарная машина) - пусть у пожарной машины будет поле
объем бака воды в литрах (waterTank).
После этого создайте объекты для указанных типов.
 */

type Engine = "electric" | "petrol" | "diesel";

interface Car {
    brandName: string;
    engine: Engine;
    power: number;
}

interface FirefighterCar extends Car {
    waterTank: number;
}

const i10: Engine = "electric";


const teslaCar: Car = {
    brandName: "Tesla",
    engine: "electric",
    power: 120
};

const fireTruckFord: FirefighterCar = {
    brandName: "Ford",
    engine: "diesel",
    power: 450,
    waterTank: 600
};

