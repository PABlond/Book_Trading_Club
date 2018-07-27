export default (state = {}, action) => {
    switch (action.type) {
        case 'SEND_BOOK':
            return {
                ...state,
                books: action.payload,
                mybooks: action.payload,
                messageToShow: ["Your book was sent"]
            }
        case 'ALL_BOOKS':
            return {
                ...state,
                books: action.payload
            }
        case 'USER_BOOKS':
            return {
                ...state,
                mybooks: action.payload
            }
        case 'REMOVE_BOOK':
            return {
                ...state,
                books: action.payload
            }
            break;
        case 'BOOK_TO_TRADE':
            return {
                ...state, 
                to_trade: action.payload
            }
        case 'SEND_TRADE':
            return {
                ...state,
                to_trade: action.payload,
                messageToShow: ["Your Trade Was sent"]
            }
        default:
        return state
    }
}