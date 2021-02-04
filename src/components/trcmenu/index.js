import { AppBar, Grid, Paper, Typography, Toolbar, Link, Breadcrumbs, IconButton, Container, CssBaseline, Button, ButtonBase, Card, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { styles } from "./styles"
import { withStyles, useTheme } from '@material-ui/core/styles';
import { ArrowBack, ArrowBackIos, ArrowBackIosRounded, ArrowForward, ArrowForwardIosRounded, ArrowForwardSharp, AssessmentOutlined, ChevronLeftRounded, ChevronRightRounded, ExitToAppOutlined, HomeWork, HomeWorkOutlined, HomeWorkSharp, InboxRounded, Mail, MailOutlineRounded } from '@material-ui/icons';
import MainLayout from '../layout/main.layout'

class TrcMenu extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props;
        let route = this.props.location.pathname.split("/")[2]
        let content =

            <Paper className={ classes.paper } elevation={ 3 }>
                <Grid spacing={ 2 }
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={ { width: "100%", flexGrow: 1 } } >
                    <Grid container item xs={ 3 } spacing={ 2 }
                        direction="column"
                        justify="center"
                        alignItems="center"
                        style={ { minHeight: "72vh" } }
                    >
                        <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                            <ButtonBase href={ `/mall-reports/${route}/floors` } className={ classes.buttonBase }>
                                <Paper className={ classes.paperButton } elevation={ 6 }>
                                    <Typography variant="button"><b>Этажи</b></Typography>
                                </Paper>
                            </ButtonBase>
                        </Grid>
                        <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                            <ButtonBase href={ `/mall-reports/${route}/squares` } className={ classes.buttonBase }>
                                <Paper className={ classes.paperButton } elevation={ 6 }>
                                    <Typography variant="button"><b>Площадь под аренду</b></Typography>
                                </Paper>
                            </ButtonBase>
                        </Grid>
                        <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                            <ButtonBase href={ `/mall-reports/${route}/contracts` } className={ classes.buttonBase }>
                                <Paper className={ classes.paperButton } elevation={ 6 }>
                                    <Typography variant="button"><b>Договоры</b></Typography>
                                </Paper>
                            </ButtonBase>
                        </Grid>
                        <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                            <ButtonBase href={ `/mall-reports/${route}/fromtenant` } className={ classes.buttonBase }>
                                <Paper className={ classes.paperButton } elevation={ 6 }>
                                    <Typography variant="button"><b>Поступления от арендаторов</b></Typography>
                                </Paper>
                            </ButtonBase>
                        </Grid>
                        <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                            <ButtonBase href={ `/mall-reports/${route}/debdolg` } className={ classes.buttonBase }>
                                <Paper className={ classes.paperButton } elevation={ 6 }>
                                    <Typography variant="button"><b>Дебиторская задолженность</b></Typography>
                                </Paper>
                            </ButtonBase>
                        </Grid>
                        <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                            <ButtonBase className={ classes.buttonBase }>
                                <Paper className={ classes.paperButton } elevation={ 6 }>
                                    <Typography variant="button"><b>Покупательский поток</b></Typography>
                                </Paper>
                            </ButtonBase>
                        </Grid>
                        <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                            <ButtonBase className={ classes.buttonBase }>
                                <Paper className={ classes.paperButton } elevation={ 6 }>
                                    <Typography variant="button"><b>Сводные данные</b></Typography>
                                </Paper>
                            </ButtonBase>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>


        let route_name;
        console.log(route, "ROUTE")
        switch (route) {
            case 'gorky':
                route_name = "Горки"
                break
            case 'nora':
                route_name = "Нора"
                break
            case 'sz':
                route_name = "Сормовские Зори"
                break
            case 'muravey':
                route_name = "Муравей"
                break
            case 'mb':
                route_name = "Мебельный Базар"
                break
            case 'tsum':
                route_name = "ЦУМ"
                break
            case 'nebo':
                route_name = "Небо"
                break
            default:
                route_name = "Не известно"
                break
        }

        let breadcrumbs =
            [
                <Link color="inherit" href="/main" >
                    Главная
                </Link>,
                <Link color="inherit" href="/mall-reports" >
                    Отчеты отдельных ТРЦ
                </Link>,
                <Typography color="textPrimary">
                    { route_name }
                </Typography >,
            ]
        return (
            <MainLayout breadcrumbs={ breadcrumbs } header_name={ route_name } content={ content } />
        )
    }

}
export default withStyles(styles)(TrcMenu);