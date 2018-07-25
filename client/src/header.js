import React, {Component} from 'react'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
<ul>
<li>
  <a href="/">Home</a>
</li>

{ !this.props.authReducer.token ? 
<span>
<li>
  <a href="/login">Login</a>
</li>
<li>
  <a href="/signup">Signup</a>
</li>
</span> : 
null
}
{ this.props.authReducer.token ? 
<li>
  <button onClick={this.props.actions.logout}>Logout</button>
</li>
:
""
}
</ul>
        )
    }
}

export default Header