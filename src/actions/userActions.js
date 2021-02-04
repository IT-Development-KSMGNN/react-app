import * as api from '../app/api';

export function loginRequest(user) {
	return dispatch => {
		dispatch({ type: 'LOGIN_REQUEST' })
		api.postLogin(user)
			.then(data => {
				localStorage.setItem("token", data.data.token)
				localStorage.setItem("user", JSON.stringify(data.data.user))
				return dispatch({ type: 'LOGIN_SUCCESS', data: data });		
			})
            .catch((err) => {
                console.log(err.response)
				dispatch({
					type: 'LOGIN_FAILED',
					data: err.response,
					error: err.response.data.non_field_errors[0],
				})
        	})
	}
}
export function autoLogin(user) {
	return dispatch => {
        dispatch({ type: 'VERIFY_TOKEN_REQUEST' })
        let token = localStorage.getItem("token");
		api.verifyToken({token: token})
			.then(data => {
				localStorage.setItem("token", data.data.token)
				return dispatch({ type: 'VERIFY_TOKEN_SUCCESS', data: data });		
			})
            .catch((err) => {
                console.log(err.response)
				dispatch({
					type: 'VERIFY_TOKEN_FAILED',
					data: err.response,
					error: err.response.data,
				})
        	})
	}
}