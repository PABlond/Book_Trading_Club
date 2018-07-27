import React, { Component } from 'react'
import { Redirect } from "react-router"
import Select from 'react-select';
import { bindActionCreators } from 'redux';
import ConfirmedTrade from "./confirmed-trade"
import ReactTimeout from 'react-timeout'


import { connect } from 'react-redux';
import Actions from './../_actions/'

class Trade extends Component {
    constructor(props) {
        super(props);
        const id = document.location.pathname.split("/")[document.location.pathname.split("/").length - 1];
        this.state = {
            id,
            tradeWith: "",
            isConfirmedTrade: false,
            selectedOption: null,
            options: [],
            message: undefined,
            isConfirmedTrade: false,
            messageToShow:undefined
        };
        this.submitTrade = this.submitTrade.bind(this)
    }

    componentWillMount() {
        !this.props.booksReducer.mybooks ? this.props.fetchUserBooks() 
        : 
        (this.props.booksReducer.mybooks.map(book => {
            const {options} = this.state;
            options.push({value: book._id, label: book.name})
            return this.setState(options)
        }));
        this.props.booksReducer.books.length > 0 
        ?
            (
                this.props.booksReducer.books.map(user => {

                    return (
                        user.book._id == this.state.id
                            ?
                            this.setState({ tradeWith: user.username })
                            :
                            null
                    )
                })
            )
        :
            null;
        }

        redirect = () => {
            this.setState({isConfirmedTrade: true}),
            setTimeout(() => 
                (<Redirect to="/" />)
             , 5000); }
      

        submitTrade = (e) => {
            const redirect = () => {
                this.setState({isConfirmedTrade: true})
            }
            const {id, selectedOption, message} = this.state;
            this.props.sendTrade(id, selectedOption.value, message);
             
        }

        handleChange = (selectedOption) => {
            this.setState({ selectedOption });
          }

        handleMessageChange = (e) => {
            this.setState({message: e.target.value})
        }


    render() {
        console.log(this.props)
        const {  id, message, selectedOption, options } = this.state;
        const {messageToShow} = this.props.booksReducer;
        return this.props.authReducer.token ?
            ( !this.state.isConfirmedTrade ?
                <div>
                    {messageToShow ?
                 (
                    messageToShow.map(message => {
                        return(
                            <div>
                                <p>{message}</p>
                            </div>
                        )
                    })
                )
            :
            null}
                    <h1>Make a trade with {this.state.tradeWith}</h1>
                    <div>
                        <label>Select a book :</label>
                        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
                        
                    </div>
                    <div>
                        <label>Add a note:</label>
                        <textarea value={this.state.message} onChange={this.handleMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={(id, selectedOption, message) => this.submitTrade(id, selectedOption, message)}>Trade</button>
                    </div>
                </div>
                :
                this.redirect()
                
            ) :
            (
                <Redirect to="/login" />
            )
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        fetchUserBooks: () => (Actions.booksActions.fetchUserBooks()),
        sendTrade: (idBook, idBookUser, message) => Actions.booksActions.sendTrade(idBook, idBookUser, message)
    },
    dispatch,
  )

export default ReactTimeout(connect(mapStateToProps, mapDispatchToProps)(Trade))
