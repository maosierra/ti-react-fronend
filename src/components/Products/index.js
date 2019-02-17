// Dependencies
import React, { Component } from 'react';

// Components
import ProductPanel from './ProductPanel';

// Assets
import './../Global/css/ProductPanel.css'

class Products extends Component {
    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-4 padding-0 border-right">
                        <ProductPanel></ProductPanel>
                    </div>
                    <div className="col-8 padding-0">
                        Panel list
                    </div>
                </div>
            </div>
        );
    }
}

export default Products;