import React, { Component } from 'react';

class ProductSearch extends Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onTypeGridClick(e.target.name);
    }

    render() {
        return (
            <div>
                <button 
                    type="button" 
                    name="short"
                    className="btn btn-default fa fa-th-large" 
                    aria-label="Left Align"
                    onClick={this.handleClick}>
                </button>
                <button 
                    type="button"  
                    name="large"
                    className="btn btn-default fa fa-bars" 
                    aria-label="Left Align"
                    onClick={this.handleClick}>
                </button>
            </div>
        );
    }
}

export default ProductSearch;