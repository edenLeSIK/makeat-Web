import { useRouter } from "next/router";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import SubContent from "@/components/SubContent";
import AdsContent from "@/components/AdsContent";
import food from "@/assets/makeat1.jpg";

const Home = () => {
  const router = useRouter();
  const navigateToMakeatPage = () => router.push("/makeat");
  const navigateToCustomerPage = () => router.push("/customer");
  const navigateToFranchisePage = () => router.push("/franchise");

  return (
    <HomeContainer>
      <MainContent
        image={food}
        headline={
          <>
            당신에게 맞춘
            <br /> 건강식단, makeat
          </>
        }
        desc="안녕하세요 여러분 makeat 구매해주시죠"
        onClick={navigateToMakeatPage}
        text="makeat 구매하기"
        color="orange"
      />
      <SubContent
        label="Franchises & Businesses"
        headline="makeat assemble"
        text="Do you want makeat?"
        onClick={navigateToFranchisePage}
      />
      <SubContent
        color="on"
        label="Customers"
        headline="How we makeat?"
        text="makeat 알아보기"
        onClick={navigateToCustomerPage}
      />
      {/* <SubContent
        label="Creators"
        headline="share own your recipe"
        text="Learn more"
      />
      <Feed /> */}
      <AdsContent />
    </HomeContainer>
  );
};

const HomeContainer = styled.main`
  min-height: 100vh;
  width: 100vw;
`;

export default Home;
