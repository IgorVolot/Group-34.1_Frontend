import React from "react";

const Weather = ({weather}) => {
  return (
      <div>
          <p>Location: {weather.country}, {weather.city}</p>
          <p>Temp: {weather.temp} degree</p>
          <p>Pressure: {weather.pressure}hPa</p>
          <p>Sunset: {weather.sunset}</p>
      </div>
  )
}

export default Weather