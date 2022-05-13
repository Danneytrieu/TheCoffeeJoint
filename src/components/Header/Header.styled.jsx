import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillPhoneFill, BsFillClockFill } from "react-icons/bs";

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: fit-content;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 94%);
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
export const Video = styled.video`
  width: 100%;
  height: 100%;
`;
export const Logo = styled.span`
  position: absolute;
  color: var(--color-white);
  font-size: 3rem;
  font-weight: 700;
  padding: 30px;
`;
export const Aside = styled.aside`
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  h1 {
    font-family: var(--font-jost);
    color: var(--color-gold);
    font-size: 3rem;
    margin: 0;
  }
  h2 {
    color: var(--color-white);
    font-size: 1rem;
    font-weight: 200;
  }
  h3 {
    font-family: var(--font-halant);
    color: var(--color-white);
    font-size: 5rem;
    margin: 0;
  }
  h4 {
    color: var(--color-white);
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
  }
  article {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .line {
    width: 150px;
    height: 3px;
    background: white;
  }
`;
export const LocationIcon = styled(FaLocationArrow)`
  color: var(--color-gold);
`;
export const PhoneIcon = styled(BsFillPhoneFill)`
  color: var(--color-gold);
`;
export const HourIcon = styled(BsFillClockFill)`
  color: var(--color-gold);
`;
