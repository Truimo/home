
export default function Page() {
    return (
        <div>
            <h2 className="text-2xl font-bold leading-loose">Me</h2>
            <p className="leading-relaxed">我叫 <span className="underline">“浅小沫”</span>，你可以叫我：小沫、<b>小白</b>！英文 ID 是 “Truimo”，已经不太清楚这个 ID 是怎么来的了...</p>
            <h3 className="text-lg font-semibold leading-loose">Hobby</h3>
            <p className="leading-relaxed">对计算机有浓厚的兴趣</p>
            <p className="leading-relaxed">喜欢阅读，常阅读科幻、悬疑类</p>
            <p className="leading-relaxed">喜欢音乐，学废过乐器，以听音乐为主</p>
            <h3 className="text-lg font-semibold leading-loose">Contact</h3>
            <p className="leading-relaxed">电子邮件: <a href="mailto:truimo@qq.com">truimo@qq.com</a></p>
            <h2 className="text-2xl font-bold leading-loose">Website</h2>
            <p className="leading-relaxed">它基于 Next.js 框架，使用 Tailwind CSS 进行设计，使用 TypeScript 进行开发，使用 Vercel 进行部署。</p>
            <p className="leading-relaxed">这是我的个人网站，很久没有维护了，现在我又把它重拾起来。</p>
            <p className="leading-relaxed">在这会记录关于我的一些事情，受某些原因的影响，这里依然保持简洁。</p>
            <h2 className="text-2xl font-bold leading-loose">Domain</h2>
            <p className="leading-relaxed">当然是英文 ID 加 com 作为域名啦，好像没有别的特色了。</p>
            <div className="h-10"></div>
            <p className="leading-relaxed">最后，很高兴遇见你！</p>
            <p className="leading-relaxed">总之，你好。</p>
        </div>
    )
}
