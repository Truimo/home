import {type FC} from 'react'

type Link = {
    name: string
    description: string
    url: string
    avatar: string
}

const links: Link[] = [
    {
        name: '提莫酱のBlog',
        description: 'Let\'s start learning !',
        url: 'https://www.timochan.cn',
        avatar: 'https://api.timochan.cn/apc/objects/icon/5ginkjzu6hseqczpgb.jpg'
    }, {
        name: 'MiaoMint',
        description: '小喵~',
        url: 'https://0u0.ren',
        avatar: 'https://q1.qlogo.cn/g?b=qq&k=G1ibIlnicR8Ij4CZO3BF6cVA&s=640'
    }
]

export default function Page() {
    return (
        <div>
            <h1 className="text-3xl font-bold leading-relaxed">朋友们</h1>
            <h3 className="text-lg font-semibold leading-relaxed">海内存知己，天涯若比邻</h3>
            <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3">
                {links.map((it, idx) => (
                    <Link key={idx} data={it}/>
                ))}
            </section>
        </div>
    )
}

const Link: FC<{ data: Link }> = (props) => {
    const {name, description, url, avatar} = props.data
    return (
        <div className="p-3 rounded-lg hover:bg-slate-200/80 dark:hover:bg-neutral-600/80">
            <a className="flex items-center hover:no-underline" href={url} target="_blank" role="link">
                <div className="h-16 w-16 rounded-full border overflow-hidden">
                    <img className="aspect-square" src={avatar} height="64" width="64" alt="avatar" loading="lazy"/>
                </div>
                <div className="ms-4 flex flex-col space-y-2">
                    <p className="text-lg font-medium">{name}</p>
                    <p className="line-clamp-2 break-all text-sm text-base-content/80">{description}</p>
                </div>
            </a>
        </div>
    )
}
