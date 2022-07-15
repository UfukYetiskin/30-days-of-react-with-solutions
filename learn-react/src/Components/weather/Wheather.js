import { useContext} from "react"
import WheatherContext from "./WeatherContext"



const Weather = () => {
    const { data, setData, city, setCity} = useContext(WheatherContext)
    console.log(city)
 
    const keyDown = (e) => {
        if(e.key === 'Enter'){
            setCity(e.target.value)
        }
    }
    return(
    <div>
        <h1>Weather Component</h1>
        <hr/>
        <div>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Ankara" ? "Ankara" : "")}>Ankara</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "İstanbul" ? "İstanbul" : "")}>İstanbul</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "İzmir" ? "İzmir" : "")} >İzmir</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Antalya" ? "Antalya" : "")} >Antalya</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Diyarbakır" ? "Diyarbakır" : "")}>Diyarbakır</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Erzurum" ? "Erzurum" : "")} >Erzurum</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Trabzon" ? "Trabzon" : "")} >Trabzon</button>
        </div>
        <div>
            {/* <h3>Wheater</h3>
            <input 
                type="text"
                
                onKeyDown={keyDown}
            /> */}
            <div style={{display : 'flex', flexDirection : 'column',  textAlign: 'center'}}>
                {/* <p>Ülke: {data.sys.country}</p>
                <p>Sehir: {data.name}</p>
                <p>Sıcaklık: {data.main.temp}</p>
                <p>Hissedilen Sıcaklık: {data.main.feels_like}</p> */}
                <ul style={{width : '100%' , display : 'flex', flexWrap : 'wrap'}}>
                    {data && data.list.map((info, index) => (
                        <li style={{width : '12%',listStyleType : 'none', border : '1px solid yellow', margin : '1%'}} key={index}>
                            <p>{data.city.name}</p>
                            <p>Sıcaklık: {Math.round(info.main.temp / 10)}</p>
                            <p>Hissedilen Sıcaklık: {Math.round(info.main.feels_like / 10)}</p>
                            <p>Saat: {info.dt_txt}</p>
                        </li>
                    ))}
                </ul>
            
            </div>
        </div>
    </div>
    )

}
export default Weather