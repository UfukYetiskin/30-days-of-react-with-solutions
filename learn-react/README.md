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