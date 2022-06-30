import React from 'react'
import ReactDOM from 'react-dom'
import { Switch , useRouteMatch } from 'react'
import {Route,Routes, NavLink, Outlet, useParams} from 'react-router-dom'



const Home = () => <h1>Home</h1>
const Contact = () => <h1>Contact</h1>


//Nested
//bir rotayı nasıl yuvalayabileceğimizi görelim. React'te iç içe bir rotaya sahip olmak mümkündür.
const AboutLayout = () => (
    <div>
        <h1>About Us</h1>
        <Outlet/>
    </div>
)

const About = () => (<h6>About sayfası</h6>)

const Vizyon = () => (
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
)

const Misyon = () => {
    //use params ile url'yi alabiliriz.
    const {url} = useParams() 
    return(
        <div>
            <h1>Misyon</h1>
            misyon page = {url}
        </div>
    )
}
//404 yazdırmak için
const Page404 = () => {
    return(
        <div>
            <h4>Sayfa bulunamadı.</h4>
            <NavLink  to='/'>Anasayfaya dön</NavLink>
        </div>
    )
}

export default class ReactRoter extends React.Component {
    render() {
        return (
          <div>
            <ul style={{display: 'flex', listStyleType: 'none'}}>
                <li style={{ marginLeft: '1%'}} >
                    <NavLink to='/' >Home</NavLink>
                </li>
                <li style={{ marginLeft: '1%'}} >
                    <NavLink to='/contact' >Contact</NavLink>
                </li>
                <li style={{ marginLeft: '1%'}} >
                    <NavLink to='about' >About</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path = '/contact' element={<Contact/>} />
                <Route path = '/about' element={<AboutLayout/>}>
                    <Route index={true} element={<About/>} />
                    <Route path='vizyon' element={<Vizyon/>} />
                    {/* <Route path='misyon/:url' element={<Misyon/>} />  yazarsak url'e yönlendirir bizi. Bu url almak için ise useParams hookunu kullanabiliriz. */}
                    <Route path='misyon/:url' element={<Misyon/>} />
                </Route>
                {/* 404 almak için, yani eşleşen bir sayfa yoksa 404 göstermek istersek. */}
                <Route path='*' element={<Page404/>} />
            </Routes>
          </div>
        )
    }
}
