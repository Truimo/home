import daisyui from 'daisyui'
import {withTV} from 'tailwind-variants/transformer'
import type {Config} from 'tailwindcss'
import type {PluginAPI} from 'tailwindcss/types/config'
import {addDynamicIconSelectors} from '@iconify/tailwind'
import typography from '@tailwindcss/typography'


const twConfig: Config = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    safelist: [],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [
        addDynamicIconSelectors(),
        addShortcutPlugin,
        daisyui,
        typography,
        require('tailwind-scrollbar'),
    ],
}

function addShortcutPlugin({addUtilities}: PluginAPI) {
    const styles = {
        '.content-auto': {
            'content-visibility': 'auto',
        },
        '.center': {
            'align-items': 'center',
            'justify-content': 'center',
        },
    }
    addUtilities(styles)
}

export default withTV(twConfig)