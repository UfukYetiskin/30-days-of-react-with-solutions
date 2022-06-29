import React from 'react'
import ReactDOM from 'react-dom'
import {useRouteMatch} from 'react'
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Routes, NavLink } from 'react-router-dom'

//Redirect
/*
Yönlendirme, bazı koşullara dayalı olarak bir rotayı belirli bir 
yola yönlendirmemize yardımcı olabilir. Örneğin, bir kullanıcı 
oturum açtıysa, onu gösterge panosuna, aksi takdirde oturum açma 
sayfasına yönlendiririz. 
*/


//Nesting 
//bir rotayı nasıl yuvalayabileceğimizi görelim. React'te iç içe bir rotaya sahip olmak mümkündür.
const NestingExample = (props) =>{

    return(
        <div>
            <div>
            <ul>
            <li>
                <NavLink to='/topic'>Topic</NavLink>
            </li>
            <li>
                <NavLink to='/topics'> Topics</NavLink>
            </li>
        </ul>
                <Routes>
                    <Route  path='/topic' element={<Topic/>}/>
                    <Route  path='/topics' element={<Topics/>}/>
                </Routes>
            </div>
        </div>
    )
}

function Topics(props){
    return(
        <div>
            <h1>Topics</h1>
        </div>
    )
}

function Topic(props){
    return(
        <div>
            <h1>Topic</h1>
        </div>
    )
}


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
        <li>
            <NavLink to='/nesting'>Topics</NavLink>
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
                <Route path='/nesting' element={<NestingExample/>} />
                <Route path='/' element={<Home/>} />
                {/* Rotamız ve navigasyonumuz, rota bulunduğu sürece kusursuz çalışır. Ancak bir rota bulunamazsa son bileşene düşer. Bu sorunu önlemek için ayrı bir bulunamayan bileşen oluşturalım ve onu yönlendirmemizin içine koyalım. */}
                <Route element={<NotFound/>} />
              </Routes>
            </div>
          </Router>
        )
      }
}
