import { OrderThing } from "../models/orderThing";

interface State {
    list: OrderThing[];
}


export const OrderActions = {
    orderCheck: 'FANCY_ORDER_CHECK',
}

// Исходный стейт
const initialState: State = {
    list: [],
}

type Action = { type: string, payload?: any };



// редюсер - функция, на основе входного объекта 
// меняющая стейт и возвращающая новый
const orderReducer = (state = initialState, action: Action) => {
console.log(action.type);
    switch (action.type) {
        case OrderActions.orderCheck:
      
        console.log('List before', state.list)
            console.log(action.payload)
      
            const list = [...state.list];

            const item = action.payload;
            const index = list.findIndex(x => x.id === item.id);
            if (index === -1) {
                list.push(item);
            } else {
                list.splice(index, 1);
            }
            const newState = { ...state, list: [...list] };


            console.log('List after', newState.list)
            return newState;

        case '[ORDER_STATE] ORDER_CLEAR':
            return { ...state, list: [] };
        default:
            return state;
    }
};
export default orderReducer;