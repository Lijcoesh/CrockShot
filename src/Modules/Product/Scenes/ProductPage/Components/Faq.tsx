import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { mutedText, vexaroCharcoal } from 'src/colors';

import Section from './Section';

const questions: { question: string; answer: string }[] = [
    {
        question: 'Wat kost CrockShot?',
        answer: 'Dat maken we bekend zodra hij te koop is. Wie op de wachtlijst staat, hoort het als eerste.',
    },
    {
        question: 'Wanneer kan ik hem kopen?',
        answer: 'Er is nog geen datum. Zodra die er is, mailen we de wachtlijst.',
    },
    {
        question: 'Wat doen jullie met mijn e-mailadres?',
        answer: 'We gebruiken het alleen om je te laten weten dat CrockShot te koop is. Afmelden kan altijd.',
    },
];

const useStyles = makeStyles()(theme => ({
    list: {
        margin: 0,
    },
    row: {
        display: 'grid',
        gridTemplateColumns: '5fr 7fr',
        gap: theme.spacing(4),
        padding: theme.spacing(3, 0),
        borderTop: `1px solid ${vexaroCharcoal}`,
        '&:last-of-type': { borderBottom: `1px solid ${vexaroCharcoal}` },
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(1),
        },
    },
    answer: {
        margin: 0,
        color: mutedText,
        maxWidth: '60ch',
    },
}));

export default function Faq() {
    const { classes } = useStyles();

    return (
        <Section id="vragen" title="Wat we al weten, en wat nog niet">
            <Box component="dl" className={classes.list}>
                {questions.map(item => (
                    <Box key={item.question} className={classes.row}>
                        <Typography variant="h3" component="dt">
                            {item.question}
                        </Typography>
                        <Typography component="dd" className={classes.answer}>
                            {item.answer}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Section>
    );
}
