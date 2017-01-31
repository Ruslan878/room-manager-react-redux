import React, { Component } from 'react'
import { Link } from 'react-router'
import { Col } from 'react-bootstrap'

export default class NotFound extends Component {
  render() {
    return (
        <Col md={12}>
            Страница не найдена. Вернуться на <Link to='/'>главную</Link>?
        </Col>
    )
  }
}
