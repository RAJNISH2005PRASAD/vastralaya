import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="" className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Rajnish Prasad</a>
            </p>
            <Link className="text-dark fs-4" href="https://github.com/RAJNISH2005PRASAD" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
