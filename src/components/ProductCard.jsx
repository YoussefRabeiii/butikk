import React from "react";

import { useStateValue } from "../Context";

import "../styles/components/productCard.css";
const ProductCard = ({ id, title, image, price, rating }) => {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    // console.log("🛒", basket); // For Debugging
  };

  return (
    <div className="productCard">
      <div className="productCard__info">
        <p className="productCard__title">{title}</p>

        <div className="productCard__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>

        <div className="productCard__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span
                key={i}
                role="img"
                aria-label="Star"
                className="productCard__rating__star"
              >
                ⭐
              </span>
            ))}
        </div>
      </div>

      <img src={image} alt={title} className="productCard__image" />

      <button
        className="styledBtn productCard__add2basket"
        onClick={addToBasket}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default ProductCard;
