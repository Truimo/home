import clsx from 'clsx'
import {interFont, titilliumWebFont} from '@/lib/fonts'

export default function Home() {
    return (
        <div className="profile flex justify-center items-center">
            <div className={`${interFont.className}`}>
                <div className="inline-block h-[150px] w-[150px] rounded-full border overflow-hidden">
                    <img src="https://assets.truimo.com/avatars/min.png" alt="avatar" width={150} height={150}/>
                </div>
                <h1 className="text-3xl font-bold py-4">TRUIMO</h1>
                <p className={clsx(titilliumWebFont.className, 'text-lg')}>Wonderful things will happen.</p>
            </div>
        </div>
    )
}
