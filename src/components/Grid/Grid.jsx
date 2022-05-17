import React from "react";
import styled from "styled-components";

const GridContainer = styled.section`
  background: yellow;
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  /* grid-template-columns: 1fr 1fr 1fr; */
  grid-template-areas:
    "video video statistic shop"
    "instruction instruction statistic shop"
    "video video image image"
    "do dont image image";
  text-align: center;
`;
//
// Grid Area:
const Video = styled.video`
  width: 100px;
  height: 100px;
  background: red;
  grid-area: video;
`;
const Statistic = styled.div`
  grid-area: statistic;
`;
const Shop = styled.div`
  grid-area: shop;
`;
const Instruction = styled.div`
  grid-area: instruction;
`;
const Do = styled.div`
  grid-area: do;
`;
const Dont = styled.div`
  grid-area: dont;
`;
const Image = styled.img`
  grid-area: image;
`;

export const Grid = () => {
  return (
    <>
      <GridContainer>
        {/* 1 */}
        <Video src=""></Video>
        {/* 2 */}
        <Statistic>
          <span>350+</span>
          <h5>
            Cras non dui id ex mattis vehicula. Nullam posuere ligula non libero
            mollis ornare.
          </h5>
        </Statistic>
        {/* 3 */}
        <Shop>
          <span>Full Price of</span>
          <span>Marijuana products</span>
          <div>
            <i></i>
            <span>Shop Now</span>
          </div>
        </Shop>
        {/* 4 */}
        <Instruction>
          <span>FIRST TIMER?</span>
          <p>Checkout our rules:</p>
        </Instruction>
        {/* 5 */}
        <Do>
          <i></i>
          <ul>
            <li>Consume THC Concentrates with electronic rigs.</li>
            <li>Vaporize dry herb material in convection vapes.</li>
            <li>Eat or Drink Cannabis infused products.</li>
            <li>Roll a joint to consume in a legal space later.</li>
            <li>Use your own rig with one of our electric nails.</li>
          </ul>
        </Do>
        {/* 6 */}
        <Dont>
          <i></i>
          <ul>
            <li>Smoking joints, blunts, or bowls.</li>
            <li>Use of anything that results in an open flame or smoke.</li>
            <li>Use of any Tobacco or Nicotine products.</li>
            <li>Use of any illegal narcotics.</li>
            <li>Consumption of any alchoholic beverages.</li>
          </ul>
        </Dont>
        {/* 7 */}
        <Image src="" alt="" />
      </GridContainer>
    </>
  );
};
