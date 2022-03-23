import React, { useState } from "react";
import packageInfo from "../data.json";

const destinations = packageInfo.destinations;

const Destination = () => {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(3);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <>
      <section>
        <h1>01 Pick your destination</h1>

        <div>
          <article>
            <img src={images} alt={name} title={name} />
          </article>

          <article>
            <h2>{name}</h2>
            <p>{description}</p>
            <ul>
              <li>AVG. DISTANCE {distance}</li>
              <li>Est. travel time {travel}</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
};

export default Destination;
