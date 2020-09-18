import React from "react";

import moment from "moment";
import { v4 as uuid } from "uuid";
import BasketProduct from "./BasketProduct";
import CurrencyFormat from "react-currency-format";

import "../styles/components/order.css";
const Order = ({ order }) => {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMM Do YYY, h:mma")}</p>
      <p className="order__id">{order.id}</p>

      {order.data.basket?.map((item) => {
        const { id, title, image, price, rating } = item;

        return (
          <BasketProduct
            hideBtn
            id={id}
            key={uuid()}
            title={title}
            image={image}
            price={price}
            rating={rating}
          />
        );
      })}

      <CurrencyFormat
        prefix={"$"}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        value={order.data.amount / 100}
        renderText={(value) => (
          <h3 className="otder__total">Order Total: {value}</h3>
        )}
      />
    </div>
  );
};

export default Order;
