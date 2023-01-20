import React, { Component } from "react";

class Products extends Component {
    
    render() {
        const products = ["Learning React","Pro React","Beginning React"];
        const listProducts = products.map((products) =>
        <li key={products.toString()}>{products}</li>
        );

      return (
        <div>
            <ul>{listProducts}</ul>
        </div>
      );
    }
}

export default Products;