const selectedCategoryDefaultState = 0;

const selectedCategoryReducer = (state = selectedCategoryDefaultState, action) => {
  switch(action.type){
    case 'SET_SELECTED_CATEGORY':
      return action.selected_category_id;

    default:
      return state;
  }
}

export default selectedCategoryReducer;