import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import AnminPage from '../pages/AnminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/loginPage';


const Page = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/products"  component={ProductListPage}/>
            <Route path="/products/:id"  component={ProductPage}/>
            <Route path="/contact"  component={ContactPage}/>
            <Route path="/admin"  component={AnminPage}/>
            <Route path="/login" component={LoginPage}/>
            <Route component={ErrorPage}/>
        </Switch>
    )
}

export default Page