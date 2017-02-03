import React, { Component, PropTypes } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Checkbox, Button, Col } from 'react-bootstrap';

class Login extends Component {

    render(){
        return (
            <Col mdOffset={3} md={6}>
                <Form horizontal onSubmit={this.props.handleSubmit}>
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

Login.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default Login;