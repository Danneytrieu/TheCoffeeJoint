import React from "react";
import styled from "styled-components";
import shop1 from "../../assets/images/shop/shop-1.jpeg";
import shop2 from "../../assets/images/shop/shop-2.jpeg";
import shop3 from "../../assets/images/shop/shop-3.jpeg";
import shop4 from "../../assets/images/shop/shop-4.jpeg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Shop = () => {
  return (
    <Container>
      <h2>Our Dispensary</h2>
      <h3>Popular Cannabis Products</h3>
      <section>
        <button>CBD OILS</button>
        <button>CANNABIS</button>
        <button>EDIBLES</button>
      </section>
      <section>
        <div>
          <img src={shop1} alt="" />
          <div>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
          <h6>Danney Haze</h6>
          <h7>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem …
          </h7>
          <span>$13.99</span>
        </div>
      </section>
    </Container>
  );
};
