const categoryReducerDefaultState = [];

const categoryReducer = (state = categoryReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_CATEGORY':
      return [
        ...state,
        action.category
      ];    

    default:
      return state;
  };
}

export default categoryReducer;