import React from "react";

import { Link } from "react-router-dom";
import { useStateValue, getBasketTotal } from "../Context";
import CurrencyFormat from "react-currency-format";

import "../styles/components/subtotal.css";
const Subtotal = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        prefix="$"
        decimalScale={2}
        displayType="text"
        thousandSearator={true}
        value={getBasketTotal(basket)}
      />

      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default Subtotal;
