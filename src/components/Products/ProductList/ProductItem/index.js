import React, { Component } from 'react';

import './../../../Global/css/ProductList.css';

//cuando la columna es 12 quitar centerImage
class ProductItem extends Component {
    render() {
        console.log('categoryId', this.props.categoryId);
        let itemsFiltered = new Array();
        if(this.props.categoryId) {
            console.log(this.props.categoryId);
            itemsFiltered = this.props.items
                .filter(p => p.categories.some(c => c.toLowerCase() === this.props.categoryId.toLowerCase()));
        } else {
            itemsFiltered = this.props.items;
        }
        console.log(itemsFiltered);
        return itemsFiltered.map((item, i) => {
            return (
                <div className="col-md-6" key={i}>
                    <div className="card shadow-sm p-3 mb-5 bg-white rounded">
                        <div className="card-body">
                            <h5 className="card-title text-left">{item.name}</h5>
                            <h6 className="card-subtitle text-left mb-2 text-muted">{item.brand}</h6>
                            <div className="row justify-content-center mt-4">
                                <div className="col-4">
                                    <img className="img-fluid centerImage" alt="Test" src={item.photo} />
                                </div>
                                <div className="col-8">
                                    <p className="card-text text-left">
                                        {item.description}
                                    </p>
                                    <h6 className="text-left">
                                        Stock: {item.stock}<br/>
                                        Price: ${item.price}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }
}

export default ProductItem;