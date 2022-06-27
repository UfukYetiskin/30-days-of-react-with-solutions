import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//----- React Router --------

// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact us</h1>
// Challenge component
const Challenges = (props) => (
  <div>
    <h1>30 Days Of React Challenge</h1>
  </div>
)
export default class ReactRoter extends React.Component {
    render() {
        return (
          <Router>
            <div className='App'>
              <Route exact path='/' component={Home} />
              <Route exact strict path='/about' component={About} />
              <Route exact strict path='/contact' component={Contact} />
              <Route exact strict path='/challenges' component={Challenges} />
            </div>
          </Router>
        )
      }
}
