import {createStore, combineReducers} from 'redux';
import categoryReducer from '../reducers/categories';
import TableNumber_Reducer from '../reducers/TableNumber_Reducer';
import SelectedCategory_Reducer from '../reducers/SelectedCategory_Reducer';
import Products_Reducer from '../reducers/Product_Reducer';
import Cart_Reducer from '../reducers/Cart_Reducer';


export default () => {
  const store = createStore(
    combineReducers({
      categories: categoryReducer,
      products: Products_Reducer,
      selected_category: SelectedCategory_Reducer,
      table_number: TableNumber_Reducer,
      cart: Cart_Reducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}