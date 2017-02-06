import React, { Component, PropTypes } from 'react'
import { Form, InputGroup, FormGroup, Button, ButtonToolbar, 
    ButtonGroup, FormControl, Col, ControlLabel } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { goBack } from 'react-router-redux'
import actions from '../../actions/room-actions'

class RoomDetails extends Component {
    componentWillMount (){
        this.props.actions.fetchOne(this.props.id);
    }

    onSave = (e) => {
        e.preventDefault();
    }

    onDelete = (e) => {
        e.preventDefault();
        
    }

    onGoBack = (e) => {
        this.props.goBack();
    }


    render () {
       
        return(
            <Col mdOffset={4} md={4}>
                <Form horizontal>
                    <FormGroup>
                        <InputGroup>
                            <h3>ROOM DETAILS</h3>
                            <InputGroup.Button>
                                <Button bsStyle="danger" onClick={this.onDelete}>Delete</Button>
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
                        <Button onClick={this.onGoBack}>Go Back</Button>
                        <Button onClick={this.onSave}>Save</Button>
                    </ButtonToolbar>
                </Form>
            </Col>
        )
    }
}

function mapStateToProps(state,ownProps) {
  return {
    id: ownProps.params.id
  }
}

function mapDispatchToProps(dispatch) {
  return { goBack: bindActionCreators(goBack , dispatch),
           actions: bindActionCreators(actions , dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomDetails);