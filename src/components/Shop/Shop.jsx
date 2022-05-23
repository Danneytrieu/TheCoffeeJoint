import React from "react";
import shop1 from "../../assets/images/shop/shop-1.jpeg";
import shop2 from "../../assets/images/shop/shop-2.jpeg";
import shop3 from "../../assets/images/shop/shop-3.jpeg";
import shop4 from "../../assets/images/shop/shop-4.jpeg";
import * as S from "./Shop.styled";

export const Shop = () => {
  return (
    <S.Container>
      <h2>Our Dispensary</h2>
      <div className="line" />
      <h3>Popular Cannabis Products</h3>
      <section>
        <button>CBD OILS</button>
        <button>CANNABIS</button>
        <button>EDIBLES</button>
      </section>
      <S.ProductContainer>
        <S.ProductCard>
          <img src={shop1} alt="" />
          <div>
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
          </div>
          <h4>Danney Haze</h4>
          <h5>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </h5>
          <span>$13.99</span>
        </S.ProductCard>
        <S.ProductCard>
          <img src={shop2} alt="" />
          <div>
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
          </div>
          <h4>Danney Haze</h4>
          <h5>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </h5>
          <span>$13.99</span>
        </S.ProductCard>
        <S.ProductCard>
          <img src={shop3} alt="" />
          <div>
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
          </div>
          <h4>Danney Haze</h4>
          <h5>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </h5>
          <span>$13.99</span>
        </S.ProductCard>
        <S.ProductCard>
          <img src={shop4} alt="" />
          <div>
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
            <S.Star />
          </div>
          <h4>Danney Haze</h4>
          <h5>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </h5>
          <span>$13.99</span>
        </S.ProductCard>
      </S.ProductContainer>
    </S.Container>
  );
};
