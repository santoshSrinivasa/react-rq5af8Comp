import React from "react";
import NavigationBar from "./NavigationBar";
import styled from 'styled-components';
import axios from 'axios';
import Checkbox from "./checkbox";

export default class EAN extends React.Component {
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons:persons });
      })
  }
  render() {
    console.log(this.state.persons)
    return (
      <div>
        <NavigationBar />
        <Message>EAN Page</Message>
        <div>
        <ul>
        {this.state.persons.map(person=> <Checkbox type="checkbox" value={person.name} />)}
        </ul>
        <ul>
        {this.state.persons.map(person=> <Checkbox type="checkbox" value={person.username} />)}
        </ul>
        </div>
      </div>
    );
  }
}

const Message = styled.h3`
    text-align: center;
    `;
