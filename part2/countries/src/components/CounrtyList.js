import React from "react";
import Country from "./Country";
import ShowButton from "./ShowButton";

const CountryList = ({ countries, filter, onClick }) => {
  const filteredList = countries.filter((cntry) =>
    cntry.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  if (filteredList.length === 1) {
    const country = filteredList[0];
    return <Country country={country} />;
  } else if (filteredList.length <= 10) {
    return (
      <div>
        {filteredList.map((country, index) => (
          <p key={index}>
            {country.name.common}{" "}
            <ShowButton onClick={() => onClick(filteredList[index])} />
          </p>
        ))}
      </div>
    );
  }

  return <p>Too many countries in list. Refine searxh.</p>;
};

export default CountryList;
