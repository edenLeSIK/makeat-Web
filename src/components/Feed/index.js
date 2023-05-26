import styled from "styled-components";
import Button from "../Button";
import News from "../News";
import { white } from "@/styles/theme";

let a = [1, 2, 3];

const Feed = () => {
  return (
    <FeedContainer>
      <div className="headline-wrapper">
        <h6>latest news</h6>
        <h2>We are one</h2>
        <div className="hide-on-mobile">
          <Button text="Read More" color="yellow" />
        </div>
      </div>
      <div className="feed-wrapper">
        {a.map((_, i) => (
          <News key={i} />
        ))}
      </div>
    </FeedContainer>
  );
};

const FeedContainer = styled.section`
  display: flex;
  -webkit-flex-direction: row;
  flex-direction: row;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding: 120px 0;
  padding-left: 4.44vw;
  padding-right: 4.44vw;
  background: #20202b;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    display: -webkit- flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: stretch;
    justify-content: stretch;
    row-gap: 40px;
    padding: 64px 4.44vw;
  }

  .headline-wrapper {
    display: -webkit- flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    row-gap: 24px;
    width: 28.8933333333vw;
    padding: 0 calc(5.5583333333vw / 2) 0 0;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      width: 100%;
      padding: 0;
    }

    h6 {
      color: #9797a1;
      font-size: 0.8888888889rem;
      font-weight: 700;
      line-height: 1.1;
      letter-spacing: 0.1rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        font-size: 0.6666666667rem;
        line-height: 1;
      }
    }

    h2 {
      color: ${white};
      font-size: 4rem;
      font-weight: 700;
      line-height: 0.95;
      letter-spacing: 0.01rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        font-size: 2.6666666667rem;
      }
    }
  }

  .feed-wrapper {
    width: 60.0066666667vw;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      width: 100%;
    }
  }
`;

export default Feed;
