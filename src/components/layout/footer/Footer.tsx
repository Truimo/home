import Link from 'next/link'
import {icp, linkSections, owner} from '@/config'

export const Footer = () => {
    return (
        <footer
            className="relative z-[1] mt-10 border-t bg-slate-50 py-6 text-base-content/80 dark:border-uk-separator-opaque-dark dark:bg-neutral-900"
        >
            <div className="px-4 sm:px-8">
                <div className="mx-auto max-w-7xl lg:px-8">
                    {/*<FooterInfo/>*/}
                    <CopyRight/>
                </div>
            </div>
        </footer>
    )
}

const FooterInfo = () => {
    return (
        <div className="footer text-base">
            {linkSections.map((section) => (
                <div>
                    <span className="footer-title">{section.name}</span>
                    {section.links.map((link) => link.external ? (
                        <a key={link.name} className="link link-hover" href={link.href}
                           target="_blank">{link.name}</a>
                    ) : (
                        <Link key={link.name} className="link link-hover" href={link.href}>{link.name}</Link>
                    ))}
                </div>
            ))}
        </div>
    )
}

const CopyRight = () => {
    return (
        <div className="footer footer-center pt-4 text-base">
            <div>
                <p>Copyright © 2023 <a href="/">{owner.name}</a>. <a>Home</a>.</p>
                {icp && (<p><a href={icp.link} rel="nofollow noreferrer" target="_blank">{icp.text}</a></p>)}
            </div>
        </div>
    )
}
