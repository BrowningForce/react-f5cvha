import React, { Component } from 'react';
import axios from 'axios';

import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const { data } = await axios.get('https://demo4233545.mockable.io/products');
    this.setState({
      products: data.products,
    });
  }


  renderProductList = () => {
    return this.state.products
      .map((product) => {
        return (
          product.name.toLowerCase().includes(this.props.filter.toLowerCase())
            ? <ProductCard product={product} key={product.asin} />
            : null
        );
      });
  }

  render() {
    return (
      <section className="productsContainer">{this.renderProductList()}</section>
    );
  }
}

export default ProductList;