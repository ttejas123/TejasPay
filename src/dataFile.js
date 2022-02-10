import NavBar from './components/navbar'
import Fotter from './components/footer'

import Slider from './components/slider'
import Header from './components/header'

let Data;
export default Data = {
  Title: "Kuch To Hoga", 
  ListOfTabs: [
    {
      title: "Home",
      url: "/home",
      active: window.location.pathname == '/home' ? true : false
    },
    {
      title: "About Us",
      url: "/about",
      active: window.location.pathname == '/about' ? true : false
    },
    {
      title: "Contact Us",
      url: "/contact",
      active: window.location.pathname == '/contact' ? true : false
    },
    {
      title: "Notification",
      url: "/notific",
      active: window.location.pathname == '/notific' ? true : false
    }
  ],
  buttonActive: true,
  firstButton: {
    name: "Sign Up",
    url: "/"
  },
  secondButton: {
    name: "Sign In",
    url: "/"
  }
}


export { NavBar, Fotter, Slider, Header };