import React, { Component, PropTypes }  from 'react'
import { Row, ListGroup, Col } from 'react-bootstrap'

import Room from '../room'
import AddRoom from './add-room'
import MembersList from '../members'


let all_rooms = [
  {
    "Id": 4,
    "Name": "Rest room 6 floor",
    "Description": "Large room",
    "MembersCount": 1
  },
  {
    "Id": 5,
    "Name": "Room 1009",
    "Description": "Large Rest room",
    "MembersCount": 1
  },
  {
    "Id": 1,
    "Name": "Room 101",
    "Description": "Small room",
    "MembersCount": 1
  },
  {
    "Id": 2,
    "Name": "Room 203",
    "Description": "Large room",
    "MembersCount": 1
  },
  {
    "Id": 3,
    "Name": "Room 406",
    "Description": "Meeting room",
    "MembersCount": 1
  }
];

let all_mambers = [
  {
    "Id": 4,
    "Name": "Ali Aliev",
    "Order": 1,
    "Room": {
      "Id": 4,
      "Name": "Rest room 6 floor",
      "Description": "Large room",
      "MembersCount": 1
    }
  },
  {
    "Id": 1,
    "Name": "Andrey Andreev",
    "Order": 1,
    "Room": {
      "Id": 1,
      "Name": "Room 101",
      "Description": "Small room",
      "MembersCount": 1
    }
  },
  {
    "Id": 3,
    "Name": "Olga Tsvetova",
    "Order": 1,
    "Room": {
      "Id": 3,
      "Name": "Room 406",
      "Description": "Meeting room",
      "MembersCount": 1
    }
  },
  {
    "Id": 2,
    "Name": "Petr Petrov",
    "Order": 1,
    "Room": {
      "Id": 2,
      "Name": "Room 203",
      "Description": "Large room",
      "MembersCount": 1
    }
  },
  {
    "Id": 5,
    "Name": "Tomas Tykver",
    "Order": 1,
    "Room": {
      "Id": 5,
      "Name": "Room 1009",
      "Description": "Large Rest room",
      "MembersCount": 1
    }
  }
];

class RoomsList extends Component {

    render () {
        var rooms = all_rooms;
        var onRoomClick = this.props.onRoomClick;

        var roomsTemplate = rooms.map(room =>
                <Room key={room.Id} room={room} onClick={function(){}} />
        );

        return (
            <Row>
                <MembersList members = {all_mambers}/>
                <Col md={4}>
                    <h2>Rooms</h2>
                    <AddRoom/>
                    <ListGroup>
                        {roomsTemplate}             
                    </ListGroup>
                </Col>
            </Row>
        )
    }
}

export default RoomsList;