import React from 'react';
import {Route , BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './containers/Dashboard';

const Routes =() => {
    return (
        <BrowserRouter>
           <Route component={Home} path="/" exact/>
           <Route component={Dashboard} path="/admin" exact/>
        </BrowserRouter>
    );
}

export default Routes;