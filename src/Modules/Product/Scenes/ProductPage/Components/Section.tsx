import { Box, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';

import { vexaroCharcoal } from 'src/colors';
import { contentMaxWidth } from 'src/Theme/sizes';

interface IProps {
    id?: string;
    title: string;
    intro?: ReactNode;
    children: ReactNode;
}

const useStyles = makeStyles()(theme => ({
    root: {
        borderTop: `1px solid ${vexaroCharcoal}`,
        scrollMarginTop: theme.spacing(2),
    },
    inner: {
        maxWidth: contentMaxWidth,
        margin: '0 auto',
        padding: theme.spacing(12, 4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(8, 2),
        },
    },
    head: {
        marginBottom: theme.spacing(6),
        [theme.breakpoints.down('sm')]: {
            marginBottom: theme.spacing(4),
        },
    },
    intro: {
        marginTop: theme.spacing(2),
        maxWidth: '60ch',
        color: theme.palette.text.secondary,
    },
}));

export default function Section(props: IProps) {
    const { id, title, intro, children } = props;

    const { classes } = useStyles();
    const headingId = id ? `${id}-titel` : undefined;

    return (
        <Box component="section" id={id} aria-labelledby={headingId} className={classes.root}>
            <Box className={classes.inner}>
                <Box className={classes.head}>
                    <Typography variant="h2" id={headingId}>
                        {title}
                    </Typography>
                    {intro && <Typography className={classes.intro}>{intro}</Typography>}
                </Box>
                {children}
            </Box>
        </Box>
    );
}
