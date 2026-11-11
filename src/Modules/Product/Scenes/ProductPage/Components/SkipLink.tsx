import { Link } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { vexaroBlack, vexaroGreen } from 'src/colors';

const useStyles = makeStyles()(theme => ({
    root: {
        position: 'absolute',
        left: theme.spacing(2),
        top: theme.spacing(-8),
        zIndex: theme.zIndex.tooltip,
        padding: theme.spacing(1.5, 2),
        backgroundColor: vexaroGreen,
        color: vexaroBlack,
        fontWeight: 600,
        textDecoration: 'none',
        '&:focus': { top: theme.spacing(2) },
    },
}));

export default function SkipLink() {
    const { classes } = useStyles();

    return (
        <Link href="#inhoud" className={classes.root}>
            Naar de inhoud
        </Link>
    );
}
