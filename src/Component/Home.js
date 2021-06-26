import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {
    products: [],
    cart: [],
    location: "All",
    search: "",
  };
  componentDidMount() {
    const { products, cart } = this.props;
    this.setState({
      ...this.state,
      products,
      cart,
    });
  }

  showProducts() {
    const { location, search } = this.state;
    let filteredProduct = this.state.products;
    if (location !== "All") {
      filteredProduct = this.state.products.filter((product) => {
        return product.location === location;
      });
    } else if (search !== "") {
      filteredProduct = filteredProduct.filter((product) => {
        return product.name.match(search);
      });
    }
    return filteredProduct
      ? filteredProduct.map((product, i) => (
          <div key={i}>
            <Link to={"/product/" + product.id}>
              <img src={product.image} alt="" />
            </Link>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.name}</p>
          </div>
        ))
      : null;
  }

  handleLocationChange(e) {
    this.setState({
      ...this.state,
      location: e.target.value,
    });
  }
  handleSearchChange(e) {
    this.setState({
      ...this.state,
      search: e.target.value.toUpperCase(),
    });
  }
  render() {
    return (
      <div className="home-wrapper">
        <section className="header-wrapper">
          <h1>Trollbasket</h1>
          <div className="filter">
            <span>
              <i class="fas fa-map-marker-alt"></i>
              <select
                name="location"
                onChange={(e) => this.handleLocationChange(e)}
              >
                <option value="All">All</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Rivers">Rivers</option>
              </select>
            </span>
            <span>
              <i class="fas fa-wallet"></i>
              <p>My Orders</p>
            </span>
            <Link to="/cart">
              <span>
                <span className="cart-counter">
                  <i class="fa fa-cart-plus" aria-hidden="true"></i>
                  <p>{this.state.cart.length}</p>
                </span>
                <p>Cart</p>
              </span>
            </Link>
          </div>
          <div className="search">
            <input
              type="text"
              name="search"
              placeholder=" search merchandise"
              onChange={(e) => this.handleSearchChange(e)}
            />
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </section>
        <section className="body-wrapper">
          <div className="carousel">
            <div>
              <span>Lorem Ipsum Doloret gastum remisnsc</span>
              <span>About Us</span>
            </div>
            <div>
              <span>Having any <span style={{color:"#8fab25"}}>issues</span> with your order ?</span>
              <span>Contact Us</span>
            </div>
            <div>
              <span>Lorem Ipsum Doloret gastum remisnsc</span>
              <span>About Us</span>
            </div>
          </div>
          <div className="featured">
            <div>
              <span>
                <i class="fa fa-sticky-note" aria-hidden="true"></i>
              </span>
              <span>Product Categories</span>
            </div>
            <div>
              <span>
                <i class="fas fa-fire-alt"></i>
              </span>
              <span>Popular Products</span>
            </div>
            <div>
              <span>
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </span>
              <span>Recommended Products</span>
            </div>
            <div>
              <span>
                <i class="fas fa-store    "></i>
              </span>
              <span>Shops</span>
            </div>
          </div>
          <div className="products">{this.showProducts()}</div>
        </section>
        <section className="toolbar-wrapper">
          <div>
            <span>
              <i class="fa fa-home" aria-hidden="true"></i>
            </span>
            <span>Home</span>
          </div>
          <div>
            <span>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </span>
            <span>Buy</span>
          </div>
          <div>
            <span>
              <i class="fa fa-tag" aria-hidden="true"></i>
            </span>
            <span>Deals</span>
          </div>
          <div>
            <span>
              <i class="fas fa-wallet    "></i>
            </span>
            <span>Wallet</span>
          </div>
          <div>
            <span>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </span>
            <span>More</span>
          </div>
        </section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Home);
