import React, { Component } from 'react';
import Categories from './Categories';

class ProductPanel extends Component {
    render() {
        return (
            <div>
                <p className="text-left text-secondary m-3">Categories</p>
                <Categories></Categories>
            </div>
        );
    }
}

export default ProductPanel;