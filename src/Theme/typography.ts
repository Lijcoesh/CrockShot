import type { TypographyVariantsOptions } from '@mui/material/styles';

// Montserrat Bold voor koppen en productnamen, Inter voor lopende tekst (Brand Bible).
export const displayFamily = '"Montserrat", "Inter Variable", system-ui, sans-serif';
export const bodyFamily = '"Inter Variable", system-ui, -apple-system, "Segoe UI", sans-serif';

const typography: TypographyVariantsOptions = {
    fontFamily: bodyFamily,
    h1: {
        fontFamily: displayFamily,
        fontWeight: 700,
        textTransform: 'uppercase',
        lineHeight: 0.9,
        letterSpacing: '-0.03em',
        fontSize: 'clamp(3.25rem, 12.5vw, 9.5rem)',
    },
    h2: {
        fontFamily: displayFamily,
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        textWrap: 'balance',
    },
    h3: {
        fontFamily: displayFamily,
        fontWeight: 700,
        lineHeight: 1.2,
        fontSize: '1.25rem',
    },
    body1: { fontSize: '1.0625rem', lineHeight: 1.6 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.55, fontWeight: 500 },
    button: {
        fontFamily: displayFamily,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.04em',
    },
};

export default typography;
