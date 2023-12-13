import Link from 'next/link'
import {config} from '@/config'

export const Header = () => {
    return (
        <header>
            <nav className="h-16 max-w-6xl mx-auto flex justify-between items-center">
                <div className="h-full mx-4 flex items-center">
                    <Link className="text-2xl font-bold" href="/" title={config.siteName}>TRUIMO</Link>
                </div>
                <ul className="h-full mx-4 text-lg flex items-center">
                    <li className="ms-4 h-full flex items-center">
                        <Link href="/about" title="About">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
