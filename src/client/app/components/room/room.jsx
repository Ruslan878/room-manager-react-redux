import React, { Component, PropTypes } from 'react';
import {ListGroupItem} from 'react-bootstrap';

class Room extends Component {

    render () {
        var room = this.props.room;
        var onClick = this.props.onClick;
        var selected = this.props.selected;

        return (
                <ListGroupItem href="#" onClick={onClick} active={selected}>
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
    }),
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
}

Room.defaultProps = {
      selected: false
}

export default Room;