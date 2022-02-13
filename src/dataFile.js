import NavBar from './components/navbar'
import Fotter from './components/footer'

import Slider from './components/slider'
import Header from './components/header'
import ProjectHeader from './components/project/header'
import Hero from './components/project/heroSection'
// import ValiDationForm from './components/ValidationForm'

import App from './App.js'
let Data;
export default Data = {
  UnderLineTitle: "un",
  Title: "grammary",

  ListOfTabs: [
    {
      title: "About us",
      url: "/",
      active: window.location.pathname == '/' ? true : false
    },
    {
      title: "Solution",
      url: "/",
      active: window.location.pathname == '/' ? true : false
    },
    {
      title: "Global Network",
      url: "/",
      active: window.location.pathname == '/' ? true : false
    }
  ],
  buttonActive: true,
  firstButton: {
    name: "Contact us",
    className: 'btn btn-outline btn-style',
    url: "/"
  },
  secondButton: {
    name: "Sign In",
    url: "/"
  }
}


export { NavBar, Fotter, Slider, Header, ProjectHeader, Hero, App };