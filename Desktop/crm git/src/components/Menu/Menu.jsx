import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const [showSubMenu, setShowSubMenu] = useState(true);

  return (
    <div>
      <div onClick={() => setShowSubMenu(!showSubMenu)} style={{ cursor: "pointer" }}>
        <Link to={props.path || "#"}>{props.name}</Link>
      </div>

      {props.subtopics && showSubMenu && (
        <div style={{ marginLeft: "25px" }}>
          {props.subtopics.map((subtopic, index) => (
            <Menu key={index} {...subtopic} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;