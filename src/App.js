import React from 'react'
import Slider from './components/slider'
import Header from './components/header'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

const App = () => {

  return (
        <Router>
          <div className="App">

            <Routes>
                 <Route exact path='/' element={<Header />}></Route>
                 <Route exact path='/home' element={<Header />}></Route>
                 <Route exact path='/about' element={< Slider />}></Route>
            </Routes>
          </div>
       </Router>
       );
}

export default App;
