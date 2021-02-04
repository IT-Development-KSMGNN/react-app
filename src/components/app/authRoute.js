import React, {Component} from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";

class AuthRoute extends Component {
    
 render(){
    console.log(this.props, "AUTHROUTE")
    const { isAuthUser, type } = this.props;
    if (isAuthUser) return <Redirect to="/home" />;
    else if ((isAuthUser === "" || !isAuthUser || isAuthUser === undefined ) && type !== "guest") return <Redirect to="/login" />;
    return <Route {...this.props} />;
 }
};

const mapStateToProps = (state) => {
    return {
      userLogin: state.userLogin,
      user: state.userLogin.user,
      isAuthUser: state.userLogin.isAuthUser 
    }
  }

// const mapStateToProps = ({ isAuthUser }) => ({
//   isAuthUser
// });

export default connect(mapStateToProps)(AuthRoute);