import { AppBar, TableCell, TableBody, Grid, Paper, Typography, Toolbar, Link, Breadcrumbs, IconButton, Container, CssBaseline, Button, ButtonBase, Card, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableHead, TableRow, CardContent, CardActions } from '@material-ui/core';
import clsx from 'clsx';
//import { fuchsia } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { styles } from "./styles"
import { withStyles, useTheme } from '@material-ui/core/styles';
import { Add, ArrowBack, ArrowBackIos, ArrowBackIosRounded, ArrowForward, ArrowForwardIosRounded, ArrowForwardSharp, AssessmentOutlined, ChevronLeftRounded, ChevronRightRounded, ExitToAppOutlined, HomeWork, HomeWorkOutlined, HomeWorkSharp, InboxRounded, Mail, MailOutlineRounded } from '@material-ui/icons';
import MainLayout from '../layout/main.layout'

class Floors extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const StyledTableRow = withStyles((theme) => ({
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.action.hover,
                },
            },
        }))(TableRow);
        const StyledButton = withStyles((theme) => ({
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: "#FF00FF",
                },
            },
        }))(Button);
        const StyledTableCell = withStyles((theme) => ({
            head: {
                //backgroundColor: theme.palette.common.black,
                backgroundColor: "#616161",
                color: theme.palette.common.white,
                fontSize: 16,
            },
            body: {
                fontSize: 16,
            },
        }))(TableCell);
        function createData(level, name, square) {
            return { level, name, square };
        }

        const rows = [
            createData('-2', "Парковка", "14 796,00"),
            createData('-1', "Парковка", "14 378,00"),
            createData('0', "Цоколь", "14 443,00"),
            createData('1', "Этаж", "14 079,00"),
            createData('2', "Этаж", "13 592,00"),
            createData('3', "Этаж", "13 604,00"),
            createData('4', "Этаж", "13 700,00"),
            createData('5', "Этаж", "18 112,00"),
            createData('6', "Этаж", "14 294,00"),
            createData('7', "Этаж", "9 757,00"),
            createData('8', "Этаж", "528,00"),
        ];
        const { classes } = this.props;
        let content =

            <Paper className={ classes.paper } elevation={ 3 }>
                <Grid spacing={ 2 }
                    container
                    direction="row"
                    justify="center"
                    alignItems="start"
                >
                    <Grid spacing={ 4 }
                        item
                        xs={ 6 }
                        container
                        direction="column"
                        justify="start"
                        alignItems="start"
                        style={ { width: "100%", flexGrow: 1, minHeight: "72vh", } }
                    >
                        <Grid item xs={ 12 }>
                            <TableContainer component={ Paper }>
                                <Table aria-label="customized table" size="small">
                                    <TableHead style={ { backgroundColor: "#616161" } }>
                                        <TableRow>
                                            <StyledTableCell>Уровень</StyledTableCell>
                                            <StyledTableCell align="left">Название</StyledTableCell>
                                            <StyledTableCell align="right">Общая площадь</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        { rows.map((row) => (
                                            <StyledTableRow key={ row.name }>
                                                <StyledTableCell component="th" scope="row">
                                                    { row.level }
                                                </StyledTableCell>
                                                <StyledTableCell align="left">{ row.name }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.square }</StyledTableCell>
                                            </StyledTableRow>
                                        )) }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={ 12 } container justify="flex-end">
                            <StyledButton color="primary" variant="contained" startIcon={ <Add /> }>Добавить</StyledButton>
                        </Grid>
                    </Grid>
                    <Grid spacing={ 2 }
                        item
                        xs={ 6 }
                        container
                        direction="column"
                        justify="start"
                        alignItems="start"
                        style={ { width: "100%", flexGrow: 1 } }
                    >
                        <Grid item xs={ 10 }>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Общая информация
                                </Typography>
                                    <Typography variant="h5" component="h2">
                                        10 уровней<br />
                                        141 286,70 кв. м.

                                </Typography>

                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        let route = this.props.location.pathname.split("/")[2]
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
        let header_name = "Этажи";
        let breadcrumbs =
            [
                <Link color="inherit" href="/main" >
                    Главная
                </Link>,
                <Link color="inherit" href="/mall-reports" >
                    Отчеты отдельных ТРЦ
                </Link>,
                <Link color="inherit" href={ `/mall-reports/${route}` } >
                    { route_name }
                </Link>,
                <Typography color="textPrimary">Этажи</Typography>

            ]
        return (
            <MainLayout breadcrumbs={ breadcrumbs } header_name={ header_name } content={ content } />
        )
    }

}
export default withStyles(styles)(Floors);