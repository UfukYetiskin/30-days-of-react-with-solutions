import {useState, createContext, useContext} from 'react'
import SiteContext from './SiteContext'


//Header Componenti
//Propslar ile Context componenti üzerinden state'leri aldık ve istediğimiz fonksiyonları atadık
const Header = () => {
    return(
        <div>
            Header <br></br>
            <SwitchTheme />
            <SwitchLanguage />
        </div>
    )
}

//Footer Component
//Propslar ile Context componenti üzerinden state'leri aldık ve istediğimiz fonksiyonları atadık
const Footer = () =>  {
    return(
        <div>
            Footer<br></br>
            <SwitchTheme />
            <SwitchLanguage />
        </div>
    )
}

const SwitchTheme = () => {
    //Parent conponent içerisinde createContext ile tuttuğumuz propları  data adıyla bir objede Home componenti ile paylaştık. Burada üstten en alta doğru birbirine bağlı olan bütün componentler useContext Hook ile bu propslara erişebilecek.
    const {theme, setTheme} = useContext(SiteContext)
    return(
        <div>
             Mevcut Teme = {theme} <br/>
            <button onClick={(e) => setTheme(theme === 'light' ? 'dark' : 'light')}>Temayı Değiştir</button>
        </div>
    )
}
//Bu component ile language state'ini tutarız ve istediğimiz fonksiyonları sağlarız.
const SwitchLanguage = () => {
    //useContext hooku ile propsları çekiyoruz.
    const {language, setLanguage} = useContext(SiteContext)
    return(
        <div>
            Mevcut Dil : {language}<br></br>
            <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')} >Dili Değiştir</button>
        </div>
    )
}
//Footer ve Header componentlerini tutacak bir component
const Home = ({theme, setTheme, language, setLanguage}) => {
    return(
        <div>
            <Header />
            <Footer />
        </div>
    )
}

//Context component'i parent görevi görmektedir.
export default function ContextHook (){

    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('tr')

    const data = {
        theme,
        setTheme,
        language,
        setLanguage
    }

    return(
        <SiteContext.Provider value={data}>
            <Home  />
        </SiteContext.Provider>
    )
}
