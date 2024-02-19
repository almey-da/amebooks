import React from "react";
import {useStateValue} from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Checkout.css";
import background from "./checkout.png";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <img 
                className="checkout-img"
                src={background} 
                alt="background photo" 
            />

            <div className="checkout-container">
            <div className="checkout-left">
            {basket?.length === 0 ? (
                <div>
                    <h2>Your AbeBooks Basket is empty</h2>
                    <p>
                        You have no items in your basket. Let's shop!
                    </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout-title">Your Shopping Basket</h2>

                    {basket?.map(item => {
                        console.log(item);
                        return (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                        )
                    })}
                </div>
            )}
            </div>
            {basket?.length > 0 && (
                <div className="checkout-right">
                    <Subtotal />
                </div>
            )}
            </div>
            
        </div>
  );
}

export default Checkout;