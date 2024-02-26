import React, {useEffect, useState} from "react";
import {base_url} from "../utils/constans.js";
import style from '../CSS_modules/form.module.css';


const Contact = () => {
    const [homeworld, setHomeworld] = useState('Loading...');
    useEffect(() => {
        fetch(`${base_url}/v1/planets`)
            .then(response => response.json())
            .then(data => setHomeworld(data.name))
            .catch(error => console.log(error));
    }, []);


    return (
        <div>
            <h3>Contact Form</h3>

            <div className="container">
                <form action="/action_page.php">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                    <label htmlFor="homeworld">Planet</label>
                    <select id="homeworld" name="homeworld">
                        <option id='19' value="Saleucami">{homeworld.name}</option>
                        <option id='52' value="Serenno">{homeworld.name}</option>
                        <option id='9' value="Coruscant">{homeworld.name}</option>
                        <option id='54' value="Zolan">{homeworld.name}</option>
                        <option id='33' value="Sullust">{homeworld.name}</option>
                        <option id='6' value="Bespin">{homeworld.name}</option>
                        <option id='13' value="Mustafar">{homeworld.name}</option>
                        <option id='40' value="Troiken">{homeworld.name}</option>
                        <option id='50' value="Champala">{homeworld.name}</option>
                        <option id='39' value="Vulpter">{homeworld.name}</option>
                        <option id='57' value="Muunilinst">{homeworld.name}</option>
                        <option id='5' value="Dagobah">{homeworld.name}</option>
                        <option id='36' value="Dathomir">{homeworld.name}</option>
                    </select>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."
                              style="height:200px"></textarea>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default Contact