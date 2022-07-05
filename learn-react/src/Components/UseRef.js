import {forwardRef, useRef } from "react";


//Eğer erişmek istediğimiz eleman component ise forwardRef hookunu kullanırız.
function Input(props, ref){
    return <input ref={ref} type='text' {...props}/>
}
Input = forwardRef(Input)




const UseRef = () => {
    //useRef hook'u ile butona tıkladığımızda input'a focuslanacak bir fonksiyon yazıyoruz.
    const inputRef = useRef()
    const focusInput = () =>{
        inputRef.current.focus()
    }

    return(
        <div style={{border : '1px solid black'}}>
            <h1>This component includes useRef Hook</h1>
            <input 
                type='text'
                ref={inputRef}
            />
            <button  >Focus</button>
            <Input ref={inputRef}/>
        </div>
    )
}