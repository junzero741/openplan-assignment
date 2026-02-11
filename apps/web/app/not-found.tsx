
import Footer from '@/components/footer'
import Header from '@/components/header'
import Main from '@/components/main'
import PageContainer from '@/components/pageContainer'
import Section from '@/components/section'
import { Button } from '@repo/ui/button'
import Link from 'next/link'

export default function NotFound() {
    return (
        <PageContainer>
            <Header className="text-[#1A1A1A]" />
            <Main>
                <Section>
                    <div className='flex flex-col items-center'>
                        <h2 className='font-bold text-4xl'>404</h2>
                        <div className='mt-3'>요청하신 페이지를 찾을 수 없습니다.</div>
                    </div>
                </Section>
                <Footer>
                    <div className='flex justify-center'>
                        <Link href="/" className='w-full'>
                            <Button className='w-full'>홈으로</Button>
                        </Link>
                    </div>
                </Footer>
            </Main>
        </PageContainer>
    )
}