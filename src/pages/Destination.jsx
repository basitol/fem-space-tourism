import React, { useState } from "react";
import { destinations } from "../data.json";

const Destination = () => {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <div>
      <h1>Destination page</h1>
    </div>
  );
};

export default Destination;
