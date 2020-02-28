import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import ProductItem from "./ProductItem";
import SearchProduct from "./SearchProduct";

const Products = ({ products: { products }, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <SearchProduct />
      <table className="centered highlight">
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
            products.length !== 0 &&
            products.map(product => (
              <ProductItem key={product.id} product={product} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  // to new property products assign to products from combine reducer to products from initialState in the reducer
  products: state.products
});

export default connect(mapStateToProps, { getProducts })(Products);
