import React from "react";

import { v4 as uuid } from "uuid";
import { useStateValue } from "../Context";
import { BasketProduct, Subtotal } from "../components";

import "../styles/pages/basket.css";
const Basket = () => {
  const [{ basket }] = useStateValue();

  return (
    <main className="basket">
      <div className="basket__content">
        <img
          className="basket__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="AD"
        />

        <h2 className="basket__title">Your Shopping Basket</h2>

        <div className="basket__products">
          {basket?.map((product) => {
            const { id, title, image, price, rating, many } = product;

            return (
              <BasketProduct
                id={id}
                key={uuid()}
                many={many} // TODO: Change the name of many to something better (How Many ?)
                image={image}
                title={title}
                price={price}
                rating={rating}
              />
            );
          })}
        </div>
      </div>

      <div className="basket__subtotal">
        <Subtotal />
      </div>
    </main>
  );
};

export default Basket;
