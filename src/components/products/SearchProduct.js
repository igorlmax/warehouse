import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchProducts } from "../../actions/productsAction";

const SearchProduct = props => {
  const text = useRef("");

  const onChange = e => {
    props.searchProducts(text.current.value);
  };

  return (
    <form className="left hide-on-med-and-down">
      <div className="input-field">
        <input
          id="search"
          type="search"
          placeholder="Search product..."
          ref={text}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default connect(null, { searchProducts })(SearchProduct);
