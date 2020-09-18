import React from "react";

import { HomeRow } from "../components";

import "../styles/pages/home.css";
const home = () => {
  const products = {
    wishlist: [
      {
        id: 1,
        title:
          "X-Bows Knight Plus Ergonomic Mechanical Keyboard with Detachable Number Pad",
        image:
          "https://cdn.shopify.com/s/files/1/0014/7623/1237/products/20191018112325_500x500@2x.jpg?v=1599071155",
        price: 259.0,
        rating: 5,
      },
      {
        id: 2,
        title: "Lenovo Legion 7i",
        image:
          "https://www.lenovo.com/medias/lenovo-laptop-legion-7-gallery-1.png?context=bWFzdGVyfHJvb3R8MjgyMDY4fGltYWdlL3BuZ3xoMGQvaGQxLzEwODQ1MDIxOTI5NTAyLnBuZ3xlMDZiNWRmNTg3NDY2MDNmOTk2ZDY3YzIyOWIzMjZkNGMzM2U4NzYyOTc5NWQ2MDE2ZTgxYWFjZGM0NGZiYTFi",
        price: 1699.99,
        rating: 4,
      },
      {
        id: 3,
        title: "OnePlus 7T Pro  McLaren Edition",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81RKayv%2BARL._AC_SL1500_.jpg",
        price: 699,
        rating: 5,
      },
    ],

    later: [
      {
        id: 7,
        title: "Lenovo V530 All-in-One (24)",
        image:
          "https://www.lenovo.com/medias/lenovo-aio-desktop-v530-24-hero.png?context=bWFzdGVyfHJvb3R8ODM3MDF8aW1hZ2UvcG5nfGg5Ni9oNWMvOTc0NzgyMTgyMTk4Mi5wbmd8YjJiZGY0OTAxNTRiMzliNzkxMGNlZDdlMGNlOGMyM2Y4ZWI2ODVkYWY3ZDE4OWY1MGY4NDNhNTkwNmRhZTg1MQ",
        price: 1094.98,
        rating: 5,
      },
      {
        id: 5,
        title: "Lenovo Legion 7i",
        image:
          "https://www.lenovo.com/medias/lenovo-laptop-legion-7-gallery-1.png?context=bWFzdGVyfHJvb3R8MjgyMDY4fGltYWdlL3BuZ3xoMGQvaGQxLzEwODQ1MDIxOTI5NTAyLnBuZ3xlMDZiNWRmNTg3NDY2MDNmOTk2ZDY3YzIyOWIzMjZkNGMzM2U4NzYyOTc5NWQ2MDE2ZTgxYWFjZGM0NGZiYTFi",
        price: 1699.99,
        rating: 4,
      },
    ],

    vrAr: [
      {
        id: 30,
        title: "Lenovo Explorer",
        image:
          "https://static.lenovo.com/ww/campaigns/2017/arvr/arvr-explorer.png",
        price: 98.99,
        rating: 2,
      },
      {
        id: 20,
        title: "Star Wars™: Jedi Challenges",
        image:
          "https://static.lenovo.com/ww/campaigns/2017/arvr/arvr-jedi-challenges.png",
        price: 205.99,
        rating: 3,
      },
      {
        id: 21,
        title: "Mirage Solo & Mirage Camera",
        image:
          "https://static.lenovo.com/ww/campaigns/2017/arvr/arvr-mirage.png",
        price: 98.99,
        rating: 4,
      },
    ],

    lenovo: [
      {
        id: 2,
        title: "Lenovo Legion 7i",
        image:
          "https://www.lenovo.com/medias/lenovo-laptop-legion-7-gallery-1.png?context=bWFzdGVyfHJvb3R8MjgyMDY4fGltYWdlL3BuZ3xoMGQvaGQxLzEwODQ1MDIxOTI5NTAyLnBuZ3xlMDZiNWRmNTg3NDY2MDNmOTk2ZDY3YzIyOWIzMjZkNGMzM2U4NzYyOTc5NWQ2MDE2ZTgxYWFjZGM0NGZiYTFi",
        price: 1699.99,
        rating: 4,
      },
      {
        id: 22,
        title: "Motorola Razr",
        image:
          "https://motorolamea.vtexassets.com/arquivos/ids/155402-800-auto?width=800&height=auto&aspect=true",
        price: 85.99,
        rating: 3,
      },
      {
        id: 23,
        title: "earbuds sport orange",
        image:
          "https://motorolamea.vtexassets.com/arquivos/ids/155442-800-auto?width=800&height=auto&aspect=true",
        price: 50,
        rating: 1,
      },
      {
        id: 25,
        title: "IdeaPad Gaming 3i (15)",
        image:
          "https://static.lenovo.com/mea/images/lenovo-laptop-legion-ideapad-3-gaming-hero.png",
        price: 250,
        rating: 4,
      },
    ],

    single: [
      {
        id: 4,
        title: "Lenovo Legion Y44w Monitor",
        image:
          "https://www.lenovo.com/medias/Y44FW-gallery-1-back.png?context=bWFzdGVyfC9lbWVhL2ltYWdlcy9hY2Nlc3Nvcmllcy9tb25pdG9ycy98MTA2NDAzfGltYWdlL3BuZ3wvZW1lYS9pbWFnZXMvYWNjZXNzb3JpZXMvbW9uaXRvcnMvaDgwL2g5Mi85OTAxNjE3OTA1Njk0LnBuZ3w1MjI4NDY4MWE5Y2M1Yjk5ODJhYzg2ZmNjNjYzZGVkYTIwODQ0Y2E1YWM0ZGJkZjhkZDBmYWFhZTRhOTAzYjNj",
        price: 1099.99,
        rating: 3,
      },
    ],
  };

  return (
    <div className="home">
      <div className="home__hero">
        <img
          alt="Amazon Prime"
          className="home__hero__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </div>

      <HomeRow products={products.vrAr} />
      {/* <HomeRow products={products.wishlist} /> */}
      <HomeRow products={products.later} />
      <HomeRow products={products.single} />
      <HomeRow products={products.vrAr} />
      <HomeRow products={products.lenovo} />
    </div>
  );
};

export default home;
