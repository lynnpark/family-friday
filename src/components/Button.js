import React from "react";

export default function Button(props) {
  return (
    <button className={props.size} aria-label={props.label} onClick={props.onClick}>
      {props.title}
    </button>
  );
}

Button.defaultProps = {
  size: "medium"
}
