import React, { useState, useEffect } from "react";
import axios from "axios";
import Page from "../components/Page";

const SwApi = () => {

  const [ships, setShips] = useState([]);
  const fetchShips = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships/?page=1");
      setShips(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShips();
  }, []);

  function createCards(ship) {
    return(
      <Page
        key={ship.name}
        name = {ship.name}
        price = {ship.cost_in_credits}
        make = {ship.manufacturer}
        speed = {ship.max_atmosphering_speed}
      />
    )
  }

  return (
    <div>

      {ships.map(createCards)}

    </div>
  );
};

export default SwApi;
