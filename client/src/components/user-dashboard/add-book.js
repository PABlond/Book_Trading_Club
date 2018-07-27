import React, {Component} from "react" 
import { connect } from 'react-redux'
import Actions from './../../_actions/'

class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            author: "",
            description:""
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Handle change on inputs
    handleNameChange(e) {
        this.setState({name: e.target.value});
    }
    handleAuthorChange(e) {
        this.setState({author: e.target.value});
    }
    handleDescChange(e) {
        this.setState({description: e.target.value});
    }
    //Submit
    handleSubmit(event) {
        
        
        const {name, author, description} = this.state;
        this.props.sendBook(name, author, description);
        this.setState({redirect: true})
        
        }
      

    render() {
       console.log(this.props)
        return(
            <div>
                
               
                <div>
                <label>Name</label>
                <input type="text" value={this.state.name} onChange={this.handleNameChange} />
                </div>
                <div>
                <label>Author</label>
                <input type="text" value={this.state.author} onChange={this.handleAuthorChange} />
                </div>
                <div>
                <label>Description</label>
                <input type="text" value={this.state.description} onChange={this.handleDescChange} />
                </div>
                <div>
                <button onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state
   })
  
   const mapDispatchToProps = dispatch => ({
    sendBook: (name, author, description) => dispatch(Actions.booksActions.sendBook(name, author, description))
   })
  
export default connect(mapStateToProps, mapDispatchToProps)(AddBook)
