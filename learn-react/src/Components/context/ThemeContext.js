
import { createContext, useState, useEffect, useContext } from "react"

//ThemeContext ile dataları tutacak bir state yaratmış olduk.
//Bunun sayesinde componentler içerisinde yukarıdan aşağı veri akışını engellemeyi başarmış oluruz ve istediğimiz yerden veri çekebilir hale geliyoruz.
//ThemeContext.Provider ile veri iletimini value özelliği ile istenilen verinin aktarılmasını sağlıyoruz.
const ThemeContext = createContext();

{/*ThemeProvider componenti yaratarak parent component içerisindeki karmaşıklığı gidermiş olduk.
ThemeProvider componenti parent componenti içerisinde içine yazılan bütün cihld componentleri 
children verisi ile elde edecektir.
*/}

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('black')
    const [textColor, setTextColor] = useState('white')
    const values = {
        theme,
        setTheme,
        textColor,
        setTextColor
    }
    useEffect(() => {
        console.log(theme)
    }, [theme])
    return(
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
        
    )
}
//custom Context Hook
//const useTheme = () => useContext(ThemeContext)
//export  {useTheme, ThemeProvider}
export default ThemeContext