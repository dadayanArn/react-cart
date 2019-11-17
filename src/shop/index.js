import React, { Component } from 'react';
import Products from '../components/products';
import Cart from '../components/cart';
import Nav from './nav'

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tab           : 'PRODUCT',
      selectedItems : []
    }
  }

  removeFromCart = (removeItem) => {
    const { selectedItems } = this.state;
    const newItems = selectedItems.filter((item) => {
      return item.id !== removeItem.id
    })
    this.setState((prevState) => ({
      selectedItems: newItems
    }))
  }

  addToCart = (item) => {
    this.setState((prevState) => ({
      selectedItems: [...prevState.selectedItems, item]
    }))
  }

  navigationChange = (tab) => {
    this.setState({
      tab
    })
  }
  render() {
    const { tab, selectedItems } = this.state;
    return (
      <div>
        <Nav onNavigationChange={this.navigationChange} tab={tab} selectedItems={selectedItems.length}/>
        {tab === 'PRODUCT' && <Products addToCart={this.addToCart}/>}
        {tab === 'CART' && <Cart items={selectedItems} removeItem={this.removeFromCart} />}
      </div>
    );
  }
}

export default Shop;