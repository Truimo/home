import Link from "next/link";
import {config} from "@/config";

export const Header = () => {
    return (
        <header
            className="fixed left-0 right-0 top-0 z-[9] h-[4.5rem] overflow-hidden transition-shadow duration-200"
        >
            <HeaderBackground/>
            <div className="relative h-full flex items-center">
                <div className="px-6 h-full flex center">
                    <Link href="/">{config.siteName}</Link>
                </div>
            </div>
        </header>
    )
}

export const HeaderBackground = () => {
    return (
        <div className="absolute inset-0 bg-themed-bg_opacity"></div>
    )
}
