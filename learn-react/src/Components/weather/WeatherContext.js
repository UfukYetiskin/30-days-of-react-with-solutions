import {createContext, useState, useEffect} from 'react'

const WheatherContext = createContext();

export const  WheatherProvider = ({children}) => {
    const [data, setData] = useState(false)
    const [city, setCity] = useState('Ankara')
    const apiKey = '0e8b2c4e5a41d2b3b81897c77b9e4d88'
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`

    const values = {
        data,
        setData,
        city,
        setCity,
    }
    useEffect(()=> {
        fetch(url)
            .then((res)=> res.json())
            .then((data) => setData(data))
    }, [city])
    console.log(data)
    console.log(city)
    return(
        <WheatherContext.Provider value={values}>
            {children}
        </WheatherContext.Provider>
    )
}

export default WheatherContext;