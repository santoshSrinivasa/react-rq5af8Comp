import React from "react";
import {connect} from "react-redux";

class ViewData extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <h3>{this.props.searchValueStore}</h3>
    );
  }
}


function mapStateToProps(state) {
  console.log(state);
  return { 
  searchValueStore : state.data.details,
 };
}


export default connect(mapStateToProps)(ViewData);
