import React from 'react';

import styles from './styles.module.css';
import Tejas from '../../assets/1.jpg'

const card = props => (
  <>
  {console.log(props)}
        <div className="card" style={{width: "18rem"}}>
          <img src={props.Image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.Name}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
  </>
);

export default card;
