import React from 'react';
import ReactDOM from 'react-dom';

import TejasKaData, { NavBar, Fotter, Slider, Header } from './dataFile.js'
import './index.css'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


ReactDOM.render(<>
  <Router>
          <div className="App">
            <NavBar Object = {TejasKaData} />
            <Routes>
                 <Route exact path='/' element={<Header />}></Route>
                 <Route exact path='/home' element={<Header />}></Route>
                 <Route exact path='/about' element={< Slider />}></Route>
            </Routes>
          </div>
  </Router>
  <Fotter />
  </>, document.getElementById('root'));