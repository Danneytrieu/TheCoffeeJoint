import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.section`
  width: 100%;
  background: var(--color-vanilla);
  position: relative;
  section {
    padding: 100px 300px;
    @media ${device.laptop}{
      padding: 100px 50px;
    }
  }
  span {
    font-size: 4rem;
    font-family: var(--font-halant);
    color: var(--color-black);
  }
  details {
    border-bottom: 1px black solid;
    padding: 30px 0;
  }
  summary {
    font-size: 2rem;
  }
  article {
    font-size: 1rem;
    font-weight: 200;
  }
  img {
    @media ${device.laptop} {
      display: none;
    }
  }
`;
const image = {
  position: "absolute",
  border: "white solid 12px",
  boxShadow: "1px 0.5px 5px grey",
};
export const Image1 = styled.img`
  ${image}
  width: 150px;
  top: 150px;
  left: 2%;
  transform: rotate(10deg);
`;
export const Image2 = styled.img`
  ${image}
  width: 180px;
  top: 500px;
  left: 2%;
  transform: rotate(-10deg);
`;
export const Image3 = styled.img`
  ${image}
  width: 150px;
  top: 600px;
  left: 0%;
  transform: rotate(20deg);
`;
export const Image4 = styled.img`
  ${image}
  width: 200px;
  top: 300px;
  right: 2%;
  transform: rotate(-10deg);
`;
export const Image5 = styled.img`
  ${image}
  width: 250px;
  top: 600px;
  right: 1%;
  transform: rotate(3deg);
`;
