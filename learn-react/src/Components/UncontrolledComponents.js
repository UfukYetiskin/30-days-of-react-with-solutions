import React, { Component } from 'react'

const firstName = React.createRef()

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstName.current.value)
}



function UncontrolledComponents(){
    return(
        <>
            <form>

            </form>
        </>
    )
}