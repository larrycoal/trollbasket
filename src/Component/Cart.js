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
    const { cart } = this.props;

    const newCart = cart.map((item) => {
      return {
        ...item,
        itemCount: 1,
        error:[false]
      };
    });
    this.setState({
      item: newCart,
    });
  }
  removeFromCart(i) {
    let newCart = this.state.item;
    if (newCart[i].itemCount > 1) {
      newCart[i].itemCount -= 1;
    }
    this.setState({
        item:newCart
    });
    console.log(newCart);
  }
  addToCart(i) {
    let newCart = this.state.item;
    // can not have more than 5 of a particular item
    if (newCart[i].itemCount < 5) {
      newCart[i].itemCount += 1;
    }else{
        let error = [true,"can not have more than 5 of a particular item"]
        newCart[i].error = error
    }
    this.setState({
      item:newCart
    });
  }
  showItem() {
    const { item } = this.state;
    return item ? (
      item.map((item, idx) => (
        <div className="item" key={item.id}>
          <div className="top">
            <img src={item.image} alt="" />
            <span>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </span>
          </div>
          <div className="bottom">
            <div onClick={() => this.deleteItem(idx)}>
              <i class="fa fa-trash" aria-hidden="true"></i> Delete
            </div>
            <div>
              <span className="qty" onClick={() => this.removeFromCart(idx)}>
                -
              </span>
              <span>{item.itemCount}</span>
              <span className="qty" onClick={() => this.addToCart(idx)}>
                +
              </span>
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
      total += parseInt(item.price.replace(",", "")) * item.itemCount
      return total;
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
