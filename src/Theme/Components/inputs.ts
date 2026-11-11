import type { Theme } from '@mui/material/styles';

import { mutedText, vexaroCharcoal, vexaroGreen, vexaroWhite } from 'src/colors';
import { borderRadius } from 'src/Theme/sizes';

type Overrides = NonNullable<Theme['components']>;

export function overrideMuiOutlinedInput(theme: Theme): Overrides['MuiOutlinedInput'] {
    return {
        styleOverrides: {
            root: {
                borderRadius,
                backgroundColor: theme.palette.background.default,
                '& .MuiOutlinedInput-notchedOutline': { borderColor: vexaroCharcoal },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: mutedText },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: vexaroGreen,
                    borderWidth: 2,
                },
            },
            input: {
                padding: theme.spacing(2, 2),
                caretColor: vexaroGreen,
                '&::placeholder': { color: mutedText, opacity: 1 },
            },
        },
    };
}

export function overrideMuiInputLabel(): Overrides['MuiInputLabel'] {
    return {
        styleOverrides: {
            root: {
                color: mutedText,
                '&.Mui-focused': { color: vexaroWhite },
            },
        },
    };
}

export function overrideMuiFormHelperText(): Overrides['MuiFormHelperText'] {
    return {
        styleOverrides: {
            root: { marginLeft: 0, fontSize: '0.875rem' },
        },
    };
}
