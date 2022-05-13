import styled from "styled-components";
import introVideo from "../src/assets/videos/weedfarm-1.mp4";
import { FaLocationArrow } from "react-icons/fa";
import { BsFillPhoneFill, BsFillClockFill } from "react-icons/bs";

const Header = styled.header`
  position: relative;
  width: 100%;
  height: fit-content;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 94%);
`;

const OverLayContainer = styled.div`
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  /* generate gradient: https://cssgradient.io/ */
  background: rgb(255, 255, 255);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
`;

const Logo = styled.span`
  position: absolute;
  color: var(--color-white);
  font-size: 3rem;
  font-weight: 700;
  padding: 30px;
`;

const Aside = styled.aside`
  position: absolute;
  width: 50%;
  height: 100%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  h1 {
    font-family: var(--font-jost);
    color: var(--color-gold);
    font-size: 3rem;
    margin: 0;
  }
  h2 {
    color: var(--color-white);
    font-size: 1rem;
    font-weight: 200;
  }
  h3 {
    font-family: var(--font-halant);
    color: var(--color-white);
    font-size: 5rem;
    margin: 0;
  }
  h4 {
    color: var(--color-white);
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
  }
  article {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
  }
  .line {
    width: 150px;
    height: 3px;
    background: white;
  }
`;

const LocationIcon = styled(FaLocationArrow)`
  color: var(--color-gold);
`;
const PhoneIcon = styled(BsFillPhoneFill)`
  color: var(--color-gold);
`;
const HourIcon = styled(BsFillClockFill)`
  color: var(--color-gold);
`;

function App() {
  return (
    <>
      <Header>
        <Logo>TCJ.</Logo>
        <OverLayContainer>
          <Aside>
            <h1>The Coffee Joint</h1>
            <h3>Lounge</h3>
            <div className="line" />
            <h2>Denver's First Licensed Consumption Lounge since 2018</h2>
            <section>
              <article>
                <LocationIcon />
                <h4>1130 Yuma Ct, Denver, CO 80204</h4>
              </article>
              <article>
                <PhoneIcon />
                <h4>(720) 583-4657</h4>
              </article>
              <article>
                <HourIcon />
                <h4>Daily: 10:00 am - 6:00 pm</h4>
              </article>
            </section>
          </Aside>
        </OverLayContainer>
        <Video loop="true" autoPlay="true">
          <source src={introVideo} type="video/mp4" />
        </Video>
      </Header>
    </>
  );
}

export default App;
