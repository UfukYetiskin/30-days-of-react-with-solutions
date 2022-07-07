import { useMemo, useState, useCallback } from "react";
/*usememo hooksu expensive fonksiyonlarımızı gereksiz yere render olmasını engeller, 
tamamen performans optimize etmek için kullanılan bir hook */


const Header = ({data, increment}) => {
    console.log('Header Componenti render edildi.')
    return(
        <div>
            <h5>Header</h5>
            <code>{JSON.stringify(data)}</code><br></br>
            <button onClick={increment}>Increment</button>
        </div>
    )
}


const UseMemoComponent = () => {
    
    const [number, setNumber] = useState(0);
    const [text, setText] = useState("")

    
    //useCallback
    //useMemo nun aksine aldığı işlevin sonucunu saklamak yerine işlevin kendisini saklar. deps olarak verilen değerleri değişmediği sürece de sakladığı işlevi döndürür.
    const increment = useCallback(()=>{
        setNumber((prevState) => prevState + 1)
    }, [])

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
            <Header increment={increment} data={data} funcDeneme={funcDeneme}/>
            <div>
                <button onClick={()=> setNumber(number + 1)}>İncrease</button>
                <span>{number}</span>
            </div>
            <input value={text} onChange={(e)=> setText(e.target.value)} />
        </div>
    )
}

function calculateObject(){
    return{name : 'Ümmühan'}
}

export default UseMemoComponent