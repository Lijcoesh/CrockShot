import type { Theme } from '@mui/material/styles';

import { greenHover, vexaroBlack, vexaroCharcoal } from 'src/colors';
import { borderRadius } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiButton(theme: Theme): Overrides['MuiButton'] {
    return {
        defaultProps: {
            disableElevation: true,
        },
        styleOverrides: {
            root: {
                borderRadius,
                padding: theme.spacing(1.5, 3),
                transition: 'background-color 120ms ease-out, transform 120ms ease-out',
                '&:active': { transform: 'translateY(1px)' },
                variants: [
                    {
                        props: { variant: 'contained', color: 'primary' },
                        style: {
                            color: vexaroBlack,
                            '&:hover': { backgroundColor: greenHover },
                            '&.Mui-disabled': {
                                backgroundColor: vexaroCharcoal,
                                color: theme.palette.text.primary,
                            },
                        },
                    },
                ],
            },
            sizeLarge: {
                padding: theme.spacing(2, 3.5),
                fontSize: '0.9375rem',
            },
        },
    };
}

export function overrideMuiIconButton(): Overrides['MuiIconButton'] {
    return {
        styleOverrides: {
            root: {
                borderRadius,
            },
        },
    };
}
