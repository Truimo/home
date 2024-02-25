import {icp, owner} from '@/config'

export const Footer = () => {
    return (
        <footer>
            <div className="h-16 max-w-6xl mx-auto flex justify-center items-center">
                <p className="text-center text-sm text-zinc-500">Copyright&nbsp;&copy;&nbsp;2024&nbsp;<a href="/">{owner.name}</a>.&nbsp;<a>Home</a>.&nbsp;
                    {icp && (<a href={icp.link} rel="nofollow noreferrer" target="_blank">{icp.text}</a>)}</p>
            </div>
        </footer>
    )
}
