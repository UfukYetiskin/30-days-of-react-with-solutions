import { useContext} from "react"
import WheatherContext from "./WeatherContext"



const Weather = () => {
    const { data, setData, city, setCity} = useContext(WheatherContext)
    
    const handleClick = (e) => {
        setCity(e.target.value)
    }
    const handleChange =(e) => {
        const sehir = e.target.value
        setCity(sehir)
    }
    return(
    <div>
        <h1>Weather Component</h1>
        <hr/>
        <div>
            <input 
                placeholder="City"
                value={city}
                type="text"
                onChange={handleChange}
            />
            <button onClick={handleClick}>Göster</button>
        </div>
        <div>
            Country: {data.sys.country}<br/>
            City : {data.name}<br/>
            Sıcaklık: {Math.floor(data.main.temp)}<br/>
            Hissedilen Sıcaklık: {Math.floor(data.main.feels_like)}<br/>
        </div>
        <h1>{city}</h1>
    </div>
    )

}
export default Weather