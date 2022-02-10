import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import styles from './styles.module.css';
const Nav = (props) => {
  useEffect(() => {

  }, [props])
  const [show, setShow] = useState(false)
  return (<>
    <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">{props.Object.Title}</a>
          <button onClick={() => {
            setShow(!show)
          }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? ("show") : ("")}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              {props.Object.ListOfTabs.map((val, index) => {
                console.log(val.url + " " + val.active )
                return (
                  <li key={index} className="nav-item">
                    <Link to={val.url} className={val.active == true ? ("nav-link active") : ("nav-link")   }>{val.title}</Link>
                  </li>
                )
              })}
               
            </ul>
            <form className={`d-flex ${props.Object.buttonActive ? "" : "d-none"}`}>
              <button className="btn  btn-style" type="submit">{props.Object.firstButton.name}</button>
              <button className="btn  secondChild" type="submit">{props.Object.secondButton.name}</button>
            </form>
          </div>
        </div>
      </nav>
    </section>
    </>)
}

export default Nav