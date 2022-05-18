import React from "react";
import alienImage from "../../assets/images/alien.png";
import mapImage from "../../assets/images/map.png";

export const Map = () => {
  return (
    <section>
      <div>
        <h2>Visit The Coffee Joint</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nesciunt eos non distinctio esse quod, animi nisi accusamus.
        </h3>
        <img src={mapImage} alt="" />
      </div>
      <img src={alienImage} alt="" />
    </section>
  );
};
