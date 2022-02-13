import React, {useState} from 'react';
// import ReactFlagsSelect from 'react-flags-select';
// import 'react-phone-input-2/lib/material.css'
// import PhoneInput from 'react-phone-input-2'
import "./style.css"
import MainHero from '../../assets/MainHere.jpg'
import MainHero2 from '../../assets/mainHere2.jpg'


const Header = props => {
  const [value, setValue] = useState()
  const [selected, setSelected] = useState('')

  return (
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
      <div className="">
     
      {/*<PhoneInput
              country={'us'}
              value={value}
              placeholder="Enter mobile Number"
              specialLabel="Phone no"
              inputStyle={{
                padding : "1.5rem 0 1.5rem 5rem",
                width : "100%"
              }}
              
              onChange={phone => setValue(phone)}
            />*/}

      {/*<ReactFlagsSelect
              selected={selected}
              onSelect={code => setSelected(code)}
            />*/}
      
      </div>
      
    </header>
  </React.Fragment>
)
};

export default Header;
