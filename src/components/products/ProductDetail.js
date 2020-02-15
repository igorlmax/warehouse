import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import { Link } from "react-router-dom";

class ProductDetail extends React.Component {
  render() {
    console.log(this.props);

    const { params } = this.props.match;
    return (
      <div>
        <h1>Users</h1>
        <p>{params.id}</p>
      </div>
    );
  }
}

export default ProductDetail;
