import React, {Component} from 'react'
import { connect } from 'react-redux'
import Actions from './../../_actions/'

class EditBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }

    componentWillMount() {
        this.props.fetchBook()
    }

 render() {
     return(
         <div>
         <p>Edit books</p>
         {this.props.booksReducer.books ? this.props.booksReducer.books.map(book => {
             return(
                 <p>book.author</p>
             )
         }) : null}
         </div>
     )
 }
}

const mapStateToProps = state => ({
    ...state
   })
  
   const mapDispatchToProps = dispatch => ({
    fetchBook: () => dispatch(Actions.booksActions.fetchBook())
   })
  

export default connect(mapStateToProps, mapDispatchToProps)(EditBooks)
