import styled from "styled-components";
import { device } from "../../device";
import grid1 from "../../assets/images/grid/grid-1.jpg";
import grid2 from "../../assets/images/grid/grid-2.jpg";
import grid3 from "../../assets/images/grid/grid-3.jpg";
import {
  AiOutlineShoppingCart,
  AiOutlineCheckCircle,
  AiOutlineStop
} from "react-icons/ai";

export const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: fit-content;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas:
    "video video statistic shop"
    "instruction instruction picture picture"
    "do dont picture picture";
  text-align: center;

  a {
    text-decoration: none;
  }
  @media ${device.laptop} {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(5, 1fr);
    grid-template-areas:
      "video video"
      "statistic shop"
      "picture picture"
      "instruction instruction"
      "do dont";
  }
  @media ${device.laptop} {
    grid-template-columns: 100%;
    grid-template-areas:
      "video video"
      "statistic statistic "
      "shop shop"
      "dont dont"
      "do do ";
  } ;
`;
// Grid Area:
const gridArea = {
  minHeight: "400px",
};
export const Video = styled.div`
  ${gridArea}
  grid-area: video;
`;
export const Statistic = styled.div`
  ${gridArea}
  grid-area: statistic;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 30px;
  background: var(--color-vanilla);
  span {
    color: var(--color-gold);
    font-family: var(--font-roboto);
    font-size: clamp(6rem, 8vw, 10rem);
  }
  h5 {
    color: var(--color-green);
    text-transform: uppercase;
    font-size: clamp(0.8rem, 1.2rem, 3rem);
    font-weight: 400;
  }
`;
export const Shop = styled.div`
  ${gridArea}
  grid-area: shop;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5)),
    url(${grid1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  color: var(--color-white);
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  transition: transform 0.2s;
  
  > span {
    color: var(--color-gold);
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 1.3rem;
    font-weight: 300;
    text-transform: initial;
    cursor: pointer;
  }
`;
export const Instruction = styled.div`
  ${gridArea}
  grid-area: instruction;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${grid2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  font-size: 1.8rem;
  @media ${device.laptop} {
    display: none;
  }
  span {
    color: var(--color-gold);
  }
  p {
    font-weight: 200;
    color: var(--color-black);
    opacity: 80%;
    font-size: 1.2rem;
  }
`;
export const Do = styled.div`
  ${gridArea}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: do;
  background: var(--color-darkgreen);
  color: var(--color-white);
  font-weight: 100;
  font-size: clamp(1rem, 1vw, 3rem);
  padding: 40px;
`;
export const Dont = styled.div`
  ${gridArea}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-area: dont;
  background: var(--color-gold);
  color: var(--color-white);
  font-weight: 100;
  font-size: clamp(1rem, 1vw, 3rem);
  padding: 40px;
`;
export const Image = styled.div`
  ${gridArea}
  grid-area: picture;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
    url(${grid3});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  @media ${device.laptop}{
    display: none;
  }
`;
// icons
export const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 3rem;
  color: var(--color-gold);
`;
export const DoIcon = styled(AiOutlineCheckCircle)`
  font-size: 5rem;
  color: var(--color-white);
  margin-bottom: 10px;
`;
export const DontIcon = styled(AiOutlineStop)`
  font-size: 5rem;
  color: var(--color-white);
  margin-bottom: 10px;
`;
