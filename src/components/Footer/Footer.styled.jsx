import styled from "styled-components";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillGoogleCircle
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { device } from "../../device";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
`;
export const FooterContainer = styled.section`
  display: flex;
  width: 100%;
  background: var(--color-darkgreen);
  padding: 150px;
  @media ${device.laptop} {
    padding: 50px 0;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 30px;
    margin: 0 20px;
    @media ${device.laptop} {
      width: 50%;
    }
  }
  img {
    max-width: 200px;
    border-radius: 5px;
  }
  h2 {
    font-weight: 100;
    font-size: 1rem;
  }
  article {
    display: flex;
    gap: 20px;
  }
  a {
    color: var(--color-white);
    text-decoration: none;
    font-weight: 100;
  }
  h5 {
    font-weight: 100;
    color: var(--color-gold);
    @media ${device.tablet}{
      font-size: 0.8rem;
    }
  }
  .hideForTablet {
    @media ${device.tablet} {
      display: none;
    }
  }
`;
export const CopyRight = styled.section`
  width: 100%;
  background: var(--color-darkergreen);
  text-align: center;
  font-weight: 100;
  padding: 50px;
`;
// icons
const icon = {
  fontSize: "1.5rem",
  color: "var(--color-gold)"
};
export const InstagramIcon = styled(AiFillInstagram)`
  ${icon}
`;
export const FacebookIcon = styled(FaFacebookF)`
  ${icon}
`;
export const YoutubeIcon = styled(AiFillYoutube)`
  ${icon}
`;
export const GoogleIcon = styled(AiFillGoogleCircle)`
  ${icon}
`;
