import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './stateManagement/orderReducer';
import thunkReducer from './stateManagement/thunkReducer';
import userReducer from './stateManagement/userReducer';



const store = configureStore({
    reducer: {
        // Регистрируем два редюсера
        // Под порядковый номер
        order: orderReducer,
        // И под выбранного пользователя
        user: userReducer,

    },

});
export default store;