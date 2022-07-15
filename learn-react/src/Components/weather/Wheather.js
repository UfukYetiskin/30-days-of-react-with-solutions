import { useContext, useState} from "react"
import WheatherContext from "./WeatherContext"



const Weather = () => {
    const { data, setData, city, setCity} = useContext(WheatherContext)
    console.log(city)
    const [cityValue, setCityValue] = useState('')
 
    const handleClick = () => {
        setCity(cityValue)
        setCityValue('')
    }
    return(
    <div>
        <h1>Weather Component</h1>
        <hr/>
        {/* <div>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Ankara" ? "Ankara" : "")}>Ankara</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "İstanbul" ? "İstanbul" : "")}>İstanbul</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "İzmir" ? "İzmir" : "")} >İzmir</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Antalya" ? "Antalya" : "")} >Antalya</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Diyarbakır" ? "Diyarbakır" : "")}>Diyarbakır</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Erzurum" ? "Erzurum" : "")} >Erzurum</button>
            <button style={{padding : '1%', margin : '3%'}} onClick={() => setCity(city !== "Trabzon" ? "Trabzon" : "")} >Trabzon</button>
        </div> */}
        <div  style={{backgroundColor : 'lightblue', padding : '2%', width : '95%'}}>
            <div style={{textAlign: 'center', backgroundColor : 'lightblue', padding : '2%'}}>
            <h1>Wheater</h1>
            <input 
                type="text"
                value={cityValue}
                onChange={(e)=> setCityValue(e.target.value)}
            />
            <button onClick={handleClick}>Göster</button>
            </div>
            <div style={{display : 'flex', flexDirection : 'column',  textAlign: 'center'}}>
                {/* <p>Ülke: {data.sys.country}</p>
                <p>Sehir: {data.name}</p>
                <p>Sıcaklık: {data.main.temp}</p>
                <p>Hissedilen Sıcaklık: {data.main.feels_like}</p> */}
                <ul style={{width : '100%' , display : 'flex', flexWrap : 'wrap'}}>
                    {data && data.list.map((info, index) => (
                        <li style={{width : '12%',listStyleType : 'none', border : '1px solid yellow', margin : '1%', backgroundImage : `url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREhMSExISERUWGBYXGBcYDxIWGRUYGBgXFxUVFhgdHiogGBolGxYWITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi8lHyUtLS81KzUvLS01LS0tLS0tLTAtKy0tKy0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOkA2AMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAgMBBAUIBgf/xAA6EAABAwIDBQUHAwQBBQAAAAABAAIRAyESMVEEQWFxkQUTIoGhBjJSkrHB0RTh8EJicoIjFSQzQ/H/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAYF/8QAIhEAAwEAAgICAwEBAAAAAAAAAAERAgMSITETYQQyQSJR/9oADAMBAAIRAxEAPwDQQsoX158AYQsoQGELKEBhCyhAYQsoQGELKEBhCyhAYQsoQGELKEBhCyhAYQsoQGELKEBhCyhAYQsoQDITQsQoahhCzCzCCCoTQiEEFQmhEIIKhZhZhBBUJoRCCCoTQiEEFQswswggqFmFmEEFQmhEIIKhNCxCCGELMLMIIKhNCIQQVCaFhBB4RCaEQsmoLCITQiEEFhEJoRCCCwiE0IhBBYRCaEQggsIhNCIQQWEQmhEIILCITQiEEFhEJoRCCCwiE0IhBBYRCaEQggsIhNCIQQWEQmhEIILCE0IQQeEQmhELNNwWEQmhEJRBYRCaEQlEFhEJoRCUQWEQmhEJRBYRCaEQlEFhEJoRCUQWEQmhEJRBYRCaEQlEFhEJoRCUQWEQmhEJRBYRCaEQlEFhEJoRCUQWFhPCEog8IhUhELNNwnCIVIRCUQnCIVIRCUQnCIVIRCUQnCIVIRCUQnCIVIRCUQnCIVIRCUQnCIVIRCUQnCIVIRCUQnCIVIRCUQnCIVIRCUQnCIVIRCUQnCIVIRCUQnCynhCUQeEQnhELNOkEhEJ4RCUQSEQnhEJRBIRCeEQlEEhEJ4RCUQSEQnhEJRBIRCeEQlEEhEJ4RCUQSEQnhEJRBIRCeEQlEEhEJ4RCUQSEQnhEJRBIRCeEQlEEhCeEJRCkIhUwowrFOkJwiFTCjClEJwiFTCjClEJwiFTCjClEJwiFTCjClEJwiFTCjClEJwiFTCjClEJwiFTCjClEJwiFTCjClEJwiFTCjClEJwiFTCjClEJwiFTCjClEJwiFTCjClEJwhUwoSiDwiFWEQsU6QlCIVYRCUQlCIVYRCUQlCIVYRCUQlCIVYRCUQlCIVYRCUQlCIVYRCUQlCIVYRCUQlCIVYRCUQlCIVYRCUQlCIVYRCUQlCIVYRCUQlCIVYRCUQlCFWEJRCmFGFUwowrFOsJ4UYVTCjClEJ4UYVTCiEohPCjCqQuvsPs7WqDEYpg5TM9Pys65M5VbN44tbcyjiYUYV9BtPsvVaJa5r+F2ny3LivpkEgggixB3KZ5c6/Vl3w7x+yI4UYVTCjCt05wnhRhVMKMKUQnhRhVMKMKUQnhRhVMKMKUQnhRhVMKMKUQnhRhVMKMKUQnhRhVMKtQ2Ko+7Kb3DUNJHVR6S9lWW/Rq4UYVsV9meyz2ObzaQp4UWqHlr2TwoVMKFaSFcKMK3dk7PqVfcbI3k2A81d3Y77Q+k4ncHkxxNslxfJlOU9C4tNWHKwru7D7PyA6o4tn+kRI5k/RSpdkva4OcW4WkOMEmQCJEcpXcxSTJI0O6Iz0N5zXHl5X6yzvw8K97Ry63s42RheYkSDExvghddmxUQ3CKbI4tB6nNFOrIBO8BD6sAnS64a1vXhs9WcYz5SMUdgoNECmy15LQTPM3Wya265PBauNx+EeZP2CRrjlN8RxRaxnCemHosvLfs0tJekbraoNsjovnvamgJY8ZmQeMZH6+i6mIza+GMyd4Mtm/Arn9tUalQNc0eFomJ8UnO0bgNdVviXXaZz53242j53Cs4Vt1NhqNbiLCBra3MZjzUIXuWqfnPLXslhT0aDnuDWiScgnZTJIAEk5BdnsTZH06hL2keGxkG5I3g6Ss731Rrj4+2khW+zD4k1GA6QY6/suRtOyupuLXCCPXiOC+xfWvF8rAGJzneOC1do2anWIx3LREg7zu0kfdefHNpP/AEerk/Hw1/j2fJYUYV3u0+ymNbipg2zEzbVcqrsz2gFzSAdR/IXozyLS8Hl3xPLjNbCtjZdgq1PcY53GLdTZbvYvZwrP8XutueOgX17AGgAAADIAZLly/kdHF7O3D+L3Vfo+MqdhbQBPdk8nNPoCtB1MgwQQRuIghfocrQ7W7ObWblDx7p+x4Lnj8p3/AEdeT8NS4Z872D2e2q8l12tiRqTkOVivrmmBAsB6L5z2dq4S9ptkeliPULq97iOumlgJdxuYWee62b/GmcePZuVmte0tcA4HcVwq3s0yDheQd0gEcl0TUi8XBAMb5j1un/UDfI8vW0rGXrH6s6bWN/sjmO9mmYbVHYtSBHTP1QuuHoWly8n/AEw+Dif8MbTTinhaLCPCN4BEjp181rNeXe60nW0R5nfwW2+obAZn+EpC8DNzue4ekLnltI66SbNbvhrGsmI4HRQbYkPY5gzbJdhI3WyB/tK6HeCbiXDeGyY3Hhv6KgeCNQtd5/DPS/059fa2sEk+WZPILS2btUGRUETNwJEHcR9123U2kFuEQcxAuvla1LC5zdCR0MLrx9dVQ48vbMaZ2WbXRAs+mB/m1Qd2jSLgL6YrtjhOcei5UL6Tsjs5rAHuEvN/8eA4q764VZMPe3ENTpGLNMclp7XtgaIcHtkixY4WkTeIiOK6P65xuGgjdeCRuPBIH5zcnP8AHJck3fKO2kp/lkdmptJkYQyLxEGcuGX1WKnY+zubDQWnUOJ6glPUefIwdYI4bxYKuzlziTll9/z6KN6XlMLOX4ap8wWOpVP7mHy06EH1W/T7X+Jh4YSD1mF3H7DRJJcwOJzJnSFobf2KwgmnY/DMg8pyK6Lmxr9kc3wbx+rOf/1YmzqYI/yv0IgnzXS2V7ntxNZDd0kCY0An7LkP7OqiJYb5ZH6ZL6CmO7Y0ERAA3ZxlPNXkeUl1JxLTb7ExTqHcG8XEH0BWP07n+FzYbIJkgzBmBGdxvhbBne6PIR+fVZY+eYsVx7M79UPSpNZOFobOgATypyiViHSjVHkAnOATzXMcASL7pxQCTyJy/cQujK1zsrdxc0aAiPUSPIreGkc9psjRIwxuuDobkE+ad998EZH88Fq1uxWEENc4TeCZBPEfdaD69amSwm41AJ4Qd/MyuqS16Zxenn9kdVhGKC5pIvAEZ/1ESSqucdxjylcTZNhqVXSNbvJiDz15LsN7GfF67/IH6zKb65fllx30vCJ1tqZSABOg48TGgQtTbOxajJcD3g354vOc0LWc4a9mNa5MuQ7EqUxIgkGco35g9USiVxh3ozCbk2ndoBl53Kw8G5ab6Wgn6+qxKvs9ObnyH3UfjyVK+BWA8XcY/C062xUiSCC1xJM+IGTcxNjyXZxJKlQAXy5Z8Flbafg2+NNeT55nZjgWklpGISL5Tn+y+glajqRM3wg7syPNWxLW9djHHlZ9Ef0QyDiG6W6A6evFB2PR5A4wY5H8yrykq1cInPcOZsFLovXJM7Ho93mAeiagMMi5uc/5pC13bS8TvjPw2G/4pNuazxxG8SdRwjLmtR/0zVfBY1+MDdAkmN/JM2tqQZEg6j+ELWBwnIxAFpMROe85paYmJFhJuMybkxu39erqO7N/GsF02Wk+3ugzugmAeImI8tVbGp1Ndyowi/qfypOc25baLkREjlrx4JKrjGsEGNYU3VJNpmIHhIicyZ5ZKrJl6NwMduBPT7qTqe9/rkOW481hriBGJ0DK+X585T/qnRDmhw33ueIEZ+akZqom0NOQLeIaW/a6em4m0SRawsjDJABsRM8PytgQOCjYSJGRmCP5wXO7R2Y1HMwgncSASAJESeq68olM6a8jWFpQzRphjQ1tgE+JTlErEOlKYkKcoUhaQpUN7umnPVV7pvwjoke82Az+iwXkXJkb7RHFb8s5qIyNnbxPnkrNsIU5RiUdZVEUlQrO8Q4Cetvt6qkrX2l9xvOnA58st+iuV5Gn4HlLUfA45DmovqbhMzExYa8LJXtDYdGRuczEEST5rp1Ob0VdhHvGeZgdEtWlLfCYNiLyDFx5clSVKkfejKfsJ9Z85QjJU8RmAGk5ycjG4ZlMaL2tsQYiBhIkDjJ3aBZqCSYDZgZtmbmB/NU1F2Y3AwOgkeRkLVZlIRrnHJp54mx6En0WKgLYAcHE7jbmQRkM7XViwZ5ciRPOM1g02xEW8x5zqpS9SJc/Ro/2J9IC2G7ICLnx/F8J0A0+uq169EAYpcIBnxkyN9jInit0OtY+eaaf/BlefJrmm/4QeIcI9bpTT34gXbmh1oOY55XjdzVfEbGAJ0Nx1tOl09SbRuM/t0lSssRANcTE4PNpPIC/qsig+cOIcDBmPuf2zTOeCCADJn+kiCd6sSlYSRhzmtLRkA0jphAWGODicjBgb4sD1unxKG0AWdebAxMkHdbO9+qykabKmGkRYEwR9Dz/ACqYlrtuRbCBkPSeAhZNbQF0ZxH3KQdizngXNkvfDR3yO/CkyTDj5DTnxWe9JyAjKS6OcWKdR2LNqA5XQoVDEO5A8ZsPWPVCdS9hRtDHQ5r2/MLg7uGSxU2huEguZJsIcN/8leSNn2TvHBjWgudYCwk7hzOXNUHZtQsbUFJzmOiHCmSLuLACQLEuEAZmRqFKa+P7PXHfs+JvzBI/am5BzZ5iBxP4Xk5/YtcYf+3qeIEgCi8kBpwukRIgxnqNQrUfZ6u5ned2ym0uDG949lIvdDXQxr4LrOabZyIlKXp9nqOpVaSRjECJ/wCS5MA7jYXGX/1m1WDJzfn/AHXlfaOwNpY4tdstaRUNK2zvIdUBIwNOGHOsbBM/2ertw46Xdy0ul7S0Ng1G4HEjwvmlUhpv4Ve5n4vs9TtrMH9TfmCz37Pib8wXkbu26DoEd23QdAr2HxfZ61mn8QA0FQgdJsnFZgsHNH+wXkfu26DoEd23QdAnYfEet31KZzc0/wCwWW1mCwc0f7BeR+7boOgR3bdB0Cdh8X2eue/Z8TfmCO/Z8TfmC8jd23QdAju26DoE7D4vs9bvqsIILmwbe8EnesZcPGckF8zqbmx3ryX3bdB0CO7boOgTsPi+z13+oZ8TfmCP1DPib8wXkTu26DoEd23QdApS/H9nrv8AUM+JvzBH6hnxN+YLyJ3bdB0CO7boOgSj4/s9bv2tt4cywkku+gCBXY4QSyxyxAjmPIryPgboOgRgboOgV7E+P7PW/fMaRDmwTEYhAsSCNMvVTNRlwSCbxcRckyDuN9+i8mYG6DoFnu26DoE7D4vs9dNrtgS9s/5BSZtLG2LmjODIgibX3FeScDdB0CMLdG9AlHx/Z64/UMcRDhAvMgToB9ZWF5IDG6DoEKUvx/ZWnUc0hzTDmkOB0IMg9Qu272mfMikxsGGAZNYcANM2xEQwXBbck3tHCQodDp0e1Wta1go+FjmubNU4gWOc9mJwaMQDqlWRAkPGWEFbex+09Skazms8dWZJrVO7u0M8VEENqEXLSciZvAXBQkKfTn2zfLiNnpAvD6bv+Srei99So6kIIwnFVf4xcCN8k8/tTtzv6FHZ+6axlDF3MPcSwPe9z2kkeIHEzPLuhGZC5CFIgCEIVICEIQAhCEAIQhACEIQAhCEALIJFwYIyOh3FYQgO2/2jcXB52fZiQZ/8WhYQCTc2ZHIooe0bme7s+zAbwKZAddhAdBuBhsOO+88RCQp13duAte39Ns7Q9pYcNMtMEsMgzYgsEHcNc1lvb0ZbNsm//wBAMSN05R9GtG4zx0JAd3Z/aaowy2mwAWDcTsIbNMhoHAUwJ/udqmZ7VVQABRoCO7uGvB/42ua0Wd7viy3iRkSuAhIC+27Sar3VCILom5OQAz8p81hRQhD/2Q==)`}} key={index}>
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