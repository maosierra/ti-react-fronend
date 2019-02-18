import React, { Component } from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';
import { ProductsItems } from './../../../ProductsItems.json';
import ProductSearch from './ProductSearch';

class ProductList extends Component {
    constructor(){
        super();
        this.handleTypeGridClick = this.handleTypeGridClick.bind(this);
    }

    static propTypes = {
        match: PropTypes.object.isRequired
    };

    state = {
        buttonTypeGridPress: ''
    }

    handleTypeGridClick(button) {
        this.setState({buttonTypeGridPress: button});
    }

    render() {
        const { match } = this.props;
        return (
            <div className="container">
                <div className="col">
                    <div className="row">
                        <ProductSearch onTypeGridClick={this.handleTypeGridClick}></ProductSearch>
                    </div>
                    <div className="row mt-4">
                        <ProductItem 
                            items={ProductsItems} 
                            categoryId={match.params.categoryId}
                            buttonTypePress={this.state.buttonTypeGridPress}>
                        </ProductItem>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;