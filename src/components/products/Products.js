import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import TechItem from "../techs/TechItem";

const Products = ({ products, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <table className="centered">
      <thead>
        <tr>
          <th data-field="id">id</th>
          <th data-field="image">Picture</th>
          <th data-field="name">Name</th>
          <th data-field="category">Category</th>
          <th data-field="price">Item Price</th>
          <th data-field="quantity">Quantity</th>
        </tr>
      </thead>

      <tbody>
        {products !== null &&
          products.map(product => (
            <tr>
              <td>{product.id}</td>
              <td>
                <img
                  className="responsive-img"
                  width={"50px"}
                  src={product.image}
                />
              </td>
              <td>{product.id}</td>
              <td>{product.category}</td>
              <td>&#x24;{product.price}</td>
              <td>
                {product.quantity !== 0 ? (
                  <span className="green-text">
                    {product.quantity} in stock
                  </span>
                ) : (
                  <span className="red-text">out of stock</span>
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  // to new property products assign to products from combine reducer to products from initialState in the reducer
  products: state.products.products
});

export default connect(mapStateToProps, { getProducts })(Products);
