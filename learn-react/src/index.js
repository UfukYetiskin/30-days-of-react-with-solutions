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


const Header = () => (
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

const Main = () => {
  return (
    <main style={mainStyle}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      {mapTech}
    </ul>
  </main>
  )
}


const footerStyle = {
  backgroundColor : 'lightskyblue'
}

// JSX element, footer
const Footer = () => (
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
const Subscribe = () => {
  return (
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
}


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
const Profile = () =>  (
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
//hexaColor bir fonksiyondur.
const hexaColor = () => {
  let str = '0123456789abcdef'
  let hexa = ''

  for(let i = 0; i <6 ; i++){
    //Bu kod içerisinde for döngüsü ile 6 kadar değer döndürürz. index değişkeni ile rastgele sayı üretiriz. Bu üretilen sayı ile str değişkeninin index değerine göre bir harf alırız ve bu sayede yeni bir hexa renk kodu üretiriz.
    const index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return '#' + hexa
}
//Yeniden kullanılabilir bir Düğme bileşeni yapın.
const Button = <button style={{backgroundColor : 'lightblue', padding: '10px', borderRadius: '10px'}}>Reusable Button</button>

//Yeniden kullanılabilir bir InputField bileşeni yapın.
const Input = <input 
                type='text' 
                placeholder='Write Something'
                style={{backgroundColor : 'lightblue', padding: '10px', borderRadius: '10px'}}
                />


// HexaColor adında bir component oluşturduk.
const HexaColor = () => {
  return (
    <div>
      {/* hexaColor fonksiyonunu component içersinde çağırdık.*/}
      <h3 style={{backgroundColor : 'lightblue',alignContent: 'center' , alignItems : 'center', justifyContent : 'center', justifyItems: 'center'}}>{hexaColor()}</h3>
      <h3 style={{backgroundColor : 'blue',alignContent: 'center' , alignItems : 'center', justifyContent : 'center', justifyItems: 'center'}}>{hexaColor()}</h3>
      <h3 style={{backgroundColor : 'orange',alignContent: 'center' , alignItems : 'center', justifyContent : 'center', justifyItems: 'center'}}>{hexaColor()}</h3>
    </div>
  )
}

const App = () =>(
  <div>
    <Header />
    <Profile></Profile>
    <Main></Main>
    <Subscribe></Subscribe>
    <HexaColor/>
    <Footer></Footer>
  </div>
)


  

const rootElement = document.getElementById('root')

{/*ReactDOM.render([header, main, footer], rootElement)*/}
ReactDOM.render(<App />, rootElement)