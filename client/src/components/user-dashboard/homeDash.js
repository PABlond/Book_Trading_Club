import React, {Component} from "react" 
import { connect } from 'react-redux'
import Actions from './../../_actions/'
//Components
import AddBook from './add-book'
import EditBooks from './edit-books'

class HomeDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusOnNum: 1,
            showEdit: true
          
        }
        
    }
    
    

    render() {
       console.log(this.dashboard)
        return(
            <div>
                <button onClick={() => this.setState({showEdit:false})}>Add</button>
                <button onClick={() => this.setState({showEdit:true})}>Edit</button>
                {this.state.showEdit ? <EditBooks /> : <AddBook /> }
            </div>
        )
    }
}


export default (HomeDash)

