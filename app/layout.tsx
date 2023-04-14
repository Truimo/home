import "@/app/style/globals.css";
import {ReactNode} from "react";
import {Metadata} from "next";
import config from "@/site.config.cjs";

export const metadata: Metadata = {
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
        <html lang="zh-CN">
        <body>{children}</body>
        </html>
    )
}
