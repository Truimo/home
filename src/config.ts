interface ICP {
    link: string
    text: string
}

type ICPWithFalse = ICP | false;

interface Owner {
    name: string
}

interface Icon {
    rel: string
    type: string
    sizes: string
    url: string
}

export interface Config {
    siteUrl: string
    siteName: string
    title: string
    description: string
    icons: Icon[]
}

export interface LinkSection {
    name: string
    links: Link[]
}

export interface Link {
    name: string
    href: string
    external?: boolean
}

export const config: Config = {
    siteUrl: 'https://www.truimo.com',
    siteName: '浅小沫',
    title: '我的学习笔记',
    description: '浅小沫的个人主页，Truimo`s Personal Home Page.',
    icons: [{
        rel: 'icon',
        type: 'image/png',
        sizes: '500x500',
        url: 'https://assets.truimo.com/avatars/min.png',
    }]
}

export const owner: Owner = {
    name: 'Truimo',
}

export const icp: ICPWithFalse = {
    link: 'http://beian.miit.gov.cn/',
    text: '湘ICP备2020021033号-1',
}

export const linkSections: LinkSection[] = [
    {
        name: '联系',
        links: [
            {
                name: '发邮件',
                href: 'mailto:xiaomo@20mo.cn',
                external: true,
            },
            {
                name: 'GitHub',
                href: 'https://github.com/Truimo',
                external: true,
            },
        ],
    },
]
