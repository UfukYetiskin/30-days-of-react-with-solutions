import React from 'react'
import ReactDOM from 'react-dom'
import reactLogo from './images/logo512.png'
import cssLogo from './images/css.png'
import htmlLogo from './images/html.png'
import jsLogo from './images/js.png'
import ClassComponents from './Components/ClassComponents'
import States from './Components/States'
import DogorCat from './Components/StateExample2'
import ConditionalRendering from './Components/ConditionalRendering'
import { useState } from 'react'



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


const today = new Date().toLocaleDateString()

//Yerel tarihi alma Date fonksiyonundan veri taşıyacağız
//Header componentine props ile 
const Header = (props) => {
  console.log(props) //{welcome: 'Welcome is props value'}
  return (
  <header style={headerStyle}>
    <h1>Welcome to 30 Days Of React</h1>
    <h1>We got this from props: {props.welcome}</h1>
    <h2>Getting Started React</h2>
    <h3>{props.framework}</h3>
    <p>{ufuk}</p>
    <small>{today}</small>
  </header>
  )
}
  

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
      <img style={{width : "100px"}} src={reactLogo}></img>
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
//Props
const getUserInfo = (firstName, lastName, country) =>{
  return `${firstName} ${lastName} ${country}`
}
//getUserInfo('Ümmühan', 'Yetişkin', 'Turkey')

const User = (props) => {
  return(
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}



//Bu componenti propsları app kapsayıcı componentinde değişken olarak tanımlayıp bu componente aktarmak için oluşturulmuştur
const GirlFriend = (props) => {
  //Boolean Props Type
  //status propsu ile eğer yaşı 18'den büyükse true dönecektir ve old enough yazısı çıkacaktır
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  
  //Array Props Type
  let listSkills = props.skills.map((skill) => <li key={skill}>{skill}</li>)
  return(
    <div>
      <h1>{props.firstName} {props.lastName}</h1>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <h3>{props.age}</h3>
      <h5>{props.weight}</h5>
      {/* props. ile tanımlanmamasının sebebi yukarıda let status içerisinde props.status olarak verinin alınması*/}
      <p>{status}</p>
      {/* Props ile Array veri türünde veri aktardık */}
      <ul>{listSkills}</ul>
    </div>
  )
}


const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const month = months[time.getMonth()].slice(0,3)
  const year = time.getFullYear()
  const date = time.getDate()
  return `${date} ${month} ${year}`
}



const ChildOfUs = (props) => {
  return (
    <div>
      {/* Obje türünden oluşturulan veri props ile aktarıldı.*/}
      <h1>{props.child.name}</h1>
      <h1>{props.child.surName}</h1>
      <h1>{props.child.title}</h1>
      <h2>{showDate(props.child.date)}</h2>
      {/* Fonksyionel props aktarımı örneği. Butona bastığımızda onClick metodu çalışacak  ve fonksiyonu çalıştıracak alert verecektir.*/}
      <button onClick={props.onClick}> {props.text}</button>
      <button onClick={props.onClick2}> {props.text2}</button>
    </div>
  )
}

//Day 5 Exercises Level 2
const imgStyle = {
  width : '15%',
  height : '15%',
  margin : '5%',
  backgroundColor : 'lightblue' 
}
const FrontendTechs = () => {
  return (
    <div style={{backgroundColor : 'lightblue'}}>
      <h1 style={{marginLeft: '40%'}}>Front End Technologies</h1>
      <div>
        <img style={imgStyle}  src={htmlLogo} />
        <img style={imgStyle} src ={cssLogo}></img>
        <img style={imgStyle} src ={jsLogo}></img>
        <img style={imgStyle} src ={reactLogo}></img>
      </div>
    </div>
  )
}
//Sayı dizisini eşleme
//const Numbers = ({numbers})  => {} bu da kullanılabilir
const Numbers = (props) => {
  const listNumber = props.numbers.map((number) => <li key={number}>{number}</li>)
  return listNumber
}

//Mapping array of arrays
const feskills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8]
]

//Mapping array of arrays
//Skill component
const Skill = ({skill : [tech, level]}) => {
  return(
    <div>
      <li>{tech} {level}</li>
    </div>
  )
}
//Skills component
const Skills  = ({skills}) => {
  const skillsList = skills.map((skill) => <Skill key={skill} skill={skill} />)
  console.log(skillsList)
  return skillsList
}

//Nesne dizisini eşleme
const countries = [
  {name: 'Turkey', city:'Diyarbakır'},
  {name: 'Finland', city:'Helsinki'},
  {name: 'Denmark', city:'Copenhagen'},
  {name: 'Norway', city:'Oslo'}
]

const Country = ({country : {name, city}}) => {
  return (
    <div>
      <span>Country: {name} </span>
      <span> City: {city}</span>
    </div>
  )
}

const Countries = ({countries}) => {
  const countryList = countries.map((country ,index) => <Country key={index} country={country}></Country>)
  return countryList
}

//Sixth Day of React  | Exercises Level 2

const GeneratorNumber = (props) => {
  console.log(props)
  const listNumbers = props.sayilar.map((sayi) => sayi % 2 === 0 ? <span style={{backgroundColor:'green', padding : '8%'}} key={sayi}>{sayi}</span> : <span key={sayi} style={{backgroundColor:'red', padding : '8%'}}>{sayi}</span>)
  return (
    <div style={{display : 'flex', flexWrap : 'wrap'}}>
      {listNumbers}
    </div>
  )
}

//Sixth Day of React | Exercises Level 3
const GeneratorHexa = (props) => {
  let color = ''
  for(let i = 0 ; i<6; i++){
    //color += letters[(Math.floor(Math.random() * 16))];
    const random = Math.floor(Math.random()* props.str.length) 
    color += props.str[random]
  }
  return (
    <div style={{display : 'flex', flexWrap : 'wrap'}}>
      <span style={{backgroundColor : `#${color}`, padding : '1%', margin : '1%'}}>#{color}</span>
    </div>
  )
} 

const App = () =>{
  
  //Burada tanımlanmış değişkenler props ile GirlFriend componentine aktarılacaktır.
  const firstName = 'Ümmühan'
  const lastName = 'Gümüş Yetişkin'
  const subtitle  ='SEO'
  const age = 23
  const gravity = 9.81
  const mass = 75
  
  //Object props tanımlaması
  const aboutChild = {
    name : 'Deniz', 
    surName : 'Gümüş Yetişkib',
    title : 'Student',
    date : new Date()
  }

  let status = age >= 18

  //Functional Props Type
  const alertHi = () => {
    alert('Hi, Im Deniz!')
  }

  //Sayı dizisini eşleme
  const numbers = [1, 2, 3, 4]


  //Sixth Day of React  | Exercises Level 2
  const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

  const str = '0123456789abcdef'

  //Seventh Day of React 
  //Object
  const whoDeniz = {
    firstName : 'Deniz',
    lastName : 'Yetişkin',
    age : 18,
    title : 'Student',
    parents : {
        father: 'Ufuk',
        mother : 'Ümmühan'
    },
    birthDay : '07.08.2030'
  }
  //Conditional Rendering
  const whoUmmuhan = {
    firstName : 'Ümmühan', 
    lastName : 'Yetişkin',
    age : 23,
    husband : 'Ufuk',
    parents : {
        father: 'Veysel',
        mother : 'Sunay'
    },
    birthDay : '07.08.1998'
  }
  //Conditional Rendering
  const[isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <div>
      <Header framework= 'JavaScript Library' welcome = 'Welcome is props value'/>
      <Profile></Profile>
      {/* getUserInfo fonksiyonu oluşturduk. ardından bu fonksiyondaki değerleri props ile User compenentine taşıdık. Kapsayıcı compenent içerisinde istenilen değerleri User componentine aktardık.*/}
      <User firstName='Deniz' lastName = 'Yetişkin' country='Turkey'></User>
      <Main></Main>
      <Subscribe></Subscribe>
      <HexaColor/>
      <GirlFriend
      firstName = {firstName}
      lastName = {lastName}
      subtitle = {subtitle}
      age = {age}
      weight = {gravity * mass}
      status = {status}

      //Array Type Props
      skills = {['Data Analysis', 'Digitale Marketing']}

      //object Props Type
      
      />
      <ChildOfUs 
      child = {aboutChild}
      text = 'Who am I?'
      text2 = "Date"
      onClick = {alertHi}
      onClick2 = {() => alert(new Date().toLocaleTimeString())}
      ></ChildOfUs>
      <br></br>
      <FrontendTechs/>
      <br></br>
      <Footer></Footer>
      <br></br>
      <Numbers numbers = {numbers} />
      <br></br>
      <Skills skills={feskills} />
      <br></br>
      <Countries countries={countries} />
      <br></br>
      <GeneratorNumber sayilar = {sayilar} />
      <br></br>
      <GeneratorHexa str={str} />
      <br></br>
      <ClassComponents whoDeniz = {whoDeniz}></ClassComponents>
      <br></br>
      <States></States>
      <br></br>
      <DogorCat></DogorCat>
      <br></br>
      <ConditionalRendering  whoUmmuhan={whoUmmuhan}></ConditionalRendering>
      </div>
  )
}


  

const rootElement = document.getElementById('root')

{/*ReactDOM.render([header, main, footer], rootElement)*/}
ReactDOM.render(<App />, rootElement)