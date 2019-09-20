import React from "react";

export default function CheckBox(props){
  return(
    <input type="checkbox" value={props.value} className={props.className} onChange={props.onChange}/>
  );
}