import React from "react";
import styled from "styled-components";
import shop1 from "../../assets/images/shop/shop-1.jpeg";
import shop2 from "../../assets/images/shop/shop-2.jpeg";
import shop3 from "../../assets/images/shop/shop-3.jpeg";
import shop4 from "../../assets/images/shop/shop-4.jpeg";
import { AiFillStar } from "react-icons/ai";

const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: var(--color-green);
  background: var(--color-vanilla);
  gap: 20px;
  /* Heading */
  h2{

  }
  
  /* Subheading */
  h3{

  }
  /* buttons */
  section{

  }
`;
const ProductContainer = styled.div`
  display: flex;
  gap: 70px;
`;
// Individual card
const ProductCard = styled.div`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  img {
    border-radius: 40px;
    width: 100%;
  }
  h6 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  h7 {
    font-weight: 200;
  }
  span {
    font-size: 1.2rem;
  }
`;
// Icon
const Star = styled(AiFillStar)`
  color: var(--color-gold);
  font-size: 1.5rem;
  margin-top: 20px;
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
      <ProductContainer>
        <ProductCard>
          <img src={shop1} alt="" />
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <h6>Danney Haze</h6>
          <h7>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </h7>
          <span>$13.99</span>
        </ProductCard>
        <ProductCard>
          <img src={shop2} alt="" />
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <h6>Danney Haze</h6>
          <h7>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </h7>
          <span>$13.99</span>
        </ProductCard>
        <ProductCard>
          <img src={shop3} alt="" />
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <h6>Danney Haze</h6>
          <h7>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </h7>
          <span>$13.99</span>
        </ProductCard>
        <ProductCard>
          <img src={shop4} alt="" />
          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <h6>Danney Haze</h6>
          <h7>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </h7>
          <span>$13.99</span>
        </ProductCard>
      </ProductContainer>
    </Container>
  );
};
