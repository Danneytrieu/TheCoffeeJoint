import React from "react";
import styled from "styled-components";
import { device } from "../../device";
import grid1 from "../../assets/images/grid/grid-1.jpg";
import grid2 from "../../assets/images/grid/grid-2.jpg";
import grid3 from "../../assets/images/grid/grid-3.jpg";
import {
  AiOutlineShoppingCart,
  AiOutlineCheckCircle,
  AiOutlineStop,
} from "react-icons/ai";

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 50vw;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "video video statistic shop"
    "instruction instruction picture picture"
    "do dont picture picture";
  text-align: center;
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      "video video"
      "statistic shop"
      "picture picture"
      "instruction instruction"
      "do dont";
  }
  @media ${device.laptop} {
    grid-template-columns: 100%;
    grid-template-areas:
      "video video"
      "statistic statistic "
      "shop shop"
      "dont dont"
      "do do ";
  } ;
`;
// Grid Area:
const gridArea = {
  minHeight: "400px",
};
const Video = styled.div`
  ${gridArea}
  grid-area: video;
`;
const Statistic = styled.div`
  ${gridArea}
  grid-area: statistic;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 30px;
  background: var(--color-vanilla);
  span {
    color: var(--color-gold);
    font-family: var(--font-roboto);
    font-size: clamp(6rem, 8vw, 10rem);
  }
  h5 {
    color: var(--color-green);
    text-transform: uppercase;
    font-size: clamp(0.8rem, 1.2rem, 3rem);
    font-weight: 400;
  }
`;
const Shop = styled.div`
  ${gridArea}
  grid-area: shop;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5)),
    url(${grid1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  > span {
    color: var(--color-gold);
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 1.3rem;
    font-weight: 300;
    text-transform: initial;
    cursor: pointer;
  }
`;
const Instruction = styled.div`
  ${gridArea}
  grid-area: instruction;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${grid2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  font-size: 1.8rem;
  @media ${device.laptop} {
    display: none;
  }
  span {
    color: var(--color-gold);
  }
  p {
    font-weight: 200;
    color: var(--color-black);
    opacity: 80%;
    font-size: 1.2rem;
  }
`;
const Do = styled.div`
  ${gridArea}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: do;
  background: var(--color-darkgreen);
  color: var(--color-white);
  font-weight: 100;
  font-size: clamp(1rem, 1vw, 3rem);
  padding: 40px;
`;
const Dont = styled.div`
  ${gridArea}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: dont;
  background: var(--color-gold);
  color: var(--color-white);
  font-weight: 100;
  font-size: clamp(1rem, 1vw, 3rem);
  padding: 40px;
`;
const Image = styled.div`
  ${gridArea}
  grid-area: picture;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    url(${grid3});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media ${device.laptop}{
    display: none;
  }
`;

// icons
const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 3rem;
  color: var(--color-gold);
`;
const DoIcon = styled(AiOutlineCheckCircle)`
  font-size: 5rem;
  color: var(--color-white);
  margin-bottom: 10px;
`;
const DontIcon = styled(AiOutlineStop)`
  font-size: 5rem;
  color: var(--color-white);
  margin-bottom: 10px;
`;

export const Grid = () => {
  return (
    <GridContainer>
      <Video>
        <iframe
          src="https://www.youtube.com/embed/6ZQJ9fPOIbA"
          width="100%"
          height="100%"
          autoPlay={false}
          loop={false}
          frameBorder="0"
          allowFullScreen
          title="video"
        />
      </Video>
      <Statistic>
        <span>350+</span>
        <h5>
          Cras non dui id ex mattis vehicula. Nullam posuere ligula non libero
          mollis ornare.
        </h5>
      </Statistic>
      <Shop>
        <span>Full Price of</span>
        <h5>Marijuana products</h5>
        <div>
          <CartIcon />
          <span>Shop Now</span>
        </div>
      </Shop>
      <Instruction>
        <span>FIRST TIMER?</span>
        <p>Checkout our rules</p>
      </Instruction>
      <Do>
        <DoIcon />
        <ul>
          <li>Consume THC Concentrates with electronic rigs.</li>
          <li>Vaporize dry herb material in convection vapes.</li>
          <li>Eat or Drink Cannabis infused products.</li>
          <li>Roll a joint to consume in a legal space later.</li>
          <li>Use your own rig with one of our electric nails.</li>
        </ul>
      </Do>
      <Dont>
        <DontIcon />
        <ul>
          <li>Smoking joints, blunts, or bowls.</li>
          <li>Use of anything that results in an open flame or smoke.</li>
          <li>Use of any Tobacco or Nicotine products.</li>
          <li>Use of any illegal narcotics.</li>
          <li>Consumption of any alchoholic beverages.</li>
        </ul>
      </Dont>
      <Image />
    </GridContainer>
  );
};
