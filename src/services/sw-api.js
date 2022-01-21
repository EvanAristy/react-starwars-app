import React, { useState, useEffect } from "react";
import axios from "axios";

const SwApi = () => {
  const [ships, setShips] = useState([]);
  const fetchShips = async () => {
    try {
      const response = await axios.get("https://swapi.dev/api/starships/");
      setShips(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShips();
  }, []);

  return (
    <div>
      {ships.map((item) => {
        return (
            <div>
                {console.log(ships)}
                <h2>Name: {item.name}</h2>
                <h4>Price: {item.cost_in_credits}</h4>
                <h4>Make: {item.manufacturer}</h4>
                <h4>Max-Speed: {item.max_atmosphering_speed}</h4>
            </div>
        );
      })}
    </div>
  );
};

export default SwApi;
