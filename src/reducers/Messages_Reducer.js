const messagesReducerDefaultState = [];

export default (state = messagesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        action.message
      ]
      break;

    default:
      return state;
  }
};