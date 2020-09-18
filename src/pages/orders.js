import React, { useState, useEffect } from "react";

import { db } from "../firebase";
import { v4 as uuid } from "uuid";
import { Order } from "../components";
import { useStateValue } from "../Context";

import "../styles/pages/orders.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  // eslint-disable-next-line
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      {user ? (
        orders.length >= 1 ? (
          <h1>Orders</h1>
        ) : (
          <main>
            <h1>Orders</h1>
          </main>
        )
      ) : (
        <main>
          <h1>Sign in to see your orders</h1>
        </main>
      )}

      <div className="orders__container">
        {orders?.map((order) => (
          <Order order={order} key={uuid()} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
