import React from "react";
import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <div>
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital[0]}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="country flag" height="200px" />
      <Weather country={country} />
    </div>
  );
};

export default Country;
