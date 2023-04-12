import './globals.css'
import {ReactNode} from 'react'
import {Metadata} from 'next'

export const metadata: Metadata = {
    title: '我的学习笔记',
    description: 'Truimo`s homepage.',
    viewport: {
        width: 'device-width',
        initialScale: 1,
        minimumScale: 1,
        maximumScale: 1,
        userScalable: false,
    }
}

export default function RootLayout({children}: {
    children: ReactNode
}) {
    return (
        <html lang="zh-CN">
        <body>{children}</body>
        </html>
    )
}
