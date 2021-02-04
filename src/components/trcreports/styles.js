import { createMuiTheme } from '@material-ui/core/styles';
const drawerWidth = 240;

export let styles = theme => ({
    paper: {
        height: '100%',
        width: "100%",
    },
    paperButton: {
        width: "100%",
        padding: theme.spacing(2),
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    buttonBase: {
        width: "100%",
    }
});