import { WheatherProvider } from "./WeatherContext"
import Weather from "./Wheather"

const MainComponent = () =>{
    return(
        <div style={{border : "2px solid orange", padding : "2%", margin : '2%'}}>
            <WheatherProvider>
                <Weather/>
            </WheatherProvider>
        </div>
    )
}
export default MainComponent