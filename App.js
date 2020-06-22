import React from 'react';
import Home from './screens/Home';
import Products from './screens/Products';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Products} />
            <Route path="/produtos" component={Products} />
        </Switch>
    </ BrowserRouter>
)

export default App;