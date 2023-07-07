import { useRouter } from "next/router";
import styled from "styled-components";
import MainContent from "@/components/MainContent";
import SubContent from "@/components/SubContent";
import food from "@/assets/makeat2.jpg";
import { makeatContentList } from "@/constants/content";

const Customer = () => {
  const router = useRouter();
  const navigateToMakeatPage = () => router.push("/makeat");

  return (
    <CustomerContainer>
      <MainContent
        image={food}
        headline={
          <>
            This is
            <br /> makeat
          </>
        }
        text="makeat 다운로드"
        onClick={navigateToMakeatPage}
        color="pink"
      />
      <SubContent label="you all makeat" headline="ddd" concept={makeatContentList} />
      <SubContent color="on" label="you all makeat" headline="ddd" concept={makeatContentList} />
    </CustomerContainer>
  );
};

const CustomerContainer = styled.main``;

export default Customer;
