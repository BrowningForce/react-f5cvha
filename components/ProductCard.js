import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="productCard">
      <h4>{product.name}</h4>
      <div className="generalInfo">
        <p>Category: {product.bsr_category} <br /> Brand: {product.brand}</p>
      </div>
      <img src={product.img} />
      <div className="priceAndRating">
        <p>{`£${product.price}`}</p>
        <p>Rating: {product.stars}</p>
      </div>
      <a className="detailsButton" href={product.link} target="blank" rel="noopener noreferrer">
        View Details
      </a>
    </div>
  )
}

export default ProductCard;