import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import {BrowserRouter, Switch} from "react-router-dom";
import {Example} from "./containers/Example";
import {AuthenticatedRoute} from "./containers/AuthenticatedRoute";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <AuthenticatedRoute exact path="/" restrictedRole={["ROLE_USER"]} component={Example}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
