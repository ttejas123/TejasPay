import React from 'react'
import { Card } from 'reactstrap';
import './style.css'
import ValidationF from '../ValidationForm'
import img from '../../../assets/bgimg.png'
const App = () => {

  return (
        <div className="row">
          <div className="col-12 col-lg-6">
            <img src={img} className="img-fluid imgField" />
          </div>
          <Card className='col-12 col-lg-6 bg-transparent formSection'>
          
            <ValidationF />
          </Card>
        </div>
       );
}

export default App;
