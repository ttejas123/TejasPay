import React from 'react';
import Link from './Links.js'
// import styles from './styles.module.css';
import './index.css'

const footer = props => {
  const header = "About Us"
  const Links = [{
    name: "Pay Info",
    url: "/"
  }, {
    name: "Builder Info",
    url: "/"
  }, {
    name: "Server Info",
    url: "/"
  }, {
    name: "Operation Info",
    url: "/"
  }]

  return (
        <div className="FooterFix">
          

          <div class="container">

            <ul class="list-unstyled list-inline text-center ">
              <li class="list-inline-item">
                <h3 class="">Register for free</h3>
              </li>
              <li class="list-inline-item ms-3">
                <a className="  text-center bg-transparent text-success font-weight-bold" type="submit">Sign Up!</a>
              </li>
            </ul>

            <div class="footer-copyright text-center py-3">© 2022 Copyright:
              <a className="text-dark" href="locahost:3000/"> ungrammary.com</a>
            </div>

          </div>
        </div>
      )
};

export default footer;