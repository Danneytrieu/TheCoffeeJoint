import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { device } from "../../device";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;
  color: var(--color-green);
  background: var(--color-vanilla);
  text-align: center;

  /* Subheading */
  h3 {
    color: var(--color-gold);
    font-size: clamp(1.7rem, 3vw, 5rem);
    font-weight: 400;
  }
  section {
    display: flex;
    gap: 20px;
    margin: 30px 0 50px;
  }

`;
export const ProductContainer = styled.div`
  display: flex;
  gap: 70px;
  @media ${device.laptop} {
    flex-direction: column;
    gap: 50px;
  }
  @media ${device.tablet} {
    gap: 20px;
  } ;
`;
// Individual card
export const ProductCard = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: center;
  gap: 8px;
  text-align: center;
  cursor: pointer;

  img {
    border-radius: 15%;
    width: 300px;
    height: 300px;
  }
  h4 {
    font-size: clamp(1rem, 1.5vw, 5rem);
    font-weight: 400;
  }

  span {
    font-size: 1.2rem;
  }
`;
// Icon
export const Star = styled(AiFillStar)`
  color: var(--color-gold);
  font-size: clamp(0.7rem, 1vw, 4rem);
  margin-top: 20px;
`;
