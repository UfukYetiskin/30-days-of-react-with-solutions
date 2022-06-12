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
      onClick = {alertHi}
      ></ChildOfUs>
      <Footer></Footer>
  </div>
  )
}


  

const rootElement = document.getElementById('root')

{/*ReactDOM.render([header, main, footer], rootElement)*/}
ReactDOM.render(<App />, rootElement)