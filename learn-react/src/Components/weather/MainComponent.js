import { WheatherProvider } from "./WeatherContext"
import Weather from "./Wheather"

const MainComponent = () =>{
    return(
        <div>
            <WheatherProvider>
                <Weather/>
            </WheatherProvider>
        </div>
    )
}
export default MainComponent