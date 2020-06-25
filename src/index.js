import React from "react";
import { render } from "react-dom";
import App from "./App";
import 'bulma/css/bulma.css'
import axios from 'axios';

const API_KEY = '4137c4ce4404f78ffb0df598b3efd8ea';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

render(<App />, document.querySelector("#content"));

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}