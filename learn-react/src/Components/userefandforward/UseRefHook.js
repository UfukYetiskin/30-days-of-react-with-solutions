import React, {useEffect, useRef, useState} from 'react'
//syntax
//const refContainer = useRef(initialValue); {current : initialValue}

//useRef bir component içerisinde component’in tekrar render olmasını tetiklemeden 
//“mutable” değişken tutmamızı sağlayan yapıdır.

//Kullanım alanları;
//1. DOM'a erişmek
//2. Rerenderlar arası bir değişken tutmak
    //Not 1: Referanslar (useRef) mounting esnasında bir kere oluşturulur ve tüm component (lifecycle) süresi boyunca yaşamaya devam eder.
    //Not 2: .current özelliğinin değiştirilmesi component re-rendera neden olmaz
    //Not 3: Referansları güncellemek bir side-effeccttir ve useEffect useLayoutEffect hookları içerde yapılmalıdır.
function UseRefHook() {
    
    //1. DOM'a erişmek örnekleri
    const inputRef = useRef(null); //{current : <input/>}
    useEffect(() => {
      inputRef.current.focus(); //sayfa render edildiğianda direkt olarak useRef ile seçmiş olduğumuz input'a focuslanacaktr
    });

    const focusOnCLick = () => {
        inputRef.current.focus(); //butona tıkladığımızda inputRef olarak seçtiğimiz input focuslanacaktır.
    }


    //2. Rerenderler arası bir değişken tutmak
    const [name, setName] = useState("");
    const countRef = useRef(0)
    useEffect(() => {
        // setCount(count + 1);//burada sonsuz döngüye giriyor.
        countRef.current = countRef.current + 1; //Burada component kaç kere render edildiyse countRef + 1 olacaktır. Önreğin input içerisine 1 yazdığımızda countRef 1 artacaktır. Her harf eklediğimizde component render olacağı için + 1 olur. counRef'in current değeri arttsa da component rerender edilmez
    })
  return (
    <div>
         {/* DOM'a erişmek örneği */}
         <input 
            type="text"
            ref={inputRef}
         />
         <button onClick={focusOnCLick}>Focus Input</button>
          <br></br>
         {/* Rerenderler arası bir değişken tutmak */}
         <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
         />
         {`Component rerender ${countRef.current}`}
    </div>
  )
}

export default UseRefHook