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
  /* Heading */
  h2 {
    font-weight: 200;
    font-size: 1.3rem;
  }
  .line {
    width: 150px;
    height: 3px;
    background: var(--color-green);
    margin: 10px;
  }
  /* Subheading */
  h3 {
    color: var(--color-gold);
    font-size: clamp(1.7rem, 3vw, 5rem);
    font-weight: 400;
  }
  /* buttons */
  section {
    display: flex;
    gap: 20px;
    margin: 30px 0 50px;
  }
  button {
    border: var(--color-green) 1px solid;
    border-radius: 50px;
    background: var(--color-white);
    color: var(--color-green);
    padding: 15px 30px;
    font-size: clamp(0.8rem, 1.2vw, 4rem);
    font-weight: 100;
    transition: all ease 0.2s;
    cursor: pointer;
    :hover {
      background: var(--color-gold);
      color: var(--color-white);
      border: none;
    }
    @media ${device.tablet} {
      border-radius: 20px;
    }
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  gap: 70px;
  @media ${device.laptop} {
    gap: 50px;
  }
  @media ${device.tablet} {
    gap: 20px;
  } ;
`;
// Individual card
export const ProductCard = styled.div`
  min-width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: center;
  cursor: pointer;

  img {
    border-radius: 15%;
    width: 100%;
  }
  h6 {
    font-size: clamp(1rem, 1.5vw, 5rem);
    font-weight: 400;
  }
  h7 {
    font-size: clamp(0.8rem, 1vw, 5rem);
    font-weight: 200;
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
