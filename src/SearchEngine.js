import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    function showWeather(response) {
      setLoaded(true);
      setWeather({
        temperature: Math.round(response.data.main.temp),
        description: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
        icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      });
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7a010bcd1946ade46c95e4c98b549354&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="City">
        {form}
        <ul>
          <li>Temperature: {weather.temperature}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} km/h</li>
          <li>
            <img src={weather.icon} alt="" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
