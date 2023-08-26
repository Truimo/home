import type {FC, PropsWithChildren} from 'react'
import {interFont} from '@/lib/fonts'
import {clsxm} from '@/lib/helper'

export default function Home() {
    return (
        <Screen>
            <div className="min-h-full w-full flex flex-col items-center content-center justify-center">
                <div className={`${interFont.className} text-3xl mb-3 font-medium`}>Hello, 欢迎来到我的主页</div>
            </div>
        </Screen>
    )
}

const Screen: FC<PropsWithChildren<{
    className?: string
}>> = ({children, className}) => {
    return (
        <div className={clsxm('relative flex h-screen flex-col center', className)}>
            {children}
        </div>
    )
}
