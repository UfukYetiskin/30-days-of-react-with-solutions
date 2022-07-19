import {useState} from  'react'


const Station = () => {
    const [route, setRoute] = useState({
        route : '',
        stations: [],
        
    })
    const handleRoute = (e) => {
        setRoute(route => ({
            ...route, route: e.target.value
        }))
    }
    const addStation = () => {
        setRoute({
            ...route, 
            stations : [...route.stations, {name : '', lat: '', lon: '', errors: {}}]})
    }
    const handleStation = (value, name, key) => {
        setRoute(route => ({
            ...route,
            stations : route.stations.map((station, i) => {
                if(key ===i){
                    station[name] = value
                    let current = route.stations.find((r, index)=> r[name] === value && key !== index )
                    if(current){
                        station.errors[name] = `${name} değeri unique olmalı`
                    }else{
                        delete station.errors[name]
                    }
                }
                return station
            })
        }))
    }
    //route stati içerisindeki route özelliği eğer boş değilse button disable olmayacak
    const enbaled = route.route  && route.stations.every(
        station => Object.entries(station).every(
            ([key, value]) => key === 'errors' ? Object.values(value).length === 0 : value
            )
    )
    return(
        <div style={{border : '2px solid orange ' , padding :'2%', margin : '0 auto'}}>
            <h1>This Component is Homework. Componenet's about of add station with only one state</h1>
            <div>
                <input type="text" value={route.route} onChange={handleRoute} placeholder="Durak Ekle" />
                <button onClick={addStation}>Yeni Durak Ekle</button>
            </div><br></br>
            <div>
                {route.stations.map((station, key)=> (
                    <div>
                        <input type="text" onChange={(e) => handleStation(e.target.value, 'name', key)} placeholder='Durak İsmi'/>
                        <input type="text" onChange={(e) => handleStation(e.target.value, 'lat', key)} placeholder='Enlem'/>
                        <input type="text" onChange={(e) => handleStation(e.target.value, 'lon', key)} placeholder='Boylam'/>
                    </div>
                ))}
            </div>
            <br/>
            <div>
                <button disabled={!enbaled}>Kaydet</button>
            </div>
            <code>{JSON.stringify(route, null, 2)}</code>
        </div>
    )
}

export default Station