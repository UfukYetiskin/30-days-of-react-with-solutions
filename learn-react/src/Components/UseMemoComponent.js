import { useMemo, useState } from "react";
/*usememo hooksu expensive fonksiyonlarımızı gereksiz yere render olmasını engeller, 
tamamen performans optimize etmek için kullanılan bir hook */

const Header = ({data}) => {
    console.log('Header Componenti render edildi.')
    return(
        <div>
            <h5>Header</h5>
            <code>{JSON.stringify(data)}</code>
        </div>
    )
}


const UseMemoComponent = () => {
    
    const [number, setNumber] = useState(0);
    //Object referansı her render edildiğinde değişeceği için Header componenti her zaman render olacaktı. Bunu engellemek için useMemo hookunu kullandık
    //eğer [] içersine bir değişen değişken verirsek (number) header componenti render olacaktır.
    const data = useMemo(()=>{
       return {name : 'Deniz'}
    }, [])
    const funcDeneme = useMemo(() => {
        return calculateObject();
    }, [])


    return(
        <div style={{border: '3px solid orange', margin: '2%', padding : '2%'}}>
            <h1>This component includes UseMemo Hook</h1>
            <Header data={data} funcDeneme={funcDeneme}/>
            <div>
                <button onClick={()=> setNumber(number + 1)}>İncrease</button>
                <span>{number}</span>
            </div>
        </div>
    )
}

function calculateObject(){
    return{name : 'Ümmühan'}
}

export default UseMemoComponent