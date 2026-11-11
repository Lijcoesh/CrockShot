import { Box, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { mutedText, vexaroCharcoal } from 'src/colors';
import { contentMaxWidth } from 'src/Theme/sizes';

import WaitlistForm from './WaitlistForm';

interface IProps {
    onOpenPrivacy: () => void;
}

const useStyles = makeStyles()(theme => ({
    root: {
        borderTop: `1px solid ${vexaroCharcoal}`,
        scrollMarginTop: theme.spacing(2),
    },
    inner: {
        maxWidth: contentMaxWidth,
        margin: '0 auto',
        padding: theme.spacing(14, 4),
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(10, 2),
        },
    },
    title: {
        fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
        textTransform: 'uppercase',
        lineHeight: 0.95,
    },
    accent: {
        display: 'block',
    },
    text: {
        margin: theme.spacing(3, 0, 4),
        color: mutedText,
        maxWidth: '48ch',
    },
    form: {
        maxWidth: 640,
    },
}));

export default function Closing(props: IProps) {
    const { onOpenPrivacy } = props;

    const { classes } = useStyles();

    return (
        <Box
            component="section"
            id="wachtlijst"
            aria-labelledby="wachtlijst-titel"
            className={classes.root}
        >
            <Box className={classes.inner}>
                <Box>
                    <Typography variant="h2" id="wachtlijst-titel" className={classes.title}>
                        Acht tanden.
                        <Box component="span" className={classes.accent}>
                            Jouw beurt.
                        </Box>
                    </Typography>
                    <Typography className={classes.text}>
                        CrockShot is nog niet te koop. Laat je e-mailadres achter en je hoort het
                        zodra het zover is.
                    </Typography>
                    <Box className={classes.form}>
                        <WaitlistForm onOpenPrivacy={onOpenPrivacy} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
