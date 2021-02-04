import { createMuiTheme } from '@material-ui/core/styles';
const drawerWidth = 240;

export let styles = theme => ({
    paper: {
        height: '100%',
        width: "100%",
        // paddingLeft: theme.spacing(2),
        // paddingRight: theme.spacing(2),
        padding: theme.spacing(2),
    },
    paperButton: {
        width: "100%",
        padding: theme.spacing(2),
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
    buttonBase: {
        width: "100%",
    },
    topGrid: {
        //paddingLeft: theme.spacing(3),
    }
});