import { useContext} from "react"
import WheatherContext from "./WeatherContext"



const Weather = () => {
    const { data, setData, city, setCity} = useContext(WheatherContext)
    console.log(city)
    return(
    <div>
        <h1>Weather Component</h1>
        <hr/>
        <div>
            <button onClick={() => setCity(city !== "Ankara" ? "Ankara" : "")}>Ankara</button>
            <button onClick={() => setCity(city !== "İstanbul" ? "İstanbul" : "")}>İstanbul</button>
            <button onClick={() => setCity(city !== "İzmir" ? "İzmir" : "")} >İzmir</button>
            <button onClick={() => setCity(city !== "Antalya" ? "Antalya" : "")} >Antalya</button>
        </div>
        <div>
            <h3>Burada api key hata veriyor.</h3>
        </div>
    </div>
    )

}
export default Weather