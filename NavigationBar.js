import React from 'react';
import {
  Route,
  Link,
  BrowserRouter,
  Switch
} from "react-router-dom";
import styled from 'styled-components';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <UnorderedList>
          <ListItem><Link to="/searchOptions">Search Options</Link></ListItem>
          <ListItem><Link to="/ean">EAN</Link></ListItem>
          <ListItem><Link to="/customerInfo">Customer Info</Link></ListItem>
          <ListItem><Link to="/priceMap">Price Map</Link></ListItem>
        </UnorderedList>
      </div>
    );
  }
}

const UnorderedList = styled.ul`
  list-style-type:none;
  text-decoration:none;
  display: flex;
`;

const ListItem = styled.li`
  height:50px;
  border: 1px solid;
  background-color: rebeccapurple;
  list-style-type:none;
  text-decoration:none;
  display: flex;
`;


