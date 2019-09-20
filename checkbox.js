import React from "react";

export default function CheckBox(props) {
  return (
    <div>
      <label>
        <input type={props.type} value={props.value} className={props.className} onChange={props.onChange} />
        {props.value}
      </label>
    </div>
  );
}