import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center content-center justify-center min-h-screen min-w-screen">
            <div className="text-3xl mb-3 font-medium">Hello, 欢迎来到我的主页</div>
            <div className="text-xs flex flex-col-reverse items-center">
                <p><a href="http://beian.miit.gov.cn/" rel="nofollow noreferrer" target="_blank">湘ICP备2020021033号-1</a></p>
                <p>Copyright © 2022 <Link href="/">Truimo</Link>. All Right Reserved.</p>
            </div>
        </main>
    )
}
