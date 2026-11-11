import { Box } from '@mui/material';
import { useState } from 'react';

import Anatomy from './Components/Anatomy';
import Closing from './Components/Closing';
import Faq from './Components/Faq';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import HowToPlay from './Components/HowToPlay';
import PrivacyDialog from './Components/PrivacyDialog';
import Responsible from './Components/Responsible';
import SkipLink from './Components/SkipLink';

export default function ProductPage() {
    const [privacyOpen, setPrivacyOpen] = useState(false);

    const openPrivacy = () => setPrivacyOpen(true);

    return (
        <>
            <SkipLink />
            <Box component="main" id="main">
                <Hero onOpenPrivacy={openPrivacy} />
                <HowToPlay />
                <Anatomy />
                <Responsible />
                <Faq />
                <Closing onOpenPrivacy={openPrivacy} />
            </Box>
            <Footer onOpenPrivacy={openPrivacy} />
            <PrivacyDialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
        </>
    );
}
