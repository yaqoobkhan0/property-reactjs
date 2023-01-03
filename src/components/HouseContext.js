import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";
export const HouseContext = createContext();
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [date, setdate] = useState("date range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);
  const handleClick = () => {
    setLoading(true);

    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    const minPrice = parseInt(price.split(" ")[0]);

    const maxPrice = parseInt(price.split(" ")[2]);
    const minDate = parseInt(date.split(" ")[0]);

    const maxDate = parseInt(date.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);
      const houseDate = parseInt(house.date);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice &&
        houseDate >= minDate &&
        houseDate <= maxDate
      ) {
        return house;
      }
      if (
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(date)
      ) {
        return house;
      }
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        isDefault(date)
      ) {
        return house.country === country;
      }

      if (
        !isDefault(property) &&
        isDefault(country) &&
        isDefault(price) &&
        isDefault(date)
      ) {
        return house.type === property;
      }

      if (
        !isDefault(price) &&
        isDefault(country) &&
        isDefault(property) &&
        isDefault(date)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      if (
        !isDefault(date) &&
        isDefault(country) &&
        isDefault(property) &&
        isDefault(price)
      ) {
        if (houseDate >= minDate && houseDate <= maxDate) {
          return house;
        }
      }
      if (
        !isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        isDefault(date)
      ) {
        return house.country === country && house.type === property;
      }
      if (
        !isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        isDefault(date)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }
      if (
        !isDefault(country) &&
        isDefault(property) &&
        isDefault(price) &&
        !isDefault(date)
      ) {
        if (houseDate >= minDate && houseDate <= maxDate) {
          return house.country === country;
        }
      }

      if (
        isDefault(country) &&
        !isDefault(property) &&
        !isDefault(price) &&
        isDefault(date)
      ) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }

      if (
        isDefault(country) &&
        !isDefault(property) &&
        isDefault(price) &&
        !isDefault(date)
      ) {
        if (houseDate >= minDate && houseDate <= maxDate) {
          return house.type === property;
        }
      }

      if (
        isDefault(country) &&
        isDefault(property) &&
        !isDefault(price) &&
        !isDefault(date)
      ) {
        if (houseDate >= minDate && houseDate <= maxDate) {
          return house;
        }
      }
      return "";
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        date,
        setdate,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
