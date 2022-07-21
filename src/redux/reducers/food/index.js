

const initialState = {
    userFood: []
  };
  
  const food = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_FOOD_SUCCESS':
        return { ...state, userFood: action.payload };
      default:
        return state;
    }
  };
  
  
  export default food;
  