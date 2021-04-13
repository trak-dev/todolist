import React from "react";
//stateless component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-muted ">
      <a className="navbar-brand" href="#">
        Navbar {""}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};
export default NavBar;
