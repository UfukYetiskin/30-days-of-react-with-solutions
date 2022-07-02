import { useEffect, useState } from "react"

const HomeWork = () => {

    const [cats, setCats] = useState(false)

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => setCats(data))
            .catch(err => console.log(err))
    }, [])


    return(
        <div>
            <h1>This work about the Cats API</h1>
            <ul>
                {cats.map((cat, index) => (
                    <li style={{listStyleType : 'none', marginTop : '5%', marginLeft : '5%'}} key={index}>
                        <img src={cat.url}  alt={cat.name}/>
                        <p>{cat.name}</p>
                        <p>{cat.origin}</p>
                        <p>Temperament: {cat.temperament}</p>
                        <p>Life Span: {cat.life_span} </p>
                        <p>Description: {cat.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeWork