import React, { Component } from 'react'
import { InputGroup, FormGroup, Button, FormControl } from 'react-bootstrap';

class AddMember extends Component {

    render () {
        return(
            <FormGroup>
                <InputGroup>
                    <FormControl type="text" />
                    <InputGroup.Button>
                        <Button>Add</Button>
                    </InputGroup.Button>
                </InputGroup>
            </FormGroup>
        )
    }
}

export default AddMember;