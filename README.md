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