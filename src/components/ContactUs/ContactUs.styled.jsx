import styled from "styled-components";
import { AiFillLike } from "react-icons/ai";

export const Container = styled.section`
  width: 100%;
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormCard = styled.section`
  min-height: 70%;
  min-width: 40%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-color: var(--color-darkgreen);
  color: var(--color-white);
  box-shadow: 5px 5px 5px grey;
  form {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20%;
    gap: 30px;
    .line {
      width: 150px;
      height: 3px;
      background: var(--color-white);
      margin: 0 auto 15px;
    }
    button {
      border: none;
      background: none;
      color: white;
      border: 2px white solid;
      font-size: 1.5rem;
      font-weight: 800;
      padding: 15px;
      min-width: 50%;
      margin: 0 auto;
      border-radius: 2px;
      cursor: pointer;
      :hover {
        background: var(--color-white);
        color: var(--color-darkgreen);
      }
    }
    textarea,
    input {
      height: 50px;
      background: none;
      border: none;
      border-bottom: 1px white solid;
      text-align: center;
      color: var(--color-white);
      outline: none;
      ::placeholder {
        font-family: var(--font-roboto);
        font-size: 14px;
      }
    }
    span {
      font-size: clamp(1rem, 3vw, 3rem);
      font-weight: 600;
    }
    p {
      font-weight: 300;
    }
  }
`;
export const Image = styled.img`
  width: 25%;
  box-shadow: 5px 5px 5px grey;
`;
export const ThumbIcon = styled(AiFillLike)`
  font-size: 5rem;
  margin: 0 auto;
`;
