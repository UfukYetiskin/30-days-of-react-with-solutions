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
        <div style={{border : '1px solid black', paddin : '1%'}}>
            <h1>This work about the Cats API</h1>
            <ul>
                {cats && cats.map((cat, index) => (
                    <li style={{overflow : 'auto',border : '1px solid black',listStyleType : 'none', marginTop : '5%', marginLeft : '5%', padding : ' 2%', width : '50%'}} key={index}>
                        <img style={{width : '100%'}} src={cat.image}  alt={cat.name}/>
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