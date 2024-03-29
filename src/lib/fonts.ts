import {Inter, Manrope, Noto_Serif_SC, Titillium_Web} from 'next/font/google'

const sansFont = Manrope({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-sans',
    display: 'swap',
})

const serifFont = Noto_Serif_SC({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-serif',
    display: 'swap',
    fallback: ['Noto Serif SC'],
})

const interFont = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '700']
})

const titilliumWebFont = Titillium_Web({
    subsets: ['latin'],
    weight: '400'
})

export {sansFont, serifFont, interFont, titilliumWebFont}
