export default (state = {}, action) => {
    switch (action.type) {
     case 'LOGIN_REQUEST':
      return {
       result: action.payload
      }
      case 'SIGNUP_REQUEST':
        return {
          user: action.payload
        }
     default:
      return state
    }
   }