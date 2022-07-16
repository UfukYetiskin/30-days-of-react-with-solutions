import { useState } from "react"


const Calculater = () => {
    const [numbers, setNumbers] = useState('')

    const divStyles = {
        backgroundColor : 'dimgray',
        padding : '2%',
        justifyContent : 'space-around',
    }
    const spanStyles = {
        display : 'inline-block',
        margin: '1%',
        border  : '1px solid black',
        padding : '3%',
        width :  '15%',
        textAlign : 'center'
    }
    return(
        <div style={{width : '30%', backgroundColor : 'darkslategray'}}>
            <h2>Calculater</h2>
            <div>
                <input
                    style={{backgroundColor : 'dimgray', color: 'white', padding : '1%', margin : '1%'}}
                    type="text"
                    value={numbers}
                    onChange={(e)=> setNumbers(e.target.value)}
                />
            </div>
            <div style={divStyles} >
                <span style={{ display : 'inline-block', margin: '1%',border  : '1px solid black',padding : '3%',width :  '38%',textAlign : 'center'}}>C</span>
                <span style={spanStyles}>%</span>
                <span style={spanStyles}>/</span>
            </div>
            <div style={divStyles}>
                <span style={spanStyles}>7</span>
                <span style={spanStyles}>8</span>
                <span style={spanStyles}>9</span>
                <span style={spanStyles}>X</span>
            </div>
            <div style={divStyles}>
                <span style={spanStyles}>4</span>
                <span style={spanStyles}>5</span>
                <span style={spanStyles}>6</span>
                <span style={spanStyles}>-</span>
            </div>
            <div style={divStyles}>
                <span style={spanStyles}>1</span>
                <span style={spanStyles}>2</span>
                <span style={spanStyles}>3</span>
                <span style={spanStyles}>+</span>
            </div>
            <div style={divStyles}>
                <span style={{ display : 'inline-block', margin: '1%',border  : '1px solid black',padding : '3%',width :  '38%',textAlign : 'center'}}>0</span>
                <span style={spanStyles}>.</span>
                <span style={spanStyles}>=</span>
            </div>
        </div>
    )
}

export default Calculater