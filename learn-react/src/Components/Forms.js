import {useState} from 'react'


const Forms = () => {
    const [Name, setName] = useState('')
    const [lastName, setLastName]  = useState('')
    const [option, setOption] = useState([
        {
            value : '',
            label : '-- Select Country -- '
        },
        {
            value : 'Finland',
            label : 'Finland'
        },
        {
            value : 'Sweden',
            label : 'Sweden'
        },
        {
            value : 'Turkey',
            label : 'Turkey'
        },
        {
            value : 'Norway',
            label : 'Norway'
        },
        {
            value : 'Denmark',
            label : 'Denmark'
        }
    ])
    const options  = [
        {
            value : '',
            label : '-- Select Country -- '
        },
        {
            value : 'Finland',
            label : 'Finland'
        },
        {
            value : 'Sweden',
            label : 'Sweden'
        },
        {
            value : 'Turkey',
            label : 'Turkey'
        },
        {
            value : 'Norway',
            label : 'Norway'
        },
        {
            value : 'Denmark',
            label : 'Denmark'
        }
    ]


    /* Formdan birden çok giriş verisi alma*/
    const handleChange = (e) => {
        const Name = e.target.value
        setName(Name)
    }
    const handleChangeLastName = (e) => {
        const lastName = e.target.value
        setLastName(lastName)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${Name} ${lastName}, ${option}`)
    }
    /* Farklı giriş alanı türlerinden veri alın*/
    const mappingOptions = options.map(({value, label}) => (
        <option key={value} value={value}>{label}</option>
    ))
    const handleOptionValue = (e) => {
        const optionValue = e.target.value
        setOption(optionValue)

    }
    return (
        <div style={{border: "1px solid black", margin: '1%', padding: '1%'}}>
            <h1>This div about the Froms</h1>
            <form>
                {/* Formdan birden çok giriş verisi alma*/}
            <div>
                <label style={{margin: '10px'}} htmlFor='value'>Name</label>
                <input 
                    id='value'
                    onChange={handleChange}
                    placeholder = 'Write Your Name'
                    value={Name}
                />
            </div>
            <div>
            <label style={{margin: '10px'}} htmlFor='value2'>Lastname</label>
                <input 
                    id='value2'
                    onChange={handleChangeLastName}
                    placeholder = 'Write Your Lastname'
                    value={lastName}
                />
            </div>
            <div>
                <h3>{Name}</h3>
                <h3>{lastName}</h3>
            </div>
            <div>
                <select onChange={handleOptionValue}>
                    {mappingOptions}
                </select>
            </div>
            <div>
                <input 
                    type="submit"
                    onClick={handleSubmit}
                />
            </div>
                {/* Farklı giriş alanı türlerinden veri alın*/}
            
            </form>
            

            
        </div>
    )
}

export default Forms