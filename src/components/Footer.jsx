import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-transparent">
        <div className="container">
          <Link href="https://github.com/raqpoletto">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/raquel-poletto-dev/">
            <FaLinkedin />
          </Link>
          <span className="text-muted">Created by Raquel Poletto</span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
