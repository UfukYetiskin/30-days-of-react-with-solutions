import { useEffect, useState } from "react"

export default function LifeCycle(){

    const [count, setCount] = useState(1);


    useEffect(() => {
        //Component ilk render edilidği anda console'a bir kere yazdırır.
       console.log('Component render olduğunda çalışır.') 
    })

    useEffect(() => {
        //Bu satırda dependets array içerisine tanımlanmış değişken ya da statete bir değişiklik olduğunda console çıktı verir.
        console.log('Depenteds içerisindeki state değişti.')
        
        //ilgili component öldürüldüğünde çalışır. Örneğin sayfa yenilendiğinde öldürülür.
        return()=>{
            console.log('component öldürülüdğünde çalışır.')
        }
    }, [])

    //State ile tutulan veri her değiştiğinde component tekrardan render edilir.  useEffect ile statemizi de alabiliriz
    useEffect(() => {
        console.log('Count değeri değişti: ', count)
    },[count])


    //API verilerini getir
    /*Bir eylemi bir kez yapmak istediğimizde, özellikle uygulama yüklendiğinde veya 
    bağlandığında, useEffectbunu yapmak için kullanabiliriz. Bu durumda, uygulama 
    yüklendiğinde bağımlılık fetch()olarak boş bir dizi kullanarak bir GET isteğini 
    tetikliyoruz.useEffect */

    //burada api ile çekilecek kişinin verileri tutulacak. Bu veri json tipinde olduğu için boş bir obje oluşturduk
    const [bio ,setBio] = useState({})

    //render olduğunda çalışır ve bize datayı verir.
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://swapi.dev/api/people/1/')
            const data = await response.json()
            console.log(data)
            setBio(data)
        }
        fetchData();
    }, [])


    //Deneme 
    const [person, setPerson] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://swapi.dev/api/people/${count}/`)
            const data = await res.json()
            console.log(data)
            setPerson(data)
        }
        fetchData()
    }, [count])
    return(
        <div style={{border: '1px solid black', padding : '1%'}}>
            <h1>This div includes Life Cycle Chapter </h1>
            <div>
                <button onClick={() => setCount(count + 1)}>Increase</button>
                <span style={{padding: '1%', marginLeft :'1%'}}>{count}</span>
            </div>
            <div>
                <h3>Here is includes Fetch API Data</h3>
                <pre>{JSON.stringify(bio, null, '\t')}</pre>
                <div>bio: {bio.name}, {bio.gender}</div>
            </div>
            <div>
            <pre>{JSON.stringify(person, null, '\t')}</pre>
            </div>
        </div>
    )
}
