import Link from "next/link";
import {Inter, Noto_Sans} from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['400']
})

export default function Home() {
    return (
        <main className="h-full w-full px-4 overflow-auto">
            <div className="min-h-full w-full flex flex-col items-center content-center justify-center">
                <div className={`${inter.className} text-3xl mb-3 font-medium`}>Hello, 欢迎来到我的主页</div>
                <div className={`${notoSans.className} text-xs flex flex-row items-center justify-center flex-wrap gap-1`}>
                    <p>Copyright © 2022 <Link href="/">Truimo</Link>. All Right Reserved.</p>
                    <p><a href="http://beian.miit.gov.cn/" rel="nofollow noreferrer" target="_blank">湘ICP备2020021033号-1</a></p>
                </div>
            </div>
        </main>
    )
}
