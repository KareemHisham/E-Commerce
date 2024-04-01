import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APILink } from "./APIData.js";

// Fetch Categories Data

export const FetchCategories = createAsyncThunk(
  "categories/fetch",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${APILink}/products/categories`);
      const fetchData = await res.json();
      return fetchData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Fetch Product Category
export const FetchProductCategory = createAsyncThunk(
  "product/category",
  async (productName, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${APILink}/products/category/${productName}`);
      const fetchData = await res.json();
      return fetchData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const CategoriesSlice = createSlice({
  name: "CategoriesSlice",
  initialState: {
    categories: [],
    productCategories: [],
    isLoading: false,

  },
  extraReducers: {
    [FetchCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [FetchCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [FetchCategories.rejected]: (state, action) => {
      state.isLoading = true;
    },

    [FetchProductCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [FetchProductCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productCategories = action.payload;
    },
    [FetchProductCategory.rejected]: (state) => {
      state.isLoading = true;
    },
  },
});

export default CategoriesSlice.reducer;
