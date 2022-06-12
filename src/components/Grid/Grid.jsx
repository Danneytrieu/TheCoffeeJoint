import React from "react";
import * as S from "./Grid.styled";

export const Grid = () => {
  return (
    <S.GridContainer>
      <S.Video>
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
      </S.Video>
      <S.Statistic>
        <span>350+</span>
        <h5>
          Cras non dui id ex mattis vehicula. Nullam posuere ligula non libero
          mollis ornare.
        </h5>
      </S.Statistic>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.yumaway.com/locations/1136yuma"
      >
        <S.Shop>
          <span>Full Price of</span>
          <h5>Marijuana products</h5>
          <div>
            <S.CartIcon />
            <span>Shop Now</span>
          </div>
        </S.Shop>
      </a>
      <S.Instruction>
        <span>FIRST TIMER?</span>
        <p>Checkout our rules</p>
      </S.Instruction>
      <S.Do>
        <S.DoIcon />
        <ul>
          <li>Consume THC Concentrates with electronic rigs.</li>
          <li>Vaporize dry herb material in convection vapes.</li>
          <li>Eat or Drink Cannabis infused products.</li>
          <li>Roll a joint to consume in a legal space later.</li>
          <li>Use your own rig with one of our electric nails.</li>
        </ul>
      </S.Do>
      <S.Dont>
        <S.DontIcon />
        <ul>
          <li>Smoking joints, blunts, or bowls.</li>
          <li>Use of anything that results in an open flame or smoke.</li>
          <li>Use of any Tobacco or Nicotine products.</li>
          <li>Use of any illegal narcotics.</li>
          <li>Consumption of any alchoholic beverages.</li>
        </ul>
      </S.Dont>
      <S.Image />
    </S.GridContainer>
  );
};
