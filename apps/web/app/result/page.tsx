import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import PhotoDetail from "@/components/photoDetail";
import ResultGoBackButton from "@/components/resultGoBackButton";
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
          <ResultGoBackButton />
        </Footer>
      </Main>
    </ResultPageContainer>
  );
}
