import React from "react";
import Headeriteam from "../Headeriteam";

import "./header.css";

export default function Header(props) {
  return (
    <div className="menu">
      <ul>
        {props.todos.map((todo) => {
          <Headeriteam />;
        })}
      </ul>
    </div>
  );
}
