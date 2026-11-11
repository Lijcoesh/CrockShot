import { Box, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { mutedText, vexaroWhite } from 'src/colors';
import { contentMaxWidth } from 'src/Theme/sizes';

import JawChart from './JawChart';
import WaitlistForm from './WaitlistForm';

interface IProps {
    onOpenPrivacy: () => void;
}

const useStyles = makeStyles()(theme => ({
    root: {
        containerType: 'inline-size',
        maxWidth: contentMaxWidth,
        margin: '0 auto',
        padding: theme.spacing(0, 4, 8),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 2, 6),
        },
    },
    bar: {
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
        padding: theme.spacing(2.5, 0),
    },
    sender: {
        color: mutedText,
    },
    senderName: {
        color: vexaroWhite,
        fontWeight: 600,
    },
    nav: {
        display: 'flex',
        gap: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            gap: theme.spacing(2),
        },
    },
    navLink: {
        color: vexaroWhite,
        fontWeight: 500,
        textDecoration: 'none',
        fontSize: '0.9375rem',
        '&:hover': { textDecoration: 'underline' },
        [theme.breakpoints.down('sm')]: {
            '&[data-optional]': { display: 'none' },
        },
    },
    title: {
        marginTop: theme.spacing(2),
        whiteSpace: 'nowrap',
        fontSize: '15.5cqi',
        '&:focus': { outline: 'none' },
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(3),
        },
    },
    chart: {
        marginTop: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            marginTop: theme.spacing(4),
        },
    },
    pitch: {
        display: 'grid',
        gridTemplateColumns: '5fr 6fr',
        gap: theme.spacing(6),
        alignItems: 'start',
        marginTop: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
            gap: theme.spacing(3),
        },
    },
    tagline: {
        fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
        marginBottom: theme.spacing(1.5),
    },
    intro: {
        maxWidth: '52ch',
        color: mutedText,
    },
}));

export default function Hero(props: IProps) {
    const { onOpenPrivacy } = props;

    const { classes } = useStyles();

    return (
        <Box className={classes.root}>
            <Box component="header" className={classes.bar}>
                <Typography variant="body2" className={classes.sender}>
                    <Box component="span" className={classes.senderName}>
                        Vexaro
                    </Box>{' '}
                    · Play Different.
                </Typography>
                <Box component="nav" aria-label="Pagina" className={classes.nav}>
                    <Link href="#spelregels" className={classes.navLink} data-optional>
                        Zo speel je het
                    </Link>
                    <Link href="#wachtlijst" className={classes.navLink}>
                        Wachtlijst
                    </Link>
                </Box>
            </Box>

            <Typography variant="h1" id="inhoud" tabIndex={-1} className={classes.title}>
                CrockShot
            </Typography>

            <Box className={classes.chart}>
                <JawChart />
            </Box>

            <Box className={classes.pitch}>
                <Box>
                    <Typography variant="h2" component="p" className={classes.tagline}>
                        Acht tanden. Eén bijt.
                    </Typography>
                    <Typography className={classes.intro}>
                        CrockShot is een krokodil met een blikje op zijn rug. Om de beurt druk je
                        een tand in. Zeven zijn veilig; één klapt de kaak dicht, prikt het blikje
                        open en wijst aan wie er drinkt. Probeer het hierboven.
                    </Typography>
                </Box>
                <WaitlistForm onOpenPrivacy={onOpenPrivacy} />
            </Box>
        </Box>
    );
}
