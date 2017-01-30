import React, { Component, PropTypes } from 'react'
import { InputGroup, FormGroup, Button, FormControl } from 'react-bootstrap';

class RoomDetails extends Component {

    render () {
        return(
            <FormGroup>
                <h3>ROOM DETAILS</h3>
                <InputGroup>
                    <FormControl type="text" />
                    <InputGroup.Button>
                        <Button>Delete</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        )
    }
}

export default RoomDetails;