import { useState, useEffect } from "react"

const FetchWork = () => {
    
    const [data, setData] = useState(false)

    useEffect(() => {
        
        fetch('https://api.thecatapi.com/v1/breeds')
         .then(res => res.json())
         .then(data => setData(data))
         .catch(err => console.log(err))
    }, [])



    return(
        <div style={{backgroundColor : 'lavender', padding : '2%' }}>
            <h1 style={{marginLeft : '40%'}}>30 Days Of React</h1>
            <h2 style={{marginLeft : '42%'}}>Cats Paradise</h2>
            <ul>
            on average a cat can weight about {data && data.map((element, index) => <li key={index}>{element.life_span}</li>)}
            </ul>
        </div>
    )
}

export default FetchWork