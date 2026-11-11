import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { mutedText, vexaroCharcoal } from 'src/colors';

import Section from './Section';

const useStyles = makeStyles()(theme => ({
    layout: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        gap: theme.spacing(8),
        alignItems: 'start',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(3),
        },
    },
    age: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        fontSize: 'clamp(4rem, 10vw, 7rem)',
        lineHeight: 0.85,
        letterSpacing: '-0.04em',
        padding: theme.spacing(2, 3),
        border: `2px solid ${vexaroCharcoal}`,
    },
    text: {
        maxWidth: '60ch',
        '& + &': { marginTop: theme.spacing(2) },
    },
    small: {
        marginTop: theme.spacing(3),
        color: mutedText,
    },
}));

export default function Responsible() {
    const { classes } = useStyles();

    return (
        <Section id="drinken" title="Drinken is een keuze">
            <Box className={classes.layout}>
                <Typography component="p" className={classes.age} aria-label="Achttien plus">
                    18+
                </Typography>
                <Box>
                    <Typography className={classes.text}>
                        CrockShot draait om de spanning van die ene tand, niet om hoeveel je drinkt.
                        Fris, water of alcoholvrij bier in het blikje werkt net zo goed.
                    </Typography>
                    <Typography className={classes.text}>
                        Wie niet drinkt, speelt gewoon mee. Niemand hoeft iets, en een beet is ook
                        prima met cola.
                    </Typography>
                    <Typography variant="body2" className={classes.small}>
                        Alcohol pas vanaf 18. Drink met mate, en nooit als je nog moet rijden.
                    </Typography>
                </Box>
            </Box>
        </Section>
    );
}
