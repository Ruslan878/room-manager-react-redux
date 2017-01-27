import React, { Component, PropTypes } from 'react';
import { ListGroupItem, ButtonToolbar, Button } from 'react-bootstrap';

class Member extends Component {

    render () {
        var member = this.props.member;
        var onClick = this.props.onClick;
        var onDelete = this.props.onDelete;

        return (
                <ListGroupItem href="#" onClick={onClick} >
                    <span>{member.Order}. </span>
                    <span>({member.Name}) </span>
                    <span>({member.Room.Name}) </span>
                    <Button bsStyle="primary" bsSize="xsmall" onClick={onDelete}>Delete</Button>
                </ListGroupItem>
        )
    }
}

Member.propTypes = {
    member: PropTypes.shape({
            Id: PropTypes.number.isRequired,
            Name: PropTypes.string.isRequired,
            Order: PropTypes.number.isRequired,
            Room: PropTypes.shape({
                Id: PropTypes.number.isRequired,
                Name: PropTypes.string.isRequired,
                Description: PropTypes.string,
                MembersCount: PropTypes.number.isRequired
            }).isRequired
    }),
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Member;