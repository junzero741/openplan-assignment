import Header from "@/components/header"
import PhotoLinkButton from "@/components/photoLinkButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="text-[#1A1A1A]" />
      <main className="flex flex-col flex-grow h-full justify-center">
        <section className="flex justify-center items-center h-full flex-grow">
          <p className="whitespace-pre-wrap text-center text-2xl font-semibold">
            {`안녕하세요\n정준영입니다.`}
          </p>
        </section>
        <footer className="px-5 py-10">
          <PhotoLinkButton href='/result'>{`다음`}</PhotoLinkButton>
        </footer>
      </main>
    </div>
  );
}
