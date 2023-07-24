import Link from 'next/link'
import {icp, linkSections, owner} from '@/config'

export const Footer = () => {
    return (
        <footer
            className="relative z-[1] mt-32 border-t border-x-uk-separator-opaque-light bg-slate-50 py-6 text-base-content/80 dark:border-uk-separator-opaque-dark dark:bg-neutral-900"
        >
            <div className="px-4 sm:px-8">
                <div className="relative mx-auto max-w-7xl lg:px-8">
                    <FooterInfo/>
                    <CopyRight/>
                </div>
            </div>
        </footer>
    )
}

const FooterInfo = () => {
    return (
        <div className="space-x-0 space-y-3 md:space-x-6 md:space-y-0">
            {linkSections.map((section) => (
                <div className="block space-x-4 md:inline-flex" key={section.name}>
                    <b className="font-medium">{section.name}</b>
                    <span className="space-x-4 text-neutral-content/90">
                            {section.links.map((link) => link.external ? (
                                <a key={link.name} className="link-hover link" href={link.href}
                                   target="_blank">{link.name}</a>
                            ) : (
                                <Link key={link.name} className="link-hover link" href={link.href}>{link.name}</Link>
                            ))}
                        </span>
                </div>
            ))}
        </div>
    )
}

const CopyRight = () => {
    return (
        <div className="mt-12 space-y-3 text-center md:mt-6 md:text-left">
            <p>Copyright © 2023 <a href="/">{owner.name}</a>. <a href="https://github.com/Truimo/home#readme" target="_blank">Home</a>.</p>
            {icp && (<p><a href={icp.link} rel="nofollow noreferrer" target="_blank">{icp.text}</a></p>)}
        </div>
    )
}