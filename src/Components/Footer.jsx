import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <footer>
        <p className="footer-copyright">
          <FontAwesomeIcon className="copyright-icon" icon={faCopyright} />{" "}
          <a href="#home">Easy Design UK, </a>
          All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
