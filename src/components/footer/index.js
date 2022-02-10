import React from 'react';
import Link from './Links.js'
import styles from './styles.module.css';
import MainFooter from './mainFooter.js'
import Register from './register.js'
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
        <>
        
        <Register />
        <MainFooter />
        </>
      )
};

export default footer;