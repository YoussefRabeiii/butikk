import React from "react";

import { auth } from "../firebase";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";

import "../styles/components/nav.css";
const Nav = () => {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav>
      <Link to="/">
        <h1 className="logo nav__logo">Butikk</h1>
      </Link>

      <div className="nav__search">
        <input className="nav__search__input" type="text" />

        <FaSearch className="fa nav__search__icon" />
      </div>

      <div className="nav__options">
        <Link to={user ? "" : "/login"}>
          <div className="nav__option" onClick={handleAuthentication}>
            <span className="nav__option__L1">
              Hello {user ? user?.email : "Guest"}
            </span>
            <span className="nav__option__L2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="nav__option">
            <span className="nav__option__L1">Returns</span>
            <span className="nav__option__L2">& Orders</span>
          </div>
        </Link>

        <div className="nav__option">
          <span className="nav__option__L1">Your</span>
          <span className="nav__option__L2">Prime</span>
        </div>

        <Link to="/basket" className="nav__optionBasket">
          <FaShoppingBasket className="fa nav__optionBasket__icon" />

          <span className="nav__optionBasket__count nav__option__L2">
            {basket.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
