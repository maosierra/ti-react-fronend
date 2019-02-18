// Dependencies
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

// Components
import ProductPanel from './ProductPanel';
import ProductList from './ProductList';

// Assets
import './../Global/css/ProductPanel.css'

class Products extends Component {
    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-3 padding-0 border-right">
                        <ProductPanel></ProductPanel>
                    </div>
                    <div className="col-9 padding-0 grayBackground">
                        <Switch>
                            <Route path="/Products/:categoryId" component={ProductList} /> 
                            <Route path="/Products" component={ProductList} /> 
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;