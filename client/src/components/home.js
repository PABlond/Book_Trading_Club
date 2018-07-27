import React, { Component } from 'react';
import Popup from "reactjs-popup";
import {Redirect} from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Actions from "./../_actions/"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            trade: "",
            tradeRedirect: false,
            messageToShow: undefined
        };
    }


    componentWillMount() {
        !this.props.booksReducer.books ? this.props.sendBook() : null
        this.props.booksReducer.messageToShow ? this.setState({messageToShow: this.props.booksReducer.messageToShow})
        :
        null
    }

    render() {
        const{messageToShow} = this.state;
        return this.state.tradeRedirect ? <Redirect to={"/user/trade/" + this.state.trade } /> : (
            
            <div>
                <h1>Home</h1>
                
                <div>
                    {this.props.booksReducer.books ?
                        this.props.booksReducer.books.map(user => {
                            return (
                                <div>

                                    <h3> {user.book.name} </h3>
                                    <p><em>{user.book.author}</em></p>
                                    <p>{user.book.description}</p>
                                    <p>Post by: {user.username}</p>
                                    <Popup trigger={<button>I want it</button>} position="right center">
                                        <div>
                                            <h3>This book is own by {user.username}</h3>
                                            <p>
                                                Choose a book to trade with ...
                                                </p>
                                            <div>
                                            <button onClick={() => this.setState({tradeRedirect: true, trade: user.book._id})}>Choose a book</button>
                                                

                                                <button>Cancel</button>
                                            </div>
                                        </div>
                                    </Popup>
                                </div>
                            )
                        })
                        :
                        null}
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return { ...state };
};

const mapDispatchToProps = dispatch => bindActionCreators({
        sendBook: () => (Actions.booksActions.fetchBook()),
        booksToTrade: () => Actions.booksActions.booksToTrade()
},
dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(Home);