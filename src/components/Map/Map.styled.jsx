import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.section`
  width: 100%;
  display: flex;
  text-align: center;
  padding: 100px;
  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    padding: 50px;
  }
  img {
    width: 100%;
    height: fit-content;
  }
  h2 {
    font-family: var(--font-halant);
    font-size: 3rem;
    font-weight: 200;
    color: var(--color-gold);
  }
  h3 {
    font-weight: 100;
  }
  div {

    width: 50%;
    @media ${device.laptop}{
      width: 100%;
    }
  }
`;
