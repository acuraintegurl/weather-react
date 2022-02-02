import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=7a010bcd1946ade46c95e4c98b549354&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return <p>Hello from weather</p>;
}
