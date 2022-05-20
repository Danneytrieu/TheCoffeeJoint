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
          <button>DIRECTION</button>
        </article>
        <Parallax translateX={[20, 0]}>
          <img src={honeyWeed} alt="weed gold honey illustrator" />
        </Parallax>
      </S.ContentContainer>
    </S.Container>
  );
};
