import React, { Component } from 'react'

const firstName = React.createRef()
const lastName = React.createRef()

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName.current.value)
    console.log(lastName.current.value)

    const data = {
        firstName : firstName.current.value,
        lastName : lastName.current.value
    }
    console.log(data)
}



export default function UncontrolledComponents(){
    return(
        <div style={{border: '1px solid black', padding : '1%'}}>
            <h1>This div about Uncontrolled Components</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='firtsName'>First Name:</label>
                <input 
                    type='text'
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    ref={firstName}
                />
                <br></br>
                <label htmlFor='lastName'>Last Name:</label>
                <input 
                    type='text'
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                    ref={lastName}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}