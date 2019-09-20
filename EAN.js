import React from "react";
import NavigationBar from "./NavigationBar";
import styled from 'styled-components';
import axios from 'axios';

export default class EAN extends React.Component
{
  state = {
    persons: []
  }
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  render()
  {
     return (
      <div>
      <NavigationBar />
      <Message>EAN Page</Message>
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
      </div>
    );
  }
}

const Message = styled.h3`
text-align: center;
`;
