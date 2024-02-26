import React from "react";
import {starWarsInfo} from "../utils/constans.js";
import style from '../CSS_modules/farGalaxy.module.css';


const StarWars = () => {
    return (
        <div className={style.farGalaxy}>{starWarsInfo}</div>
    )
}

export default StarWars