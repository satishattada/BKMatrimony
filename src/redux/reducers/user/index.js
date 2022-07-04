

const initialState = {
  userData: {},
  usersData: []
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_SUCCESS':
      return { ...state, userData: action.payload };
    case 'GET_USERS_SUCCESS':
      return { ...state, usersData: action.payload };
    default:
      return state;
  }
};


export default user;
