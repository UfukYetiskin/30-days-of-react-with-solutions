import { useContext } from "react"
import ThemeContext from "./ThemeContext"

//custom Context Hook
//import {useTheme} from "./ThemeContext"

const Button = () => {
    //custom Context Hook
    //const {theme, setTheme} = useTheme();


    //Second Context içerisinde Provide ettiğimiz value değeri bu şekilde data değişkeni ile aldık.
    const {theme, setTheme, textColor, setTextColor} = useContext(ThemeContext);
    //const data = useContext(ThemeContext);
    //console.log(data)
    const handleonClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setTextColor(textColor === "white" ? 'black' : "white")
    }
    return(
        <div style={{backgroundColor : `${theme}`, color : `${textColor}`}}>
           Button Component
           {/*
           Şeklinde de alınabilirdi.
           Active Theme : {data.theme}*/}
           Active Theme : {theme}

           <button onClick={handleonClick}>Change Theme</button>
        </div>
    )
}

export default Button