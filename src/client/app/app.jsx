import { render } from "react-dom";
import Container from "./components/container/container";
import { Row } from 'react-bootstrap';
import PageHeader from "react-bootstrap/lib/PageHeader";
import RoomsList from "./components/rooms";
import MembersList from "./components/members";
import Login from "./components/login";

var all_rooms = [
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

var all_mambers = [
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

const App = () => (
    <div>
        <PageHeader>Room Manager</PageHeader>
        <Container>
            <Row>
                <MembersList members = {all_mambers}/>
                <RoomsList rooms = {all_rooms} onRoomClick = {function(i){var t=i}}/>
            </Row>
        </Container>
    </div>
);

render(<App />, document.getElementById("app"));