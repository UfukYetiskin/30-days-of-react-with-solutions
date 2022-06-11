import React from 'react'
import ReactDOM from 'react-dom'




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

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
  

const rootElement = document.getElementById('root')

{/*ReactDOM.render([header, main, footer], rootElement)*/}
ReactDOM.render(app, rootElement)