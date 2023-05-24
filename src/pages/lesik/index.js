import styled from "styled-components";
import MainSection from "@/components/MainContent";
import Feed from "@/components/Feed";
import business from "@/assets/shake.jpg";

const LeSik = () => {
  return (
    <LeSikContainer>
      <MainSection headline="hello everyone" image={business} />
      <Feed />
    </LeSikContainer>
  );
};

const LeSikContainer = styled.main``;

export default LeSik;
