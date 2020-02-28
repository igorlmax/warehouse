import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProducts} from "../../actions/productsAction";

const Supplier = ({ products: { products }, getProducts }) => {
  useEffect(() => {
    getProducts();
  }, []);
  return (
  <div>
      Test
  </div>
  );
};

const mapStateToProps = state => ({
  // to new property products assign to products from combine reducer to products from initialState in the reducer
  products: state.products
});

export default connect(mapStateToProps, { getProducts })(Supplier);
