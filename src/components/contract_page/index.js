import { AppBar, TableCell, TableBody, Grid, Paper, Typography, Toolbar, Link, Breadcrumbs, IconButton, Container, CssBaseline, Button, ButtonBase, Card, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableHead, TableRow, CardContent, CardActions, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, TextField, Modal, Menu } from '@material-ui/core';
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

class ContractPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
        }
    }
    handleChange = () => {

    }
    handleClick = (event) => {
        console.log(event)
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {

        const StyledTableRow = withStyles((theme) => ({
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.action.hover,
                },
            },
        }))(TableRow);
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
        function createData(floor_name, square_square, date_start, date_end, date_end_fact, price_m) {
            return { floor_name, square_square, date_start, date_end, date_end_fact, price_m };
        }

        const rows = [
            createData("1 этаж, 1А", "4 248,39", "01.01.2018", "31.12.2024", "", "20,00"),
            createData("1 этаж, 1CА", "520", "01.01.2020", "31.12.2022", "", "20,00")

        ];
        const { classes } = this.props;
        let content =


            <Paper className={ classes.paper } elevation={ 3 } style={ { minHeight: "70vh" } }>

                <Grid spacing={ 2 }
                    container
                    direction="row"
                    justify="center"
                    alignItems="start"

                >
                    <Grid item container xs={ 12 } spacing={ 2 } justify="start"
                        alignItems="start"
                    >
                        <Grid item xs={ 6 }>
                            <FormControl fullWidth>
                                <TextField size="small" id="outlined-search" label="Дата договора" type="search" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <FormControl fullWidth>
                                <TextField size="small" id="outlined-search" label="Номер договора" type="search" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <FormControl fullWidth>
                                <TextField size="small" id="outlined-search" label="Арендатор" type="search" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <FormControl fullWidth>
                                <TextField size="small" id="outlined-search" label="Арендодатель" type="search" variant="outlined" />
                            </FormControl>
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TableContainer component={ Paper }>
                                <Table aria-label="customized table" size="small">
                                    <TableHead style={ { backgroundColor: "#616161" } }>
                                        <TableRow>
                                            <StyledTableCell>Этаж, название</StyledTableCell>
                                            <StyledTableCell align="center">Площадь, кв. м.</StyledTableCell>
                                            <StyledTableCell align="right">Дата получения в аренду</StyledTableCell>
                                            <StyledTableCell align="right">Дата возврата по договору</StyledTableCell>
                                            <StyledTableCell align="right">Дата возврата (факт)</StyledTableCell>
                                            <StyledTableCell align="right">Ставка аренды текущая (руб./кв. м. в день)</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody >
                                        { rows.map((row) => (
                                            <StyledTableRow key={ row.index }>
                                                <StyledTableCell align="left">{ row.floor_name }</StyledTableCell>
                                                <StyledTableCell align="center">  { row.square_square } </StyledTableCell>
                                                <StyledTableCell align="right">{ row.date_start }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.date_end }</StyledTableCell>
                                                <StyledTableCell align="right">{ row.date_end_fact }</StyledTableCell>
                                                <StyledTableCell align="right" role="menu">

                                                    <Button id={ `but${row.index}` } aria-haspopup="true" onClick={ this.handleClick }>
                                                        { row.price_m }
                                                    </Button>
                                                    <Menu
                                                        anchorPosition={ {
                                                            vertical: 'bottom',
                                                            horizontal: 'center'
                                                        } }

                                                        anchorEl={ document.getElementById(`but${row.index}`) }
                                                        keepMounted

                                                        //autoFocus={ false }
                                                        open={ Boolean(this.state.anchorEl) }
                                                        onClose={ this.handleClose }
                                                    >
                                                        <MenuItem onClick={ this.handleClose }>Profile</MenuItem>
                                                        <MenuItem onClick={ this.handleClose }>My account</MenuItem>
                                                        <MenuItem onClick={ this.handleClose }>Logout</MenuItem>
                                                    </Menu>

                                                </StyledTableCell>

                                            </StyledTableRow>
                                        )) }
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>
                    </Grid>

                </Grid>

            </Paper >

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
        let header_name = "Договоры";
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
                <Link color="inherit" href={ `/mall-reports/${route}` } >
                    Договоры
                </Link>,
                <Typography color="textPrimary">[ООО Перекресток]</Typography>

            ]
        return (
            <MainLayout breadcrumbs={ breadcrumbs } header_name={ header_name } content={ content } />
        )
    }

}
export default withStyles(styles)(ContractPage);