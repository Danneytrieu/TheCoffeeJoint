import React from "react";
import introVideo from "../../assets/videos/weedfarm-1.mp4";
import * as S from "../Header/Header.styled";

export const Header = () => {
  return (
    <>
      <S.Container>
        <S.Logo>TCJ.</S.Logo>
        <S.OverLayContainer>
          <S.InfoContainer>
            <h1>The Coffee Joint</h1>
            <h3>Consumption Lounge</h3>
            <div className="line" />
            <h2>
              Denver's First Licensed Consumption Lounge <br /> since 2018
            </h2>
            <section>
              <article>
                <S.LocationIcon />

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps/dir//the+coffee+joint/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x876c7f4b51569687:0xb8e67a05179bf2c4?sa=X&ved=2ahUKEwjo1fX05Z74AhVGSzABHUebCy0Q9Rd6BAhLEAU"
                >
                  <h4>1130 Yuma Ct, Denver, CO 80204</h4>
                </a>
              </article>
              <article>
                <S.PhoneIcon />

                <a href="tel:7205834657">
                  <h4>(720) 583-4657</h4>
                </a>
              </article>
              <article>
                <S.HourIcon />
                <h4>Daily: 8:00 am - 10:00 pm</h4>
              </article>
            </section>
          </S.InfoContainer>
        </S.OverLayContainer>
        <S.Video autoPlay loop muted>
          <source src={introVideo} type="video/mp4" />
        </S.Video>
      </S.Container>
    </>
  );
};
