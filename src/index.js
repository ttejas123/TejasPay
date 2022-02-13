import React from 'react';
import ReactDOM from 'react-dom';

import TejasKaData, { NavBar, Fotter, Slider, Header, ProjectHeader } from './dataFile.js'
import './index.css'
import App from './App.js'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


ReactDOM.render(<>
  <Router>
    <div style={{height: "100%"}}>
      <ProjectHeader Object = {TejasKaData} />

    {/*Part Which Can Change In Middle of Site*/}

      <Routes>
        <Route path='/' exct element={<App />} />
        <Route path='/home' exct element={<App />} />
        <Route path='/aboutus' exct element={<App />} />
        <Route path='/contact' exct element={<></>} />
      </Routes>



      <Fotter />
    </div>
  </Router>



















  
  </>, document.getElementById('root'));