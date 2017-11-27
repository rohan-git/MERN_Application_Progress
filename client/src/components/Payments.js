import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {



  render(){

    return ( <StripeCheckout  name="Credits"
                              descriptions="Pay $5 For 5 Survey Email Credits"
                              amount={500}
                              token={ x=> console.log(x) }
                              stripeKey={process.env.REACT_APP_STRIPE_KEY}>

                               <button className="btn">
                                Add Credits
                               </button>

              </StripeCheckout> );
  }

}

export default Payments;
