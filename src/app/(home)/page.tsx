import type {FC, PropsWithChildren} from 'react'
import {interFont} from '@/lib/fonts'
import {clsxm} from '@/lib/helper'


const Screen: FC<PropsWithChildren<{
    className?: string
}>> = ({children, className}) => {
    return (
        <div className={clsxm('relative flex h-screen flex-col center', className)}>
            {children}
        </div>
    )
}

export default function Home() {
    return (
        <Screen>
            <div className="min-h-full w-full flex flex-col items-center content-center justify-center">
                <div className={`${interFont.className} text-3xl mb-3 font-medium leading-relaxed`}>
                    <p>Hello, I'm <span className="text-sky-500 font-bold">Truimo</span>.</p>
                    <p>Nice to meet you!</p>
                    <p>Construction is underway...</p>
                </div>
            </div>
        </Screen>
    )
}
