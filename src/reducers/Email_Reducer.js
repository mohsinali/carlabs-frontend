const emailReducerDefaultState = "";

export default (state = emailReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EMAIL':
      return action.email;
      break;

    default:
      return state;
  }
}