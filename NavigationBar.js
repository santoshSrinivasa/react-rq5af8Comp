import React from 'react';
import {
  Route,
  Link,
  BrowserRouter,
  Switch
} from "react-router-dom";

export default class NavigationBar extends React.Component {
render(){
  return (
    <div>
    <ul>
    <li><Link to="/searchOptions">Search Options</Link></li>
    <li><Link to="/ean">EAN</Link></li>
    <li><Link to="/customerInfo">Customer Info</Link></li>
    <li><Link to="/priceMap">Price Map</Link></li>
    </ul>
    </div>
  );
}

}
