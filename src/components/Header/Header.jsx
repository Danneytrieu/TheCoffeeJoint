import React from "react";
import introVideo from "../../assets/videos/weedfarm-1.mp4";
import * as S from "../Header/Header.styled";

export const Header = () => {
  return (
    <>
      <S.Container>
        <S.Logo>TCJ..</S.Logo>
        <S.OverLayContainer>
          <S.InfoContainer>
            <h1>The Coffee Joint</h1>
            <h3>Lounge</h3>
            <div className="line" />
            <h2>Denver's First Licensed Consumption Lounge <br /> since 2018</h2>
            <section>
              <article>
                <S.LocationIcon />
                <h4>1130 Yuma Ct, Denver, CO 80204</h4>
              </article>
              <article>
                <S.PhoneIcon />
                <h4>(720) 583-4657</h4>
              </article>
              <article>
                <S.HourIcon />
                <h4>Daily: 10:00 am - 6:00 pm</h4>
              </article>
            </section>
          </S.InfoContainer>
        </S.OverLayContainer>
        <S.Video loop="true" autoPlay="true">
          <source src={introVideo}  type="video/mp4" />
        </S.Video>
      </S.Container>
    </>
  );
};
