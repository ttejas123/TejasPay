import React from 'react'
import { Card } from 'reactstrap';
import './style.css'
import ValidationF from '../ValidationForm'
import img from '../../../assets/bgimg.png'
const App = () => {

  return (
        <div className="row ">
          <div className="col-12 col-lg-6 d-flex justify-content-center mb-5 mb-lg-0">
            <img src={img} className="img-fluid col-9 col-lg-10 " />
          </div>
          <Card className='col-12 col-lg-6 bg-transparent formSection d-flex justify-content-center align-item-center'>
          
            <ValidationF />
          </Card>
        </div>
       );
}

export default App;
