import type { Theme } from '@mui/material/styles';

import { hairline, vexaroBlack, vexaroCharcoal, vexaroGreen } from 'src/colors';
import { focusOffset, focusOutline } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

// Browseroppervlakken (selectie, scrollbar, focus, caret) in de huisstijl.
export function overrideMuiCssBaseline(theme: Theme): Overrides['MuiCssBaseline'] {
    return {
        styleOverrides: {
            html: {
                scrollBehavior: 'smooth',
                scrollbarColor: `${vexaroCharcoal} ${vexaroBlack}`,
                '@media (prefers-reduced-motion: reduce)': { scrollBehavior: 'auto' },
            },
            body: {
                fontVariantNumeric: 'tabular-nums',
                WebkitFontSmoothing: 'antialiased',
                caretColor: vexaroGreen,
            },
            '::selection': {
                backgroundColor: vexaroGreen,
                color: vexaroBlack,
            },
            ':focus-visible': {
                outline: `${focusOutline}px solid ${vexaroGreen}`,
                outlineOffset: focusOffset,
            },
            '::-webkit-scrollbar': { width: 10 },
            '::-webkit-scrollbar-track': { background: vexaroBlack },
            '::-webkit-scrollbar-thumb': {
                background: hairline,
                border: `2px solid ${vexaroBlack}`,
            },
            '::-webkit-scrollbar-thumb:hover': { background: vexaroCharcoal },
            a: { textUnderlineOffset: '0.2em' },
            hr: { borderColor: theme.palette.divider },
        },
    };
}
