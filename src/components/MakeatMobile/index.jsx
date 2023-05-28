import styled from "styled-components";

<<<<<<< HEAD
const MakeatMobile = ({ className }) => {
  return (
    <MakeatMobileContainer className="className">
=======
const MakeatMobile = () => {
  return (
    <MakeatMobileContainer>
>>>>>>> main
      <div className="header">
        <header>
          <div></div>
          <div></div>
        </header>
      </div>
      <div className="app-main"></div>
      <div className="navigation"></div>
    </MakeatMobileContainer>
  );
};

const MakeatMobileContainer = styled.section`
  position: relative;
  width: 100%;
<<<<<<< HEAD
<<<<<<< HEAD
  max-width: 475px;
=======
  max-width: 475px;
  padding-bottom: 60px;
  box-sizing: border-box;

  @media (min-width: 475px) {
    left: 50%;
    margin-left: -237.5px;
  }
  
>>>>>>> main
  padding-bottom: 60px;
  box-sizing: border-box;

  @media (min-width: 475px) {
    left: 50%;
    margin-left: -237.5px;
  }

=======
  padding-bottom: 60px;
  box-sizing: border-box;

>>>>>>> main
  ::before {
    content: "";
    position: fixed;
    top: -1px;
    bottom: 0;
    left: 50%;
    width: 475px;
    max-width: 475px;
    border: 1px solid #e7e7e7;
    z-index: 10000;
    user-select: none;
    pointer-events: none;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main

    @media (min-width: 475px) {
      left: 50%;
      margin-left: -237.5px;
    }

    @media (min-width: 915px) {
      max-width: 475px;
      margin-left: -17.5px;
    }

    @media (max-width: 475px) {
      display: none;
    }
<<<<<<< HEAD
=======
=======
>>>>>>> main
  }


    @media (min-width: 475px) {
      left: 50%;
      margin-left: -237.5px;
    }

    @media (min-width: 915px) {
      max-width: 475px;
      margin-left: -17.5px;
    }

    @media (max-width: 475px) {
      display: none;
    }
    
  @media (min-width: 475px) {
    left: 50%;
    margin-left: -237.5px;
>>>>>>> main
  }

  .header {
    position: relative;
    top: 0px;
    left: 0px;
    z-index: 10000;
    background: rgb(255, 255, 255);
  }
`;

export default MakeatMobile;
