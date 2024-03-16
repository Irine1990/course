import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">

      <nav id="menu">
        <ul className="animated-underline">
          <li className="nav-item mx-3">
            <Link to="/" className="nav-link active link-style" aria-current="page" href="#">  ALL</Link>
          </li>
          <li className="nav-item mx-3 link-style">
            <Link to="/fullstack" className="nav-link active" href="#">
              FULL STACK DEVELOPMENT
            </Link>
          </li>
          <li className="nav-item mx-3 link-style">
            <Link to="/datascience" className="nav-link active" href="#">
              DATA SCIENCE
            </Link>
          </li>
          <li className="nav-item mx-3 link-style">
            <Link to="/Cybersecurity" className="nav-link active" href="#">
              CYBER SECURITY
            </Link>
          </li>
          <li className="nav-item mx-3 link-style">
            <Link to="/career" className="nav-link active" aria-disabled="true">
              CAREER
            </Link>
          </li>
        </ul>
      </nav>



    </div>
  );
}
export default NavBar;