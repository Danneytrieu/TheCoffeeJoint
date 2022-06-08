import React from "react";
import honeyWeed from "../../assets/images/honeyweed.png";
import * as S from "../AboutUs/AboutUs.styled";
import { Parallax } from "react-scroll-parallax";

export const AboutUs = () => {
  return (
    <S.Container>
      <Parallax translateY={[0, 70]}>
        <h2>CONSUMPTION LOUNGE</h2>
      </Parallax>
      <S.ContentContainer>
        <article>
          <div>
            <h4>ABOUT US</h4>
            <h3>CONSUME CANNABIS IN DENVER</h3>
            <div className="line" />
          </div>
          <p>
            Looking to consume cannabis in Denver, Colorado? At the Coffee Joint
            patrons can vaporizer flower, consume edibles, and dab concentrates
            using vape pens or an electric nail. Our staff members can also
            provide information about cannabinoids, terpene profiles, and
            cannabis consumption.
            <br />
            <br />
            As part of Yuma Way Cannabis, the staff at The Coffee Joint share a
            passion to de-stigmatize cannabis consumption and are available to
            answer any questions!
          </p>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/dir//the+coffee+joint/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x876c7f4b51569687:0xb8e67a05179bf2c4?sa=X&ved=2ahUKEwjo1fX05Z74AhVGSzABHUebCy0Q9Rd6BAhLEAU"
          >
            <button>DIRECTION</button>
          </a>
        </article>
        <Parallax translateX={[20, 0]}>
          <img src={honeyWeed} alt="weed gold honey illustrator" />
        </Parallax>
      </S.ContentContainer>
    </S.Container>
  );
};
