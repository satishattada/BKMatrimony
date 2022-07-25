import UserService from "../../../services/user.service";

export const getUserDetails = (params) => async (dispatch) => {

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

export const getUsersDetails = (params) => async (dispatch) => {

  return UserService.getUsers(params).then(
    (data) => {
      dispatch({
        type: 'GET_USERS_SUCCESS',
        payload: data,
      });
      return Promise.resolve(data);
    },
    (error) => {
      dispatch({
        type: 'GET_USERS_FAIL',
      });
      return Promise.reject();
    },
  );
};


export const updateUser = (params) => async (dispatch) => {

  return UserService.updateUser(params).then(
    (data) => {
      dispatch({
        type: 'UPDATE_USER_SUCCESS',
        payload: data,
      });
      return Promise.resolve(data);
    },
    (error) => {
      dispatch({
        type: 'GET_USERS_FAIL',
      });
      return Promise.reject();
    },
  );
};