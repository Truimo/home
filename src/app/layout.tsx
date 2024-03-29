import '@/style/index.css'
import type {Metadata, Viewport} from 'next'
import type {FC, PropsWithChildren} from 'react'
import {config} from '@/config'
import {Root} from '@/components/layout/root'
import {sansFont, serifFont} from '@/lib/fonts'

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false
}

export const metadata: Metadata = {
    metadataBase: new URL(config.siteUrl),
    title: {
        default: config.title,
        template: `%s - ${config.siteName}`
    },
    description: config.description,
    keywords: config.keywords,
    openGraph: {
        type: 'website',
        locale: 'zh-Hans',
        title: config.title,
        description: config.description,
    },
    robots: {
        index: true,
        follow: true,
    },
    icons: config.icons
}

const RootLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <html lang="zh-CN">
        <body className={`${sansFont.variable} ${serifFont.variable} font-sans`}>
        <Root>{children}</Root>
        </body>
        </html>
    )
}

export default RootLayout
