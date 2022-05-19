import React from "react";
import styled from "styled-components";
import image1 from "../../assets/images/social/social-1.jpg";
import image2 from "../../assets/images/social/social-2.jpg";

const Container = styled.section`
  width: 100%;
  background: var(--color-vanilla);
  position: relative;
  section {
    padding: 100px 300px;
  }
  span {
    font-size: 4rem;
    font-family: var(--font-halant);
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
`;
const image = {
    position: 'absolute',
    border: 'white solid 12px',
    boxShadow: '1px 0.5px 5px grey',
}
const Image1 = styled.img`
  ${image}
  width: 150px;
  top: 200px;
  left: 2%;
  transform: rotate(10deg);
`;
const Image2 = styled.img`
  ${image}
  width: 150px;
  bottom: 200px;
  left: 2%;
  transform: rotate(10deg);
`;

export const FAQ = () => {
  return (
    <Container>
      <Image1 src={image1} alt="" />
      <Image2 src={image2} alt="" />
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
          <article>Yes, we are real AND legal.</article>
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
    </Container>
  );
};
