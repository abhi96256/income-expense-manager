import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ placeholder, searchTerm, onSearchChange }) => {
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">E-manual</div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          id="search"
          placeholder={placeholder}
          value={searchTerm}
          onChange={onSearchChange}
        />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
