import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Login from "../login"
import MainMenu from '../mainmenu';
import TrcReports from '../trcreports'
import TrcMenu from '../trcmenu'
import Floors from '../floors';
import Squares from '../squares';
import Contracts from '../contracts';
import DebetorDolg from '../debetor_dolg';
import FromTenant from '../from_tenant'

//import { loginRequest } from '../../actions/userActions'
import * as userActions from '../../actions/userActions'
import { PrivateRoute } from './PrivateRoute';
import ContractPage from '../contract_page';


class App extends Component {
  // constructor(props){
  //   super(props)
  // }
  componentDidMount() {
    //this.props.autoLogin()
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.isAuthUser !== nextProps.isAuthUser) {
      return this.props.isAuthUser !== '' ? false : true
    } else {
      return false
    }
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Router>
          <Switch>
            <PrivateRoute name="main" exact path="/main" type="private" component={ MainMenu }>
            </PrivateRoute>
            <PrivateRoute name="mall-reports" exact path="/mall-reports" type="private" component={ TrcReports }>
            </PrivateRoute>

            <PrivateRoute name="mall-reports" exact path="/mall-reports/nebo" type="private" component={ TrcMenu } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/gorky" type="private" component={ TrcMenu } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/muravey" type="private" component={ TrcMenu } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/mb" type="private" component={ TrcMenu } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nora" type="private" component={ TrcMenu } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/sz" type="private" component={ TrcMenu } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/tsum" type="private" component={ TrcMenu } />

            <PrivateRoute name="mall-reports" exact path="/mall-reports/gorky/floors" type="private" component={ Floors } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nebo/floors" type="private" component={ Floors } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/sz/floors" type="private" component={ Floors } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/mb/floors" type="private" component={ Floors } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/muravey/floors" type="private" component={ Floors } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nora/floors" type="private" component={ Floors } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/tsum/floors" type="private" component={ Floors } />

            <PrivateRoute name="mall-reports" exact path="/mall-reports/gorky/squares" type="private" component={ Squares } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nebo/squares" type="private" component={ Squares } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/sz/squares" type="private" component={ Squares } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/mb/squares" type="private" component={ Squares } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/muravey/squares" type="private" component={ Squares } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nora/squares" type="private" component={ Squares } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/tsum/squares" type="private" component={ Squares } />

            <PrivateRoute name="mall-reports" exact path="/mall-reports/gorky/contracts" type="private" component={ Contracts } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nebo/contracts" type="private" component={ Contracts } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/sz/contracts" type="private" component={ Contracts } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/mb/contracts" type="private" component={ Contracts } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/muravey/contracts" type="private" component={ Contracts } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nora/contracts" type="private" component={ Contracts } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/tsum/contracts" type="private" component={ Contracts } />

            <PrivateRoute name="mall-reports" exact path="/mall-reports/gorky/contracts/contract345" type="private" component={ ContractPage } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nebo/contracts/contract345" type="private" component={ ContractPage } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/sz/contracts/contract345" type="private" component={ ContractPage } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/mb/contracts/contract345" type="private" component={ ContractPage } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/muravey/contracts/contract345" type="private" component={ ContractPage } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nora/contracts/contract345" type="private" component={ ContractPage } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/tsum/contracts/contract345" type="private" component={ ContractPage } />

            <PrivateRoute name="mall-reports" exact path="/mall-reports/gorky/debdolg" type="private" component={ DebetorDolg } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nebo/debdolg" type="private" component={ DebetorDolg } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/sz/debdolg" type="private" component={ DebetorDolg } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/mb/debdolg" type="private" component={ DebetorDolg } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/muravey/debdolg" type="private" component={ DebetorDolg } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nora/debdolg" type="private" component={ DebetorDolg } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/tsum/debdolg" type="private" component={ DebetorDolg } />

            <PrivateRoute name="mall-reports" exact path="/mall-reports/gorky/fromtenant" type="private" component={ FromTenant } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nebo/fromtenant" type="private" component={ FromTenant } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/sz/fromtenant" type="private" component={ FromTenant } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/mb/fromtenant" type="private" component={ FromTenant } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/muravey/fromtenant" type="private" component={ FromTenant } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/nora/fromtenant" type="private" component={ FromTenant } />
            <PrivateRoute name="mall-reports" exact path="/mall-reports/tsum/fromtenant" type="private" component={ FromTenant } />

            <Route path="/login" type="guest" component={ Login }>
            </Route>
            <PrivateRoute path="/my-account" type="private">
            </PrivateRoute>
            <PrivateRoute path="/" exact component={ MainMenu } />
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userLogin: state.userLogin,
    user: state.userLogin.user,
    isAuthUser: state.userLogin.isAuthUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //userActions: bindActionCreators(userActions, dispatch),
    //autoLogin: dispatch(userActions.autoLogin()),
    //autoLogin: dispatch(userActions.autoLogin())
    //autoLogin: () => dispatch(userActions.autoLogin())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
