export function userLogin(
    state = {
      fetching: false,
      status: 0,
      token: '',
      error: '',
      isAuthUser: ''
    },
    action
  ) {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, fetching: true, status: false }
      case 'LOGIN_SUCCESS':
        console.log(action)
        return { ...state, fetching: false, status: action.data.status, isAuthUser: true, token: action.data.data.token}
      case 'LOGIN_FAILED':
        return { ...state, fetching: false, status: action.data.status, error: action.error }
      case 'LOGIN_LOGOUT':
        return { ...state, fetching: false, status: 0, token: null }
      case 'VERIFY_TOKEN_REQUEST':
        return { ...state, fetching: true, status: false }
      case 'VERIFY_TOKEN_SUCCESS':
        return { ...state, fetching: false, status: action.data.status, isAuthUser: true, token: action.data.data.token, user: action.data.data.user}
      case 'VERIFY_TOKEN_FAILD':
        return { ...state, fetching: false, status: action.data.status, error: action.error }
      default:
        return state;
    }
  }


  