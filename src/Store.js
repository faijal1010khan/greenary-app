import { configureStore } from "@reduxjs/toolkit";
import  searchInputSlice  from "./Redux/SearchInputSlice";
import cartReducer from './Redux/Cart';

export const store = configureStore({
  reducer: {
    searchInput: searchInputSlice,
     cart: cartReducer

  },
});
