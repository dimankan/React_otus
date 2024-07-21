import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { OrderThing } from "../models/orderThing";

interface State {
    list: OrderThing[];
}


// Исходный стейт
const initialState: State = {
    list: [],
}


export const colorCheckerSlice = createSlice({
    name: 'colorChecker',
    initialState,
    reducers: {
        orderCheck: (state: State, action: PayloadAction<OrderThing>) => {
            const list = [...state.list];
            console.log('ятут 2',action);
            const item = action.payload;
            const index = list.findIndex(x => x.id === item.id);
            if (index === -1) {
                list.push(item);
            } else {
                list.splice(index, 1);
            }
            state.list = list;
        },

    },
});

export const { orderCheck } = colorCheckerSlice.actions;

export default colorCheckerSlice.reducer;