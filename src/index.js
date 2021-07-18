import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Education from './Education';
import Profiency from './profiency';
import Project from './Project';
import Contact from './contact';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import { Fragment } from 'react';
import ScrollButton from './ScrollButton';
import { Content, Heading } from './Styles';


ReactDOM.render(
  <React.StrictMode>
    <Card />
    <Education />
    <Profiency/>
    <Project />
    <Contact/>
    <ScrollButton />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 // <Profiencies/>
 //    
 //    