import React from 'react';

const Card = (props) => {
  const { data, addToCart } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${data.price}</h6>
        {/* <a href="#" className="card-link">Card link</a> */}
        <a href="#" className="card-link" onClick={() => {addToCart(data)}}>Add to Cart</a>
      </div>
    </div>
  );
};

export default Card;