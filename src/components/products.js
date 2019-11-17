import React, { useState, useEffect } from 'react';
import Card from './card';
import { urlItems } from '../endpoints'

const Products = (props) => {
  const [data, setData] = useState([]);
  const [state, setState] = useState({ loading: false });

  useEffect(() => {
    setState({ loading: true })
    fetch(urlItems)
      .then((res) => {
        return res.json().then((data) => {
          setState({ loading: false })
          setData(data)
        })
      })
      .catch(() => {
        setState({ loading: false })
      })
  }, [])

  return (
    <div className="container">
      <div className="products">
        {state.loading && (
          <div className="text-center">
            <div className="spinner-border text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {data.map((item) => {
          return (
            <Card key={item.id} data={item} addToCart={props.addToCart}/>
          )
        })}
      </div>
    </div>
  );
};

export default Products;