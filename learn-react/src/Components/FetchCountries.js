import { useState, useEffect } from "react"

const FetchCountries =() => {
    const [countries, setCountries] = useState(false)

    useEffect(() => {
        fetch('https://restcountries.com/v3/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(err => console.log(err))
            console.log(countries)
    },[])
    

    function listLangs (langs){
        for(const lang  in langs){
            return langs[lang]
        }
    } 
    return(
        <div>
            <h1 style={{color : 'orange' ,fontWeight : 'bold'}}>World Countries Data</h1>
            <h3>Currently, we have {countries.length}</h3>
            <ul style={{display : 'flex', flexWrap : 'wrap', backgroundColor : 'whitesmoke', width : '100%'}}>
                {countries && countries.map((country, index) => (
                    <li style={{width: '22%', listStyleType : 'none' ,backgroundColor : 'white', margin: '1%'}} key={index}>
                        <img style={{justifyContent:'center',width : '75%', padding : '2%', margin :'1%'}} src={country.flags[0]} alt={country.name.common}  />
                        <p style={{textAlign: 'center'}}>{country.name.common}</p>
                        <p style={{textAlign: 'center'}}><strong>Capital: </strong>{country.capital}</p>
                        <p style={{textAlign: 'center'}}><strong>Languages: </strong>{listLangs(country.languages)}</p>
                        <p style={{textAlign: 'center'}}><strong>Population: </strong>{country.population}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FetchCountries