import { useState } from "react"
import { parsePath } from "react-router-dom"


const Calculater = () => {
    const [firstNumbers, setFirstNumbers] = useState('')
    const [secondNumbers, setSecondNumbers] = useState('')
    const [sonuc, setSonuc] = useState(0)
    const [operator, setOperator] = useState('')


    const handleReset = () => {
        setFirstNumbers('')
        setOperator('')
        setSecondNumbers('')
        setSonuc('')
    
    }
    const handleSonuc = (e) => {
        setFirstNumbers('')
        setOperator('')
        setSecondNumbers('')
        if(operator === "+"){
            setSonuc(parseInt(firstNumbers) + parseInt(secondNumbers))
        }else if(operator === "-"){
            setSonuc(parseInt(firstNumbers) - parseInt(secondNumbers))
        }else if(operator === "/"){
            setSonuc(parseInt(firstNumbers) / parseInt(secondNumbers))
        }else if(operator  === "*"){
            setSonuc(parseInt(firstNumbers) * parseInt(secondNumbers))
        }else if(operator === "%"){
            setSonuc(parseInt(firstNumbers) % parseInt(secondNumbers))
        }
        
    }
    const handleOperator = (e) => {
        setOperator(e.target.value)
        setFirstNumbers(secondNumbers)
        setSecondNumbers("")
    }
    const handleNumbers = (e) => {
        setSecondNumbers(secondNumbers + e.target.value)
    }

    //Styles
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
        width :  '22%',
        textAlign : 'center',
        backgroundColor : 'orange'
    }
 
    
    return(
        <div style={{width : '30%', backgroundColor : 'darkslategray', justifyContent : 'center', marginLeft : '35%', borderRadius :'10px'}}>
            <h2 style={{textAlign : 'center', marginTop :  "2%"}}>Calculater</h2>
            <div>
                <input
                    style={{backgroundColor : 'dimgray', color: 'white', padding : '1%', margin : '1%', width : '90%', textAlign : 'right', fontSize : '24px'}}
                    type="text"
                    value = {`${firstNumbers} ${operator} ${secondNumbers} ${sonuc}`}
                />
            </div>
            <div style={divStyles} >
                <button onClick={handleReset} value="C"  style={{ display : 'inline-block', margin: '1%',border  : '1px solid black',backgroundColor : 'orange',padding : '3%',width :  '46%',textAlign : 'center'}}>C</button>
                <button onClick={handleOperator}  value="%" style={spanStyles}>%</button>
                <button onClick={handleOperator} value="/" style={spanStyles}>/</button>
            </div>
            <div style={divStyles}>
                <button onClick={handleNumbers} value="7" style={spanStyles}>7</button>
                <button  onClick={handleNumbers} value="8" style={spanStyles}>8</button>
                <button onClick={handleNumbers} value="9" style={spanStyles}>9</button>
                <button onClick={handleOperator} value="*" style={spanStyles}>*</button>
            </div>
            <div style={divStyles}>
                <button onClick={handleNumbers} value="4" style={spanStyles}>4</button>
                <button onClick={handleNumbers} value="5" style={spanStyles}>5</button>
                <button onClick={handleNumbers} value="6" style={spanStyles}>6</button>
                <button onClick={handleOperator} value="-"  style={spanStyles}>-</button>
            </div>
            <div style={divStyles}>
                <button onClick={handleNumbers} value="1" style={spanStyles}>1</button>
                <button onClick={handleNumbers} value="2" style={spanStyles}>2</button>
                <button onClick={handleNumbers} value="3" style={spanStyles}>3</button>
                <button onClick={handleOperator} value="+" style={spanStyles}>+</button>
            </div>
            <div style={divStyles}>
                <button onClick={handleNumbers} value="0" style={{ display : 'inline-block', margin: '1%', backgroundColor : 'orange',border  : '1px solid black',padding : '3%',width :  '46%',textAlign : 'center'}}>0</button>
                <button onClick={handleNumbers} value="." style={spanStyles}>.</button>
                <button onClick={handleSonuc} value="=" style={spanStyles}>=</button>
            </div>
        </div>
    )
}

export default Calculater