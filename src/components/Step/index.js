import Image from "next/image";
import styled from "styled-components";
import { purple, lightPurple } from "@/styles/theme";
import fridge from "@/assets/fridge.png";

const Step = ({ options, selectOption }) => {
  return (
    <StepContainer>
      <div className="step">
        {options.map((option, i) => (
          <div
            key={i}
            className={`option ${option.active ? "active" : ""}`}
            onClick={() => selectOption(i)}
          >
            <Image alt="icon" src={fridge} className="icon" />
            <span>{option.name}</span>
          </div>
        ))}
      </div>
    </StepContainer>
  );
};

const StepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .step {
    display: flex;
    flex-direction: row;
    -webkit-align-items: stretch;
    align-items: stretch;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 48px 0;
    flex-wrap: wrap;
    margin: 0px auto;
    padding-left: 15.5566666667vw;
    padding-right: 15.5566666667vw;

    @media screen and (max-width: 766px) and (max-width: 766px) {
      justify-content: space-evenly;
      padding: 35px 0;
    }

    .option {
      display: -webkit- flex;
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
      width: 164px;
      height: 164px;
      margin: 16px;
      border: 1px solid #9797a1;
      border-radius: 16px;
      cursor: pointer;

      @media screen and (max-width: 766px) and (max-width: 766px) {
        display: -webkit- flex;
        display: flex;
        -webkit-flex-direction: row;
        flex-direction: row;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
        width: 46%;
        height: unset;
        padding: 16px;
        margin: 0 0 16px 0;
      }

      .icon {
        width: 2rem;
        height: 4rem;

        @media screen and (max-width: 766px) {
          width: 1.5rem;
          height: 2.75rem;
          margin-right: 8px;
        }
      }

      span {
        margin-top: 20px;
        font-size: 0.6666666667rem;

        @media screen and (max-width: 766px) {
          margin: 0;
        }
      }
    }

    .option:hover {
      border: 1px solid ${purple};
    }

    .active {
      border: 1px solid transparent;
      background: ${lightPurple};
    }
  }
`;

export default Step;
