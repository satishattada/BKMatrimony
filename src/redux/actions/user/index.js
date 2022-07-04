import UserService from "../../../services/user.service";

export const getUserDetails =
  (params) => async (dispatch) => {

    return UserService.getUser(params).then(
      (data) => {
        dispatch({
          type: 'GET_USER_SUCCESS',
          payload: data,
        });
        return Promise.resolve("sucess");
      },
      (error) => {
        dispatch({
          type: 'GET_USER_FAIL',
        });
        return Promise.reject();
      },
    );
  };
