import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APILink } from "./APIData";

// Save Data in localstorage
const STOREDATA = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

//  Fetch cart From Local storage

const FETCHCARTFROMSTORAGE = () => {
  let storageCart = localStorage.getItem("cart");
  if (storageCart) {
    return JSON.parse(storageCart);
  } else {
    return [];
  }
};

// Fetch Products Data
export const FetchProducts = createAsyncThunk(
  "product/fetch",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${APILink}/products?limit=20`);
      const fetchData = await res.json();
      return fetchData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch Single Product

export const FetchProduct = createAsyncThunk(
  "productDetail/fetch",
  async (productID, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${APILink}/products/${productID}`);
      const fetchData = await res.json();
      return fetchData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState: {
    products: [],
    productDetails: [],
    isLoading: false,
    count: 1,
    msgError: false,
    carts: [],
  },
  reducers: {
    increament: (state) => {
      state.count += 1;
      if (state.count > state.productDetails.stock) {
        state.msgError = true;
      }
    },
    decreament: (state) => {
      state.count -= 1;
      if (state.count <= 1) {
        state.count = 1;
      } else if (state.count < state.productDetails.stock) {
        state.msgError = false;
      }
    },
    addToCart: (state, action) => {
      // check the new item is exist in the cart or not
      console.log(typeof state.carts);
      // console.log("id",action.payload.productDetails.id)


      let storageCart = localStorage.getItem("cart");
      if (storageCart) {
        return JSON.parse(storageCart);
      }

      console.log(storageCart)

      let newItem = state.carts.filter((item) => console.log("item =>", item));
      console.log("newItem =>", newItem);
      if (newItem) {
        console.log("exist");
      } else {
        console.log("no exist");
      }

      // state.carts = action.payload;
      STOREDATA(action.payload);
      // console.log("carts =>", state.carts);
      // STOREDATA(action.payload);
    },
  },
  extraReducers: {
    [FetchProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [FetchProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [FetchProducts.rejected]: (state, action) => {
      state.isLoading = true;
    },

    [FetchProduct.pending]: (state) => {
      state.isLoading = true;
    },
    [FetchProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productDetails = action.payload;
    },
    [FetchProduct.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});
export const { increament, decreament, addToCart } = ProductsSlice.actions;
export default ProductsSlice.reducer;
