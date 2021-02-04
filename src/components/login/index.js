import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as userActions from "../../actions/userActions"
//import CSRFToken from '../../app/csrftoken';
import { styles } from "./styles"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false,
            LoginPending: false
        }
    }
    componentDidMount() {
        if (localStorage.getItem("token") !== "") {
        }
    }
    componentDidUpdate(prevProps) {
        console.log("ОБНОВЛЕНО", this.state)
        if (this.props.loginRequest !== prevProps.loginRequest) {
            if (this.props.loginRequest.status === 200) {
                this.setState({
                    isLoggedIn: true,
                })
            }
        }
    }

    handleLogin = (event) => {
        event.preventDefault();
        //let { loginRequest } = this.props.userActions;
        this.props.loginRequest({ username: this.state.username, password: this.state.password })
        this.setState({ LoginPending: true })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        const { classes } = this.props;
        if(this.props.isAuthUser){
            return <Redirect to="/main" isAuthUser={true} />;
        } 
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={ classes.paper }>
                    <Avatar className={ classes.avatar }>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Вход
                    </Typography>
                    <form className={ classes.form } noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Логин"
                            name="username"
                            value={ this.state.username }
                            onChange={ (e) => this.handleChange(e) }
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            value={ this.state.password }
                            onChange={ (e) => this.handleChange(e) }
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={ <Checkbox value="remember" color="primary" /> }
                            label="Запомнить меня"
                        />
                        {/* <CSRFToken /> */ }
                        <Button
                            // type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={ (e) => { this.handleLogin(e) } }
                            className={ classes.submit }
                        >
                            Войти
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Забыли пароль?
                        </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    { "Нет аккаунта? Зарегистрируйтесь" }
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}
function mapStateToProps(state) {
    return {
        login: state.loginRequest,
        isAuthUser: state.userLogin.isAuthUser
    };
}


function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        loginRequest: (data) => dispatch(userActions.loginRequest(data))
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login));
