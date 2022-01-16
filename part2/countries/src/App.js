import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryList from "./components/CounrtyList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const showCountry = (country) => {
    setFilter(country.name.common);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      <CountryList
        countries={countries}
        filter={filter}
        onClick={showCountry}
      />
    </div>
  );
};

export default App;
