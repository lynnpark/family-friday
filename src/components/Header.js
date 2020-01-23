import React from "react";
import Logo from "./Logo"

export default function Header() {
  return (
    <div className="header">
      <div className="topNav">
        <Logo />
        <span>by Lynn Park</span>
      </div>
    </div>
  );
}
