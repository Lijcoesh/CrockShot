import type { PaletteOptions } from '@mui/material/styles';

import {
    error,
    greenHover,
    ink,
    mutedText,
    vexaroBlack,
    vexaroCharcoal,
    vexaroGreen,
    vexaroWhite,
} from 'src/colors';

const palette: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: vexaroGreen,
        light: greenHover,
        dark: vexaroGreen,
        contrastText: vexaroBlack,
    },
    error: { main: error },
    background: {
        default: vexaroBlack,
        paper: ink,
    },
    text: {
        primary: vexaroWhite,
        secondary: mutedText,
    },
    divider: vexaroCharcoal,
};

export default palette;
