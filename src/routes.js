// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import Products from './components/Products';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Page404 from './components/Page404';

const AppRoutes = () => 
    <App>
        <Switch>
            <Route exact path="/Products" component={Products} />
            <Route exact path="/Clients" component={Clients} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
        </Switch>
    </App>

export default AppRoutes;