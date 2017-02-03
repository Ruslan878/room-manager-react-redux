import React, { Component, PropTypes } from 'react'
import { Form, InputGroup, FormGroup, Button, ButtonToolbar, 
    ButtonGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';

class RoomDetails extends Component {

    render () {
        return(
            <Col mdOffset={4} md={4}>
                <Form horizontal>
                    <FormGroup>
                        <InputGroup>
                            <h3>ROOM DETAILS</h3>
                            <InputGroup.Button>
                                <Button bsStyle="danger" onClick={this.props.onDelete}>Delete</Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} md={3}>
                            Name: 
                        </Col>
                        <Col md={9}>
                            <FormControl type="text" />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} md={3}>
                            Description: 
                        </Col>
                        <Col md={9}>
                            <FormControl componentClass="textarea" />
                        </Col>
                    </FormGroup>
                     <ButtonToolbar>
                        <Button onClick={this.props.onGoBack}>Go Back</Button>
                        <Button onClick={this.props.onSave}>Save</Button>
                    </ButtonToolbar>
                </Form>
            </Col>
        )
    }
}

RoomDetails.propTypes = {
    onGoBack: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default RoomDetails;