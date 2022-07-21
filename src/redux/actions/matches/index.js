
import MatchesService from "../../../services/matches.service";

export const getUserMatches = (params) => async (dispatch) => {

    return MatchesService.getMatches(params).then(
        (data) => {
            dispatch({
                type: 'GET_MATCHES_SUCCESS',
                payload: data,
            });
            return Promise.resolve("sucess");
        },
        (error) => {
            dispatch({
                type: 'GET_MATCHES_FAIL',
            });
            return Promise.reject();
        },
    );
};

