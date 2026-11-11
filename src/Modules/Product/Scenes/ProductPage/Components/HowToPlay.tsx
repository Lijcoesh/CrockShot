import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { mutedText, vexaroCharcoal, vexaroGreen, vexaroWhite } from 'src/colors';

import Section from './Section';

const steps: { title: string; body: string }[] = [
    {
        title: 'Op spanning',
        body: 'Zet een blikje in de houder en zet het mechanisme op spanning. De keuzeschijf bepaalt welke tand het mechanisme activeert.',
    },
    {
        title: 'Tand indrukken',
        body: 'Druk om de beurt één tand in. Veilige tand? Dan gebeurt er niets met het blikje en is de volgende aan de beurt.',
    },
    {
        title: 'Beet',
        body: 'Raak je de actieve tand, dan klapt de bovenkaak dicht en prikt het mechanisme een opening in het blikje. Jij drinkt, via het mondstuk.',
    },
    {
        title: 'Nieuwe ronde',
        body: 'Zet het mechanisme weer op spanning en kies met de keuzeschijf een andere tand.',
    },
];

const useStyles = makeStyles()(theme => ({
    list: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: theme.spacing(4),
        margin: 0,
        padding: 0,
        listStyle: 'none',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            rowGap: theme.spacing(6),
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            rowGap: theme.spacing(5),
        },
    },
    step: {
        position: 'relative',
        paddingTop: theme.spacing(3),
        borderTop: `1px solid ${vexaroCharcoal}`,
        '&::before': {
            content: '""',
            position: 'absolute',
            top: -6,
            left: 0,
            width: 1,
            height: 11,
            backgroundColor: vexaroWhite,
        },
    },
    stepBite: {
        borderTopColor: vexaroGreen,
        '&::before': { backgroundColor: vexaroGreen },
    },
    number: {
        display: 'block',
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        fontSize: '3rem',
        lineHeight: 1,
        color: vexaroWhite,
        marginBottom: theme.spacing(2),
    },
    numberBite: {
        color: vexaroGreen,
    },
    title: {
        marginBottom: theme.spacing(1),
    },
    body: {
        color: mutedText,
    },
}));

export default function HowToPlay() {
    const { classes, cx } = useStyles();

    return (
        <Section id="spelregels" title="Zo speel je het">
            <Box component="ol" className={classes.list}>
                {steps.map((step, index) => {
                    const isBite = index === 2;

                    return (
                        <Box
                            component="li"
                            key={step.title}
                            className={cx(classes.step, isBite && classes.stepBite)}
                        >
                            <Typography
                                component="span"
                                aria-hidden="true"
                                className={cx(classes.number, isBite && classes.numberBite)}
                            >
                                {index + 1}
                            </Typography>
                            <Typography variant="h3" className={classes.title}>
                                {step.title}
                            </Typography>
                            <Typography className={classes.body}>{step.body}</Typography>
                        </Box>
                    );
                })}
            </Box>
        </Section>
    );
}
