import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCart, updateCart } from "../Redux/Action";
import { Link } from "react-router-dom";
class Cart extends Component {
  state = {
    item: [],
  };

  componentDidMount() {
    this.props.dispatch(fetchCart());
    this.setState({
      item: this.props.cart,
    });
  }
  showItem() {
    const { item } = this.state;
    return item ? (
      item.map((item, i) => (
        <div className="item" key={item.id}>
          <div className="top">
            <img src={item.image} alt="" />
            <span>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </span>
          </div>
          <div className="bottom">
            <div onClick={() => this.deleteItem(i)}>
              <i class="fa fa-trash" aria-hidden="true"></i> Delete
            </div>
            <div>
              <span className="qty">-</span>
              <span>{1}</span>
              <span className="qty">+</span>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>CART IS EMPTY</div>
    );
  }
  showRecent() {
    const { products } = this.props;
    const recent = products.slice(0, 3);
    return recent.map((product, i) => (
      <>
        <div key={i}>
          <Link to={"/product/" + product.id}>
            <img src={product.image} alt="" />
          </Link>
          <p>{product.description}</p>
          <p>NGN{product.price}</p>
          <p>{product.name}</p>
        </div>
      </>
    ));
  }
  deleteItem(id) {
    let newItem = this.state.item;
    newItem.splice(id, 1);
    this.props.dispatch(updateCart(newItem));
  }
  getTotal() {
    const { item } = this.state;
    let total = 0;
    if (item.length === 0) {
      return total;
    }
    item.map((item) => {
      total += parseInt(item.price.replace(",", ""));
      return total
    });
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    });
    return formatter.format(total);
  }
  render() {
    return (
      <div className="cart-wrapper">
        <section className="cart-header">
          <Link to="/">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
          </Link>
          <p>carts</p>
        </section>
        <section className="items-wrapper">{this.showItem()}</section>
        <section className="checkout">
          <div className="total">
            <span>SubTotal</span>
            <span>{this.getTotal()}</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>{this.getTotal()}</span>
          </div>
          <div className="checkout-btn">
            <Link to="/checkout">
              <button>Checkout</button>
            </Link>
          </div>
        </section>
        <section className="recently-viewed">
          <div className="top">
            <span>Recently viewed</span>
            <a href="/">View all</a>
          </div>
          <div className="bottom">{this.showRecent()}</div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Cart);
