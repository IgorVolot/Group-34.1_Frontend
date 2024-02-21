import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.js";
const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const getWeather = (city) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setWeatherInfo({
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                })
            })
    }
    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather weather={weatherInfo} />
        </div>
    )
}
export default Data