import {createContext} from 'react'

const WheatherContext = createContext();

export const  WheatherProvider = ({children}) => {
    const weather = "weather"
    const values = {
        weather
    }
    return(
        <WheatherContext.Provider value={values}>
            {children}
        </WheatherContext.Provider>
    )
}

export default WheatherContext;