import { AppBar, TableCell, TableBody, Grid, Paper, Typography, Toolbar, Link, Breadcrumbs, IconButton, Container, CssBaseline, Button, ButtonBase, Card, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableHead, TableRow, CardContent, CardActions, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, TextField, Modal } from '@material-ui/core';
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

class FromTenant extends Component {
    constructor(props) {
        super(props)
    }
    handleChange = () => {

    }
    render() {
        const ColorCheckbox = withStyles({
            root: {
                color: "gray",
                '&$checked': {
                    color: "#FF00FF",
                },
            },
            checked: {},
        })((props) => <Checkbox color="default" { ...props } />);
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
        function createData(tenant, date, type_amount, date_amount, period_amount, payday, sum) {
            return { tenant, date, type_amount, date_amount, period_amount, payday, sum };
        }

        const rows = [
            createData("01.01.2018", 'ООО Перекресток', "7777777777/52012328", "044525411", "40702810000001234567", "320 000,00", "Оплата ТО по договору от 01.01.18"),
        ];
        const { classes } = this.props;
        let content =


            <Paper className={ classes.paper } elevation={ 3 }>

                <Grid spacing={ 2 }
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="start"
                >
                    <Grid item xs={ 12 } spacing={ 2 } container justify="flex-start">
                        <Grid item xs={ 1 }>
                            <FormControl>
                                <TextField size="small" style={ { width: "100%" } } id="outlined-search" label="Дата с" type="search" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={ 1 }>
                            <FormControl>
                                <TextField size="small" style={ { width: "100%" } } id="outlined-search" label="По" type="search" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={ 4 }>
                            <FormControlLabel
                                control={ <ColorCheckbox checked={ true }
                                    onChange={ this.handleChange } name="checkedG" /> }
                                label="Скрыть поступления привязанные к начислениям"
                            />
                        </Grid>


                    </Grid>
                    <Grid spacing={ 4 }
                        item
                        xs={ 12 }
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
                                            <StyledTableCell>Дата</StyledTableCell>
                                            <StyledTableCell align="center">Наименование отправителя</StyledTableCell>
                                            <StyledTableCell align="right">Отправитель ИНН/КПП</StyledTableCell>
                                            <StyledTableCell align="right">Отправитель БИК(Банк)</StyledTableCell>
                                            <StyledTableCell align="right">Отправитель счёт</StyledTableCell>
                                            <StyledTableCell align="right">Сумма</StyledTableCell>
                                            <StyledTableCell align="right">Назначение</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        { rows.map((row) => (
                                            <StyledTableRow key={ row.index }>
                                                <StyledTableCell align="right">{ row.tenant }</StyledTableCell>
                                                <StyledTableCell align="center">  { row.date } </StyledTableCell>
                                                <StyledTableCell align="right">{ row.type_amount }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.date_amount }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.period_amount }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.payday }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.sum }</StyledTableCell>
                                            </StyledTableRow>
                                        )) }
                                    </TableBody>
                                </Table>
                            </TableContainer>
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
        let header_name = "Поступления от арендаторов";
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
                <Typography color="textPrimary">Поступления от арендаторов</Typography>

            ]
        return (
            <MainLayout breadcrumbs={ breadcrumbs } header_name={ header_name } content={ content } />
        )
    }

}
export default withStyles(styles)(FromTenant);