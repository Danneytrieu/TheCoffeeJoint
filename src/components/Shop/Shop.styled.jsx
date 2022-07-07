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
    margin: 30px 0 30px;
  }
  /* buttons */
  .button {
    margin-top: 50px;
    border: var(--color-gold) 1px solid;
    border-radius: 50px;
    background: var(--color-gold);
    color: var(--color-white) !important;
    padding: 15px 30px;
    font-size: clamp(0.8rem, 0.9vw, 4rem);
    font-weight: 100 !important;
    transition: all ease 0.2s;
    cursor: pointer;
    :hover {
      background: var(--color-white);
      color: var(--color-green) !important;
    }
    @media ${device.tablet} {
      border-radius: 20px;
    }
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
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
  color: var(--color-grey);
  img {
    border-radius: 15%;
    width: 300px;
    height: 300px;
    transition: all ease 0.2s;
    &:hover {
      box-shadow: 1px 3px 10px grey;
    }
  }
  h4 {
    font-size: clamp(1rem, 1.5vw, 5rem);
    font-weight: 400;
  }
  h5 {
    font-size: clamp(0.8rem, 1vw, 5rem);
    font-weight: 100;
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
