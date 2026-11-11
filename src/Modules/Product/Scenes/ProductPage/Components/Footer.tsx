import { Box, Link, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { mutedText, vexaroCharcoal } from 'src/colors';
import { contentMaxWidth } from 'src/Theme/sizes';

interface IProps {
    onOpenPrivacy: () => void;
}

const useStyles = makeStyles()(theme => ({
    root: {
        borderTop: `1px solid ${vexaroCharcoal}`,
    },
    inner: {
        maxWidth: contentMaxWidth,
        margin: '0 auto',
        padding: theme.spacing(4),
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: theme.spacing(2, 4),
        color: mutedText,
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: theme.spacing(4, 2),
        },
    },
    group: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: theme.spacing(1, 3),
    },
    link: {
        color: 'inherit',
        font: 'inherit',
        verticalAlign: 'baseline',
    },
}));

export default function Footer(props: IProps) {
    const { onOpenPrivacy } = props;

    const { classes } = useStyles();

    return (
        <Box component="footer" className={classes.root}>
            <Box className={classes.inner}>
                <Typography variant="body2">
                    CrockShot is een spel van Vexaro. Play Different.
                </Typography>
                <Box className={classes.group}>
                    <Typography variant="body2">18+ · Drink met mate</Typography>
                    <Link
                        component="button"
                        type="button"
                        className={classes.link}
                        onClick={onOpenPrivacy}
                    >
                        Privacyverklaring
                    </Link>
                    <Typography variant="body2">© {new Date().getFullYear()} Vexaro</Typography>
                </Box>
            </Box>
        </Box>
    );
}
