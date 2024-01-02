import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const id = action.payload.id;
            // check if the item is already present in the cart 
            const existingItemIndex = state.items.findIndex(item => item.id === id);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity++;
            } else {
                state.items.push(action.payload);
            }

        },
        removeItem: (state, action) => {
            const id = action.payload.id;

            // check if the item is already present in the cart 
            const existingItemIndex = state.items.findIndex(item => item.id === id);

            if (existingItemIndex !== -1) {
                state.items[existingItemIndex].quantity--;

                if (state.items[existingItemIndex].quantity === 0) {
                    state.items.splice(existingItemIndex, 1);
                }
            } else {
                state.items.push(action.payload);
            }
        },
        clearCart: (state) => {
            state.items = [];
        }, 
        deleteItem: (state, action) => {
            const existingItemIndex = state.items.findIndex((item) => item.id === action.payload);

            state.items.splice(existingItemIndex, 1);
        }
    }
})


export const { addItem, removeItem, clearCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;