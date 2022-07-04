import {useState, createContext} from 'react'


//Header Componenti
//Propslar ile Context componenti üzerinden state'leri aldık ve istediğimiz fonksiyonları atadık
const Header = ({theme, setTheme, language, setLanguage}) => {
    return(
        <div>
            Header <br></br>
            <SwitchTheme theme={theme} setTheme={setTheme}/>
            <SwitchLanguage language={language} setLanguage={setLanguage}/>
        </div>
    )
}

//Footer Component
//Propslar ile Context componenti üzerinden state'leri aldık ve istediğimiz fonksiyonları atadık
const Footer = ({theme, setTheme, language, setLanguage}) =>  {
    return(
        <div>
            Footer<br></br>
            <SwitchTheme theme={theme} setTheme={setTheme}/>
            <SwitchLanguage language={language} setLanguage={setLanguage}/>
        </div>
    )
}

const SwitchTheme = ({theme, setTheme}) => {
    return(
        <div>
             Mevcut Teme = {theme} <br/>
            <button onClick={(e) => setTheme(theme === 'light' ? 'dark' : 'light')}>Temayı Değiştir</button>
        </div>
    )
}
//Bu component ile language state'ini tutarız ve istediğimiz fonksiyonları sağlarız.
const SwitchLanguage = ({language, setLanguage}) => {
    return(
        <div>
            Mevcut Dil : {language}<br></br>
            <button onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')} >Dili Değiştir</button>
        </div>
    )
}
//context adında createContext metodunu kullaanrak bir component oluşturduk.
const context = createContext();


//Context component'i parent görevi görmektedir.
export default function Context (){

    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('tr')


    return(
        <div style={{border : '1px solid black', padding :' 2%'}}>
            <h1>useContext Hook</h1>
            <Header theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
            <Footer theme={theme} setTheme={setTheme} language={language} setLanguage={setLanguage}/>
        </div>
    )
}
