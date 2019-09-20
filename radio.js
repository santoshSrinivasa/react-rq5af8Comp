import React from "react";

export default function Radio(props){
  return(
    <input type={props.type} defaultChecked={props.defaultChecked} name={props.name} value={props.value} onChange={props.onChange}/>
  );
}

