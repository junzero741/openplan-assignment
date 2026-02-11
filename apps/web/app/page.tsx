import Footer from "@/components/footer";
import Header from "@/components/header"
import Main from "@/components/main";
import PageContainer from "@/components/pageContainer";
import PhotoLinkButton from "@/components/photoLinkButton";
import Section from "@/components/section";

export default function Home() {
  return (
    <PageContainer>
      <Header className="text-[#1A1A1A]" />
      <Main>
        <Section>
          <p className="whitespace-pre-wrap text-center text-2xl font-semibold">
            {`안녕하세요\n정준영입니다.`}
          </p>
        </Section>
        <Footer>
          <PhotoLinkButton href='/result'>{`다음`}</PhotoLinkButton>
        </Footer>
      </Main>
    </PageContainer>
  );
}
