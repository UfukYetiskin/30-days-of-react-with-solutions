import { useState } from "react"
/* 
React.memo bir üst katman bileşenidir. Eğer fonksiyon bileşeniniz 
aynı prop'lar ile aynı sonucu render ediyor ise, bazı durumlarda 
sonucu ezberleyerek performans artışı sağlaması için onu bir 
React.memo çağrısına sarabilirsiniz.
*/


//Header componenti compile edilince sayfa hemen render ediliyor.
//Her butona bastığımızda tekrardan render ediliyor. Bu da gereksiz bir render oluyor.
const Header = () => {
    return(
        <div>
            Header
        </div>
    )
}
//Bu gereksiz renderdan kurtulmak için başka sayfada oluşturulmuş olan header componentini bu şekilde export ederiz.
//export default React.memo(Header)
//React.memo(Header) olarak çıkarttığımızda Header componenti içerisindeki propertyler ne zaman değişirse o zaman render edilir hale geldi.
const ReactMemo = () => {
    const [counter, setCounter] = useState(0)
    

    
    return(

        <div style={{border: '3px solid orange', margin: '2%', padding : '2%'}}>
            <h1>This  component includes React.Memo</h1>
            <Header/>
            <div>
                <button onClick={()=> setCounter(counter + 1)} >İncrease</button>
                <br></br>
                <span>{counter}</span>
            </div>
            
        </div>
    )
} 

export default ReactMemo