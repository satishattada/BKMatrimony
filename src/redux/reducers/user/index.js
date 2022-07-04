

const initialState = {
  userData: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};


export default user;
