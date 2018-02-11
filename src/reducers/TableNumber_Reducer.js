const tableNoReducerDefaultState = 0;

const tableNoReducer = (state = tableNoReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TABLE_NUMBER':      
      return action.table_number;

    default:
      return state;
  }
}

export default tableNoReducer;