import Header from "@/components/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="text-[#1A1A1A]" />
      <main className="flex flex-col flex-grow h-full justify-center">
        <div className="flex justify-center items-center">
          <p className="whitespace-pre-wrap text-center text-2xl font-semibold">
            {`안녕하세요\n정준영입니다.`}
          </p>
        </div>
      </main>
    </div>
  );
}
