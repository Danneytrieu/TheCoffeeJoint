import React from "react";
import introVideo from "../../assets/videos/weedfarm-1.mp4";
import {
  HeaderContainer,
  Logo,
  OverLayContainer,
  Aside,
  LocationIcon,
  PhoneIcon,
  HourIcon,
  Video,
} from "../Header/Header.styled";

export const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <Logo>TCJ.</Logo>
        <OverLayContainer>
          <Aside>
            <h1>The Coffee Joint</h1>
            <h3>Lounge</h3>
            <div className="line" />
            <h2>Denver's First Licensed Consumption Lounge since 2018</h2>
            <section>
              <article>
                <LocationIcon />
                <h4>1130 Yuma Ct, Denver, CO 80204</h4>
              </article>
              <article>
                <PhoneIcon />
                <h4>(720) 583-4657</h4>
              </article>
              <article>
                <HourIcon />
                <h4>Daily: 10:00 am - 6:00 pm</h4>
              </article>
            </section>
          </Aside>
        </OverLayContainer>
        <Video loop="true" autoPlay="true">
          <source src={introVideo} type="video/mp4" />
        </Video>
      </HeaderContainer>
    </div>
  );
};
