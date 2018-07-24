export default (state = {}, action) => {
    switch (action.type) {
     case 'LOGIN_REQUEST':
      return {
       token: action.payload
      }
      case 'SIGNUP_REQUEST':
        return {
          token: action.payload
        }
        case 'ISLOGGED':
        return {
          token: action.payload
        }
        case 'LOGOUT':
        return {
          token: null
        }
     default:
      return state
    }
   }