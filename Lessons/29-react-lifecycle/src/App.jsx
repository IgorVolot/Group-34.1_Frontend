import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "bootstrap/js/src/dom/data.js";

const base_url = 'https://sw-info-api.herokuapp.com';

function App() {
    const [character, setCharacter] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => {
                setCharacter({
                    name: data.name,
                    birth_year: data.birth_year,
                    imgUrl: `${base_url}/${data.image}`
                })
                setIsLoading(false);
            })
    }, [])

    if (isLoading){
        return (
            <div className='spinner-border text-primary'></div>
        )
    } else {
        return (
            <div>
                <h1>Name: {character.name}</h1>
                <h2>Birth year: {character.birth_year}</h2>
                <img src={character.imgUrl} alt='hero'/>
            </div>
        )
    }


}

export default App
