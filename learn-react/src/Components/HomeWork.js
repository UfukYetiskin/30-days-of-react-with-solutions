import { useEffect, useState } from "react"

const HomeWork = () => {

    const [cats, setCats] = useState(false)
    const [filterCat, setFilterCats] = useState([])

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => setCats(data))
            .catch(err => console.log(err))
    }, [])
    const handleClick = (e) => {
        
        const buttonValue = e.target.value
        let filterCats = cats && cats.filter((cat) => cat.origin === buttonValue).map((cat) => {return cat})
        setFilterCats(filterCats)
        if(buttonValue === 'All'){
           filterCats =  cats && cats.map((cat) => {return cat} )
           setFilterCats(filterCats)
        }else{
            setFilterCats(filterCats)
        }
        console.log(buttonValue)
        console.log(filterCat)
    }
    return(
        <div style={{border : '1px solid black', paddin : '1%'}}>
            <h1>This work about the Cats API</h1>
            <div style={{width : '50%' , marginLeft : '7%'}}>
                {cats && cats.map((cat, index) => (
                    <button onClick={handleClick} value={cat.origin}  style={{margin : '10px', padding : '10px', borderRadius : '10px', fontSize : '16px'}} key={index}>
                        {cat.origin}
                    </button>
                ))}
                <button style={{margin : '10px', padding : '10px', borderRadius : '10px', fontSize : '16px'}} value="All" onClick={handleClick}>All</button>
            </div>
            <ul value={filterCat}>
                {filterCat && filterCat.map((cat, index) => (
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