/** @jsx jsx */

import { css, jsx } from "@emotion/core";

export default function Button(props) {
  const commonCss = `
    border: transparent;
    border-radius: 6px;
    text-transform: capitalize;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background: linear-gradient(to bottom,#8434d6 0%,#8434d6 100%);
    color: #fff;
    cursor: pointer;
    margin: 8px;
    &:hover {
      background: linear-gradient(to bottom,#9e5edf 0%,#9e5edf 100%);
    }
  `

  const cssOpts = {
    medium: `
      font-size: 18px;
      font-weight: 500;
      height: 48px;
      padding: 10px 25px;
    `,
    large: `
      font-size: 22px;
      font-weight: 800;
      height: 54px;
      padding: 12px 27px;
    `
  }

  return (
    <button
      aria-label={props.label}
      onClick={props.onClick}
      css={css`
        ${commonCss}
        ${cssOpts[props.size]}
      `}
    >
      {props.title}
    </button>
  );
}

Button.defaultProps = {
  size: "medium"
}
