import Footer from "@/components/footer";
import GoBackButton from "@/components/goBackButton";
import Header from "@/components/header"
import Main from "@/components/main";
import PhotoDetail from "@/components/photoDetail";
import ResultPageContainer from "@/components/resultPageContainer";
import Section from "@/components/section";


export default function Result() {
  return (
    <ResultPageContainer>
      <Header />
      <Main>
        <Section>
          <PhotoDetail />
        </Section>
        <Footer>
          <GoBackButton />
        </Footer>
      </Main>
    </ResultPageContainer>
  );
}
