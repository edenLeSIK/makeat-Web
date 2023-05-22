import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "@/components/Button";
import { navList } from "@/constants/nav";
import { gray, main, white } from "@/styles/theme";

const HeaderModal = ({ setIsHeaderModal }) => {
  const router = useRouter();
  const navigateToMakeatPage = () => {
    router.push("/makeat");
    setIsHeaderModal(false);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    document.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderModalContainer>
      <div className="header-wrapper">
        <ul>
          {navList.map((nav) => (
            <li key={nav.id}>
              <Link href={nav.link} onClick={() => setIsHeaderModal(false)}>
                {nav.category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="button-wrapper">
        <Button
          color="main"
          text="makeat 구매하기"
          className="only-on-mobile"
          onClick={navigateToMakeatPage}
        />
      </div>
      <div className="copyright">
        <p>Copyright © LeSIK. All Rights Reserved.</p>
      </div>
    </HeaderModalContainer>
  );
};

const HeaderModalContainer = styled.div`
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  padding: 100px 4.44vw 56px;
  background: ${gray};
  z-index: 49;
  overflow: hidden;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    row-gap: 17px;
    padding: 52px 4.44vw 24px;
    overflow: scroll;
  }

  .header-wrapper {
    ul {
      display: flex;
      -webkit-flex-direction: column;
      flex-direction: column;
      -webkit-align-items: flex-start;
      align-items: flex-start;
      -webkit-justify-content: flex-start;
      justify-content: flex-start;
      row-gap: 16px;

      li > a {
        color: ${white};
        font-size: 5.3333333333rem;
        font-weight: 700;
        line-height: 0.95;
        letter-spacing: -0.25rem;
        transition: all 0.2s ease;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          font-size: 3.5555555556rem;
        }
      }

      li > a:hover {
        margin-left: 30px;
        color: ${main};
      }
    }
  }

  .copyright {
    color: ${white};

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      margin-left: 5px;
      font-size: 0.5rem;
    }
  }
  .button-wrapper {
    display: none;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      display: block;
      width: 160px;
    }
  }
`;

export default HeaderModal;
