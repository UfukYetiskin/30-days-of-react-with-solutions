import { useContext } from "react"
import WheatherContext from "./WeatherContext"



const Weather = () => {
    const data = useContext(WheatherContext)

    return(
    <div>
        <h1>Weather Component</h1>
        {data.weather}
    </div>
    )

}
export default Weather