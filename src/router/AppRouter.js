import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import AddExpenses from '../component/AddExpenses';
import Dashboard from '../component/Dashboard';
import EditExpenses from '../component/EditExpenses';
import PageNotFound from '../component/PageNotFound';
import LoginPage from '../component/LoginPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
           <PublicRoute path="/"  component={LoginPage} exact={true} />
           <PrivateRoute path="/dashboard" component={Dashboard} />
           <PrivateRoute path="/create" component={AddExpenses} />
           <PrivateRoute path="/edit/:id" component={EditExpenses} />
           <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter;
