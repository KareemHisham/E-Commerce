import { createSlice } from "@reduxjs/toolkit";

// Fetch From Localstorage
const FetchFromLocalStorage = () => {
  const LocalCart = localStorage.getItem("cart");
  if (LocalCart) {
    return JSON.stringify(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

// Store in Localstorage
const storeInLocalStorage = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

export const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    carts: FetchFromLocalStorage(),
    totalAmount: "",
    totalQuantity: "",
    quantity: 1,
  },
  reducers: {
    addItem: (state, action) => {
      const isItemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );

      if (isItemInCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;

            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice,
            };
          } else {
            return item;
          }
        });

        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },



    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },

    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },

    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.totalPrice);
      }, 0);

      state.itemsCount = state.carts.length;
    },

    toggleCartQty: (state, action) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;

          if (action.payload.type === "INC") {
            tempQty++;
            if (tempQty === item.stock) tempQty = item.stock;
            tempTotalPrice = tempQty * item.discountedPrice;
          }

          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) tempQty = 1;
            tempTotalPrice = tempQty * item.discountedPrice;
          }

          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
        } else {
          return item;
        }
      });

      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
  },
});
export const {
  toggleCartQty,
  getCartTotal,
  clearCart,
  removeFromCart,
} = CartSlice.actions;
export default CartSlice.reducer;
