import React, {useRef, useState} from 'react'
import ChildComponent from './ChildComponent'

//forwarRef parent bir componentten child component ile ref paylaşabilmeyi sağlar.
function ForwardRefHook() {
    const inputRef = useRef(null)

    const focusOnInput = () => {
        inputRef.current.focus();
    }
  return (
    <div>
        <h1>ForwardRef</h1>
        <ChildComponent ref={inputRef} />
        <button onClick={focusOnInput}>Tıkla</button>
    </div>
  )
}

export default ForwardRefHook