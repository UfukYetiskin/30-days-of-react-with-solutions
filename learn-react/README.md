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

#### React JSX olmasaydı ve createElement kullanılsaydı
Bu şekilde element oluştururduk:
```
const h1 = createElement('h1', {className :'test', id: 'test'}, 'h1 element created')
//'h1' ile oluşturulacak element belirtildi.
// {} içerisinde attribute belirtilir. boş bırakmak istersek parantez yerine  null ifadesi de yazılabilir.
// 'element created' ifadesi ile elementin textContentini belirtiriz
```
Bir diziyi map methodu ile listeleyelim
```
const todos = ['todo1', 'todo2', 'todo3']
const ul = createElement('ul', null, todos.map((todo) => createElement('li', 'null', todo )))
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

### Fragment
Componentler içerisinde return ederken kodu herhangi bir kapsayıcı ister. Bu kapsayıcı herhangi bir etiket olabilir. Bunu yapmak istemiyorsak eğer Fragment'ı kullanabiliriz.

```
import {Fragment} from 'react'

function App(){
  return(
    <Fragment>
      <h1 tabIndex ="3" style = {{}} >
      <label htmlFor="search" tabIndex ="2" onClick = {() => alert('Selam')} >Arama</label>
      <input type="text" id="search" tabIndex="1"   />
    </Fragment>
  )
}
```

Fragment yerine kapsayıcı olarak **<> ve </>**  da kullanılabilir.


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

Birden fazla prop geldiğinde component içerisinde props diye tanımlama yerine obje türetip bu obje içerisinde gelen değerleri ismiyle tutabiliriz örneğin:
```
export default Button({text, variant}){
  return(
    <>
      <button>{text}</button>
    </>
  )
}
```
şeklinde kullanılabilir. Children prop'u da vardır. Bu prop kapsayıcı componenti içerisinde bulunan componentin iki arasında bulunan texte denir. Örneğin
```
function App(){
  <Button variant = "success" text="metin"> Children: burada bulunan metin değeridir. </Button>
}
```
```
function Button({text, children, variant}){
  return (
    <button> {children} </button>
  )
}
```
şeklinde children propu kullanılır.


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

##### Functional Props Type

Bir işlevi props tipi olarak bir React bileşenine iletebiliriz. Hadi bazı örneklere bakalım

```
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const sayHi = () => {
    alert('Hi')
  }

  return (
    <div className='app'>
      <Button text='Say Hi' onClick={sayHi} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)

```

Kıvrımlı parantez içine bir fonksiyon bile yazabiliriz.

```
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  return (
    <div className='app'>
      <Button text='Say Hi' onClick={() => alert('Hi')} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)

```

Şimdi, props olarak farklı işlevleri uygulayalım

```
import React from 'react'
import ReactDOM from 'react-dom'

// A button component

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  return (
    <div className='app'>
      <Button text='Greet People' onClick={greetPeople} />
      <Button text='Show Time' onClick={() => alert(new Date())} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

HTML'de onclick, onmouseover, onhover, onkeypress vb. olay işleyicileri vardır. React'te bu işleyiciler camelCase'dedir. 


##### Destructuring props


 Props olarak ilettiğimiz her şey props nesnesinde saklanır. Bu nedenle props bir nesnedir ve özelliklerini bozabiliriz. Object props örneğinde yazdığımız bazı props'ları yok edelim. Birçok şekilde yok edebiliriz:

 1. Adım adım yıkım
  ```
  const { welcome, title, subtitle, author, date } = data
  const { firstName, lastName } = author
  ```
  ```
  import React from 'react'
import ReactDOM from 'react-dom'

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

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const { welcome, title, subtitle, author, date } = data
  const { firstName, lastName } = author
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
  ```
  2. Tek satırda yıkım
  ```
   const data = props.data
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data
  ```


  ```
  import React from 'react'
import ReactDOM from 'react-dom'

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

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = (props) => {
  const data = props.data
  const {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  } = data

  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
  ```

  3. Parantez içindeki sahne öğelerini yok etme
   ```
    data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  }
   ```

   ```
   import React from 'react'
import ReactDOM from 'react-dom'

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

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}
// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: new Date(),
  }

  return (
    <div className='app'>
      <Header data={data} />
    </div>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

##### propTypes

propTypes paketi, bir bileşene aktardığımız propların veri türlerini atamamıza yardımcı olur.

##### defaultProps

Bir bileşen için bazı varsayılan prop türlerine sahip olmak istediğimizde defaultProps kullanılabilir.

propType'ları diğer bölümlerde ayrıntılı olarak ele alacağız.

## Sixth Day of React

### Mapping Arrays

Dizi, birçok türde sorunu çözmek için en sık kullanılan veri yapısıdır. React'te, bir dizinin her bir öğesine belirli bir HTML öğesi ekleyerek bir diziyi JSX listesine değiştirmek için map'i kullanırız.

#### Mapping and rendering arrays


Çoğu zaman verileri bir dizi veya bir dizi nesne biçimindedir. Bu diziyi veya nesne dizisini oluşturmak için çoğu zaman verileri map kullanarak değiştiririz . Bir önceki bölümde, bir harita yöntemi kullanarak teknoloji listesini oluşturduk. Bu bölümde daha fazla örnek göreceğiz.

Aşağıdaki örneklerde, bir sayı dizisini, bir dizi diziyi, bir dizi ülkeyi ve bir dizi beceriyi tarayıcıda nasıl oluşturduğumuzu göreceksiniz.

```
import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        {[1, 2, 3, 4, 5]}
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Tarayıcıyı kontrol ederseniz, sayıların bir satırda birbirine eklendiğini göreceksiniz. Bunu önlemek için diziyi değiştiririz ve dizi öğelerini JSX öğesine değiştiririz. Aşağıdaki örneğe bakın, dizi bir JSX öğeleri listesi olarak değiştirildi.


#### Mapping array of numbers

```
import React from 'react'
import ReactDOM from 'react-dom'

const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((number) => <li>{number}</li>)
  return list
}

// App component

const App = () => {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

#### Dizileri eşlemede anahtar

Anahtarlar, React'in değişen, eklenen veya kaldırılan öğeleri tanımlamasına yardımcı olur. Öğelere kararlı bir kimlik kazandırmak için dizi içindeki öğelere anahtarlar verilmelidir. Anahtar benzersiz olmalıdır. Çoğunlukla veriler id olarak gelir ve id'yi anahtar olarak kullanabiliriz. Eşleme sırasında anahtarı React'e iletmezsek, tarayıcıda bir uyarı verir. Verinin bir kimliği yoksa, onu eşleştirdiğimizde her öğe için benzersiz bir tanımlayıcı oluşturmanın bir yolunu bulmamız gerekir. Aşağıdaki örneğe bakın:

```
import React from 'react'
import ReactDOM from 'react-dom'

const Numbers = ({ numbers }) => {
  // modifying array to array of li JSX
  const list = numbers.map((num) => <li key={num}>{num}</li>)
  return list
}

const App = () => {
  const numbers = [1, 2, 3, 4, 5]

  return (
    <div className='container'>
      <div>
        <h1>Numbers List</h1>
        <ul>
          <Numbers numbers={numbers} />
        </ul>
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

## Seventh Day of React

### Class Components
Basite indirgemek gerekirse React Component ‘leri tüketici arayüzünü şekillendiren, özel görevleri olan, class ya da özellik olarak tanımlanmış, geriye react elementleri döndüren , opsiyonel olarak parametre konum tasarım taşlarıdır.

#### Class-Based Components  (Eğitim sınıfı Tabanlı)
React kütüphanesi içindeki “Component” class ‘ından extend olan javascript class ‘ları olarak tanımlayabiliriz. Bu class ‘lar React Component ‘ten extend olduğundan Component Lifecycle süreçlerini de barındırır.

#### Functional Components  (Fonksiyonel)
Basit olarak react elementleri (JSX) dönen javascript fonksiyonlarıdır. Dummy, dumb component olarak da isimlendirildiği oluyor. Bunun sebebi genel olarak state ‘e erişemediklerindendir. Ancak bu tasarım v.16.8 ile birlikte daha ziyade değişmiş oldu. {artık} fonksiyonel component ‘ler de state ‘e erişim elde edin sağlayabiliyor.

v.16.8 ile birlikte aralarında syntax haricinde pek de bir varyasyon kalmayan component çeşitlerini faydalanmak amacınıza, keyfinize ve yapacağınız işe bağlı olarak seçmek kesinlikle size kalmış.

**Fonksiyonel React Component**
```
// index.js

import React from 'react'
import ReactDOM from 'react-dom'
// Header Component
// Functional component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 6, 2020</small>
    </div>
  </header>
)
const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)
```

Sınıf tabanlı React bileşeni, React.Component'in bir alt öğesidir ve yerleşik bir oluşturma yöntemine sahiptir ve bir yapıcısı olabilir.

```
//index.js

import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
        </div>
      </header>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)
```

#### Sınıf bileşenlerinde aksesuarlara erişme | Accessing props in Class components
Props'ın bir bileşenden diğerine veri gönderme aracı olduğunu belirtmiştik veya props'ın veri taşıyıcısı olduğunu söyleyebiliriz. Bu nedenle, sınıf tabanlı bileşende sahne öğelerini de ele almalıyız. this anahtar sözcüğünü kullanarak sınıf tabanlı bir bileşenin donanımlarına erişebiliriz . Aşağıdaki örneğe bakın.


#### Methods in Class based component |  Sınıf tabanlı bileşendeki yöntemler

Yöntemlere sınıf tabanlı bileşende erişiyoruz. Çoğu zaman, ana bileşene farklı yöntemler yazıyoruz ve bunları alt bileşenlere aktarıyoruz. Uygulamaya bakalım.

Bu bileşene bir method ekleyelim.

```
//index.js

import React from 'react'
import ReactDOM from 'react-dom'

// class based component
class Header extends React.Component {
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days Of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>Asabeneh Yetayeh</p>
          <small>Oct 7, 2020</small>
          <button onClick={this.greetPeople}> Greet </button>
        </div>
      </header>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)
```
## Eighth Day of React

## State
### How to set a state | Durum nasıl ayarlanır

Sınıf tabanlı bir bileşenin yapıcısının içinde veya yapıcısının dışında bir başlangıç ​​durumu belirledik. Durumu doğrudan değiştirmiyoruz veya mutasyona uğratmıyoruz, ancak yeni bir duruma sıfırlamak için setState() yöntemini kullanıyoruz. . Aşağıda göreceğiniz gibi durum nesnesinde 0 başlangıç ​​değeri ile saydık. this.state ve özellik adını kullanarak durum nesnesine erişebiliriz. Aşağıdaki örneğe bakın.

```
import React from "react";
import ReactDOM from "react-dom"

class States extends React.Component {

    state = {
        count : 0,
    }

    increaseCount = () => {
        this.setState({count : this.state.count + 1})
    }
    decreaseCount = () => {
        this.setState({count : this.state.count - 1})
    }
    render(){
        const count = this.state.count
        return(
            <div>
                <button onClick={this.increaseCount}>Increase</button>
                <button onClick={this.decreaseCount}>Decrease</button>
                <span>{count}</span>
            </div>
        )
    }
}

export default States

```

## Nineth Day of React

### Conditional Rendering | Koşullu  Oluşturma


 koşula bağlı şekilde render edilme durumu söz konusu olduğunda uygulayacağımız bir yöntem denebilir. Hemen bir örnekle konuyu somutlaştırayım. Mesela bir uygulama açıldığında "yükleniyor" yazar (hatta bir halka döner) daha sonrasında da mesela instagramdaysanız gönderilen resimler yüklenmeye başlar. İşte burada eğer sunucudan resimler gelmediyse loader componentini göster, resimler gelince de sadece resimleri göster şeklinde bir şart koşulabilir.

Component'lerde return işleminden sonra bir kod varsa bunlar çalışmayacaktır. Bu yüzdenk koşullu olarakta render yapabilirsiniz. Örneğin kullanıcı giriş yapmışsa başka bir değer, yapmamışsa başka bir değer return edebilirdik.

#### If ve Else deyimini kullanarak Koşullu Oluşturma |  Conditional Rendering using If and Else statement
Aşağıdaki kodda, false olan bir ilk login durumumuz var. Durum yanlışsa, kullanıcıyı oturum açması için bilgilendiririz, aksi takdirde kullanıcıyı memnuniyetle karşılarız.

```
import React from 'react'

export default class ConditionalRendering extends React.Component{
    state = {
        isim : "",
        message : ""
    }

    //Burada isim state'ine girilen isimleri  tutması için setState'i ayaraldık
    handleChange = (event) => {
        this.setState({isim : event.target.value})
    }

    // Burada ise butona basğtımız takdirde isim state'inin uzunluğuna göre bize mesaj gösteriyor.
    handleSubmit = (isim) => {
        if(isim.length < 6){
            this.setState({message : "Girilen isim 6 harften küçüktür."})
        }else{
            this.setState({message :""})
        }
    }
    render(){

        const { firstName, lastName, age, husband, parents : {mother, father} , birthDay} =this.props.whoUmmuhan
        const errorMessage = this.state.message ? <h2>{this.state.message}</h2> : <h2>Giriş Yapınız.</h2>
        return (
            <div style={{border: "1px solid black", margin : "!%"}}>
                <h1>This component is about of Conditional Rendering</h1>
                <h1>{firstName}</h1>
                <input 
                    placeholder='Write here something'
                    value={this.state.isim}
                    onChange={this.handleChange}
                />
                {/* buton içerisinde onClick metoduna fonksiyon tanımladık.  */}
                <button onClick={() => this.handleSubmit(this.state.isim)} >Submit</button>
                <span>{this.state.isim}</span>
                {/*<span>{this.state.message}</span> */}
                <div>{errorMessage}</div>
            </div>
        )
    }
}
```


## React Project Klasör Yapısı ve Dosya Adlandırma |React Project Folder Structure and File Naming

React projesinde tek bir klasör yapısı veya dosya adlandırma kullanmanın kesin bir yolu yoktur. Çoğu zaman, bu tür bir seçim bir ekip tarafından yapılabilir. Bazen bir şirketin izlenecek kod kuralları, klasör yapısı ve dosya adlandırma konusunda gelişmiş yönergeleri olabilir. Bir React projesini yapılandırmanın doğru ya da yanlış bir yolu yoktur, ancak bazı yapılar ölçeklenebilirlik, sürdürülebilirlik, dosyalar üzerinde çalışma kolaylığı ve kolay anlaşılır yapı açısından diğerlerinden daha iyidir. Klasör yapısı hakkında daha fazla bilgi edinmek isterseniz aşağıdaki makalelere göz atabilirsiniz.

### Dosya Adlandırma

Tüm React projemde tüm bileşenler için CamelCase dosya adını kullanacağım. Açıklayıcı uzun ad kullanmayı tercih ederim.

### Fragments

Parçalar, JSX'te gereksiz üst öğeden kaçınmanın bir yoludur. Bir parça uygulayalım. Reaksiyon modülünden parçayı içe aktarıyoruz. Aşağıda görebileceğiniz gibi, React'i içe aktardık ve virgülle ayırma kullanarak parçaladık.

```
import React, { Fragment } from 'react'

const Skills = () => {
  return (
    <Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </Fragment>
  )
}
const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  )
}
```

Fragment modülünü aşağıda gösterildiği gibi React'ten çıkarmak da mümkündür.

```
import React from 'react'

const Skills = () => {
  return (
    <React.Fragment>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </React.Fragment>
  )
}

const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  )
}
```
Reacts'in en son sürümünde, bu işaretleri kullanarak (<> </>) çıkarmadan veya içe aktarmadan yazmak da mümkündür.

```
import React from 'react'

// Recommended
const Skills = () => {
  return (
    <>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </>
  )
}

const RequiredSkills = () => {
  return (
    <ul>
      <Skills />
    </ul>
  )
}
```

## Eleventh Day of React 

### Events
onClick eventi;

```
import React from 'react'
// if it is functional components
const App = () => {
  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }
  return <button onClick={greetPeople}> </button>
}
```
```
import React, { Component } from 'react'
// if it is class components
class App extends Component {
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge')
  }
  render() {
    return <button onClick={this.greetPeople}> </button>
  }
}
```

- onBlur event, belirli bir elemandan focusu yani odağı çektikten sonra onBlur eventi gerçekleşir. Örneğin, bir inputa değer girdiniz ve sayfanın herhangi bir yerine tıkladınız. İnput üzerinden odağı çektiğiniz anda event gerçekleşecektir.
- enKeyPress event, klavye üzerinden basılan bir tuş hareketini algılar. örneğin input'a bir değer girdiğinizde onKeyPress eventi ile charCode metodunu çağırırsak, klavyedeki değerin sayısal değerini verir.
- onCopy Event, herhangi bir elementi ya da text'i kopyaladığımızda event aktif olur.
- onMouseMove Event, mouse ile herhangi bir elemanın üzerinden geçtiğimiz takdirde event gerçekleşir. Tıklama gibi olaylara gerek yok, sadece mouse imlecin üstünden geçmesi yeterli.
- onClick eventi, herhangi bir elemente bastığımızda gerçekleşen bir eventtir.


## Twelfth

## Forms 

Form, bir kullanıcıdan veri toplamak için kullanılır. Arada bir, bilgilerimizi bir kağıda veya bir web sitesine doldurmak için form kullanırız. Kayıt olmak, oturum açmak veya bir işe başvurmak için farklı form alanlarını doldurarak verilerimizi uzak veritabanına gönderiyoruz. Basit metin, e-posta, şifre, telefon, tarih, onay kutusu, radyo düğmesi, seçenek seçimi ve metin alanı alanı gibi bir formu doldurduğumuzda farklı form alanları ile karşılaşıyoruz. Şu anda, HTML5 oldukça fazla alan türü sağlamaktadır.

### Bir giriş alanından veri alma |  Getting data from an input field

Şimdiye kadar giriş alanından herhangi bir veri alamadık. Şimdi, bir girdi alanından nasıl veri alınacağını öğrenmenin zamanı geldi. Kontrollü bir girdiden veri almak için bir girdi alanına, olay dinleyicisine (onChange) ve duruma ihtiyacımız var. Aşağıdaki örneğe bakın. Giriş etiketinin altındaki h1 öğesi, girişe ne yazdığımızı gösterir. 
Giriş öğesinin değer, ad, kimlik, yer tutucu, tür ve olay işleyici gibi birçok özelliği vardır. Ek olarak, girdi alanı kimliğini ve etiketin htmlFor'unu kullanarak bir etiket ve bir girdi alanını bağlayabiliriz. Etiket ve girdi bağlantılıysa, etikete tıkladığımızda girdiye odaklanacaktır. Aşağıda verilen örneğe bakın.


//Class Components
```
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  // declaring state
  // initial state
  state = {
    firstName: '',
  }
  handleChange = (e) => {
    const value = e.target.value
    this.setState({ firstName: value })
  }

  render() {
    /*
     accessing the state value and 
     this value will injected to the input in the value attribute
     */

    const firstName = this.state.firstName
    return (
      <div className='App'>
        <label htmlFor='firstName'>First Name: </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          placeholder='First Name'
          value={firstName}
          onChange={this.handleChange}
        />
        <h1>{this.state.firstName}</h1>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

Functions Components 
```
import {useState} from 'react'


const Forms = () => {
    const [value, setValue] = useState('')


    const handleChange = (e) => {
        const value = e.target.value
        setValue(value)
    }

    return (
        <div style={{border: "1px solid black", margin: '1%', padding: '1%'}}>
            <h1>This div about the Froms</h1>
            <div>
                <label style={{margin: '10px'}} htmlFor='value'>Name</label>
                <input 
                    id='value'
                    onChange={handleChange}
                    placeholder = 'Write Your Name'
                    value={value}
                />
            </div>
            <div>
                <h3>{value}</h3>
            </div>
        </div>
    )
}

export default Forms
```

#### Formdan birden çok giriş verisi alma |  Getting multiple input data from form

Bu bölümde, kullanıcı bilgilerini toplayan küçük bir form geliştireceğiz. Kullanıcımız öğrencidir. Kullanıcı bilgilerini toplamak için bir üst form öğesi ve belirli sayıda giriş öğesi kullanırız. Buna ek olarak form (onSubmit) ve girdiler (onChange) için olay dinleyicimiz olacak. Aşağıdaki örneğe bakın, ortak noktaları da görmeye çalışın. 

```
import {useState} from 'react'


const Forms = () => {
    const [Name, setName] = useState('')
    const [lastName, setLastName]  = useState('')



    const handleChange = (e) => {
        const Name = e.target.value
        setName(Name)
    }
    const handleChangeLastName = (e) => {
        const lastName = e.target.value
        setLastName(lastName)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${Name} ${lastName}`)
    }

    return (
        <div style={{border: "1px solid black", margin: '1%', padding: '1%'}}>
            <h1>This div about the Froms</h1>
            <form>
            <div>
                <label style={{margin: '10px'}} htmlFor='value'>Name</label>
                <input 
                    id='value'
                    onChange={handleChange}
                    placeholder = 'Write Your Name'
                    value={Name}
                />
            </div>
            <div>
            <label style={{margin: '10px'}} htmlFor='value2'>Lastname</label>
                <input 
                    id='value2'
                    onChange={handleChangeLastName}
                    placeholder = 'Write Your Lastname'
                    value={lastName}
                />
            </div>
            <div>
                <input 
                    type="submit"
                    onClick={handleSubmit}
                />
            </div>
            </form>
            <div>
                <h3>{Name}</h3>
                <h3>{lastName}</h3>
            </div>
        </div>
    )
}

export default Forms
```

### Form Doğrulama | Form Validation

#### What is the Validation

Bu durumda verilerdeki bir şeyin geçerliliğini veya doğruluğunu kontrol etme veya kanıtlama eylemi veya süreci.

#### Validation Types

Doğrulama istemci tarafında veya sunucu tarafında yapılabilir. Şu anda bir ön uç teknolojisi olan React kullanıyoruz ve istemci tarafında doğrulama kullanıyoruz. Doğrulama HTML5 yerleşik doğrulaması veya JavaScript (normal ifade kullanarak) kullanılarak gerçekleştirilebilir.

## thirteenth Day of React

### Uncontrolled Components

- A Controlled Component , şu anki değerini props ile alan ve onChange gibi geri çağrılar yoluyla yapılan değişiklikleri bildirendir. Bir ana bileşen geri aramayı ele alarak ve kendi durumunu yöneterek ve yeni değerleri kontrol edilen bileşene sahne olarak geçirerek "kontrol eder". Buna "aptal bir bileşen" de diyebilirsiniz.
- A Kontrolsüz Bileşen , kendi durumunu dahili olarak saklayan biridir ve DOM, ihtiyacınız olduğunda mevcut değerini bulmak için bir ref kullanarak sorgularsınız. Bu biraz daha geleneksel HTML gibi.

Kontrolsüz bir bileşen yazmak için, her durum güncellemesi için bir olay işleyicisi yazmak yerine, DOM'dan form değerleri almak için bir ref kullanabilirsiniz. Kontrolsüz girdide, geleneksel HTML form veri işleme gibi girdi alanlarından veri alırız.

Kontrolsüz bileşen örneği

### Kontrolsüz bir girdiden veri alma

```
import React, { Component } from 'react'

const firstName = React.createRef()

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName.current.value)
}



export default function UncontrolledComponents(){
    return(
        <div style={{border: '1px solid black', padding : '1%'}}>
            <h1>This div about Uncontrolled Components</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firtsName'>First Name:</label>
                <input 
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    ref={firstName}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
```

Çoğu zaman kontrolsüz girdi yerine kontrollü girdi kullanırız. DOM'da bir öğeyi hedeflemek istiyorsanız, o öğenin içeriğini almak için ref kullanacaksınız. Saf JavaScript kullanarak doğrudan dokunmayın. Bir React uygulaması geliştirirken doğrudan DOM'ye dokunmayın çünkü React'in DOM manipülasyonunu ele almanın kendi yolu vardır.

Bazı durumlarda react elemanlarına javascript tarafında erişip işlem yaptırmak isteyebilirsiniz. Bu gibi durumlarda o elemanı ref'lemek gerekiyor ve bunun içinde useRef() hook'u kullanılıyor.

Örneğin bir input'umuz olsun ve bir button'a basınca bu input'a focuslamak istediğimizi varsayalım. Input'a focuslamak için evvela input'a erişebilmemiz lazım bunun içinde useRef() ile refleme işlemi yapabiliriz.
```
import { useRef } from "react"

function App() {
  const inputRef = useRef()
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={() => {
        inputRef.current.focus()
      }}>Focusla</button>
    </>
  )
}
```
Gördüğünüz gibi dom elemanına ulaşmak için inputRef.current şeklinde bir kullanım gerçekleştirdik.

### forwardRef() Kullanımı
Yukarıdaki senaryomuz aynı kalsaydı ve input etiketi yerine bu bir component olsaydı, bu işlemi forwardRef() ile ref'i ileterek yapmak zorundaydık. Yani:

```
import { useRef } from "react"

const Input = forwardRef((props, ref) => {
  return <input type="text" {...props} ref={ref} />;
});

export default function App() {
  const inputRef = useRef();
  return (
    <>
      <Input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focusla
      </button>
    </>
  );
}
```

## Fourteenth Day of React

## Component Life Cycle

### Whe we should use useEffect() 

useEffect Hook'un tanıtılmasının arkasındaki motivasyon, sınıf tabanlı bileşenlerin kullanılmasının yan etkilerini ortadan kaldırmaktır. Örneğin, DOM'yi güncelleme, API uç noktalarından veri alma, abonelikler veya zamanlayıcılar ayarlama vb. gibi görevler, istenmeyen yan etkilere neden olabilir. Render yöntemi hızlı bir şekilde yan etki üreteceğinden, yan etkileri gözlemlemek için yaşam döngüsü yöntemlerini kullanmak gerekir. Örneğin, basit bir sayaç bileşeni için belge başlığını mevcut değere güncellemeyi düşünün. İlk oluşturmada, mevcut tıklanan değeri 0 tıklama olarak ayarladık. Dolayısıyla bu bölüm, bileşen yaşam döngüsünde yalnızca bir kez yürütülen componentDidMount() yöntemine kodlanmıştır. Ardından, her tıklamada sayım durumu değerini birer birer artırmak için bir düğme oluştururuz. Sayım değeri durumu değiştikçe, ayrıca belge başlığını tekrar güncellememiz gerekiyor ve bunun için aynı kodu componentDidUpdate() içine yazmamız gerekiyor. componentDidupdate() yöntemi, durum değiştiğinde sayaç değerini güncellemek için mükemmeldir ancak kodun tekrarı yan etkilerden biridir.

```
componentDidMount(){
	document.title = `you clicked ${this.state.count} times`;
}

componentDidUpdate(){
	document.title = `you clicked ${this.state.count} times`;
}
```
Bir zamanlayıcı kurarak başka bir yan etkiyi düşünelim. componentDidMount() yönteminde, her 5 saniyede bir "merhaba" dizesini günlüğe kaydetmek için bir zamanlayıcı ayarladık. Bileşen DOM'dan kaldırılırken bu zamanlayıcıyı temizleyebiliriz. Bunu componentWillUnmount() yaşam döngüsü yönteminde yapıyoruz. Böylece zamanlayıcının kodu aşağıdaki gibi görünür
```
componentDidMount(){
    this.interval = setInterval(this.tick, 1000)
}
 
componentWillUnmount(){
    clearInterval(this.interval)
}
```
Tek bir bileşen oluşturmak için birleştirildiğinde hem sayaç hem de zamanlayıcı aşağıdaki gibi görünür:

```
componentDidMount(){
	document.title = `you clicked ${this.state.count} times`;
	this.interval = setInterval(this.tick, 1000)

}

componentDidUpdate(){
	document.title = `you clicked ${this.state.count} times`;
	clearInterval(this.interval)
}
```

useEffect'i belirttiğimizde, temel olarak, bileşenin her oluşturduğunda, useEffect işlevinde argüman olarak ilettiğimiz işlevi yürütmek için tepki istiyoruz. Unutulmaması gereken ikinci şey, bileşenin içinde useeffect kullanılmasıdır, çünkü bunu yaparak, herhangi bir ek kod yazmak zorunda kalmadan bileşenlerin durumuna ve donanımlarına kolayca erişebiliriz.
```
import { useEffect, useState } from "react"

export default function LifeCycle(){

    const [count, setCount] = useState(0);


    useEffect(() => {
        //Örneğin bir butona basıldığında component render olur ve useEffect çalışır.
       console.log('Component render olduğunda çalışır.') 
    })

    useEffect(() => {
        //Bu satırda ilgili component yüklendiği anda çalışır.
        console.log('component ilk yüklendiğinde çalışır!')
        
        //ilgili component öldürüldüğünde çalışır. Örneğin sayfa yenilendiğinde öldürülür.
        return()=>{
            console.log('component öldürülüdğünde çalışır.')
        }
    }, [])

    //State ile tutulan veri her değiştiğinde component tekrardan render edilir.  useEffect ile statemizi de alabiliriz
    useEffect(() => {
        console.log('Count değeri değişti: ', count)
    },[count])

    return(
        <div style={{border: '1px solid black', padding : '1%'}}>
            <h1>This div includes Life Cycle Chapter </h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <span style={{padding: '1%', marginLeft :'1%'}}>{count}</span>
            </div>
        </div>
    )
}
```

## Sixteenth Day of React

## Higher Order Component

Parametre olarak component alan bir fonksiyondur. Bunu örneğin birden fazla component olan projelerde kod tekrarını azaltmak için kullanılır.

## Seventeenth Day of React

### React Router Nedir? 

Rotanın gerçek anlamı, bir yere ulaşmanın bir yolu veya yoludur. React'teki anlam da gerçek anlama benzer. React Router, kendi başına, React bileşenleri arasında gezinmenizi sağlayan bir React bileşenidir.

En başından belirttiğimiz gibi, React tüm uygulamada yalnızca bir index.html sayfası olan tek sayfalık bir uygulamadır. Bir React Router uyguladığımızda, farklı bileşenler index.html sayfasında aynı anda veya farklı mantık ve koşullara göre farklı zamanlarda işlenir.


UI’ızı URL ile senkronize tutmak için HTML5 history API’sini (pushState, replaceState ve popstate eventi) kullanan bir **<Router>**dır.
```
//index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
 

const root = ReactDOM.createRoot(document.getElementById('root'))

{/*ReactDOM.render([header, main, footer], rootElement)*/}
//ReactDOM.render(<App />, rootElement)

root.render(<BrowserRouter>
    <App></App>
</BrowserRouter>)
```
index.js sayfası ile web servisini tek bir html sayfasına çevirdik. BrowserRouter ile sardığımız için oluşturulan componentlerde tekrardan **Router** elementi ile kapsayamayız.

```
import React from 'react'
import ReactDOM from 'react-dom'
import { Switch , useRouteMatch } from 'react'
import {Route,Routes, NavLink} from 'react-router-dom'

const Home = () => <h1>Home</h1>
const Contact = () => <h1>Contact</h1>
const About = () => <h1>About Us</h1>

export default class ReactRoter extends React.Component {
    render() {
        return (
          <div>
            <ul>
                <li>
                    <NavLink to='/' >Home</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' >Contact</NavLink>
                </li>
                <li>
                    <NavLink to='about' >About</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path = '/contact' element={<Contact/>} />
                <Route path = '/about' element={<About/>} />
            </Routes>
          </div>
        )
    }
}
```

## Eighteenth Day of React

### Fetch and Axios

#### Fecth

Şu anda JavaScript, HTTP istekleri yapmak için bir getirme API'si sağlar. Getirme tüm tarayıcılar tarafından desteklenmeyebilir, bu nedenle tarayıcı destekleri için ek paket yükledik. Ancak, Axios kullanırsak tarayıcı desteği için ek paket kullanmamız gerekmez. Axios kodu getirmeden daha temiz görünüyor. Bu bölümde fetch ve axios arasındaki farkı göreceğiz.

```
import {useEffect, useState} from 'react'


const Fetch = () => {
    const [users, setUsers] = useState(false)
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState(false)
    

    //Post metodu için kullanılır
    const addPost = data => {
        //const headers = new Headers()
        //headers.append('Content-type', 'application/json')

        //Form data göndermek için 
        const formData = new FormData()
        formData.append('userId', data.usersId)
        formData.append('title', data.title)
        formData.append('body', data.body)


        fetch('https://jsonplaceholder.typicode.com/posts', {
            //Kullanulmak istenilen method, method propertysi ile belirtilir. Burada POST metodunu kullacanğımızı belirtiyoruz.
            method: 'POST',
            //body ile nasıl gönderilmek istendiği belirtilir. Json formatında göndermek istiyoruz ve bunun için parametre olarak bir data almamız gerek.
            body: JSON.stringify(data),
            headers : {
                'Content-type' : 'application/json',
            }
            //heards : heards.headers
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
           
    }


    //Get metodu için kullanılır.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
        
        addPost({
            userId : 1,
            title : 'Post metodu deneme',
            body: 'post method içeriği'
        })
    }, [])
    
    // form içerisinde inputlar ile alınan verileri istediğimiz api'ya göndermeye yarıyor
    const submitHandle = (e) => {
        console.log('Submit Edildi.')
        e.preventDefault()
        const data = {
            name,
            avatar
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('avatar', avatar)
        //verilerimizi fetch ile istenilen adrese gönderiyoruz. Post methodunu kullanarak formData tipinde gönderiyoruz.
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method : 'POST',
            body : formData
        })
    }
    return(
        <div style={{border : '1px solid black', margin : '1%', padding : '1%'}}>
            <h1>Fetch</h1>
            <form >
                <input 
                    type='text'
                    value={name}
                    name = 'name'
                    onChange={(e)=> setName(e.target.value)}
                />
                <input 
                    type='file'
                    name ='avatar'
                    onChange= {(e) => setAvatar(e.target.files[0])}
                />
                <button type='submit' disabled={!name || !avatar} onClick={submitHandle}>Submit</button>
            </form>

            <h1>User List</h1>
            <ul>
                {users && users.map((user, index) => (
                    <li key={index}>
                        id: {user.id}  name:{user.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default Fetch
```

## Twenty First Day of React

## useContext

React uygulamalarında state'ler prop'lar yardımıyla parent (üst) componentlardan child (alt) componentlara aktarılır. Uygulama genelinde state'nin aktarıldığı component seviyesi fazla ise yani state birden fazla iç içe componenta aktarılmak isteniyorsa uygulamamız yönetilemez hale gelebilir. React Context'ler component ağacında istediğimiz veriyi prop'lar üzerinden taşımadan componentlar arasında taşımayı sağlar.

React ile uygulama geliştirirken state'ler tanımlarız ve bu state'leri kullanacağımız componentlara prop'lar yardımıyla aktarırız. Aynı seviyedeki componentlarda bu state'i kullanmak istediğimizde ise state'i bir seviye üstteki component'a taşımak zorunda kalırız. Bu akış basit uygulamalarda problem olmayabilir. Fakat uygulama büyüdükçe ve component sayısı arttıkça state'i yönetmek ve component'ların bu state'i kullanmasını sağlamak büyük bir problem haline gelebiliyor. 


```
import {useState, createContext, useContext} from 'react'
import SiteContext from './SiteContext'


//Header Componenti
//Propslar ile Context componenti üzerinden state'leri aldık ve istediğimiz fonksiyonları atadık
const Header = () => {
    return(
        <div>
            Header <br></br>
            <SwitchTheme />
            <SwitchLanguage />
        </div>
    )
}

//Footer Component
//Propslar ile Context componenti üzerinden state'leri aldık ve istediğimiz fonksiyonları atadık
const Footer = () =>  {
    return(
        <div>
            Footer<br></br>
            <SwitchTheme />
            <SwitchLanguage />
        </div>
    )
}

const SwitchTheme = () => {
    //Parent conponent içerisinde createContext ile tuttuğumuz propları  data adıyla bir objede Home componenti ile paylaştık. Burada üstten en alta doğru birbirine bağlı olan bütün componentler useContext Hook ile bu propslara erişebilecek.
    const {theme, setTheme} = useContext(SiteContext)
    return(
        <div>
             Mevcut Teme = {theme} <br/>
            <button onClick={(e) => setTheme(theme === 'light' ? 'dark' : 'light')}>Temayı Değiştir</button>
        </div>
    )
}
//Bu component ile language state'ini tutarız ve istediğimiz fonksiyonları sağlarız.
const SwitchLanguage = () => {
    //useContext hooku ile propsları çekiyoruz.
    const {language, setLanguage} = useContext(SiteContext)
    return(
        <div>
            Mevcut Dil : {language}<br></br>
            <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')} >Dili Değiştir</button>
        </div>
    )
}
//Footer ve Header componentlerini tutacak bir component
const Home = ({theme, setTheme, language, setLanguage}) => {
    return(
        <div>
            <Header />
            <Footer />
        </div>
    )
}

//Context component'i parent görevi görmektedir.
export default function ContextHook (){

    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('tr')

    const data = {
        theme,
        setTheme,
        language,
        setLanguage
    }

    return(
        <SiteContext.Provider value={data}>
            <Home  />
        </SiteContext.Provider>
    )
}
```

İlk olarak SiteContext adında bir dosya oluşturduk ve içerisinde createContext metodunu kullandık.

```
import { createContext } from "react";

const context = createContext()

export default context
```

oluşturduğumuz componenti hemen import ettik ve istenilen componenti içerisine sarmalladık. Bu sayede istediğimiz props(verileri) parent'tan child'a doğru akışını sağlamış olduk. Burada Home componenti oluşturduk ve onun içerisinde component sarmalı oluşturdukç Bu sayede Home componentinin aldığı verileri rahatça child'lara aktarmayı başardık.

En küçük child'ımız içerisinde parent'tan gelen verileri almak için useContext Hook'unu kullandık. Bu sayede istedğimiz verileri rahatça elde ettik. 
```
const SwitchLanguage = () => {

    const {language, setLanguage} = useContext(SiteContext)
    return(
        <div>
            Mevcut Dil : {language}<br></br>
            <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')} >Dili Değiştir</button>
        </div>
    )
}
```