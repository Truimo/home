import '@/style/index.css'
import {ReactNode} from 'react'
import {Metadata} from 'next'
import {config} from '@/config'

export const metadata: Metadata = {
    metadataBase: new URL(config.siteUrl),
    title: {
        default: config.title,
        template: `%s - ${config.siteName}`
    },
    description: config.description,
    viewport: {
        width: 'device-width',
        initialScale: 1,
        minimumScale: 1,
        maximumScale: 1,
        userScalable: false,
    },
    openGraph: {
        type: 'website',
        locale: 'zh-Hans',
        title: config.title,
        description: config.description,
    },
    robots: {
        index: true,
        follow: true,
    }
}

export default function RootLayout({children}: {
    children: ReactNode
}) {
    return (
        <html lang="zh-CN" className="h-full noise">
        <body className="flex h-auto min-h-full font-sans text-[#121212] dark:text-[#fafbfc]">{children}</body>
        </html>
    )
}
