

const initialState = {
  userData: {},
  usersData: [],
  accessToken: ''
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGIN_SUCCESS':
      return { ...state, accessToken: action.payload };
    case 'GET_USER_SUCCESS':
      return { ...state, userData: action.payload };
    case 'GET_USERS_SUCCESS':
      return { ...state, usersData: action.payload };
    default:
      return state;
  }
};


export default user;
