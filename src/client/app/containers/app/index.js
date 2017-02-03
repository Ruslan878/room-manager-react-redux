import React, { Component } from 'react'
import PageHeader from "react-bootstrap/lib/PageHeader";
import Container from "../../components/container";

export default class App extends Component {
  render() {
    return (
      <div>
        <PageHeader>Room Manager</PageHeader>
        <Container>
                {this.props.children}
        </Container>
      </div>
    )
  }
}