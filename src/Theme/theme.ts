import { createTheme } from '@mui/material/styles';

import { overrideMuiCssBaseline } from './Components/baseline';
import { overrideMuiButton, overrideMuiIconButton } from './Components/buttons';
import {
    overrideMuiFormHelperText,
    overrideMuiInputLabel,
    overrideMuiOutlinedInput,
} from './Components/inputs';
import { overrideMuiPaper } from './Components/paper';
import palette from './palette';
import overrideShadows from './shadow';
import { borderRadius } from './sizes';
import typography from './typography';

const theme = createTheme({
    palette,
    typography,
    shape: {
        borderRadius,
    },
});

theme.components = {
    MuiCssBaseline: overrideMuiCssBaseline(theme),
    MuiButton: overrideMuiButton(theme),
    MuiIconButton: overrideMuiIconButton(),
    MuiPaper: overrideMuiPaper(theme),
    MuiOutlinedInput: overrideMuiOutlinedInput(theme),
    MuiInputLabel: overrideMuiInputLabel(),
    MuiFormHelperText: overrideMuiFormHelperText(),
};

theme.shadows = overrideShadows();

export default theme;
