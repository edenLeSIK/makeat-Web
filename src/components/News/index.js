import styled from "styled-components";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { gray, white } from "@/styles/theme";

const News = () => {
  return (
    <Styler>
      <NewsContainer>
        <a
          href="https://kr.aving.net/news/articleView.html?idxno=1773665"
          target="_blank"
        >
<<<<<<< HEAD
<<<<<<< HEAD
          <h6 className="date">23/05/28</h6>
=======
          <h6 className="date">2023/05/28</h6>
>>>>>>> main
=======
          <h6 className="date">23/05/28</h6>
>>>>>>> main
          <div className="contents">
            <h5 className="title">
              제목이 제목 제목 제목이제 목 제목이제목 제
              목이제목제목이제목이제목 제 목 제 목 제목 목제목제목
            </h5>
            <div className="info">
              <span className="magazine">래식일보</span> -{" "}
              <span className="summary">
                The brand backed by a popular YouTube channel was created in
                partnership with MrBeast Burger parent Virtual Dining Concepts.
                The brand backed by a popular YouTube channel was created in
                partnership with MrBeast Burger parent Virtual Dining Concepts.
                The brand backed by a popular YouTube channel was created in
                partnership with MrBeast Burger parent Virtual Dining Concepts.
                The brand backed by a popular YouTube channel was created in
                partnership with MrBeast Burger parent Virtual Dining Concepts.
              </span>
            </div>
          </div>
          <FaArrowAltCircleRight className="icon" />
        </a>
      </NewsContainer>
    </Styler>
  );
};

const Styler = styled.div`
  &:hover .icon {
    fill: rgb(251, 105, 98);
    transform: rotate(-45deg);
  }
`;

const NewsContainer = styled.article`
  border-bottom: 1px solid ${gray};

  a {
    display: grid;
    grid-template: auto auto/1fr auto 1fr;
    padding: 32px 0;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      grid-template: auto auto/auto auto 1fr;
      padding: 16px 0;
    }

<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> main
    .date {
      margin: 0 8px 0 0;
      align-self: start;
      justify-self: start;
      color: ${gray};
      font-size: 0.8888888889rem;
      font-weight: 400;
<<<<<<< HEAD
<<<<<<< HEAD
      line-height: 1.5 !important;
      letter-spacing: 0.1rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 100%;
        font-size: 0.6666666667rem;
      }
=======
      line-height: 1.1;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
>>>>>>> main
=======
      line-height: 1.5 !important;
      letter-spacing: 0.1rem;
      text-transform: uppercase;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 100%;
        font-size: 0.6666666667rem;
      }
>>>>>>> main
    }

    .contents {
      width: 44.45vw;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 62.2266666667vw;
      }

<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> main
      .title {
        color: ${white};
        font-size: 1.3333333333rem;
        font-weight: 400;
        line-height: 1.3;
        letter-spacing: -0.01rem;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
        display: -webkit-box;
        -webkit-line-clamp: 1; /* 최대 표시할 줄 수 */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 1rem;
          line-height: 1.25;
        }
<<<<<<< HEAD
      }

      .info {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 24px 0 0;
        color: ${gray};
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.25;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 0.6666666667rem;
          line-height: 1.5;
          -webkit-line-clamp: 2;
        }
=======
=======
>>>>>>> main
      }

      .info {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 24px 0 0;
        color: ${gray};
<<<<<<< HEAD
>>>>>>> main
=======
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.25;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 0.6666666667rem;
          line-height: 1.5;
          -webkit-line-clamp: 2;
        }
>>>>>>> main

        .magazine {
          margin-bottom: 24px;
          font-size: 1rem;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: 0;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main

          @media screen and (max-width: 939px) and (min-width: 767px),
            screen and (max-width: 766px) {
            font-weight: 400;
            font-size: 0.6666666667rem;
            line-height: 1.5;
          }
        }

        .summary {
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> main
        }
      }
    }

    .icon {
      width: 50px;
      height: 50px;
      justify-self: end;
      align-self: start;
      margin-right: 8px;
      fill: #4a4a5a;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        width: 25px;
        height: 25px;
      }
<<<<<<< HEAD
=======
>>>>>>> main
=======
>>>>>>> main
    }
  }
`;

export default News;
