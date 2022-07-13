import ThemeContext from "./ThemeContext"
import Button from "./Button"
import { ThemeProvider } from "./ThemeContext"
import { UserProvider } from "./UserContext"
import Header from "./Header"
import Profile from "./Profile"



const SecondContext = () => {
    return(
        <div style={{border : '3px solid orange', padding : '2%' , margin : '2%'}}>
            <h1>This component includes second example of Context API</h1>
            
            {/*ThemeContext.Proiver içerisinde çağrılan bütün componentler ThemeContext'ten provide edilen bütün proplar/stateler göndeririz. */}
            <ThemeProvider>
                <UserProvider>
                    <Profile></Profile>
                </UserProvider>
                <Button></Button>
                <Header></Header>
            </ThemeProvider>
        </div>
    )
}

export default SecondContext