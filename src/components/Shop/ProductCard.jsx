import React from "react";
import * as S from "./Shop.styled";

export function ProductCard({ url, img, name, description, price }) {
  return (
    <S.ProductCard>
      <a target="_blank" rel="noreferrer" href={url}>
        <img src={img} alt="Marionberry" />
      </a>
      <div>
        <S.Star />
        <S.Star />
        <S.Star />
        <S.Star />
        <S.Star />
      </div>
      <h4>{name}</h4>
      <h5>{description}</h5>
      <span>{price}</span>
    </S.ProductCard>
  );
}
