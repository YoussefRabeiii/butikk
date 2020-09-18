import React from "react";

import { useStateValue } from "../Context";

import "../styles/components/basketProduct.css";
const BasketProduct = ({
  id,
  image,
  title,
  price,
  rating,
  hideBtn,
  many, // TODO: Change the Variable name many
}) => {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="basketProduct">
      <img src={image} alt={title} className="basketProduct__img" />

      <div className="basketProduct__info">
        <h2 className="basketProduct__title">{title}</h2>

        <div className="basketProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <div className="basketProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span
                key={i}
                role="img"
                aria-label="Star"
                className="basketProduct__rating__star"
              >
                ⭐
              </span>
            ))}
        </div>

        {!hideBtn && (
          <button
            onClick={removeFromBasket}
            className="styledBtn basket__rmvFromBasket"
          >
            Remove From Basket
          </button>
        )}
      </div>
    </div>
  );
};

export default BasketProduct;
