import { IntlProvider, FormattedMessage, FormattedNumber } from "react-intl";
import React from 'react'
import {useState, useEffect} from 'react'



function LocalizationComponent() {

    //LocalStorage'ta saklanan lang'i çekmek için
    const isLocale = localStorage.getItem('locale')

    //Eğer varsayılan dilimiz ile locale'daki dil ile aynı değilse değiştiririz.
    const defaultLocale = isLocale ? isLocale : navigator.language


    //navigator ile şu an sunucumuzdaki varsayılan dili aldık.
    //const defaultLocale = navigator.language //tr/TR
    console.log(defaultLocale)

    //Sunucumuzdaki varsayılan dili state'e atadık
    const [lang, setLang] = useState(defaultLocale)

    const messages = {
        'tr-TR'  : {
           title: "Merhaba Dünya",
           description : "{count} yeni bildiriminiz var."
        },
        'en-US' : {
            title : "Hello World",
            description : "You have {count} new messages"
        }

    }
    //Burada state'imzideki değer değiştirdiğimzide state'i useEffect ile storage'a atacağız ve bunun sayesinde varsayılan değer her zaman istediğimiz değer olarak kalacaktır
    useEffect(() => {
        localStorage.setItem('locale', lang)
    }, [lang])


  return (
    <div style={{border: '2px solid orange', padding :'2%', margin :'0 auto'}}>
        <h1>This component is includes Localization</h1>
        <IntlProvider
            locale={lang}
            //messages niteliğine yukarıda oluşturduğumuz messages objesini atadık. Onun içerisinden de state ile tuttuğumuz veriyi aldık.
            messages={messages[lang]}
        >   
            {/*FormattedMessage ile dil desteği almak istediğimiz metni seçtik. */}
            <FormattedMessage id="title" /><br/>
            {/* values özelliği ile messages içerisinde değişmesini istediğimiz bilgileri ekleyebiliriz.
            */}
            <FormattedMessage id="description" values={{count : 5}} /> 
            <br/>


            <button onClick={() => setLang('tr-TR')}>TR</button>
            <button onClick={() => setLang('en-US')}>ENG</button>
        </IntlProvider>
    </div>
  )
}

export default LocalizationComponent