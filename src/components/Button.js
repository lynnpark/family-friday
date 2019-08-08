import React from "react";

export default function Button(props) {
  return (
    <button aria-label={props.label} onClick={props.onClick}>
      {props.title}
    </button>
  );
}
