import React from "react";
import logoImage from "../../assets/images/logo.png";
import * as S from "./Footer.styled";

export const Footer = () => {
  return (
    <S.Container>
      <S.FooterContainer>
        {/* column 1 */}
        <div>
          <img src={logoImage} alt="" />
          <h2>
            Medical cannabis can be administered through various methods,
            including capsules, lozenges, tinctures, dermal patches.
          </h2>
          <article>
            <S.InstagramIcon /> <S.FacebookIcon /> <S.YoutubeIcon />{" "}
            <S.GoogleIcon />
          </article>
        </div>
        {/* column 2 */}
        <div className="hideForTablet">
          <span>About Us</span>
          <a href="/">Contact Us</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Carrers</a>
        </div>
        {/* column 3 */}
        <div className="hideForTablet">
          <span>Products</span>
          <a href="/">Shop</a>
          <a href="/">Edibles</a>
          <a href="/">Oil</a>
          <a href="/">Buds</a>
        </div>
        {/* column 4 */}
        <div >
          <span>Contact Info</span>
          <h5>1130 Yuma Court, Denver, CO 80204</h5>
          <h5>(720) 583-4657</h5>
          <h5>thecoffeejointco.com</h5>
          <h5>thecoffeejoint@yumaway.com</h5>
        </div>
      </S.FooterContainer>
      <S.CopyRight>
        <span>Copyright © YumaWay. All Rights Reserved.</span>
      </S.CopyRight>
    </S.Container>
  );
};
