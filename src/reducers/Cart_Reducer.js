const cartReducerDefaultState = [];

export default (state = cartReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_CART_ITEM':
      if(state.length === 0){ // If cart is empty, just add the item right away.
        return [
          ...state,
          action.item
        ]
      }else{
        let item = state.find((item) => item.product_id === action.item.product_id);
        if(item === undefined){ // If item is not in cart, add it right away
          return [
            ...state,
            action.item
          ]
        }else{  // If item is already in cart, just increase its quantity.
          return state.map((item) => {
            if(item.product_id === action.item.product_id){              
              return {
                product_id: item.product_id,
                name: item.name,
                quantity: item.quantity + 1,
                price: item.price,
              }
            }else{
              return item;
            }
          });
        }
      }
      break;

    case 'REMOVE_CART_ITEM':
      return state.map((item) => {
        if(item.product_id === action.product_id && item.quantity >= 2){
          return {
            product_id: item.product_id,
            name: item.name,
            quantity: item.quantity - 1,
            price: item.price,
          }
        }else{
          return item;
        }
      });
      break;

    case 'DELETE_CART_ITEM':      
      return state.filter( item => item.product_id != action.product_id);
      break;

    default:
      return state;
  }
};