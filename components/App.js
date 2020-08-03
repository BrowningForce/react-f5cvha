import React, { Component } from 'react';

import ProductList from './ProductList';
import SearchField from './SearchField';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterQuery: '',
    }
  }

  onInputChange = (e) => {
    this.setState({
      filterQuery: e.target.value,
    })
  }
 
  render() {
    return (
      <div>
      <SearchField query={this.state.filterQuery} onChange={this.onInputChange} />
      <ProductList filter={this.state.filterQuery} />
      </div>
    );
  }
}

export default App;