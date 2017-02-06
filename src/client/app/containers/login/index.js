import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { login } from '../../actions/user-actions'
import Login from '../../components/login'

export class LoginContainer extends Component {
    handleSubmit = (e) =>  {
        e.preventDefault();
        let user = {
                    Login: e.target.elements[0].value,
                    Password: e.target.elements[1].value
            }
        this.props.login(user);
    }

    render(){
        return (
            <Login handleSubmit={this.handleSubmit}/>
        )
    }
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return { login: bindActionCreators(login, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)