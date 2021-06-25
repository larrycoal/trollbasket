import React, { Component } from "react";
import { connect } from "react-redux";
class Product extends Component {
  state = {
    product: [],
  };
  componentDidMount() {
    const { products } = this.props;
    const { id } = this.props.match.params;
    const res = products.filter((product) => {
      return product.id === id;
    });

    this.setState({
      ...this.state,
      product: res,
    });
  }
  render() {
    return (
      <div className="product-wrapper">
        <section className="product-header">
          <div>
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </div>
          <div>Details</div>
          <div>
            <span>
              {" "}
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <span>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
          </div>
        </section>
        <section className="product-body">
          <div className="image-container">
            <img src={this.state.product[0]?.image} alt="" />
          </div>
          <div className="desc">
            <p>{this.state.product[0]?.name}</p>
            <p>{this.state.product[0]?.description}</p>
            <p>{this.state.product[0]?.price}/piece</p>
          </div>
          <div>
            <span>Product Description</span>
            <span>
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </span>
          </div>
          <div className="reviews">
            <div>
              <span>Review and Ratings</span>
              <span>
                <a href="/">View all</a>
              </span>
            </div>
            <div>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              3.0
            </div>
            <p>
              This is the best product I have used in a long while and the size
              fits perfectly and I love the colors!!!!!
            </p>
            <div>Segun Arinze</div>
          </div>
        </section>
        <section className="product-option"></section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Product);
