import React, { Component, PropTypes } from 'react';
import {ListGroupItem, Badge, Button, Glyphicon, Row, 
        Col, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { goToDetails } from '../../actions/room-actions'

export class Room extends Component {

    goToDetails = () => {
        let roomId = this.props.room.Id;
        this.props.goToDetails(roomId);
    }

    render () {
        let room = this.props.room;
        let onClick = this.props.onClick;
        let selected = this.props.selected;
        const tooltip = (
            <Tooltip id="room-details"><strong> Go to details.</strong></Tooltip>
        );

        return (
                <ListGroupItem href="#" onClick={onClick} active={selected}>
                    <Row>
                        <Col md={6} mdOffset={2}>
                            <span>{room.Name}</span>
                        </Col>
                        <Col md={2}>
                            <Badge> ({room.MembersCount})</Badge>
                        </Col>
                        <Col md={2}>
                            <OverlayTrigger placement="right" overlay={tooltip}>
                                <Button bsSize={"xs"} onClick={this.goToDetails}><Glyphicon glyph="arrow-right" /></Button>
                            </OverlayTrigger>
                        </Col>
                    </Row>
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

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return { goToDetails: bindActionCreators(goToDetails, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)