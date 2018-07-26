import React, {Component} from "react" 
//Components
import AddBook from './add-book'
import EditBooks from './edit-books'

class HomeDash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusOn:  (num) => {
                switch (num) {
                    case 1: 
                        return <AddBook />
                    case 2:
                        return <EditBooks />
                    default: 
                        return <AddBook />
                }
                
            },
            focusOnNum: 1
          
        }
        
    }
    
    render() {
       console.log(this.dashboard)
        return(
            <div>
                 <label>Your Books</label>
                <button onClick={() => this.setState({focusOnNum: 1})}>Add</button>
                <button onClick={() => this.setState({focusOnNum: 2})}>Edit</button>
                {this.state.focusOn(this.state.focusOnNum)}
            </div>
        )
    }
}

export default (HomeDash)
