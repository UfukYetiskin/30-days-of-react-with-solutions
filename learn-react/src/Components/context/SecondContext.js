import ThemeContext from "./ThemeContext"
import Button from "./Button"
import { ThemeProvider } from "./ThemeContext"
import Header from "./Header"


const SecondContext = () => {
    return(
        <div style={{border : '3px solid orange', padding : '2%' , margin : '2%'}}>
            <h1>This component includes second example of Context API</h1>
            
            {/*ThemeContext.Proiver içerisinde çağrılan bütün componentler ThemeContext'ten provide edilen bütün proplar/stateler göndeririz. */}
            <ThemeProvider>
                <Button></Button>
                <Header></Header>
            </ThemeProvider>
        </div>
    )
}

export default SecondContext