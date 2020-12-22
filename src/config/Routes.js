import React from "react";
import { Switch, Route } from 'react-router-dom';

import Home from "../pages/Home";
import Rate from "../pages/Rate";
import AllCompanies from "../pages/AllCompanies";

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/rate/:id' component={Rate} />
            <Route path='/companies/' component={AllCompanies} />
            <Route path='*' render={() => <h1>Maybe your career has taken a wrong turn or maybe you just typed something wrong. Either way this page doesn't exist.</h1>} />
        </Switch>
    );
};

export default Routes;