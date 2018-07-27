import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import Popup from "reactjs-popup";
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
        !this.props.booksReducer.mybooks ? this.props.fetchMyBook() : null
    }

    removeBook = (id) => {
        this.props.removeBook(id);
        this.props.fetchMyBook();
    }

    render() {
        return (
            <div>
                <div>

                    {
                        this.props.booksReducer.mybooks ? this.props.booksReducer.mybooks.map(book => {
                            return (
                                <div key={book._id}>
                                    <p>{book.name}</p>
                                    <p>{book.author}</p>
                                    <p>{book.description}</p>
                                    <div>
                                        <Popup trigger={<a href="#">E</a>} position="right center">
                                            <div>
                                                <div>
                                                    <textarea>{book.name}</textarea>
                                                    <textarea>{book.author}</textarea>
                                                    <textarea>{book.description}</textarea>
                                                </div>

                                                <div>
                                                    <button>Update</button>
                                                    <button>Cancel</button>
                                                </div>
                                            </div>
                                        </Popup>
                                        |
                                        <Popup trigger={<a href="#">X</a>} position="right center">
                                            <div>
                                                Are you sure ?
                                                <div>
                                                    <button onClick={() => this.removeBook(book._id)}>Yes</button>
                                                    <button>Cancel</button>
                                                </div>
                                            </div>
                                        </Popup>
                                    </div>
                                </div>
                            )
                        })
                            :
                            null
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchMyBook: () => (Actions.booksActions.fetchUserBooks()),
        removeBook: (id) => Actions.booksActions.removeBook(id)
    },
    dispatch,
  )


export default connect(mapStateToProps, mapDispatchToProps)(EditBooks)
