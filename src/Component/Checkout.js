import React from 'react';

const Checkout = () => {
    return (
        <div className="checkout-wrapper">
            <section>
                <div className="top">
                    <div>
                        <i class="fa fa-check" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="bottom">
                    <p>Checkout Successful</p>
                    <p>Your checkout is now successful</p>
                </div>
            </section>
            <button>Got It</button>
        </div>
    );
};

export default Checkout;