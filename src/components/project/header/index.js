import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import './style.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const Nav = (props) => {
  const [show, setShow] = useState(false)
  const [value, setValue] = useState()
  return (<>
    <section className="navbar-bg">
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="d-flex">
            <a className="navbar-brand unGrm newUnderLine p-0 m-0" href="#">{props.Object.UnderLineTitle}</a>
            <a className="navbar-brand unGrm p-0 m-0" href="#">{props.Object.Title}</a>
          </div>
          <button onClick={() => {
            setShow(!show)
          }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? ("show") : ("")}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
              
              {props.Object.ListOfTabs.map((val, index) => {
               
                return (
                  <li key={index} className="nav-item">
                    <Link to={val.url} className={val.active == true ? ("nav-link active") : ("nav-link")   }>{val.title}</Link>
                  </li>
                )
              })}
               
            </ul>
            <form className={`d-flex ${props.Object.buttonActive ? "" : "d-none"}`}>
              <button className={props.Object.firstButton.className} type="submit"><b>{props.Object.firstButton.name}</b></button>
              <PhoneInput
                className="phoneInputStyle"
                defaultCountry="GB"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}/>
            </form>
          </div>
        </div>
      </nav>
    </section>
    </>)
}

export default Nav