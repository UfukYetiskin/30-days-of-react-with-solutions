import { createContext } from "react";

const context = createContext()

export default context

//Eğer Parent compoenent içerisinde Provider etmek istemiyorsak burada da yapabilriz.
/*
cont Provider = ({children}) => {
    const [theme, setTheme] = useState('light)
    const [language, setLanguage] = useState('tr')

    const data = {
        theme,
        setTheme,
        language,
        setLanguage
    }
    return(
        <contect.Provider value={}>
            {children}
        </contect.Provider>
    )

}


export default Provider
*/