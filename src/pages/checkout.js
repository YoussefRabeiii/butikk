import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import axios from "../axios";
import { db } from "../firebase";
import { v4 as uuid } from "uuid";
import { BasketProduct } from "../components";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal, useStateValue } from "../Context";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import "../styles/pages/checkout.css";
const Checkout = () => {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);
  const [theCloud, setTheCloud] = useState("👎 Not From The 🤬 ⛈ YET!!!");

  useEffect(() => {
    // Check if the Cloud Function Works
    const testTheCloud = async () => {
      const response = await axios.get("/checkout/testTheCloud");

      setTheCloud(response.data);
    };

    const getClientSecret = async () => {
      // Stripe need the total to be in currencies subUnits (like cents in dollars)
      const response = await axios.post(
        `/checkout/create?total=${getBasketTotal(basket) * 100}`
      );

      // console.log("response", response);
      setClientSecret(response.data.clientSecret);
    };

    testTheCloud();
    getClientSecret();
  }, [basket]);

  console.log("🤞", theCloud); // For Debugging (Testing)
  console.log("🔐", clientSecret); // For Debugging
  // console.log("👱‍♀️", user); // For Debugging

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    // ✨ Stripe Magic ✨

    // eslint-disable-next-line
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // PaymentIntent is the  payment confirmation
        const { amount, created } = paymentIntent;

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket,
            amount,
            created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: "EMPTY_BASKET" });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="checkout">
      <h1>
        Checkout (<Link to="/basket">{basket?.length} items</Link>)
      </h1>

      <div className="checkout__container">
        <section className="checkout__section">
          <div className="checkout__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="checkout__address">
            <p>{user?.email}</p>
            <p>123 Silicon Valley</p>
            <p>Los Angeles, CA</p>
          </div>
        </section>

        <section className="checkout__section">
          <div className="checkout__title">
            <h3>Review items and Delivery</h3>
          </div>

          <div className="checkout__items">
            {basket.map((item) => {
              const { id, title, image, price, rating } = item;

              return (
                <BasketProduct
                  id={id}
                  key={uuid()}
                  title={title}
                  image={image}
                  price={price}
                  rating={rating}
                />
              );
            })}
          </div>
        </section>

        <section className="checkout__section">
          <div className="checkout__title">
            <h3>Payment Method</h3>
          </div>

          <div className="checkout__payment">
            {/* ✨ Stripe Magic ✨ */}
            <form
              onSubmit={handleSubmit}
              disabled={processing || disabled || succeeded || !user}
            >
              <CardElement onChange={handleChange} />

              <div className="checkout__subtotal">
                <CurrencyFormat
                  prefix="$"
                  decimalScale={2}
                  displayType="text"
                  thousandSeparator={true}
                  value={getBasketTotal(basket)}
                  renderText={(value) => (
                    <h3 className="checkout__total">Order Total: {value}</h3>
                  )}
                />

                <button
                  className={`styledBtn checkout__buyNow ${
                    processing || disabled || succeeded || !user
                      ? "checkout__buyNow--disabled"
                      : "checkout__buyNow--enabled"
                  }`}
                  disabled={processing || disabled || succeeded || !user}
                >
                  <span>
                    {user ? (
                      processing ? (
                        <p>Processing</p>
                      ) : (
                        "Buy Now"
                      )
                    ) : (
                      <Link to="/login">Sign In To Buy</Link>
                    )}
                  </span>
                </button>
              </div>

              {error && <div className="checkout__error">{error}</div>}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Checkout;
