import UserService from "../../../services/user.service";

export const loginUser = (params) => async (dispatch) => {
alert();
  return UserService.loginUser(params).then(
    (data) => {
      console.log(data);
      if (data.accessToken) {
        dispatch({
          type: 'GET_LOGIN_SUCCESS',
          payload: data,
        });
        return Promise.resolve("sucess");
      } else {
        dispatch({
          type: 'GET_LOGIN_FAIL',
        });
        return Promise.reject();
      }

    },
    (error) => {
      dispatch({
        type: 'GET_LOGIN_FAIL',
      });
      return Promise.reject();
    },
  );
};

export const logoutUser = () => async (dispatch) => {
  alert();
  dispatch({
    type: 'GET_LOGOUT_SUCCESS',
    payload: null,
  });
  return Promise.resolve("sucess");
}


export const registerUser = (params) => async (dispatch) => {

  return UserService.registerUser(params).then(
    (data) => {

      if (data.accessToken) {
        dispatch({
          type: 'GET_REGISTER_SUCCESS',
          payload: data,
        });
        return Promise.resolve("success");
      } else {
        dispatch({
          type: 'GET_REGISTER_FAIL',
        });
        return Promise.resolve("fail");
      }

    },
    (error) => {
      dispatch({
        type: 'GET_REGISTER_FAIL',
      });
      return Promise.reject();
    },
  );
};

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
        type: 'UPDATE_USERS_SUCCESS',
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