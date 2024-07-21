import { OrderThing } from "../models/orderThing";
import { User } from "../models/user";



export const Actions = Object.freeze({
    setUser: (user: User) => ({ type: '[USER_STATE] USER_SET', payload: user })
});

interface State {
    user: User | null;
    counter: number;
}



const initialState: State = {
    user: null,
    counter: 15
}


const userReducer = (state = initialState, action: any) => {
    console.log(action);
    switch (action.type) {
        case '[USER_STATE] USER_SET':
            console.log('я тут');
            return { ...state, user: action.payload };

        case '[USER_STATE] INCR':
            return { ...state, counter: state.counter + 1 };
        case '[USER_STATE] DECR':
            return { ...state, counter: state.counter - 1 };
        default:
            return state;
    }
};
export default userReducer;