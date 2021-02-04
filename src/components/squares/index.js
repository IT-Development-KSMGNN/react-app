import { AppBar, TableCell, TableBody, Grid, Paper, Typography, Toolbar, Link, Breadcrumbs, IconButton, Container, CssBaseline, Button, ButtonBase, Card, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableHead, TableRow, CardContent, CardActions, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@material-ui/core';
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

class Squares extends Component {
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
        function createData(name, square, date_start, date_end, description) {
            return { name, square, date_start, date_end, description };
        }

        const rows = [
            createData('1A', "4 248,39", "10.10.2020", "", ""),
            createData('1B', "2 523,00", "10.10.2020", "", ""),
            createData('1C', "950,00", "10.10.2020", "", ""),
            createData('1CA', "520,00", "10.10.2020", "", ""),
            createData('1CB', "253,00", "10.10.2020", "", "У входа в здание"),
            createData('1D', "150,00", "10.10.2020", "", "Напротив эскалатора"),
            createData('1E', "140,00", "10.10.2020", "", ""),
            createData('1H', "135,00", "10.10.2020", "", ""),
            createData('1HA', "120,00", "10.10.2020", "", ""),
            createData('1J', "120,00", "10.10.2020", "", ""),
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
                    <Grid item xs={ 12 } container justify="flex-start">
                        <Grid item xs={ 1 }>
                            <FormControl className={ classes.topGrid } variant="outlined" >
                                <Select
                                    id="demo-simple-select-filled"
                                    value={ 10 }
                                    onChange={ this.handleChange }
                                    size="small"
                                >
                                    <MenuItem value={ 10 }>1 этаж</MenuItem>
                                    <MenuItem value={ 20 }>2 этаж</MenuItem>
                                    <MenuItem value={ 30 }>3 этаж</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <FormControlLabel
                            control={ <ColorCheckbox checked={ true }
                                onChange={ this.handleChange } name="checkedG" /> }
                            label="Скрыть отвязанные площади"
                        />

                    </Grid>
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
                                            <StyledTableCell>Имя площади</StyledTableCell>
                                            <StyledTableCell align="left">Площадь, кв. м.</StyledTableCell>
                                            <StyledTableCell align="right">Дата привязки</StyledTableCell>
                                            <StyledTableCell align="right">Дата отвязки</StyledTableCell>
                                            <StyledTableCell align="right">Описание</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        { rows.map((row) => (
                                            <StyledTableRow key={ row.name }>
                                                <StyledTableCell component="th" scope="row">
                                                    { row.name }
                                                </StyledTableCell>
                                                <StyledTableCell align="left">{ row.square }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.date_start }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.date_end }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.description }</StyledTableCell>
                                            </StyledTableRow>
                                        )) }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item xs={ 12 } container justify="flex-end">
                            <StyledButton color="primary" variant="contained" startIcon={ <Add /> }>Добавить привязку</StyledButton>
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
                                        10 площадей<br />
                                9 159,39 кв. м.

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
        let header_name = "Площадь под аренду";
        let breadcrumbs =
            [
                <Link color="inherit" href="/main" >
                    Главная
                </Link>,
                <Link color="inherit" href="/mall-reports" >
                    Отчеты отдельных ТРЦ
                </Link>,
                <Link color="inherit" href="/mall-reports" >
                    { route_name }
                </Link>,
                <Typography color="textPrimary">Площадь под аренду</Typography>

            ]
        return (
            <MainLayout breadcrumbs={ breadcrumbs } header_name={ header_name } content={ content } />
        )
    }

}
export default withStyles(styles)(Squares);