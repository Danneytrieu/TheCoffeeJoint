import React from "react";

import logoImage from "../../assets/images/logo.png";
import * as S from "./Footer.styled";

export const Footer = () => {
  return (
    <S.Container>
      <S.FooterContainer>
        {/* column 1 */}
        <div>
          <a href="/">
            <img src={logoImage} alt="" />
          </a>
          <h2>
            As part of Yuma Way Cannabis, the staff at The Coffee Joint share a
            passion to de-stigmatize cannabis consumption and are available to
            answer any questions!
          </h2>
          <article>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/the_coffee_joint_/"
            >
              <S.InstagramIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/TheCoffeeJointDenver/"
            >
              <S.FacebookIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCrOT5AOpeOEXMyh6j_EJH_g"
            >
              <S.YoutubeIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://goo.gl/maps/vWWNrCpmixsmeXBW9"
            >
              <S.GoogleIcon />
            </a>
          </article>
        </div>

        {/* column 2 */}
        <div className="hideForTablet">
          <span>About Us</span>
          <a href="/">Contact Us</a>
          <a href="/">Direction</a>
          <a href="/">Terms of Service</a>
        </div>

        {/* column 3 */}
        <div className="hideForTablet">
          <span>Products</span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://yumaway.com/locations/menu/17?"
          >
            Shop
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://yumaway.com/locations/menu/17?"
          >
            Edibles
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://yumaway.com/locations/menu/17?"
          >
            Oil
          </a>
        </div>

        {/* column 4 */}
        <div className="hideForTablet">
          <span>Contact Info</span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/dir//the+coffee+joint/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x876c7f4b51569687:0xb8e67a05179bf2c4?sa=X&ved=2ahUKEwjo1fX05Z74AhVGSzABHUebCy0Q9Rd6BAhLEAU"
          >
            <h5>1130 Yuma Court, Denver, CO 80204</h5>
          </a>
          <a href="tel:(720) 583-4657">
            <h5>(720) 583-4657</h5>
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.thecoffeejointco.com"
          >
            <h5>thecoffeejointco.com</h5>
          </a>
          <a href="mailto:thecoffeejoint@yumaway.com">
            <h5>thecoffeejoint@yumaway.com</h5>
          </a>
        </div>
      </S.FooterContainer>
      <S.CopyRight>
        <span>Copyright © YumaWay. All Rights Reserved.</span>
      </S.CopyRight>
    </S.Container>
  );
};
