import { useMemo, useState } from "react";

const Header = ({data}) => {
    return(
        <div>
            <h5>Header</h5>
            <code>{JSON.stringify(data)}</code>
        </div>
    )
}


const UseMemoComponent = () => {
    
    const [number, setNumber] = useState(0);
    const data = {
        name: 'Ufuk',
    }


    return(
        <div style={{border: '3px solid orange', margin: '2%', padding : '2%'}}>
            <h1>This component includes UseMemo Hook</h1>
            <Header data={data}/>
            <div>
                <button onClick={()=> setNumber(number + 1)}>İncrease</button>
                <span>{number}</span>
            </div>
        </div>
    )
}
export default UseMemoComponent