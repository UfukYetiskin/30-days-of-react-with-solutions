# 30-days-of-react-with-solutions

This project was created with the hope of learning about the React library and in the future as a notebook for myself and other people. Progress will be made daily and exercises will be done with solutions.

## First Day of React

### Chapters

- JavaScript Refresher
  1. Adding JavaScript to a Web Page
    - Inline Script
    - Internal Script
    - External Script
    - Multiple External Scripts
  2. Variables
  3. Data types
  4. Arrays
        - How to create an empty array
        - How to create an array with values
        - Creating an array using split
        - Accessing array items using index
        - Modifying array element
        - Methods to manipulate array
            - Array Constructor
            - Creating static values with fill
            - Concatenating array using concat
            - Getting array length
            - Getting index of an element in an array
            - Getting last index of an element in array
            - Checking array
            - Converting array to string
            - Joining array elements
            - Slice array elements
            - Splice method in array
            - Adding item to an array using push
            - Removing the end element using pop
            - Removing an element from the beginning
            - Add an element from the beginning
            - Reversing array order
            - Sorting elements in array
        - Array of arrays
    - 💻 Exercise
        - Exercise: Level 1
        - Exercise: Level 2
        - Exercise: Level 3
    - 1. Conditionals
        - If
        - If Else
        - If Else if Else
        - Switch
        - Ternary Operators
    - 💻 Exercises
        - Exercises: Level 1
        - Exercises: Level 2
        - Exercises: Level 3
    1. Loops
        - Types of Loops
            1. for
            2. while
            3. do while
            4. for of
            5. forEach
            6. for in
        - Interrupting a loop and skipping an item
            - break
            - continue
        - Conclusions
    2. Scope
        - Window Scope
        - Global scope
        - Local scope
    3. Object
        - Creating an empty object
        - Creating an objecting with values
        - Getting values from an object
        - Creating object methods
        - Setting new key for an object
        - Object Methods
            - Getting object keys using Object.keys()
            - Getting object values using Object.values()
            - Getting object keys and values using Object.entries()
            - Checking properties using hasOwnProperty()
    - 💻 Exercises
        - Exercises: Level 1
        - Exercises: Level 2
        - Exercises: Level 3
    4. Functions
        - Function Declaration
        - Function without a parameter and return
        - Function returning value
        - Function with a parameter
        - Function with two parameters
        - Function with many parameters
        - Function with unlimited number of parameters
            - Unlimited number of parameters in regular function
            - Unlimited number of parameters in arrow function
        - Anonymous Function
        - Expression Function
        - Self Invoking Functions
        - Arrow Function
        - Function with default parameters
        - Function declaration versus Arrow function
    - 💻 Exercises
        - Exercises: Level 1
        - Exercises: Level 2
        - Exercises: Level 3
  5. Higher Order Function
        -  Callback
        -  Returning function
        -  setting time
            - setInterval
            - setTimeout
    6.  Destructuring and Spreading
        - What is Destructuring?
        - What can we destructure?
          1. Destructuring arrays
          2. Destructuring objects
    - Exercises
    - Spread or Rest Operator
        - Spread operator to get the rest of array elements
        - Spread operator to copy array
        - Spread operator to copy object
        - Spread operator with arrow function
    7.  Functional Programming
        1. forEach
        2. map
        3. filter
        4. reduce
        5. find
        6. findIndex
        7. some
        8. every
    - Exercises
    8.  Classes
        - Defining a classes
        - Class Instantiation
        - Class Constructor
        - Default values with constructor
        - Class methods
        - Properties with initial value
        - getter
        - setter
        - Static method
        - Inheritance
        - Overriding methods
    -  Exercises
        - Exercises Level 1
        - Exercises Level 2
        - Exercises Level 3
    9.  Document Object Model(DOM)


## Second Day of React

### React Nedir? 
React, kullanıcı arayüzü (UI) oluşturmak için kullanılan en popüler JavaScript kütüphanesidir. Web siteleri işlemek için kullanıcı çıktısına harika yanıt sunan bir yöntemi kullanır.

Bu aracın bileşenleri Facebook tarafından geliştirilmiştir. 2013’de açık kaynaklı bir JavaScript olarak piyasaya sürülmüştür.

### Neden React?
React Netflix, Airbnb, American Express, Facebook, WhatsApp, eBay, ve Instagram dahil olmak üzere yüzlerce büyük şirket tarafından kullanılmıştır. Bu, bu aracın rakip sağladığı avantajların rakipsiz olduğunun kanıtıdır.

İşte React nedir sorusuna olan cevabı daha da kapsamlı olarak anlamanıza yardımcı olacak React’i kullanmanızı gerektiren bazı sebepler:

1.  **Kullanımı kolay**

Açık kaynaklı bir JavaScript GUI kütüphanesi olan React’in en büyük odak noktası vardır; UI görevlerini verimli bir şekilde tamamlamaktır. MVC kalıbındaki (Model-View-Controller – Model Görünüm Kontrolcüsü) “V” olarak sınıflandırılabilir.

2. **Java’da Yeniden Kullanılabilir Bileşenleri Destekler**

React aynı fonksiyonu kullanan başka uygulamalara geliştirilen bileşenleri yeniden kullanmanıza izin verir. Bileşen yeniden kullanabilme özelliği geliştiriciler için sıradışı bir özelliktir.

3. **Daha Kolay Bileşen Yazma**

React bileşeni, HTML ile JavaScript’i birleştirmenizi sağlayan tercihe bağlı bir sözdizimi uzantısı olan JSX kullandığından yazması daha kolaydır.

JSX JavaScript ile HTML‘in mükemmel bir karışımıdır. Bütün web site yapı yazma sürecini açıklar. Ek olarak, kullanılan uzantı birden çok fonksiyonu işlemeyi daha kolay hale getirir.

JSX en popüler sözdizimi uzantısı olmasa da özel bileşenler veya yüksek hacimli uygulamalar geliştirmekte oldukça verimli olduğunu kanıtlamıştır.

4. **Sanal DOM ile Daha İyi Performans**

React DOM (Document Object Model – Belge Nesne Modeli) işlemini verimli biçimde güncelleyecektir. Tahmin edebileceğiniz gibi bu işlem web bazlı uygulamalarda birçok sorun çıkartabilir. Şanslısınız ki React sanal DOM’lar kullanır, böylece bu sorunu yaşamanıza gerek kalmaz.

Bu araç sanal DOM’lar oluşturmanıza ve onları bir hafıza barındırmanıza izin verir. Sonuç olarak, gerçek DOM’da her değişiklik olduğunda sanal olanı da anında değişir.

Sistem gerçek DOM’un devamlı güncellemeleri zorlamasını önleyecektir. Böylece uygulamanızın hızı aksamayacaktır.

5. **SEO Dostu**
   
React çeşitli arama motorlarında erişilebilen bir kullanıcı arayüzü oluşturmanıza izin verir. Bu özellik çok avantajlıdır çünkü bütün JavaScript frameworkleri SEO dostu değildir.

Üstelik, React’in uygulama sürecini hızlandırabileceğinden SEO sıralamalarınızı da yükseltebilir. Ne de olsa SEO optimizasyonunda web site hızının rolü çok önemlidir.

Ancak React’in sadece bir JavaScript kütüphanesi olduğunu unutmayın. Bu demektir ki her şeyi kendi başına yapamaz. Ek kütüphanelerin kullanımı durum kontrolü, yönlendirme ve etkileşim için gerekebilir.

### JSX

JSX, JavaScript XML anlamına gelir. JSX, JavaScript koduyla HTML öğeleri yazmamızı sağlar. Bir HTML öğesinin açılış etiketinde bir açılış ve kapanış etiketleri, içeriği ve niteliği vardır. Ancak, bazı HTML öğelerinin içeriği ve bir kapanış etiketi olmayabilir - bunlar kendiliğinden kapanan öğelerdir. React'te HTML öğeleri oluşturmak için createElement() öğesini kullanmıyoruz, bunun yerine sadece JSX öğelerini kullanıyoruz. Bu nedenle, JSX, React'te HTML öğeleri yazmayı ve eklemeyi kolaylaştırır. Aşağıdaki JSX koduna bakın.

```
// JSX syntax
// we don't need to use quotes with JSX

const jsxElement = <h1>I am a JSX element</h1>
const welcome = <h1>Welcome to 30 Days of React Challenge</h1>
const data = <small>Oct 2, 2020</small>
```

Yukarıdaki garip görünen kod JavaScript'e benziyor ve gibi görünüyor, ancak JavaScript değil ve HTML gibi görünüyor, ancak tamamen bir HTML öğesi değil. JavaScript ve HTML öğelerinin bir karışımıdır. JSX, JavaScript'te HTML kullanmamıza izin verebilir. Yukarıdaki JSX'teki HTML öğesi h1 ve küçük .

#### JSX Öğesi

Yukarıdaki örnekte gördüğünüz gibi JSX'in JavaScript ve HTML benzeri bir sözdizimi vardır. JSX öğesi, tek bir HTML öğesi veya bir üst HTML öğesine sarılmış birçok HTML öğesi olabilir.

Bu JSX öğesi, h1 olan yalnızca bir HTML öğesine sahiptir .

```
const jsxElement = <h1>I am a JSX element</h1> // JS with HTML
```

Bu JSX elementine ek HTML elementleri ekleyerek bir altyazı ve diğer içerikleri ekleyelim. Geçerli bir JSX öğesi oluşturmak için her HTML öğesi, bir dış HTML öğesi tarafından sarılmalıdır. Ad başlık değişkeni de başlık olarak değiştirilmelidir çünkü JSX öğemiz uygulamanın hemen hemen tüm başlığını içerir.

```
const header = (
  <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
  </header>
)
```
Gördüğünüz gibi, başlık öğesi, tüm iç HTML öğeleri için bir üst öğedir ve JSX, bir dış üst öğe tarafından sarılmalıdır. Başlık HTML öğesi veya başka bir üst HTML öğesi olmadan yukarıdaki JSX geçersizdir.

#### Comment to a JSX element

```
{/*
 <header>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>

*/}
```
##### Style and className in JSX
Şimdiye kadar JSX öğelerinde herhangi bir stil uygulamadık. Şimdi JSX elementlerimize stil ekleyelim. Tepkinin ortaya çıkmasından sonra satır içi stil çok popüler oldu. JSX başlığına border ekleyelim.

Bir JSX öğesine stil eklemek için satır içi stili veya sınıfAdı kullanırız. {} kullanarak stil nesnesini enjekte ediyoruz. Her CSS özelliği bir anahtar olur ve her CSS özelliği değeri, nesne için bir değer olur. Örneğin, aşağıdaki örnekte border bir anahtar ve '2px düz turuncu' bir değer, renk bir anahtar ve 'black' bir değer, fontSize bir anahtar ve '18px' bir değerdir. React veya JavaScript'te CSS nesnesinde anahtar olarak kullandığımızda, iki kelime CSS özelliğinin tümü camelCase olarak değişecektir.

```
const header = (
  <header
    style={{ border: '2px solid orange', color: 'black', fontSize: '18px' }}
  >
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Asabeneh Yetayeh</p>
    <small>Oct 2, 2020</small>
  </header>
)
```

##### Bir JSX Öğesine veri enjekte etme
Buraya kadar JSX elemanları üzerinde statik veri kullandık fakat farklı veri tiplerini de dinamik veri olarak iletebiliyoruz. Dinamik veriler dize, sayı, boolean, dizi veya nesne olabilir. Her bir veri tipini adım adım görelim. Bir JSX'e veri enjekte etmek için {} parantezini kullanırız.

```
//Bir JSX Öğesine veri enjekte etme
const ufuk = "Ufuk Yetişkin"
const titleofUfuk = "Jr. Front-End Developer"

//JSX element, header
const header = (
    <header style={{border: '1px solid orange', backgroundColor: 'orange'}}>
        <h1>Welcome to 30 Days of React</h1>
        <h2> Getting Started React</h2>
        <h3> JavaScript Library</h3>
        <p>{ufuk} </p>
        <p>{titleofUfuk}</p>
    </header>
)
```

##### Bir JSX Öğesine bir dizi enjekte etme
Bir diziye örnek vermek gerekirse, HTML, CSS, JavaScript'i bir diziye değiştirelim ve aşağıdaki ana JSX öğesine enjekte edelim. Listeleri oluşturma bölümünde daha sonra daha ayrıntılı olarak ele alacağız.

```
const techs = ['HTML', 'CSS', 'JavaScript']
const mapFrameworks = techs.map((eleman, index) => <li key={index}>{eleman}</li>)

// JSX element, main
const main = (
  <main>
    <div className='main-wrapper'>
      <p>
        Prerequisite to get started{' '}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techs}</ul>
    </div>
  </main>
)
```

##### Bir JSX Öğesine bir nesne enjekte etme
JSX'e dize, sayı, boolean, dizi verilerini enjekte edebiliriz ancak doğrudan bir nesneyi enjekte edemeyiz. Verileri JSX öğesine enjekte etmeden önce nesne değerlerini çıkarmalı veya nesnenin içeriğini yok etmeliyiz. Örneğin, bir nesnenin içine ad ve soyadı yazalım ve bunları JSX içinde kullanmak için ayıklayalım.

```
const author = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
}
const header = (
<header>
    <div className='header-wrapper'>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>
        Instructor: {author.firstName} {author.lastName}
    </p>
    <small>Date: {date}</small>
    </div>
</header>
)
```

## Third Day of React

### React Proje Kurulum 

2. gün CDN kullanarak Babel ile HTML sayfası üzerinde script yazarak render ettiğimiz uygulamayı artık create-react-app paketini kullanarak gereksiz zaman harcamalardan kurtularak kurarız.

#### Node 

Node,  JavaScript'in sunucuda çalışmasına izin veren bir JavaScript çalışma zamanı ortamıdır.  React uygulaması varsayılan olarak localhost 3000'de başlar. create-react-app, React Uygulaması için bir Node sunucusu yapılandırmıştır. Bu yüzden Node ve Node modüllerine ihtiyacımız var.

Node paketini Node.js websitesinden indiriniz. Daha sonra kurulumun tamamlandığını anlamak için terminal üzerinden versiyon kontrolü yapın. Versiyon kontrol için;

```
node -v
```
```
v16.13.2
```

#### Module

Gerektiğinde dışa aktarılabilen ve içe aktarılabilen tekli veya çoklu işlevler bir projeye dahil edilebilir. React'te modüllere veya paketlere erişmek için bağlantı kullanmıyoruz, bunun yerine modülü içe aktarıyoruz. Bir modülün veya modüllerin nasıl içe ve dışa aktarılacağını görelim:
```
// math.js
export const addTwo = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b

export default (function doSomeMath() {
  return {
    addTwo,
    multiply,
    subtract,
  }
})()
```
Şimdi math.js modüllerini farklı bir dosyaya aktaralım:
```
// index.js
// to import the doSomeMath from the math.js with or without extension
import doSomeMath from './math.js'

// to import the other modules
// since these modules were not exported as default we have to desctructure
import { addTwo, multiply, subtract } from './math.js'

import * as everything from './math.js' // to import everything remaining
console.log(addTwo(5, 5))
console.log(doSomeMath.addTwo(5, 5))
console.log(everything)
```

### Package

Paket, bir modül veya modüller topluluğudur. Örneğin React, ReactDOM paketlerdir.

### Node Package Manager (NPM)

NPM'i ayrıca kurmaya gerek yok. Node.js kurduğumuzda ayrıca NPM paketi de kurulacaktır. NPM, Node.js için varsayılan bir paket yöneticisidir. Kullanıcıların kayıt defterinde bulunan JavaScript modüllerini kullanmasına ve dağıtmasına olanak tanır. NPM, paketler oluşturmaya, paketleri kullanmaya ve paketleri dağıtmaya izin verir. NMP, JavaScript'in büyümesinde de oldukça büyük bir rol oynadı. Şu anda NPM kayıt defterinde 350.000'den fazla paket var. NPM kayıt defterindeki create-tepki-uygulamasını görelim. İndirme sayısı, paketin popülerliğini gösterir.

### React Projesi Oluşturma

Bir React projesi oluşturmak için aşağıdaki yollarandan birini kullanabiliriz. Node.js kurduğumuzu düşünerek, Mac veya Linux'ta  komut satırı arabirimini (CLI), git bash veya terminali açın. Ardından aşağıdaki komutu çalıştırın. git bash kullanıyorum.

```
ufuky@DESKTOP ~/Desktop
$ npx create-react-app name-of-your-project
```
Her proje oluşturduğunuzda npx yazmayı sevmiyorsanız, aşağıdaki komutu kullanarak create-react-app paketini global olarak bilgisayarınıza kurabilirsiniz.

```
$ npm install -g create-react-app
```

create-react-app'i yükledikten sonra aşağıdaki gibi bir React uygulaması oluşturursunuz:

```
$ create-react-app name-of-project
```

### React Boilerplate

Aşağıdaki React kazan plakasında üç klasör vardır: node_modules, public ve src. Ayrıca .gitignore, README.md, package.json ve yarn.lock vardır. Bazılarınız, thread.lock yerine package-lock.json'a sahip olabilirsiniz.

Bu klasörleri ve dosyaları bilmek güzel:

- node_modules - React uygulamalarının gerekli tüm düğüm paketlerini saklar.
- Public
  - index.html - tüm uygulamada sahip olduğumuz tek HTML dosyası
  - favicon.ico - bir simge dosyası
  - manifest.json - uygulamayı aşamalı bir web uygulaması yapmak için kullanılır
  - other images - açık grafik görselleri(açık grafik görselleri, bir bağlantı sosyal medyada paylaşıldığında görünen görsellerdir)
  - robots.txt - web sitesi web kazımaya izin veriyorsa bilgi
- src
  - App.css, index.css - farklı CSS dosyalarıdır
  - index.js - tüm bileşenleri index.html ile bağlamaya izin veren bir dosya
  - App.js - Genellikle sunum bileşenlerinin çoğunu içe aktardığımız bir dosya
  - serviceWorker.js: aşamalı web uygulaması özellikleri eklemek için kullanılır
  - setupTests.js - test senaryoları yazmak için
- package.json - Uygulamaların kullandığı paketlerin listesi
- .gitignore - React ortak plakası git başlatılan ile birlikte gelir ve .gitingore, dosya ve klasörlerin GitHub'a gönderilmemesine izin verir
- README.md - Belgeleri yazmak için işaretleme dosyası
- yarn.lock veya package-lock.json - paketin sürümünü kilitlemenin bir yolu

## Fourth Day of React

### Components 

Bir React bileşeni, uygulama kullanıcı arayüzünün bir bölümünden sorumlu olan küçük, yeniden kullanılabilir bir koddur. Bir React uygulaması, bileşenlerin bir toplamıdır. React, yeniden kullanılabilir bileşenler oluşturmamıza yardımcı olabilir. Aşağıdaki şema farklı bileşenleri göstermektedir. Tüm bileşenlerin farklı kenarlık renkleri vardır. React'te bir uygulama oluşturmak için farklı bileşenleri bir araya getiriyoruz. Bileşenler oluşturmak için JavaScript işlevlerini veya sınıflarını kullanırız. Bir işlev kullanırsak, bileşen işlevsel bir bileşen olacaktır, ancak bir sınıf kullanırsak bileşen, sınıf tabanlı bir bileşen olacaktır.

Bileşenler şunlar olabilir:

- Functional Component / Presentational Component / Stateless Component / Dumb Component
- Class Component / Container Component/ Statefull Component / Smart Component

Yukarıdaki bileşenlerin sınıflandırılması, React'in en son sürümü için çalışmaz, ancak önceki tanımı ve önceki sürümlerin nasıl çalıştığını bilmek iyidir.

Öyleyse, tüm JSX'leri bileşenlere değiştirelim. React'teki bileşenler, bir JSX döndüren JavaScript işlevleri veya sınıflarıdır. Bileşen adı büyük harfle başlamalı ve ad iki kelimeyse, CamelCase - iki hörgüçlü bir deve olmalıdır.

#### Big picture of components

Bir önceki bölümde, bir web sitesi veya uygulamanın düğmeler, formlar, metinler, medya nesneleri, başlık, bölüm, makale ve alt bilgiden oluştuğu konusunda anlaşmıştık. Milyon dolarlık bir düğmemiz varsa, bir düğmeye ihtiyacımız olduğunda yeniden oluşturmak yerine bu düğmeyi her zaman kullanabiliriz. Aynı şey giriş alanları, formlar, üstbilgi veya altbilgi için de geçerlidir. Bileşenin gücü buradan gelir. Aşağıdaki şemada üstbilgi, ana ve altbilgi bileşenlerdir. Ana içinde ayrıca bir kullanıcı kartı bileşeni ve bir metin bölümü bileşeni vardır. 

#### JavaScript Function
Bir JavaScript işlevi, normal bir işlev veya bir ok işlevi olabilir. Bu işlevler tam olarak aynı değildir, aralarında küçük bir fark vardır.

```
const getUserInfo = (firstName, lastName, country, title, skills) => {
  return `${firstName} ${lastName},  a ${title} developer based in ${country}. He knows ${skills.join(
    ' '
  )} `
}
// When we call this function we need parameters
const skills = ['HTML', 'CSS', 'JS', 'React']
console.log(
  getUserInfo('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer', skills)
)
```

#### JavaScript Class 

Sınıf, bir nesnenin planıdır. Farklı nesneler oluşturmak için bir sınıfı başlatıyoruz. Ek olarak, ebeveynin tüm yöntemlerini ve özelliklerini devralarak çocuklar oluşturabiliriz.

```
class Parent {
  constructor(firstName, lastName, country, title) {
    // we bind the params with this class object using this keyword
    this.firstName = firstName
    this.lastName = lastName
    this.country = country
    this.title = title
  }
  getPersonInfo() {
    return `${this.firstName} ${this.lastName},  a ${this.title} developer base in ${this.country} `
  }
  parentMethod() {
    // code goes here
  }
}

const p1 = new Parent('Asabeneh', 'Yetayeh', 'Finland', 'FullStack Developer')

class Child extends Parent {
  constructor(firstName, lastName, country, title, skills) {
    super(firstName, lastName, country, title)
    this.skills = skills
    // we bind the child params with the this keyword to this child object
  }
  getSkills() {
    let len = this.skills.length
    return len > 0 ? this.skills.join(' ') : 'No skills found'
  }
  childMethod() {
    // code goes here
  }
}

const skills = ['HTML', 'CSS', 'JS', 'React']

const child = new Child(
  'Asabeneh',
  'Yetayeh',
  'Finland',
  'FullStack Developer',
  skills
)
```


## Fifth Day of React

### Props

Props, React'te özellikler anlamına gelen ve bir bileşenden diğerine ve çoğunlukla ana bileşenden alt bileşene veri aktarmak için kullanılan özel bir anahtar kelimedir. Props'ın bir veri taşıyıcısı veya veri taşıma aracı olduğunu söyleyebiliriz.

## Sixth Day of React

### Mapping Arrays

Dizi, birçok türde sorunu çözmek için en sık kullanılan veri yapısıdır. React'te, bir dizinin her bir öğesine belirli bir HTML öğesi ekleyerek bir diziyi JSX listesine değiştirmek için map'i kullanırız.

## Seventh Day of React

### Class Components
Basite indirgemek gerekirse React Component ‘leri tüketici arayüzünü şekillendiren, özel görevleri olan, class ya da özellik olarak tanımlanmış, geriye react elementleri döndüren , opsiyonel olarak parametre konum tasarım taşlarıdır.

#### Class-Based Components  (Eğitim sınıfı Tabanlı)
React kütüphanesi içindeki “Component” class ‘ından extend olan javascript class ‘ları olarak tanımlayabiliriz. Bu class ‘lar React Component ‘ten extend olduğundan Component Lifecycle süreçlerini de barındırır.

#### Functional Components  (Fonksiyonel)
Basit olarak react elementleri (JSX) dönen javascript fonksiyonlarıdır. Dummy, dumb component olarak da isimlendirildiği oluyor. Bunun sebebi genel olarak state ‘e erişemediklerindendir. Ancak bu tasarım v.16.8 ile birlikte daha ziyade değişmiş oldu. {artık} fonksiyonel component ‘ler de state ‘e erişim elde edin sağlayabiliyor.

v.16.8 ile birlikte aralarında syntax haricinde pek de bir varyasyon kalmayan component çeşitlerini faydalanmak amacınıza, keyfinize ve yapacağınız işe bağlı olarak seçmek kesinlikle size kalmış. 

#### React Functional ve Class Components Farkları ve Kullanımı

Her ikisi de aynı görevi yapmakta olmasına rağmen Class component yerine functional component kullanmak daha çok tavsiye edilir. Nedenleri ise;
- Yazması, okunması ve test edilmesi kolaydır.
- Daha az kod yazmanızı sağlar.
- Daha kolay pratik yapmanızı sağlar.
- Performans açısından daha verimlidir.

Class component örneği
```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
 
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
```

Functional component örneği ise şu şekildedir;

```
import React, { useState } from 'react';
 
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Eighth Day of React

## States

States, belirli bir zamanda birinin veya bir şeyin içinde bulunduğu özel durumdur .

Bazı hallerin bir şey olduğunu görelim - Mutlu musun yoksa üzgün müsün? - Işık açık mı kapalı mı? Mevcut mu yoksa yok mu? - Dolu mu boş mu? Örneğin, mutluyum çünkü 30 Days Of React meydan okumasını yapmaktan keyif alıyorum. Senin de mutlu olduğuna inanıyorum.

Durum, durum verileri değiştiğinde bileşenin yeniden oluşturulmasına izin veren tepki veren bir nesnedir.

### How to set a state | Durum nasıl ayarlanır

Sınıf tabanlı bir bileşenin yapıcısının içinde veya yapıcısının dışında bir başlangıç ​​durumu belirledik. Durumu doğrudan değiştirmiyoruz veya mutasyona uğratmıyoruz, ancak yeni bir duruma sıfırlamak için setState() yöntemini kullanıyoruz. . Aşağıda göreceğiniz gibi durum nesnesinde 0 başlangıç ​​değeri ile saydık. this.state ve özellik adını kullanarak durum nesnesine erişebiliriz. Aşağıdaki örneğe bakın.

```
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  }
  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count} </h1>
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```
## Day Tenth of React
### React Project Klasör Yapısı ve Dosya Adlandırma |React Project Folder Structure and File Naming

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

## Events

### What is the yEvent

Event, HTML elementlerinde gerçekleşen olaylardır. Bir event tarayıcının yahut kullanıcının neden olduğu bir şey olabilir. Ve biz javascript yardımı ile bu event ‘leri (olayları) yakalayabiliriz. Örnekleyecek olursak

En bilinen örneklerdir ki:

- Kullanıcı butona tıkladığında
- Kullanıcı tarafından klavyeden tuşa basıldığında (onkeydown)
- HTML elementinden değişikiklik olduğunda (onchange)
- Sayfanın yüklenmesi tamamlandığında (onLoad)

React'te olayları işlemek, saf JavaScript kullanarak DOM öğelerindeki öğeleri işlemeye çok benzer. React'te olay işleme ile saf JavaScript arasındaki sözdizimi farklarından bazıları:
- React olayları, küçük harf yerine camelCase kullanılarak adlandırılır.
- JSX ile, bir dizge yerine olay işleyicisi olarak bir işlevi iletirsiniz.

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

HTML ve React olayı arasındaki diğer bir fark, React'te varsayılan davranışı önlemek için false döndürememenizdir. ÖnlemeDefault'u açıkça çağırmalısınız. Örneğin, düz HTML ile, yeni bir sayfa açmanın varsayılan bağlantı davranışını önlemek için şunları yazabilirsiniz:

 HTML için; 
 ```
 //a elementine tıklandığında yeni bir pencerede açılmasını engellemek için return false kullanırız.
 <a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>
 ```
Ancak, React'te aşağıdaki gibi olabilir:
 ```
const App = () => {
 function handleClick(e) { 
   //e elementi yapay bir eventtir. preventDefault ile 'a' elementinin varsayılan davranışı olan yeni bir sekmede belirtilen url'i açmasını engelledik.
   e.preventDefault(); 
   alert('Linke tıklandı.'); 
 } 
 return ( 
   <a href="#" onClick={handleClick}> Test </a> 
 ); 
}
 ```
Olay işleme çok geniş bir konudur ve bu meydan okumada en yaygın olay türlerine odaklanacağız. Aşağıdaki fare ve klavye olaylarını kullanabiliriz. onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onDrag, onChange,onBlur,onInput, onSubmit

## Twelfth Day of React

### Forms 

Form, bir kullanıcıdan veri toplamak için kullanılır. Arada bir, bilgilerimizi bir kağıda veya bir web sitesine doldurmak için form kullanırız. Kayıt olmak, oturum açmak veya bir işe başvurmak için farklı form alanlarını doldurarak verilerimizi uzak veritabanına gönderiyoruz. Basit metin, e-posta, şifre, telefon, tarih, onay kutusu, radyo düğmesi, seçenek seçimi ve metin alanı alanı gibi bir formu doldurduğumuzda farklı form alanları ile karşılaşıyoruz. Şu anda, HTML5 oldukça fazla alan türü sağlamaktadır. Aşağıdaki mevcut HTML5 giriş türlerine bir göz atabilirsiniz.

```
<input type="text" />
<input type="number" />
<input type="range" />

<input type="email" />
<input type="password" />
<input type="tel" />

<input type="checkbox" />
<input type="radio" />

<input type="color" />

<input type="url" />
<input type="image" />
<input type="file" />

<input type="hidden" />

<input type="date" />
<input type="datetime-local" />
<input type="month" />
<input type="week" />
<input type="time" />

<input type="reset" />
<input type="search" />
<input type="submit" />
<input type="button" />
```
Bir formdan veri almak için başka bir HTML alanı textarea ve seçeneklerle seçme öğeleridir.

```
<textarea>Please write your comment ...</textarea>

<select name="country">
  <option value="">Select your country</option>
  <option value="finland">Finland</option>
  <option value="sweden">Sweden</option>
  <option value="denmark">Denmark</option>
  <option value="norway">Norway</option>
  <option value="iceland">Iceland</option>
</select>
```
Artık bir formdan veri almak için ihtiyaç duyduğumuz alanların çoğunu biliyorsunuz. Metin alanına sahip bir girişle başlayalım. Önceki gün, farklı olay türleri gördük ve bugün, bir giriş alanı verisi değiştiğinde tetiklenen onChange olay türüne daha fazla odaklanacağız. Giriş alanı varsayılan olarak giriş verilerini depolamak için bir belleğe sahiptir, ancak bu bölümde durumu kullanarak bunu kontrol ediyoruz ve kontrollü bir giriş uyguluyoruz. Bugün kontrollü bir girdi uygulayacağız. Kontrolsüz girişi ayrı bir bölümde ele alacağız.

#### Bir giriş alanından veri alma |  Getting data from an input field

Şimdiye kadar giriş alanından herhangi bir veri alamadık. Şimdi, bir girdi alanından nasıl veri alınacağını öğrenmenin zamanı geldi. Kontrollü bir girdiden veri almak için bir girdi alanına, olay dinleyicisine (onChange) ve duruma ihtiyacımız var. Aşağıdaki örneğe bakın. Giriş etiketinin altındaki h1 öğesi, girişe ne yazdığımızı gösterir. 
Giriş öğesinin değer, ad, kimlik, yer tutucu, tür ve olay işleyici gibi birçok özelliği vardır. Ek olarak, girdi alanı kimliğini ve etiketin htmlFor'unu kullanarak bir etiket ve bir girdi alanını bağlayabiliriz. Etiket ve girdi bağlantılıysa, etikete tıkladığımızda girdiye odaklanacaktır. Aşağıda verilen örneğe bakın.