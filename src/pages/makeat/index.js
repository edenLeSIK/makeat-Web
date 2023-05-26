import styled from "styled-components";
import MakeatPc from "@/components/MakeatPc";
import MakeatMobile from "@/components/MakeatMobile";

const Makeat = () => {
  return (
    <MakeatContainer>
      <MakeatPc className="web" />
      <MakeatMobile className="app" />
    </MakeatContainer>
  );
};

const MakeatContainer = styled.main`
  /* .web {
    @media (max-width: 915px) {
      display: none;
    }
  } */

  /* .app {
    @media (min-width: 475px) {
      left: 50%;
      margin-left: -237.5px;
    }
  } */
`;

export default Makeat;
