import React, {useState, useEffect} from 'react'
import {planetLoader} from '../utils/planetLoader.js';
import style from '../CSS_modules/contact.module.css';

const Contact = () => {

    const [planetList, setPlanetList] = useState([]);
    useEffect(() => {
        const loadPlanets = async () => {
            const loadedPlanets = await planetLoader();
            setPlanetList(loadedPlanets);
        };
        loadPlanets();
    }, []);

    const formElement = (
        <form className="d-grid" action="https://sw-info-api.herokuapp.com">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/><br/>
            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/>
            <label htmlFor="homeworld">Planet</label>
            <select id="homeworld" name="homeworld">
                {planetList.map(planet => (
                    <option key={planet.id} value={planet.name}>{planet.name}</option>
                ))}
            </select><br/>
            <textarea name="message" rows="10" cols="30"></textarea><br/>
            <input type="submit" value="Submit"/>
        </form>
    );

    return (
        <div>
            <h3 className="text-center">Contact Form</h3>
            <div className={style.container}>
                {formElement}
            </div>
        </div>
    )
}
export default Contact

