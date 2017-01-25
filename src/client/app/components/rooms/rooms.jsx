import React, { Component, PropTypes }  from 'react';
import Room from '../room/Room';
import { ListGroup, Col } from 'react-bootstrap';

class RoomsList extends Component {

    render () {
        var rooms = this.props.rooms;
        var roomsTemplate = rooms.map(function(room, index){
            return (
                <Room key={room.Id} room={room} />
            )
        });

        return (
            <Col md={4}>
                <ListGroup>
                    {roomsTemplate}             
                </ListGroup>
            </Col>
        )
    }
}

RoomsList.propTypes = {
        rooms: PropTypes.array.isRequired
}

RoomsList.defaultProps = {
      rooms: []
}

export default RoomsList;