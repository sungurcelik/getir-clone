import {combineReducers, createStore} from 'redux';
import cartItems from './reducers/cartItem';

const reducers = combineReducers({
  cartItems: cartItems,
});
const store = createStore(reducers);

export default store;
