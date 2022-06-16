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