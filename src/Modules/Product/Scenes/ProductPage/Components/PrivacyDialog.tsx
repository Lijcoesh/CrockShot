import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {
    Box,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    Link,
    Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { privacyContactEmail } from 'src/Config/waitlist';
import { vexaroCharcoal } from 'src/colors';

interface IProps {
    open: boolean;
    onClose: () => void;
}

const useStyles = makeStyles()(theme => ({
    paper: {
        border: `1px solid ${vexaroCharcoal}`,
        backgroundColor: theme.palette.background.default,
    },
    title: {
        fontFamily: theme.typography.h2.fontFamily,
        fontWeight: 700,
        paddingRight: theme.spacing(7),
    },
    close: {
        position: 'absolute',
        right: theme.spacing(1.5),
        top: theme.spacing(1.5),
    },
    block: {
        '& + &': { marginTop: theme.spacing(2.5) },
    },
    label: {
        marginBottom: theme.spacing(0.5),
    },
}));

const sections: { title: string; body: string }[] = [
    {
        title: 'Wat we bewaren',
        body: 'Als je je aanmeldt voor de wachtlijst, bewaren we alleen je e-mailadres.',
    },
    {
        title: 'Waarvoor',
        body: 'Om je te mailen zodra CrockShot te koop is. We sturen geen andere mails en verkopen of delen je adres niet.',
    },
    {
        title: 'Grondslag',
        body: 'Jouw toestemming, die je geeft door je aan te melden. Je kunt die altijd intrekken via de afmeldlink in onze mail.',
    },
    {
        title: 'Hoe lang',
        body: 'Tot de verkoop van CrockShot is gestart. Daarna verwijderen we je adres.',
    },
    {
        title: 'Derden',
        body: 'Voor het versturen kan een e-maildienst worden ingeschakeld. Daarmee sluiten we een verwerkersovereenkomst.',
    },
    {
        title: 'Jouw rechten',
        body: 'Je mag je gegevens inzien, laten aanpassen of laten verwijderen, en een klacht indienen bij de Autoriteit Persoonsgegevens.',
    },
    {
        title: 'Cookies',
        body: 'Deze pagina plaatst geen cookies en gebruikt geen trackers of externe scripts.',
    },
];

export default function PrivacyDialog(props: IProps) {
    const { open, onClose } = props;

    const { classes } = useStyles();

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            classes={{ paper: classes.paper }}
        >
            <DialogTitle className={classes.title}>Privacyverklaring wachtlijst</DialogTitle>
            <IconButton className={classes.close} onClick={onClose} aria-label="Sluiten">
                <CloseRoundedIcon />
            </IconButton>
            <DialogContent>
                {sections.map(section => (
                    <Box key={section.title} className={classes.block}>
                        <Typography variant="h3" component="h3" className={classes.label}>
                            {section.title}
                        </Typography>
                        <Typography>{section.body}</Typography>
                    </Box>
                ))}
                {privacyContactEmail && (
                    <Box className={classes.block}>
                        <Typography variant="h3" component="h3" className={classes.label}>
                            Contact
                        </Typography>
                        <Typography>
                            Vragen of een verzoek? Mail{' '}
                            <Link href={`mailto:${privacyContactEmail}`} color="inherit">
                                {privacyContactEmail}
                            </Link>
                            .
                        </Typography>
                    </Box>
                )}
            </DialogContent>
        </Dialog>
    );
}
