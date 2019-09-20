import React from "react";
import NavigationBar from "./NavigationBar";
import styled from 'styled-components';

export default class PriceMap extends React.Component
{
  render()
  {
    return  (
      <div>
      <NavigationBar />
      <Message>Price Map Page</Message>
      </div>
    );
  } 
}

const Message = styled.h3`
text-align: center;
`;
