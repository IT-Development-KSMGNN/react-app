import { AppBar, Grid, Paper, Typography, Toolbar, Link, Breadcrumbs, IconButton, Container, CssBaseline, Button, ButtonBase, Card, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { styles } from "./styles"
import { withStyles, useTheme } from '@material-ui/core/styles';
import MainLayout from './kit/index'
import { ArrowBack, ArrowBackIos, ArrowBackIosRounded, ArrowForward, ArrowForwardIosRounded, ArrowForwardSharp, AssessmentOutlined, ChevronLeftRounded, ChevronRightRounded, ExitToAppOutlined, HomeWork, HomeWorkOutlined, HomeWorkSharp, InboxRounded, Mail, MailOutlineRounded } from '@material-ui/icons';

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


class MainMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openMenu: false
        }

    }

    handleDrawerOpen = () => {
        this.setState({ openMenu: !this.state.openMenu });
    };
    logout = () => {
        localStorage.removeItem("token")
        window.location.reload(false)
    }
    render() {

        const { classes } = this.props;
        console.log(this.props, "MAINMENU")
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
                            Главная
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
                </AppBar>
                <Breadcrumbs aria-label="breadcrumb" className={ classes.breadcrumb }>
                    <Link color="inherit" href="/main" >
                        Главная
                    </Link>

                </Breadcrumbs>
                <Drawer
                    className={ classes.drawer }
                    variant="persistent"
                    anchor="left"
                    open={ this.state.openMenu }
                    classes={ {
                        paper: classes.drawerPaper,
                    } }
                >
                    <div className={ classes.drawerHeader }>
                        {/* <IconButton onClick={ () => this.handleDrawerOpen() }>
                            { this.state.openMenu ? <ChevronLeftRounded /> : <ChevronRightRounded /> }
                        </IconButton> */}
                    </div>
                    <Divider />
                    <List>
                        { ['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={ text }>
                                <ListItemIcon>{ index % 2 === 0 ? <InboxRounded /> : <MailOutlineRounded /> }</ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        )) }
                    </List>
                    <Divider />
                    <List>
                        { ['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={ text }>
                                <ListItemIcon>{ index % 2 === 0 ? <InboxRounded /> : <MailOutlineRounded /> }</ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        )) }
                    </List>
                </Drawer>
                <Container maxWidth={ false }
                    className={ clsx(classes.main, {
                        [classes.mainShift]: this.state.openMenu,
                    }) }
                    component="main"

                >
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item xs={ 12 } style={ { height: "100%" } }>
                            <Paper className={ classes.paper } elevation={ 3 }>
                                <Grid container spacing={ 2 }
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    style={ { minHeight: "78vh" } }
                                >
                                    <Grid item md={ 4 } sm={ 5 } xs={ 12 }>
                                        <ButtonBase>
                                            <Paper className={ classes.paperButton } elevation={ 6 }>
                                                <HomeWorkOutlined style={ { fontSize: 250 } } /><br />
                                                <Typography variant="button"><b>Отчеты отдельных ТРЦ</b></Typography>
                                            </Paper>
                                        </ButtonBase>
                                    </Grid>
                                    <Grid item md={ 4 } sm={ 5 } xs={ 12 }>
                                        <ButtonBase>
                                            <Paper className={ classes.paperButton } elevation={ 6 }>
                                                <AssessmentOutlined style={ { fontSize: 250 } } /><br />
                                                <Typography variant="button"><b>Сводные отчеты</b></Typography>
                                            </Paper>
                                        </ButtonBase>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
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
export default connect(mapStateToProps)(withStyles(styles)(MainMenu));