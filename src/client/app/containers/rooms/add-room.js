import React, { Component } from 'react'
import { InputGroup, Form, FormGroup, Button, FormControl } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import actions from '../../actions/room-actions'

class AddRoom extends Component {
    onAddRoom = (e) => {
        e.preventDefault();
        let roomName = e.target.elements[0].value;
        this.props.actions.create({Name: roomName, id: 0 });
         e.target.elements[0].value="";
    }

    render () {
        return(
            <Form onSubmit={this.onAddRoom}>
                <FormGroup>
                    <InputGroup>
                        <FormControl type="text" />
                        <InputGroup.Button>
                            <Button type="submit">Add</Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>            
            </Form>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions , dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRoom);