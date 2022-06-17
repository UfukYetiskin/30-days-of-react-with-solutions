import {useState} from 'react'


const Forms = () => {
    const [value, setValue] = useState('')


    const handleChange = (e) => {
        const value = e.target.value
        setValue(value)
    }

    return (
        <div style={{border: "1px solid black", margin: '1%', padding: '1%'}}>
            <h1>This div about the Froms</h1>
            <div>
                <label style={{margin: '10px'}} htmlFor='value'>Name</label>
                <input 
                    id='value'
                    onChange={handleChange}
                    placeholder = 'Write Your Name'
                    value={value}
                />
            </div>
            <div>
                <h3>{value}</h3>
            </div>
        </div>
    )
}

export default Forms