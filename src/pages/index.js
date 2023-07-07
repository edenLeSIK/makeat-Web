import { useRouter } from "next/router";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import SubContent from "@/components/SubContent";
import AdsContent from "@/components/AdsContent";
import food from "@/assets/makeat1.jpg";
import { forFranchiseContentList } from "@/constants/content";

const Home = () => {
  const router = useRouter();
  const navigateToMakeatPage = () => router.push("/makeat");
  const navigateToCustomerPage = () => router.push("/customer");
  const navigateToFranchisePage = () => router.push("/franchise");

  return (
    <HomeContainer>
      <MainContent
        image={food}
        headline={<>FOOD의 개념을 바꾸다<br/>​가장 진보한 미래의<br/> 프랜차이즈를 미리 만나다</>}
        desc="건강을 위한, 나만을 위한 FOOD MAKEAT"
        onClick={navigateToMakeatPage}
        text="makeat 구매하기"
        color="orange"
      />
      <SubContent
        label="Franchises"
        headline="가장 쉬운 미래형 프렌차이즈"
        desc="온라인에서 앱에 기반하여 디지털로 확장하는 신개념 푸드 서비스"
        text="Do you want makeat?"
        onClick={navigateToFranchisePage}
        concept={forFranchiseContentList}
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
