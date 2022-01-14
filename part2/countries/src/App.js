import React, { useState, useEffect } from "react";
import axios from "axios";

const CountryList = ({ countries, filter }) => {
  const filteredList = countries.filter((cntry) =>
    cntry.name.common.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredList);
  if (filteredList.length <= 10) {
    return (
      <div>
        {countries.map((cntry, idx) => (
          <p key={idx}>{cntry.name.common}</p>
        ))}
      </div>
    );
  }

  return <p>Too many countries in list. Refine searxh.</p>;
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      <CountryList countries={countries} filter={filter} />
    </div>
  );
};

export default App;
