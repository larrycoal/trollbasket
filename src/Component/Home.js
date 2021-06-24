import React, { Component } from "react";
import { connect } from "react-redux";
class Home extends Component {
  state = {
    products: [],
    cart: [],
    filter: "All",
  };
  componentDidMount() {
    const { products } = this.props;
    this.setState({
      products,
    });
  }

  showProducts() {
    const { filter } = this.state;
    let filteredProduct = this.state.products;
   if(filter === "All"){
    return filteredProduct ? filteredProduct.map((product,i)=>(
        <div key={i}>
            <img src={product.image} alt=""/>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )) : null
   }else{

   }

  
  }
  render() {
    return (
      <div className="home-wrapper">
        <section className="header-wrapper">
          <h1>Trollbasket</h1>
          <div className="filter">
            <span>
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
              <select name="location">
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="kaduna">Kaduna</option>
                <option value="Rivers">Rivers</option>
              </select>
            </span>
            <span>
            <img
                src="https://img.icons8.com/pastel-glyph/64/000000/card-wallet--v1.png"
                alt="walet"
              />
              <p>My Orders</p>
            </span>
            <span>
              <i class="fa fa-cart-plus" aria-hidden="true"></i>
              <p>Cart</p>
            </span>
          </div>
          <div className="search">
            <input
              type="text"
              name="search"
              placeholder=" search merchandise"
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
              <span>Having any issues with your order ?</span>
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
                <img
                  src="https://img.icons8.com/android/24/000000/note.png"
                  alt=""
                />
              </span>
              <span>Product Categories</span>
            </div>
            <div>
              <span>
                <img
                  src="https://img.icons8.com/officel/16/000000/fire-element.png"
                  alt=""
                />
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
                <img
                  src="https://img.icons8.com/carbon-copy/100/000000/shop.png"
                  alt=""
                />
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
            <span>Cart</span>
          </div>
          <div>
            <span>
              <i class="fa fa-tag" aria-hidden="true"></i>
            </span>
            <span>Deals</span>
          </div>
          <div>
            <span>
              <img
                src="https://img.icons8.com/pastel-glyph/64/000000/card-wallet--v1.png"
                alt="walet"
              />
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
