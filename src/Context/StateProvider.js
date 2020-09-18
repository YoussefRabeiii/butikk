import React, { createContext, useContext, useReducer } from "react";

// The DataLayer
export const StateContext = createContext();

// Wrapper for our app to provide the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull info from the DataLayer
export const useStateValue = () => useContext(StateContext);
