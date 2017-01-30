import React, { Component, PropTypes }  from 'react';
import Room from '../room';
import AddRoom from './add-room';
import { ListGroup, Col } from 'react-bootstrap';

class RoomsList extends Component {

    render () {
        var rooms = this.props.rooms;
        var onRoomClick = this.props.onRoomClick;

        var roomsTemplate = rooms.map(room =>
                <Room key={room.Id} room={room} onClick={function(){}} />
        );

        return (
            <Col md={4}>
                <h2>Rooms</h2>
                <AddRoom/>
                <ListGroup>
                    {roomsTemplate}             
                </ListGroup>
            </Col>
        )
    }
}

RoomsList.propTypes = {
        rooms: PropTypes.array.isRequired,
        onRoomClick: PropTypes.func.isRequired
}

RoomsList.defaultProps = {
      rooms: []
}

export default RoomsList;