import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { CgCloseO } from "react-icons/cg";
import { FaHamburger } from "react-icons/fa";
import Button from "@/components/Button";
import HeaderModal from "./HeaderModal";
import logo from "@/assets/cooksup_logo.png";
import { black, white, darkGray } from "@/styles/theme";

const Header = () => {
  const router = useRouter();
  const [isHeaderModal, setIsHeaderModal] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigateToMakeatPage = () => {
    router.push("/makeat");
    setIsHeaderModal(false);
  };
  const handleHeader = () => setIsHeaderModal(!isHeaderModal);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    if (typeof window !== "undefined")
      window.addEventListener("scroll", handleScroll);

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrollPastInnerHeight =
    scrollPosition > (typeof window !== "undefined" && window.innerHeight);
  const backgroundColor =
    isScrollPastInnerHeight && !isHeaderModal ? `${white}` : `transparent`;
  const fontColor = isScrollPastInnerHeight ? `${black}` : `${white}`;
  const boxShadow =
    isScrollPastInnerHeight && !isHeaderModal
      ? "0px 5px 10px rgba(0, 0, 0, 0.1)"
      : "none";
  const iconColor =
    isScrollPastInnerHeight && !isHeaderModal ? `${darkGray}` : `${white}`;

  return (
    !(router.pathname === "/makeat") && (
      <>
        <HeaderContainer
          style={{ backgroundColor, iconColor, fontColor, boxShadow }}
        >
          <div className="header-wrapper">
            {isHeaderModal ? (
              <CgCloseO onClick={handleHeader} className="icon" />
            ) : (
              <FaHamburger onClick={handleHeader} />
            )}
            <Link
              href="/"
              className="link"
              onClick={() => setIsHeaderModal(false)}
            >
              <Image src={logo} alt="logo" className="logo" />
            </Link>
            <div className="button-wrapper">
              <Button
                color="main"
                text="구매하기"
                className="hide-on-mobile"
                onClick={navigateToMakeatPage}
              />
            </div>
          </div>
        </HeaderContainer>
        {isHeaderModal && <HeaderModal setIsHeaderModal={setIsHeaderModal} />}
      </>
    )
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px 4.44vw;
  background-color: ${(props) => props.backgroundColor};
  transition: background-color 0.2s ease;
  z-index: 50;
  box-shadow: ${(props) => props.boxShadow};
  overflow: hidden;

  @media screen and (max-width: 939px) and (min-width: 767px),
    screen and (max-width: 766px) {
    padding: 12px 4.44vw;
  }

  @media screen and (max-width: 939px) and (min-width: 767px) and (max-width: 766px),
    screen and (max-width: 766px) and (max-width: 766px) {
    padding: 12px 5.33vw;
  }

  .header-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    margin: 0 auto;

    @media screen and (max-width: 939px) and (min-width: 767px),
      screen and (max-width: 766px) {
      width: 100%;
      max-width: 100%;
    }

    svg {
      align-self: center;
      justify-self: flex-start;
      margin: auto 0;
      color: ${(props) => props.iconColor};
      font-size: 2.75rem;
      transition: all 0.2s ease;
      cursor: pointer;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        min-width: auto;
        font-size: 2rem;
      }
    }

    .link {
      align-self: center;
      justify-self: center;
      margin: auto 0;

      @media screen and (max-width: 939px) and (min-width: 767px),
        screen and (max-width: 766px) {
        height: 40px;
      }

      .logo {
        display: flex;
        align-items: center;
        width: 100%;
        height: 50px;

        @media screen and (max-width: 939px) and (min-width: 767px),
          screen and (max-width: 766px) {
          height: 100%;
        }
      }
    }

    .button-wrapper {
      align-self: center;
      justify-self: flex-end;
    }

    ul {
      display: flex;
      align-items: center;
      padding: 0;

      li > a {
        padding: 0 8px;
        color: ${(props) => props.fontColor};
        font-size: 1.125rem;
        font-weight: 700;
      }

      li > a:hover {
        color: ${darkGray};
        font-size: 1.125rem;
        font-weight: 700;
      }

      li + li {
        margin-left: 30px;
      }
    }
  }
`;

export default Header;
