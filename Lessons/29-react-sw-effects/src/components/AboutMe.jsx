import React, {useEffect, useState} from "react";
import {base_url} from "../utils/constans.js";


const AboutMe = () => {
    const [character, setCharacter] = useState('Loading...');

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => {
                setCharacter({
                    name: data.name,
                    birth_year: data.birth_year,
                    gender: data.gender,
                    hair_color: data.hair_color,
                    eye_color: data.eye_color,
                    homeworld: data.homeworld,
                    imgUrl: `${base_url}/${data.image}`
                })
            })
    }, [])

    return (
        <div className="d-flex row">
            <div className="col-6">
                <h1 className="pe-3">Name: {character.name}</h1>
                <h2>Birth year: {character.birth_year}</h2>
                <h2>Gender: {character.gender}</h2>
                <h2>Hair color: {character.hair_color}</h2>
                <h2>Eye color: {character.eye_color}</h2>
                <h2>Home planet: {character.homeworld}</h2>
            </div>
            <div className="col-6">
                <img src={character.imgUrl} alt="hero"/>
            </div>
        </div>

    )
}

export default AboutMe