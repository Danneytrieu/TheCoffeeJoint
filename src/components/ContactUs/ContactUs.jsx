import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import * as S from "./ContactUs.styled";

export const ContactUs = () => {
  const [state, handleSubmit] = useForm("xayvagjq");
  if (state.succeeded) {
    return (
      <S.Container>
        <S.FormContainer>
          <S.FormCard>
            <S.ThumbIcon />
            Thanks for reaching out!
          </S.FormCard>
        </S.FormContainer>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.FormContainer>
        <S.FormCard>
          <form onSubmit={handleSubmit}>
            <div>
              <span>CONTACT US</span>
              <div className="line"></div>
              <p>Hit us up for event, collaboration, question, or feedbacks!</p>
            </div>
            <label htmlFor="email"></label>
            <input id="email" type="email" name="email" placeholder="Email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
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
      </S.FormContainer>
    </S.Container>
  );
};
