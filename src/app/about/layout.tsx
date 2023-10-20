import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
    title: '关于',
}

export default function (props: PropsWithChildren) {
    return props.children
}
