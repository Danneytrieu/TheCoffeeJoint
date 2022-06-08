import styled from "styled-components";
import { device } from "../../device";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 10px 100px;
  /* Consumption Lounge */
  h2 {
    text-align: center;
    font-size: 7.5vw;
    white-space: nowrap;
    margin: 0;
    color: var(--color-grey);
    opacity: 10%;
  }
`;
export const ContentContainer = styled.main`
  padding: 0 150px;
  display: flex;
  flex-direction: row;
  @media ${device.laptop} {
    padding: 0 50px;
  }
  /* Honey-weed image*/
  img {
    width: clamp(200px, 30vw, 600px);
    height: auto;
    margin-top: 150px;
    @media ${device.laptop} {
      display: none;
    }
  }
  /* article container */
  article {
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* Consume cannabis in Denver */
    h3 {
      color: var(--color-gold);
      font-size: clamp(1.2rem, 3vw, 5rem);
      @media ${device.tablet} {
        font-weight: 500;
      }
    }
    /* ABOUT US */
    h4 {
      color: var(--color-gold);
      font-size: 1.5rem;
      font-weight: 300;
    }
    /* Paragraph */
    p {
      font-weight: 200;
      font-size: clamp(14px, 1.3vw, 30px);
      color: var(--color-grey);
      margin: 30px 0;
      @media ${device.tablet} {
        margin: 0;
      }
    }
    .line {
      max-width: 15vw;
      height: 3px;
      background: var(--color-gold);
    }
    button {
      padding: 10px;
      font-size: clamp(14px, 1.3vw, 30px);
      font-weight: 300;
      width: 180px;
      border: 3px solid var(--color-gold);
      background: var(--color-white);
      color: var(--color-gold);
      cursor: pointer;
      transition: all ease 0.2s;
      :hover {
        background: var(--color-gold);
        color: var(--color-white);
      }
    }
    a {
      text-decoration: none;
      color: var(--color-gold);
      :hover {
        color: var(--color-white);
      }
    }
  }
`;
