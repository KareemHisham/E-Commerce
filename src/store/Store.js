import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./GlobalSlice.js";
import CategoriesSlice from "./CategoriesSlice.js";
import ProductsSlice from "./ProductsSlice.js";
import CartSlice from "./CartSlice.js";
export const Store = configureStore({
  reducer: {
    GlobalSlice,
    CategoriesSlice,
    ProductsSlice,
    CartSlice
  },
});
