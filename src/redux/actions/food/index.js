import FoodService from "../../../services/food.service";


export const getUserFood = (params) => async (dispatch) => {

    return FoodService.getFood(params).then(
        (data) => {
            dispatch({
                type: 'GET_FOOD_SUCCESS',
                payload: data,
            });
            return Promise.resolve("sucess");
        },
        (error) => {
            dispatch({
                type: 'GET_FOOD_FAIL',
            });
            return Promise.reject();
        },
    );
};

