import React from 'react'
import ReactDOM from 'react-dom'
import logo512 from './logo512.png'




//JSX'teki stiller
const headerStyle = {
  backgroundColor : 'lightskyblue',
  fontFamily : 'Helvetica Neue',
  padding : 25
}


const jsxElement = <h1>This is a JSX element</h1>
const title = <h2>Getting Started React</h2>

//JSX öğelerine veri ekleme
const ufuk = "Ufuk Yetişkin"
const tech = ["HTML", 'CSS/Tailwind, Boostrap', 'JavaScript/ React']
//tech dizisini map metodu ile listeledik li elementine sararak
const mapTech = tech.map((eleman, index) => <li key={index}>{eleman}</li>)

//Yerel tarihi alma Date fonksiyonundan
const today = new Date().toLocaleDateString()


const header = (
  <header style={headerStyle}>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>{ufuk}</p>
    <small>{today}</small>
  </header>
)
const mainStyle = {
  backgroundColor : 'orange',
}



// JSX element, main
const main = (
  <main style={mainStyle}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      {mapTech}
    </ul>
  </main>
)

const footerStyle = {
  backgroundColor : 'lightskyblue'
}

// JSX element, footer
const footer = (
  <footer style={footerStyle}>
    <p>Copyright 2020</p>
  </footer>
)

//Exercises Level 2
const subscribeStyle = {
  backgroundColor : 'lightskyblue',
  alignItems : 'center',
  alignContent : 'center',
  justifyContent : 'center'
}
const inputStyles = {
  margin : '10px',
  padding : '10px',
  border : '1px solid lightskyblue',
  borderRadius : '10px'
}
const subscribe = (
  <div style={subscribeStyle}>
    <h1 style={{marginLeft : '42%'}}>SUBSCRIBE</h1>
    <p style={{marginLeft : '38%'}}>Sign up with your email address to receive news and update </p>
    <div style={{marginLeft : '30%'}}>
      <input style={inputStyles} type="text" placeholder='First Name' />
      <input style={inputStyles} type="text" placeholder='Last Name' />
      <input style={inputStyles} type="mail" placeholder='email' /><br></br>
    </div>
    <button  style={{marginLeft:'37%', padding : '8px',marginBottom: '1%', backgroundColor:'salmon', border: '1px solid salmon', width:'20%', borderRadius : '10px'}}>Subscribe</button>
  </div>
)

//Exercises Level 3
const liStyle = {
  padding : '10px',
  backgroundColor : 'lightskyblue',
  marginLeft : '2%',
  marginTop : '1%',
  borderRadius : '10px'
}
const listStyle = {
  listStyleType : 'none',
  display : 'flex',
  flexWrap : 'wrap' 
}
const skills = ['Jango','NumPy','Pandas','Data Analysis','HTML', 'CSS', 'SASS', 'JS', 'Redux', 'Node', 'MongoDB', 'MYSQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git', 'Pyhton', 'Flask']
const listSkills = skills.map((element, index) => <li style={liStyle} key={index}>{element}</li>)
const profile = (
  <div>
    <div style={{marginLeft : '2%'}}>
    <div >
      <img style={{width : "100px"}} src={logo512}></img>
    </div>
    <div>
      <div><strong>{ufuk}</strong></div>
      <p>Junior Developer, Turkey</p>
    </div>
    </div>
    <h3 style={{marginLeft : '2%'}}>SKILLS</h3>
    <ul style={listStyle}>
      {listSkills}
    </ul>
    <p>Joined on {today}</p>
  </div>
)

const app = (
  <div>
    {header}
    {main}
    {subscribe}
    {profile}
    {footer}
  </div>
)


  

const rootElement = document.getElementById('root')

{/*ReactDOM.render([header, main, footer], rootElement)*/}
ReactDOM.render(app, rootElement)