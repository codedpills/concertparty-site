import React from "react"
import "bootstrap-icons/font/bootstrap-icons.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              &copy; Concert Party {new Date().getFullYear()}. All rights
              reserved.
            </p>
          </div>
          <div className="col">
            <ul className="footer-links">
              <li>
                <a href="">
                  <i className="bi-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="bi-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
