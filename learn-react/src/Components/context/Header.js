import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Header = () => {
    //const {theme, setTheme} = useContext(ThemeContext)
    const data = useContext(ThemeContext)

    const handleonClick = () => {
        data.setTheme(data.theme === 'dark' ? 'light' : 'dark')
        data.setTextColor(data.textColor === "white" ? 'black' : "white")
    }
    return(
        <div style={{backgroundColor : `${data.theme}`, color : `${data.textColor}`}}>
            <h3>Header Component</h3>
             Active Theme :{data.theme}
            <button onClick={handleonClick}>Change Theme</button>
        </div>
    )
}
export default Header