import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {Redirect, Route} from "react-router-dom";

class AuthenticatedRouteComponent extends Component {
    render()
    {
        let { restrictedRole, component : Component, ...rest } = this.props;
        // Replace with anything related to authentification inside your state
        let authenticated = true;
        // Replace with anything related to role inside your state
        let currentRoles = ["ROLE_ADMIN", "ROLE_USER"];
        return (
            <Route {...rest} render={(props) =>
            (
                authenticated && restrictedRole.some((val) => currentRoles.includes(val))
                ? <Component {...props}/>
                : <Redirect to="/login"/>
            )}/>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {

    };
};

const mapDispatchToProps = (dispatch) =>
{
    return {

    };
};

export const AuthenticatedRoute = connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRouteComponent);