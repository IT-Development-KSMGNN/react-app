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

class TrcReports extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { classes } = this.props;
        let content =

            <Paper className={ classes.paper } elevation={ 3 }>
                <Grid
                    spacing={ 2 }
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={ { width: "100%", flexGrow: 1 } }
                >
                    <Grid item xs={ 3 }>
                        <Grid container spacing={ 2 }
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={ { minHeight: "72vh" } }
                        >
                            <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                                <ButtonBase href="/mall-reports/gorky" className={ classes.buttonBase }>
                                    <Paper className={ classes.paperButton } elevation={ 6 }>
                                        <Typography variant="button"><b>Горки</b></Typography>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                            <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                                <ButtonBase href="/mall-reports/mb" className={ classes.buttonBase }>
                                    <Paper className={ classes.paperButton } elevation={ 6 }>
                                        <Typography variant="button"><b>Мебельный Базар</b></Typography>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                            <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                                <ButtonBase href="/mall-reports/muravey" className={ classes.buttonBase }>
                                    <Paper className={ classes.paperButton } elevation={ 6 }>
                                        <Typography variant="button"><b>Муравей</b></Typography>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                            <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                                <ButtonBase href="/mall-reports/nebo" className={ classes.buttonBase }>
                                    <Paper className={ classes.paperButton } elevation={ 6 }>
                                        <Typography variant="button"><b>Небо</b></Typography>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                            <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                                <ButtonBase href="/mall-reports/nora" className={ classes.buttonBase }>
                                    <Paper className={ classes.paperButton } elevation={ 6 }>
                                        <Typography variant="button"><b>Нора</b></Typography>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                            <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                                <ButtonBase href="/mall-reports/sz" className={ classes.buttonBase }>
                                    <Paper className={ classes.paperButton } elevation={ 6 }>
                                        <Typography variant="button"><b>Сормовские Зори</b></Typography>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                            <Grid item md={ 12 } sm={ 5 } xs={ 12 } style={ { width: "100%" } }>
                                <ButtonBase href="/mall-reports/tsum" className={ classes.buttonBase }>
                                    <Paper className={ classes.paperButton } elevation={ 6 }>
                                        <Typography variant="button"><b>ЦУМ</b></Typography>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={ 3 }>
                        <Grid container spacing={ 2 }
                            direction="column"
                            justify="center"
                            alignItems="center"
                            style={ { minHeight: "72vh" } }
                        >


                        </Grid>
                    </Grid> */}
                </Grid>
            </Paper>

        let header_name = "Отчеты отдельных ТРЦ"
        let breadcrumbs =
            [<Link color="inherit" href="/main" >
                Главная
                </Link>,
            <Link color="inherit" href="/mall-reports" >
                Отчеты отдельных ТРЦ
                </Link>]
        return (
            <MainLayout breadcrumbs={ breadcrumbs } header_name={ header_name } content={ content } />
        )
    }

}
export default withStyles(styles)(TrcReports);