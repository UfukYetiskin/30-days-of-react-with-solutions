## index.js 

İlk olarak, React ve ReactDOM'u içe(import) aktarmalıyız. React, JSX'i DOM üzerinde işlemek için JSX ve ReactDOM yazmamıza izin verir. ReactDOM' un bir oluşturma yöntemi vardır. 

### React'ta JSX elementlerine veri ekleme
```
//JSX öğelerine veri ekleme
const ufuk = "Ufuk Yetişkin"
const tech = ["HTML", 'CSS/Tailwind, Boostrap', 'JavaScript/ React']
//tech dizisini map metodu ile listeledik li elementine sararak
const mapTech = tech.map((eleman, index) => <li key={index}>{eleman}</li>)

//Yerel tarihi alma Date fonksiyonundan
const today = new Date().toLocaleDateString()
```

```
// JSX element, main
const main = (
  <main style={mainStyle}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      {mapTech}
    </ul>
  </main>
)
```

### React'te Medya Nesnelerini içe Aktarma

resim import edilir js dosyasına. 
```
import logo192 from '../public/logo192.png'


const reactLogo = (
  <div>
    <img src={logo192} alt="image"></img>
  </div>
)
```
public dosyası içerisindeki logo192 isimli png uzantılı resmi alırız.

## Fourth Day of React

### Creating React Component

#### Functional Component

Bir JavaScript işlevi kullanarak, işlevsel bir React bileşeni oluşturabiliriz.

Aşağıdaki ifade bir JSX öğesidir.

```
//JSX element, header

const header = (
  <header>
    <div>
      <h1>This is header</h1>
      <h2>Getting component</h2>
    </div>
  </header>
)


//React Component
const Header = () => {
  return header
}

//or we can just return the JSX
const Header = () => {
  return(
     <header style={headerStyles}>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
      </div>
    </header>
  )
}

//or
//burada return kullanılmamasının sebebi süslü parantez kullanmak yerine direk döndürmek için parantez açıldı.
const Header = () => (
  <header style={headerStyles}>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

```

#### Rendering Components

 JSX öğesini çağırdığımızda küme parantezleri kullanıyoruz ve bileşenleri çağırdığımızda aşağıdaki gibi yapıyoruz. Bir özniteliği iletirsek, bileşen adını çağırdığımızda buna props(<ComponentName propsName = {'data-type'} />) adını veririz. 

Önce Header bileşenini oluşturalım.

```
/ index.js
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<Header />, rootElement)
```

Şimdi, Header, Main ve Footer'ı saracak bir App bileşeni oluşturalım. Ardından, Uygulama bileşeni DOM'da işlenecektir.

```
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImage from './images/asabeneh.jpg'

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User Card Component
const UserCard = () => (
  <div className='user-card'>
    <img src={asabenehImage} alt='asabeneh image' />
    <h2>Asabeneh Yetayeh</h2>
  </div>
)

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
    </div>
  </main>
)

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright 2020</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

##### React Component'te JSX'e veri enjekte etme

Şimdiye kadar JSX öğelerinde statik veriler kullandık. Şimdi farklı veri tiplerini dinamik veri olarak aktaralım. Dinamik veriler, diziler, sayılar, booleanlar, diziler veya nesneler olabilir. Her bir veri tipini adım adım görelim. Bir JSX'e veri enjekte etmek için {} parantezini kullanırız.

Bu bölümde sadece stringleri enjekte ediyoruz.

```
import React from 'react'
import ReactDOM from 'react-dom'

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const firstName = 'Asabeneh'
const lastName = 'Yetayeh'
const date = 'Oct 3, 2020'

// JSX element, header
const header = () => {
  return (
    <header>
      <div className='header-wrapper'>
      //{} parantez içerisinde veriler öğelere ya da componentlere taşınır
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          Instructor: {firstName} {lastName}
        </p>
        <small>Date: {date}</small>
      </div>
    </header>
  )
}
const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<Header />, rootElement)
```

####  Fonksiyonel bileşenler hakkında daha fazla bilgi

2'inci günün tüm JSX öğelerini işlevsel bileşenlere dönüştürdük ve artık bileşenlere çok aşinasınız. Daha fazla bileşen oluşturalım. Bir bileşenin en küçük boyutu nedir? JSX olarak yalnızca tek bir HTML döndüren bir bileşen, küçük bir bileşen olarak kabul edilir. Bir düğme bileşeni veya bir uyarı kutusu bileşeni veya yalnızca bir giriş alanı bileşeni.

```
const Button = () => <button>action</button>
```
Düğme bileşeni , tek bir HTML düğmesi öğesinden yapılmıştır. JavaScript stil nesnesini kullanarak bu düğmeyi stillendirelim. JavaScript CSS nesnesi oluşturmak için tüm CSS özellikleri camelCase olmalıdır. Birimi olmayan bir sayıyı CSS değeri olarak geçersek, px olarak kabul edilir. Aşağıdaki örneğe bakın.

```
const buttonStyles = {
  padding: '10px 20px',
  background: 'rgb(0, 255, 0',
  border: 'none',
  borderRadius: 5,
}
const Button = () => <button style={buttonStyles}> action </button>
```
Düğme bileşeni aptal bir bileşendir, çünkü herhangi bir parametre almaz ve eylem metnini dinamik olarak değiştiremeyiz. Değeri dinamik olarak değiştirmek için butona props iletmemiz gerekiyor. Bir sonraki bölümde sahne göreceğiz. Bugünkü dersi kapatmadan önce, rastgele bir onaltılık sayı görüntüleyen daha işlevsel başka bir bileşen yapalım.

```
import React from 'react'
import ReactDOM from 'react-dom'

// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => <div>{hexaColor()}</div>

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<HexaColor />, rootElement)
```

## Fifth Day of React

### Props

Çoğu zaman, parametreli fonksiyonlar akıllıdır ve dinamik verileri de aynı şekilde alabilirler. Props, bir bileşene veri veya parametre iletmemizin bir yoludur. Bir fonksiyon ve bir bileşen arasındaki farkı görelim.

```
// function syntax

const getUserInfo = (firstName, lastName, country) => {
  return `${firstName} ${lastName}. Lives in ${country}.`
}

// calling a functons

getUserInfo('Asabeneh', 'Yeteyeh', 'Finland')

//component syntax

// User component, component should start with an uppercase
const User = (props) => {
  return (
    <div>
      <h1>
        {props.firstName}
        {props.lastName}
      </h1>
      <small>{props.country}</small>
    </div>
  )
}
// calling or instantiating a component, this component has three properties and we call them props:firstName, lastName, country
<User firstName = 'Asabeneh', lastName='Yetayeh' country = 'Finland' />
```

### Props Object

React props, bir React bileşeni oluşturduğunuzda anında elde ettiğiniz bir nesnedir. Bileşene özellikleri aktarmadan önce, props nesnesinde ne elde ettiğimizi kontrol edelim.

```
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // empty object, {}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```

Yukarıdaki console.log(props) içinde boş bir nesne({}) elde edersiniz. Bunun anlamı, bileşeni başlattığınızda herhangi bir öznitelik veya özellik iletmezseniz, prop'lar boş olacaktır, aksi takdirde nitelik olarak ilettiğiniz verilerle doldurulacaktır ve bu niteliklerin uygun adı props'tır.

Basit bir örnekle başlayalım. Aşağıdaki örnekte, karşılama dizesi Header bileşenlerinde props olarak geçirilmiştir.

```
import React from 'react'
import ReactDOM from 'react-dom'

// Header Component
const Header = (props) => {
  console.log(props) // {welcome:'Welcome to 30 Days Of React'}
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Header welcome='Welcome to 30 Days Of React' />
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)
```

Yukarıdaki kodda da görebileceğiniz gibi, hoşgeldin sahneleri olan Header bileşenine sadece tek props'u ilettik. Bir bileşen, bir veya daha fazla sahneye sahip olabilir. Proplar farklı veri türleri olabilir. Bir dize, sayı, boole, dizi, nesne veya işlev olabilir. Sonraki bölümlerde farklı türdeki sahne malzemelerini ele alacağız.

#### Different Data Type  Props

##### String Prop Types

##### Boolean Props Type
```
import React from 'react'
import ReactDOM from 'react-dom'

const Status = (props) => {
  // ternary operator to check the status of the person
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  let currentYear = 2020
  let birthYear = 2015
  const age = currentYear - birthYear // 15 years

  let status = age >= 18

  return (
    <div className='app'>
      <Status status={status} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```
