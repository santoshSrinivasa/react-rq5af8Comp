import React from "react";

export default function InputBox(props){
  return (
    <input type="text" className="marginLevel" onChange={props.onChange} />
  );
}