import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Routes, NavLink } from 'react-router-dom'





// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (<h1>Challenges</h1>)
const NavBar = (props) => (
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink to='/challenges'>Challenges</NavLink>
        </li>
    </ul>
)

const NotFound = (props) =>  <h1>The page your looking for not found</h1> 



export default class ReactRoter extends React.Component {
    render() {
        return (
          <Router>
            <div className='App'>
              
              {/*
              <ul>
                <li>
                  <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                  <NavLink to='/about'>About</NavLink>
                </li>
                <li>
                  <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                  <NavLink to='/challenges'>Challenges</NavLink>
                </li>
              </ul>
              */}
              
              {/* NavBar Componenti oluşturduk ve içerisine istenilen HTML yapısını oluşturduk. */}
              <NavBar />

              <Routes>
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/challenges' element={<Challenges/>} />
                <Route path='/' element={<Home/>} />
                {/* Rotamız ve navigasyonumuz, rota bulunduğu sürece kusursuz çalışır. Ancak bir rota bulunamazsa son bileşene düşer. Bu sorunu önlemek için ayrı bir bulunamayan bileşen oluşturalım ve onu yönlendirmemizin içine koyalım. */}
                <Route element={<NotFound/>} />
              </Routes>
            </div>
          </Router>
        )
      }
}
