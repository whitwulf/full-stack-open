import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ country }) => {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Bern&appid=f088db5435246b8251c5951922d6c8cb`
      )
      .then((response) => {
        setWeatherData(response.data);
      });
  }, [country]);

  if (weatherData) {
    return (
      <div>
        <h3>Weather in {country.capital}</h3>
        <p>Temperature: {weatherData.main.temp}</p>
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default Weather;
