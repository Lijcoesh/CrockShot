import { Box, Button, Link, TextField, Typography } from '@mui/material';
import { useId, useState } from 'react';
import type { FormEvent } from 'react';
import { makeStyles } from 'tss-react/mui';

import { mutedText, vexaroGreen } from 'src/colors';
import { isValidEmail, joinWaitlist } from 'src/Modules/Product/Logic/joinWaitlist';

interface IProps {
    onOpenPrivacy: () => void;
}

type Status = 'idle' | 'sending' | 'done' | 'failed';

const useStyles = makeStyles()(theme => ({
    row: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: theme.spacing(1.5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'stretch',
        },
    },
    field: {
        flex: 1,
        minWidth: 0,
    },
    submit: {
        flexShrink: 0,
        minHeight: 56,
        whiteSpace: 'nowrap',
    },
    note: {
        marginTop: theme.spacing(1.5),
        color: mutedText,
        fontWeight: 400,
    },
    privacyLink: {
        color: 'inherit',
        verticalAlign: 'baseline',
        font: 'inherit',
        textDecoration: 'underline',
    },
    honeypot: {
        position: 'absolute',
        left: '-10000px',
        width: 1,
        height: 1,
        overflow: 'hidden',
    },
    done: {
        borderTop: `2px solid ${vexaroGreen}`,
        paddingTop: theme.spacing(2),
    },
    doneTitle: {
        marginBottom: theme.spacing(0.5),
    },
    failed: {
        marginTop: theme.spacing(1.5),
        color: theme.palette.error.main,
    },
}));

export default function WaitlistForm(props: IProps) {
    const { onOpenPrivacy } = props;

    const { classes } = useStyles();
    const id = useId();

    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [fieldError, setFieldError] = useState<string | null>(null);
    const [status, setStatus] = useState<Status>('idle');

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!isValidEmail(email)) {
            setFieldError(
                email.trim() === ''
                    ? 'Vul je e-mailadres in.'
                    : 'Dit e-mailadres klopt niet helemaal.',
            );
            return;
        }

        setFieldError(null);
        setStatus('sending');

        try {
            await joinWaitlist(email, website);
            setStatus('done');
        } catch {
            setStatus('failed');
        }
    }

    if (status === 'done') {
        return (
            <Box className={classes.done} role="status">
                <Typography variant="h3" component="p" className={classes.doneTitle}>
                    Je staat erop.
                </Typography>
                <Typography>
                    We mailen {email.trim()} zodra CrockShot te koop is. Meer niet.
                </Typography>
            </Box>
        );
    }

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            aria-label="Aanmelden voor de wachtlijst"
        >
            <Box className={classes.row}>
                <TextField
                    id={`${id}-email`}
                    className={classes.field}
                    type="email"
                    label="E-mailadres"
                    autoComplete="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    error={fieldError !== null}
                    helperText={fieldError}
                    disabled={status === 'sending'}
                    fullWidth
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.submit}
                    disabled={status === 'sending'}
                >
                    {status === 'sending' ? 'Even geduld…' : 'Zet me op de wachtlijst'}
                </Button>
            </Box>

            <Box className={classes.honeypot} aria-hidden="true">
                <TextField
                    id={`${id}-website`}
                    label="Website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={event => setWebsite(event.target.value)}
                    slotProps={{ htmlInput: { tabIndex: -1 } }}
                />
            </Box>

            {status === 'failed' && (
                <Typography className={classes.failed} role="alert">
                    Aanmelden lukte niet. Probeer het over een paar minuten nog eens.
                </Typography>
            )}

            <Typography variant="body2" className={classes.note}>
                We mailen je alleen als CrockShot te koop is. Afmelden kan altijd.{' '}
                <Link
                    component="button"
                    type="button"
                    className={classes.privacyLink}
                    onClick={onOpenPrivacy}
                >
                    Privacyverklaring
                </Link>
            </Typography>
        </Box>
    );
}
