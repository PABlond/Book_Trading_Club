export default (state = {}, action) => {
    switch (action.type) {
     case 'SEND_BOOK':
        return {
            ...state,
            data: action.payload
        }
        case 'USER_BOOKS':
            return {
                books: action.payload
            }
     default:
      return state
    }
   }