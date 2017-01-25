import React, { Component, PropTypes } from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Room extends Component {

    render () {
        var room = this.props.room;

        return (
                <ListGroupItem href="#">
                    <span>{room.Name}</span>
                    <span> ({room.MembersCount})</span>
                </ListGroupItem>
        )
    }
}

Room.propTypes = {
    room: PropTypes.shape({
            Id: PropTypes.number.isRequired,
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string,
            MembersCount: PropTypes.number.isRequired
    })
}

export default Room;