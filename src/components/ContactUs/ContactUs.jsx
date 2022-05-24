import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import flyer from "../../assets/images/flyer.jpg";
import * as S from "./ContactUs.styled";

export const ContactUs = () => {
  const [state, handleSubmit] = useForm("xayvagjq");
  if (state.succeeded) {
    return (
      <S.Container>
        <S.Parallaxes translateX={[0, -10]}>
          <img src={flyer} alt="" />
        </S.Parallaxes>
        <S.FormCard>
          <S.ThumbIcon />
          Thanks for reaching out!
        </S.FormCard>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.Parallaxes translateX={[10, -10]} >
        <img src={flyer} alt="" />
      </S.Parallaxes>

      <S.FormCard>
        <form onSubmit={handleSubmit}>
          <div>
            <span>CONTACT US</span>
            <div className="line"></div>
            <p>Hit us up for event, colaboration, question, or feedbacks!</p>
          </div>
          <label htmlFor="email"></label>
          <input id="email" type="email" name="email" placeholder="Email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="message"></label>
          <textarea id="message" name="message" placeholder="Message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit!
          </button>
        </form>
      </S.FormCard>
    </S.Container>
  );
};
