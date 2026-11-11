import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import productImage from 'src/Resources/crockshot-product.png';
import { mutedText, vexaroBlack, vexaroCharcoal, vexaroWhite } from 'src/colors';

import Section from './Section';

// Posities in % van het productbeeld (406 × 214).
const parts: { title: string; body: string; x?: number; y?: number }[] = [
    {
        title: 'Blikhouder',
        body: 'Hier staat het blikje, rechtop op de rug van de krokodil.',
        x: 54.5,
        y: 40,
    },
    {
        title: 'Bovenkaak',
        body: 'Klapt dicht bij de actieve tand en prikt het blikje open.',
        x: 39,
        y: 57,
    },
    { title: 'Acht tanden', body: 'Zeven veilig, één actief. Je ziet niet welke.', x: 33, y: 71 },
    { title: 'Mondstuk', body: 'Na een beet drink je hieruit.', x: 73, y: 50 },
    {
        title: 'Keuzeschijf',
        body: 'Bepaalt per ronde welke tand bijt. Niet in beeld op deze foto.',
    },
];

const useStyles = makeStyles()(theme => ({
    layout: {
        display: 'grid',
        gridTemplateColumns: '7fr 5fr',
        gap: theme.spacing(6),
        alignItems: 'start',
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(4),
        },
    },
    figure: {
        position: 'relative',
        margin: 0,
        border: `1px solid ${vexaroCharcoal}`,
    },
    image: {
        display: 'block',
        width: '100%',
        height: 'auto',
    },
    marker: {
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        width: 30,
        height: 30,
        display: 'grid',
        placeItems: 'center',
        backgroundColor: vexaroBlack,
        border: `2px solid ${vexaroWhite}`,
        borderRadius: '50%',
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        fontSize: '0.875rem',
        lineHeight: 1,
        color: vexaroWhite,
        boxShadow: `0 2px 8px ${vexaroBlack}`,
        [theme.breakpoints.down('sm')]: {
            width: 24,
            height: 24,
            fontSize: '0.75rem',
        },
    },
    caption: {
        padding: theme.spacing(1.25, 1.5),
        borderTop: `1px solid ${vexaroCharcoal}`,
        color: mutedText,
        fontWeight: 400,
    },
    list: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    item: {
        display: 'grid',
        gridTemplateColumns: '2.5rem 1fr',
        gap: theme.spacing(1),
        padding: theme.spacing(2, 0),
        borderTop: `1px solid ${vexaroCharcoal}`,
        '&:last-of-type': { borderBottom: `1px solid ${vexaroCharcoal}` },
    },
    index: {
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        color: mutedText,
        lineHeight: 1.6,
    },
    body: {
        color: mutedText,
        marginTop: theme.spacing(0.25),
    },
}));

export default function Anatomy() {
    const { classes } = useStyles();

    return (
        <Section
            id="product"
            title="Krokodil, blikje, mondstuk"
            intro="Geen kaartjes, geen app. Een krokodil op tafel, een blikje erin, en de hele groep die naar die ene tand kijkt."
        >
            <Box className={classes.layout}>
                <Box component="figure" className={classes.figure}>
                    <Box
                        component="img"
                        src={productImage}
                        alt="De CrockShot: een groene krokodil met opengesperde bek, witte tanden en een groen blikje in de houder op zijn rug."
                        className={classes.image}
                        width={406}
                        height={214}
                        loading="lazy"
                    />
                    {parts.map((part, index) =>
                        part.x === undefined ? null : (
                            <Box
                                key={part.title}
                                component="span"
                                className={classes.marker}
                                style={{ left: `${part.x}%`, top: `${part.y}%` }}
                                aria-hidden="true"
                            >
                                {index + 1}
                            </Box>
                        ),
                    )}
                    <Typography component="figcaption" variant="body2" className={classes.caption}>
                        Productbeeld CrockShot met de onderdelen genummerd.
                    </Typography>
                </Box>

                <Box component="ol" className={classes.list}>
                    {parts.map((part, index) => (
                        <Box component="li" key={part.title} className={classes.item}>
                            <Typography
                                component="span"
                                className={classes.index}
                                aria-hidden="true"
                            >
                                {index + 1}
                            </Typography>
                            <Box>
                                <Typography variant="h3">{part.title}</Typography>
                                <Typography className={classes.body}>{part.body}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Section>
    );
}
