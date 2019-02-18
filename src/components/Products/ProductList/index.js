import React, { Component } from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';
import { ProductsItems } from './../../../ProductsItems.json';

class ProductList extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };

    render() {
        const { match } = this.props;
        return (
            <div className="container">
                <div className="col">
                    <div className="row">
                        search bar
                    </div>
                    <div className="row mt-4">
                        <ProductItem 
                            items={ProductsItems} 
                            categoryId={match.params.categoryId}>
                        </ProductItem>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;