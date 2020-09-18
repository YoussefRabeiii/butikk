import React from "react";

import { ProductCard } from "./";

import "../styles/components/homeRow.css";
const HomeRow = ({ products }) => {
  return (
    <div className="homeRow">
      {products.map((product) => {
        const { id, title, image, price, rating } = product;

        return (
          <ProductCard
            id={id}
            key={id}
            title={title}
            image={image}
            price={price}
            rating={rating}
          />
        );
      })}
    </div>
  );
};

export default HomeRow;
