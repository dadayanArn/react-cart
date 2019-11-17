import React from 'react';

const Cart = (props) => {
  const { items, removeItem } = props;
  return (
    <div className="container">
       {!items.length && (
         <div className="alert alert-secondary" role="alert">
          No Selected Items in Cart
         </div>
       )}
       {items.map((item) => {
         return (
          <div key={item.id} className="alert alert-info" role="alert">
            <div>{`${item.name}-$${item.price}`}</div>
            <button type="button" className="btn btn-link" onClick={() => {removeItem(item)}}>Remove</button>
          </div>
         )
       })}
    </div>
  );
};

export default Cart;