import { useState } from 'react'

function Events(){

    const [firstName, setFirstName] = useState('')
    const [message, setMessage] =  useState('')
    const [key, setKey] = useState('')
    const [position, setPosition] = useState()

    const handleClick = (e) => {
        setMessage('Welcome to the world of events')
    }
    const handleMouseMove = (e) => {
        setMessage('mouse is moving')
    }
    const handleChange = (e) => {
        setFirstName(e.target.value)
        setMessage(e.target.value)
    }
    const handleKeyPress = (e) => {
        setMessage(`${e.target.value} has been pressed and the keycode is ` + e.charCode)
    }
    const handleBlur = (e) => {
        setMessage(`Input field has been blurred`)
    }
    const handleCopy = (e) => {
        setMessage('Using 30 Days of React for commercial purpose is not allowed')
    }
    const handleRandomPosition = (e) => {
        const random = Math.round(Math.random()*300)
        setPosition(random)
    }
    console.log(position)
    return(
        <div style={{border : '1px solid black', padding : '1%'}}>
            <h1>This div includes Events chapter</h1>

            <div>
                <button onClick={handleClick}>onClick Event</button>
                <button onMouseMove={handleMouseMove}>Mouse Move Event</button>
                <p onCopy={handleCopy}>OnCopy Event,  bu metni copyaladığınızda bildirim gelir.</p>
                <p>{message}</p>
            </div>
            <div>
                <label htmlFor='keypress'>Test for onKeyPress Event:</label>
                <input 
                    type='text'
                    id='keypress'
                    placeholder='Keypress event'
                    onKeyPress={handleKeyPress}
                />
            </div>
            <div>
                <label htmlFor='onblur'>Test for onBlur Event</label><br></br>
                <input
                    id='onblur'
                    onBlur={handleBlur}
                    type='text'
                    placeholder='This input incude onBlur event'
                />
            </div>
            <form>
                <div>
                    <label htmlFor='firstName'>First Name: </label>
                    <input 
                        onChange={handleChange}
                        name = 'firstName'
                        value={firstName}
                        placeholder='Write here your name'
                    />
                </div>
                <div>
                    <input type='submit' value='Submit' />
                </div>
            </form>
            <div style={{border: '1px solid black'}}>
            <h3>Text'in üzerine tıkladıkça farklı bir konum izliyor.</h3>
            <div style={{ position: 'relative',width : '80%', height : '500px', backgroundColor: 'lightskyblue', margin:'1%'}}>
                <div onMouseMove={handleRandomPosition} style={{backgroundColor: 'salmon', position : 'absolute', left: `${position}px`, bottom: `${position }px` } }>30 Days of React </div>
            </div>
            </div>
        </div>
    )
}
export default Events
