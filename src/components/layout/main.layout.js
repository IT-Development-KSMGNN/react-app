import { AppBar, Grid, Paper, Typography, Toolbar, Link, Breadcrumbs, IconButton, Container, CssBaseline, Button, ButtonBase, Card, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, LinearProgress } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { styles } from "./styles"
import { withStyles, useTheme } from '@material-ui/core/styles';
import { ArrowBack, ArrowBackIos, ArrowBackIosRounded, ArrowForward, ArrowForwardIosRounded, ArrowForwardSharp, AssessmentOutlined, ChevronLeftRounded, ChevronRightRounded, ExitToAppOutlined, ExpandLess, ExpandMore, HomeWork, HomeWorkOutlined, HomeWorkSharp, InboxRounded, Mail, MailOutlineRounded } from '@material-ui/icons';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {' © ' }
            <Link color="inherit" href="https://material-ui.com/">
                Команда ИТ
      </Link>{ ' ' }
            {new Date().getFullYear() }
            {'.' }
        </Typography>
    );
}
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

class MainLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openMenu: false,
            user: "",
            openTRC: false
        }

    }

    handleDrawerOpen = () => {
        this.setState({ openMenu: !this.state.openMenu });
    };
    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location.reload(false)
    }
    expand = () => { 
        this.setState({ openTRC: !this.state.openTRC });
    }
    componentDidMount() { 
        let user = JSON.parse(localStorage.getItem("user"))
        this.setState({user: user})
    }
    render() {
        const content = this.props.content
        const { classes } = this.props;
        console.log(this.props, this.state, "MAINMENU")
        //alert(JSON.stringify(this.props.history.location.pathname));
        return (
            <div className={ classes.root }>
                <CssBaseline />
                <AppBar
                    className={ clsx(classes.appBar, {
                        [classes.appBarShift]: this.state.openMenu,
                    }) }
                    position="static"
                    elevation={ 4 }
                >
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={ () => this.handleDrawerOpen() }
                            className={ clsx(classes.menuButton, this.state.openMenu && classes.hide) }
                        >
                            { this.state.openMenu ? <ArrowBackIosRounded /> : <ArrowForwardIosRounded /> }


                        </IconButton>
                        <Typography variant="h5" component="h5" className={ classes.toolbar }>
                            { this.props.header_name }
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                        // onClick={ handleDrawerOpen }
                        // className={ clsx(open && classes.hide) }
                        >
                            <ExitToAppOutlined onClick={ this.logout } />

                        </IconButton>
                    </Toolbar>
                    {/* <LinearProgress color="#ff00ff" /> */}
                </AppBar>
                <Breadcrumbs aria-label="breadcrumb"
                className={ clsx(classes.breadcrumb, {
                    [classes.breadcrumbShift]: this.state.openMenu,
                }) }
                >
                    
                    { this.props.breadcrumbs.map((el, index) => el)}

                </Breadcrumbs>
                
                <Drawer
                    variant="permanent"
                    elevation={ 3 }
                    anchor="left"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: this.state.openMenu,
                        [classes.drawerClose]: !this.state.openMenu,
                      })}
                    classes={{
                        paper: clsx({
                          [classes.drawerOpen]: this.state.openMenu,
                          [classes.drawerClose]: !this.state.openMenu,
                        }),
                      }}
                >
                    <div className={ classes.drawerHeader }>
                        <Typography variant="h6">{ this.state.user.first_name } { this.state.user.last_name }</Typography>
                    </div>
                    <Divider />
                    <List>
                            <ListItem button onClick={() => this.expand()}>
                                <ListItemIcon><HomeWorkOutlined/></ListItemIcon>
                                <ListItemText primary="Отчеты отдельных ТРЦ" />
                            {this.state.openTRC ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                    </List>
                    {/* <Divider /> */}
                    <List>
                    <ListItemLink href='/mall-reports'>
                                <ListItemIcon><AssessmentOutlined/></ListItemIcon>
                                <ListItemText primary="Сводные отчеты" />
                            </ListItemLink>
                    </List>
                </Drawer>
                <Container maxWidth={ false }
                    className={ clsx(classes.main, {
                        [classes.mainShift]: this.state.openMenu,
                    }) }
                    component="main"

                >
                    { content }
                </Container >
                <footer
                    className={ clsx(classes.footer, {
                        [classes.footerShift]: this.state.openMenu,
                    }) }
                >
                    <Container maxWidth="sm" >
                        <Typography variant="body1">В разработке ...</Typography>
                        <Copyright />
                    </Container>
                </footer>
            </div >
        )
    }


}

const mapStateToProps = (state) => {
    return {
        userLogin: state.userLogin,
        user: state.userLogin.user,
        isAuthUser: state.userLogin.isAuthUser
    }
}
export default connect(mapStateToProps)(withStyles(styles)(MainLayout));