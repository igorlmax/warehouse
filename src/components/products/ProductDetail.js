import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/productsAction";
import { Link } from "react-router-dom";

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    const { products } = this.props;

    const { params } = this.props.match;

    return (
      <div>
        {products !== null &&
          products
            .filter(singleProduct => singleProduct.id === 333)
            .map(product => <span key={product.id}>{product.name}</span>)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, { getProducts })(ProductDetail);
