import React from "react";

export default function Radio(props){
  return(
    <input type="radio" name={props.name} value={props.value} onChange={props.onChange}/>
  );
}

