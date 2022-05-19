import React from "react";
import alienImage from "../../assets/images/alien.png";
import mapImage from "../../assets/images/map.png";
import * as S from "./Map.styled";

export const Map = () => {
  return (
    <S.Container>
      <div>
        <h2>Visit The Coffee Joint</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          nesciunt eos non distinctio esse quod, animi nisi accusamus. Nesciunt
          eos non distinctio esse quod, animi nisi accusamus.
        </h3>
        <img src={mapImage} alt="" />
      </div>
      <div>
        <img src={alienImage} alt="" />
      </div>
    </S.Container>
  );
};
