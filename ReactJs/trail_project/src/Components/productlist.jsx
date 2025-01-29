import React from 'react';
import framelast from "./../images/Frame 39.png"

const ProductList = ({ products }) => {
  return (
    <div className="row">
      <div className="col-md-1 d-flex align-items-center justify-content-center">
        {/* This column can be used for spacing or other content */}
      </div>

      <div className="col-md-10 d-flex flex-column align-items-center justify-content-between">
        {products.map((product, index) => (
          <div key={index} className="item-product-last-1">
            <img src={product.image} alt="bullet" className="image" />
            <div className="description-product-last-1">
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
