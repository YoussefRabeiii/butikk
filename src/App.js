import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Home,
  Login,
  Basket,
  Orders,
  Checkout,
  Products,
  SingleProduct,
} from "./pages";
import { auth } from "./firebase";
import { useStateValue } from "./Context";
import { Nav, Footer } from "./components";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  // HIS PK
  "pk_test_51HPvTWIng1to4SFHo6texevETbY40PQrZmHtzNwlJt0h22sIwZfM9SvzxTKcWthlIliUWj5V8msMsPg383tpwfjB00pMl5DHGO"

  // MY PK
  // "pk_test_51HS19rF3soLDY7DwYF21YxzebCW9Rl7joOxBsWFuTUU6S4dhuoplIThVVN8Oz7QSl6bYVdYv8zvOJ3ea52Z1ewOE00g13HW9A9"
);

const App = () => {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("👱", authUser); // For Debugging

      if (authUser) {
        // The User just logged in or already logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged Out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/basket" component={Basket} />
        <Route path="/orders" component={Orders} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/checkout">
          <Elements stripe={promise}>
            <Checkout />
          </Elements>
        </Route>

        {/* Leave it the last route */}
        <Route path="/">
          <h1>404 - Sorry The page that you are looking for is sold out</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
