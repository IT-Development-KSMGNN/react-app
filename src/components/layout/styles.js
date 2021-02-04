import { createMuiTheme } from '@material-ui/core/styles';
const drawerWidth = 300;

export let styles = theme => ({
    paper: {
        //marginTop: theme.spacing(8),
        //alignItems: 'center',
        //margin: theme.spacing(2),
        height: '100%',
        width: "100%",
        //margin: "0"
    },
    drawer: {
        width: drawerWidth,
        //minWidth: 100,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
    drawerPaper: {
        //minWidth: 100,
        width: drawerWidth,
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(7),
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'center',
      },
    paperButton: {
        //height: "100px"
        padding: theme.spacing(2),
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        //border: "1px groove #ff00ff",
        

    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      },
    breadcrumb: {
        width: `calc(100% - ${theme.spacing(7)}px)`,
        marginLeft: `${ theme.spacing(7)}px`,
        padding: theme.spacing(2),
        backgroundColor: "#c6c7c8",
        textAlign: "right",
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        //marginLeft: 0,
        
    },
    breadcrumbShift: {
        padding: theme.spacing(2),
        backgroundColor: "#c6c7c8",
        textAlign: "right",
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: drawerWidth,
        
    },
    footer: {
        width: `calc(100% - ${theme.spacing(7)}px)`,
        marginLeft: `${ theme.spacing(7)}px`,
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        //marginLeft: 0,
    },
    footerShift: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        width: `calc(100% - ${drawerWidth}px)`,
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: drawerWidth,
    },
    main: {
        width: `calc(100% - ${theme.spacing(7)}px)`,
        marginLeft: `${ theme.spacing(7)}px`,
        //flexGrow: 1,
        
        //marginTop: theme.spacing(2),
        //marginBottom: theme.spacing(2),
        
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          //marginLeft: 0,
    },
    mainShift: {
        
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: drawerWidth,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbar: {
        flexWrap: 'wrap',
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        //width: `calc(100% - ${theme.spacing(7)}px)`,
        //marginLeft: `${ theme.spacing(7)}px`,
        // borderBottom: "1px solid #ff00ff",
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor:
            theme.palette.grey[700],
      },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor:
            theme.palette.grey[700],
    },
});