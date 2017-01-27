import React, { Component, PropTypes }  from 'react';
import { ListGroup, Col } from 'react-bootstrap';

import Member from '../member/member';

class MembersList extends Component {

    render () {
        var members = this.props.members;
        var membersTemplate = members.map(member =>
                <Member key={member.Id} member={member} onClick={function(){}} onDelete={function(){}} />
        );

        return (
            <Col md={8}>
                <h2>Members</h2>
                <ListGroup>
                    {membersTemplate}             
                </ListGroup>
            </Col>
        )
    }
}

MembersList.propTypes = {
        members: PropTypes.array.isRequired
}

MembersList.defaultProps = {
      members: []
}

export default MembersList;