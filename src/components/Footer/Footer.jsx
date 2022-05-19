import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/images/logo.png";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
`;
const FooterContainer = styled.section`
  display: flex;
  width: 100%;
  background: var(--color-darkgreen);
  padding: 150px;
  div {
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 20px;
    margin: 0 20px;
  }
  img {
    max-width: 200px;
    border-radius: 5px;
  }
  h2 {
    font-weight: 100;
    font-size: 1rem;
  }
`;
const CopyRight = styled.section`
  width: 100%;
  background: var(--color-darkergreen);
  text-align: center;
  font-weight: 100;
  padding: 50px;
`;

// icons
const InstagramIcon = styled(AiFillInstagram)``;
const FacebookIcon = styled(FaFacebookF)``;
const YoutubeIcon = styled(AiFillYoutube)``;
const GoogleIcon = styled(AiFillGoogleCircle)``;

export const Footer = () => {
  return (
    <Container>
      <FooterContainer>
        {/* column 1 */}
        <div>
          <img src={logoImage} alt="" />
          <h2>
            Medical cannabis can be administered through various methods,
            including capsules, lozenges, tinctures, dermal patches.
          </h2>
          <article>
            <InstagramIcon /> <FacebookIcon /> <YoutubeIcon /> <GoogleIcon />
          </article>
        </div>
        {/* column 2 */}
        <div>
          <span>About Us</span>
          <a href="/">Contact Us</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of Service</a>
          <a href="/">Carrers</a>
        </div>
        {/* column 3 */}
        <div>
          <span>Products</span>
          <a href="/">Shop</a>
          <a href="/">Edibles</a>
          <a href="/">Oil</a>
          <a href="/">Buds</a>
        </div>
        {/* column 4 */}
        <div>
          <span>Contact Info</span>
          <h7>1130 Yuma Court, Denver, CO 80204</h7>
          <h7>(720) 583-4657</h7>
          <h7>thecoffeejoint@yumaway.com</h7>
        </div>
      </FooterContainer>
      <CopyRight>
        <span>Copyright © YumaWay. All Rights Reserved.</span>
      </CopyRight>
    </Container>
  );
};
