
export const ThunkState = Object.freeze({
    THUNK_SET: '[THUNK_SET] SET',
});

export const Actions = Object.freeze({
    setData: (data: any) => ({ type: ThunkState.THUNK_SET, payload: data })
});

interface State {
    fancyData: any;
}

const initialState: State = {
    fancyData: null,
}


const thunkReducer = (state = initialState, action: any): State => {
    switch (action.type) {
        case ThunkState.THUNK_SET:
            console.log(action);
            return { ...state, fancyData: action.payload };
        default:
            return state;
    }
};
export default thunkReducer;