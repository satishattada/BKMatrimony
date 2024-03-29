

const initialState = {
  userData: {},
  usersData: [],
  accessToken: '',
  selectedProfile: {}
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGIN_SUCCESS':
    case 'GET_REGISTER_SUCCESS':
      return {
        ...state, accessToken: action.payload.accessToken,
        userData: action.payload.user,
        selectedProfile: action.payload.user
      };
    case 'GET_UPDATE_USER_SUCCESS':
      return {
        ...state,
        userData: action.payload
      };
    case 'GET_SELECT_PROFILE_SUCCESS':
      return {
        ...state,
        selectedProfile: action.payload
      };
    case 'GET_LOGOUT_SUCCESS':
      return {
        ...state,
        accessToken: '',
        userData: {}
      };
    case 'GET_USER_SUCCESS':
      return { ...state, userData: action.payload };
    case 'GET_USERS_SUCCESS':
      return { ...state, usersData: action.payload };
    default:
      return state;
  }
};


export default user;
