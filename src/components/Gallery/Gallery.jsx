import React from "react";
import gallery1 from "../../assets/images/gallery/gallery-1.jpeg";
import gallery2 from "../../assets/images/gallery/gallery-2.jpeg";
import gallery3 from "../../assets/images/gallery/gallery-3.jpeg";
import gallery4 from "../../assets/images/gallery/gallery-4.jpeg";
import gallery5 from "../../assets/images/gallery/gallery-5.jpeg";
import gallery6 from "../../assets/images/gallery/gallery-6.jpeg";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  width: 100%;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  img {
    scroll-snap-align: center;
  }
`;

export const Gallery = () => {
  return (
    <Container>
      <img src={gallery1} alt="" />
      <img src={gallery2} alt="" />
      <img src={gallery3} alt="" />
      <img src={gallery4} alt="" />
      <img src={gallery5} alt="" />
      <img src={gallery6} alt="" />
    </Container>
  );
};
