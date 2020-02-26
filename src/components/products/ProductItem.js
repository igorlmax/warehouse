import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProductItem = ({ product }) => {
  return (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>
        <Link to={{ pathname: `/product/${product.id}` }}>
          <img className="responsive-img" width={"50px"} src={product.image} />
        </Link>
      </td>
      <td>{product.id}</td>
      <td>{product.category}</td>
      <td>&#x24;{product.price}</td>
      <td>
        {product.quantity !== 0 ? (
          <span className="green-text">{product.quantity} in stock</span>
        ) : (
          <span className="red-text">out of stock</span>
        )}
      </td>
    </tr>
  );
};

export default connect(null, {})(ProductItem);
