import { AppBar, Grid, Paper, Typography, Toolbar, Link, Breadcrumbs, IconButton, Container, CssBaseline, Button, ButtonBase, Card, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { sizing } from '@material-ui/system';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { styles } from "./styles"
import { withStyles, useTheme } from '@material-ui/core/styles';
import { ArrowBack, ArrowBackIos, ArrowBackIosRounded, ArrowForward, ArrowForwardIosRounded, ArrowForwardSharp, AssessmentOutlined, ChevronLeftRounded, ChevronRightRounded, ExitToAppOutlined, HomeWork, HomeWorkOutlined, HomeWorkSharp, InboxRounded, Mail, MailOutlineRounded } from '@material-ui/icons';
import MainLayout from '../layout/main.layout'


class MainMenu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props;
        let content =
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
                            style={ { minHeight: "72vh" } }
                        >
                            <Grid item md={ 4 } sm={ 5 } xs={ 12 }>
                                <ButtonBase href="/mall-reports">
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
            </Grid >;
        let breadcrumbs =
            [<Link color="inherit" href="/main" >
                Главная
            </Link>]
        let header_name= "Главная"
        return (
            <MainLayout breadcrumbs={ breadcrumbs } header_name={ header_name} content={ content }/>
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