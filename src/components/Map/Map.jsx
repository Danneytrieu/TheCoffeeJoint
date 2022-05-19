import React from "react";
import alienImage from "../../assets/images/alien.png";
import mapImage from "../../assets/images/map.png";
import styled from "styled-components";
import { device } from "../../device";

const Container = styled.section`
  width: 100%;
  display: flex;
  text-align: center;
  padding: 100px;
  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    padding: 50px;
  }
  img {
    width: 100%;
    height: fit-content;
  }
  h2 {
    font-family: var(--font-halant);
    font-size: 3rem;
    font-weight: 200;
    color: var(--color-gold);
  }
  h3 {
    font-weight: 100;
  }
  div {
    width: 50%;
    @media ${device.laptop}{
      width: 100%;
    }
  }
`;

export const Map = () => {
  return (
    <Container>
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
    </Container>
  );
};
