import React from "react";
import image1 from "../../assets/images/social/social-1.jpg";
import image2 from "../../assets/images/social/social-2.jpg";
import image3 from "../../assets/images/social/social-3.jpg";
import image4 from "../../assets/images/social/social-4.jpg";
import image5 from "../../assets/images/social/social-5.png";
import * as S from "./FAQ.styled";

export const FAQ = () => {
  return (
    <S.Container>
      <S.Image1 src={image1} alt="" />
      <S.Image2 src={image2} alt="" />
      <S.Image3 src={image3} alt="" />
      <S.Image4 src={image4} alt="" />
      <S.Image5 src={image5} alt="" />
      <section>
        <span>FAQ</span>
        <details>
          <summary>What is The Coffee Joint Lounge?</summary>
          <article>
            Our lounge offers tourists and locals the opportunity to experience
            CBD and THC products in a sociable atmosphere. We allow indoor
            edible, dab and vape.
          </article>
        </details>
        <details>
          <summary>Do you rent out any smoking accessories?</summary>
          <article>
            We do not rent out any smoking accessories. E-Nail will be provide
            but you will need to bring your own rig or purchase a rig from our
            store. We also have many other awesome smoking accessories available
            for purchase.
          </article>
        </details>
        <details>
          <summary>Is this real? Is this legal?</summary>
          <article>Yes, we are legit AND legal.</article>
        </details>
        <details>
          <summary>Is there an age requirement?</summary>
          <article>
            All guests must be 21+ with a valid form of Government issued ID to
            enter our establishment. Expired forms of identification will not be
            accepted.
          </article>
        </details>
        <details>
          <summary>What if I'm visiting from outside the US?</summary>
          <article>Just bring a valid passport and you’re good to go!</article>
        </details>
        <details>
          <summary>I want to host a private event</summary>
          <article>
            Fantastic! We love parties! Please email thecoffeejoint@yumaway.com
            for more information on having your private event at The Coffee
            Joint Lounge.
          </article>
        </details>
      </section>
    </S.Container>
  );
};
