import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Card, CardBody } from 'reactstrap';
import { Hero } from './dataFile.js'
import './App.css'

const App = () => {

  return (
      
        <div className="container h-75 d-flex justify-content-center flex-column align-item-center">
          <Hero />
        </div>
     
       );
}

export default App;
