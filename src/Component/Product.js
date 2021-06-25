import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, fetchCart } from "../Redux/Action";
class Product extends Component {
  state = {
    product: [],
    cart: [],
    showModal: false,
  };
  componentDidMount() {
    const { products, cart } = this.props;
    const { id } = this.props.match.params;
    const res = products.filter((product) => {
      return product.id === id;
    });

    this.setState({
      ...this.state,
      product: res,
      cart: cart,
    });
  }
  addToCart() {
    this.props.dispatch(addCart(this.state.product));
    this.props.dispatch(fetchCart())
    const { cart } = this.props;
    this.setState({
      ...this.state,
      cart,
      showModal: true,
    });
  }
  hideModal() {
    this.setState({
      ...this.state,
      showModal: false,
    });
  }
  render() {
    return (
      <div className="product-wrapper">
        <section className="product-header">
          <div>
            <Link to="/">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </Link>
          </div>
          <div>Details</div>
          <div>
            <span>
              <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <Link to="/cart">
              <span className="cart-counter">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                <p>{this.state.cart.length}</p>
              </span>
            </Link>
          </div>
        </section>
        <section className="product-body">
          <div
            className="modal"
            style={{ display: this.state.showModal ? "flex" : "none" }}
          >
            <span>Item added to cart successfully</span>
            <span>
              <i
                class="fa fa-times"
                aria-hidden="true"
                onClick={() => this.hideModal()}
              ></i>
            </span>
          </div>
          <div className="image-container">
            <img src={this.state.product[0]?.image} alt="" />
          </div>
          <div className="desc">
            <p>{this.state.product[0]?.name}</p>
            <p>{this.state.product[0]?.description}</p>
            <p>{this.state.product[0]?.price}/piece</p>
          </div>
          <div className="description">
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
            <div>
              <span>
                <img
                  src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                  alt="man"
                />
              </span>
              <span>Segun Arinze</span>
            </div>
          </div>
        </section>
        <section className="product-option">
          <button onClick={() => this.addToCart()}>Add to Cart</button>
          <button>Wishlist</button>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Product);
