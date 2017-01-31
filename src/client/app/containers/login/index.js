import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Checkbox, Button, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UserActions from '../../actions/UserActions'

export class Login extends Component {
    handleSubmit(e) {
        e.preventDefault()
        this.props.actions.login({name: e.target.elements[0].value})
    }

    render(){
        return (
            <Col mdOffset={3} md={6}>
                <Form horizontal onSubmit={::this.handleSubmit}>
                    <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} md={4}>
                        Login
                    </Col>
                    <Col md={6}>
                        <FormControl type="text" placeholder="Login" />
                    </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} md={4}>
                        Password
                    </Col>
                    <Col md={6}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col mdOffset={4} md={6}>
                        <Checkbox>Remember me</Checkbox>
                    </Col>
                    </FormGroup>

                    <FormGroup>
                    <Col mdOffset={4} md={6}>
                        <Button type="submit">
                        Sign in
                        </Button>
                    </Col>
                    </FormGroup>
                </Form>
            </Col>
        )
    }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)