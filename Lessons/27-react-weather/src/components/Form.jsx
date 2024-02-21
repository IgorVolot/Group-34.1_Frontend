import React, {useState} from "react";

const Form = ({getWeather}) => {

    const [city, setCity] = useState('');
    const getCity = e => {
        e.preventDefault();
        getWeather(city);
        setCity('');
    }

    const handleChange = e => {
        setCity(e.target.value);
    }
    return (
        <form onSubmit={getCity}>
            <input value={city} onChange={handleChange} type="text" />
            <button type="submit">Get weather</button>
        </form>
    )
}
export default Form