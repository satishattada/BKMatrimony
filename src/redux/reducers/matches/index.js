

const initialState = {
  userMatches: []
};

const matches = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MATCHES_SUCCESS':
      return { ...state, userMatches: action.payload };
    default:
      return state;
  }
};


export default matches;
