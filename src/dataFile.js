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
      url: "/aboutus",
      active: window.location.pathname == '/aboutus' ? true : false
    },
    {
      title: "Solution",
      url: "/solution",
      active: window.location.pathname == '/solution' ? true : false
    },
    {
      title: "Global Network",
      url: "/global-network",
      active: window.location.pathname == '/global-network' ? true : false
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