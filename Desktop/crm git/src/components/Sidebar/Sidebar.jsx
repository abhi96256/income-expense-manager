import React from "react";

const Sidebar = ({ menuItems, onClickMenu, selectedMenu }) => {
  return (
    <div className="sidebar">
      {menuItems.map((menu, index) => (
        <div key={index}>
          <div
            className={`menu-title ${selectedMenu === index ? "active" : ""}`}
            onClick={() => onClickMenu(menu, index)}
          >
            {/* Render the icon and text */}
            <div className="menu-icon">{menu.icon}</div> {/* Icon */}
            <div className="menu-text">{menu.name}</div> {/* Text */}
          </div>
          {/* Add a blue line separator after each menu item except the last one */}
          {index !== menuItems.length - 1 && <div className="menu-separator"></div>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;