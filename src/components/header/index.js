import React from 'react';

import "./style.css"
import MainHero from '../../assets/MainHere.jpg'
import MainHero2 from '../../assets/mainHere2.jpg'

const header = props => (
  <React.Fragment>
    <header>
      <section className="container main-here-container">
        <div className="row">
          
          <div className="col-12 col-lg-6 header-lift-side d-flex justify-content-center flex-column align-items-start">
            <h1 className="display-2">
              Online Payment Mode <br /> Easy For You.
            </h1>
            <p className="main-here-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <h3>Get early access for you</h3>
            <div className="input-group mt-3">
                <input placeholder="Enter Your Email" type="text" className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text" />
                <div className="input-group-button">
                  Get it Now
                </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-item-center main-here-section-images">
            <img src={MainHero} className="img-fluid"/>
            <img src={MainHero2} className="img-fluid main-here-img2"/>
          </div>
        </div>
      </section>
    </header>
  </React.Fragment>
);

export default header;
