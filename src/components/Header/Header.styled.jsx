import styled from "styled-components";
import { device } from "../../device";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillPhoneFill, BsFillClockFill } from "react-icons/bs";

export const Container = styled.header`
  position: relative;
  width: 100%;
  height: fit-content;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 94%);
  @media ${device.tablet} {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);
  }
`;
export const AddressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: var(--color-gold);
  color: var(--color-white);
`;
export const OverLayContainer = styled.div`
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  /* generate gradient: https://cssgradient.io/ */
  background: rgb(255, 255, 255);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;
// Video
export const Video = styled.video`
  width: 100%;
  height: 100%;
`;
// Logo
export const Image = styled.img`
  position: absolute;
  padding: 50px;
  @media ${device.tablet} {
    display:none
  }
`;
// Info text section
export const InfoContainer = styled.section`
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  /* The coffee joint */
  h1 {
    margin: 0;
    font-family: var(--font-jost);
    color: var(--color-gold);
    font-size: clamp(1rem, 3vw, 4rem);
  }
  /* Denver's First Licensed Consumption Lounge since 2018 */
  h2 {
    color: var(--color-white);
    font-size: clamp(0.8rem, 1.4vw, 3rem);
    font-weight: 100;
    margin-bottom: 1rem;
    @media ${device.tablet} {
      display: none;
    }
  }
  /* lounge */
  h3 {
    margin: 0;
    color: var(--color-white);
    font-family: var(--font-halant);
    font-size: clamp(2rem, 5vw, 10rem);
  }
  /* address, phone, hour */
  h4 {
    margin: 0;
    color: var(--color-white);
    font-size: clamp(0.7rem, 1vw, 4rem);
    font-weight: 400;
    @media ${device.tablet} {
      font-weight: 200;
    }
  }
  a {
    cursor: pointer;
    text-decoration: none;
    z-index: 1000000
  }
  /* wrap: icon + text */
  article {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  /* white line */
  .line {
    width: 150px;
    height: 3px;
    background: white;
    margin-bottom: 1rem;
  }
`;
/* Icons */
const icon = {
  color: "var(--color-gold)",
  fontSize: "clamp(0.7rem, 1vw, 4rem)",
};
export const LocationIcon = styled(FaLocationArrow)`
  ${icon}
`;
export const PhoneIcon = styled(BsFillPhoneFill)`
  ${icon}
`;
export const HourIcon = styled(BsFillClockFill)`
  ${icon}
`;
