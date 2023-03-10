import React, { Component } from 'react';
import Rating from './Rating';
import { Card } from 'react-bootstrap';//"Card" is used instead of "Media from react-bootstrap
// Looks like NB-"Media" is changed to "Card" component in newer versions of react-bootstrap. https://react-bootstrap.github.io/components/cards/

//You should use:

//import Card from "react-bootstrap/Card"

class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const listProducts = this.products.map((product) =>
            <Product key={product.productName} data={product} />
        );

        return (
            <div>
                {listProducts.length > 0 ? (
                    <ul>{listProducts}</ul>
                ) : (
                    <ul>No Products to display</ul>
                )}
                {/* <Card>
            <img 
                width={64} 
                height={64} 
                className="mr-3"
                src={this.props.data.imageUrl} 
                alt="Image"
            />
            <Card.Body>
                <h5>{this.props.data.productName}</h5>
                { this.props.data.releasedDate }
                <Rating rating={this.props.data.rating} numOfReviews={this.props.data.numOfReviews}/>
                <p>{this.props.data.description}</p>
            </Card.Body>
        </Card>*/}
            </div>
        );
    }
}

export default Product;