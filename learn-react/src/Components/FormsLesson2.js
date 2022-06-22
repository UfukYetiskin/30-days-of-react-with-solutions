
import { useState } from "react"


export default function FromsLesson2() {
    const [name, setName] = useState('')
    const handleChange = (e) => {
        const name = e.target.value
        setName(name)
    }

    const [description, setDescription] = useState("")

    //Select elementi ile değer alma
    const [subling, setSubling] = useState("")
    const handleOptionChange = (e) => {
        const subling = e.target.value
        setSubling(subling)
    }

    //Multiple selectbox
    const [categories, setCategories] = useState([])

    const categoryList = [
        {key : 1, value : 'JavaScript'},
        {key : 2, value : 'React'},
        {key : 3, value : 'HTML'},
        {key : 4, value : 'CSS' }
    ]

    //checkbox örneği
    const [rules, setRules] = useState(false)
    const [kurallar, setKurallar] = useState([
        {key : 1, value : '1. Kuralı kabul ediyorum', checked : false},
        {key : 2, value : '2. Kuralı kabul ediyorum', checked : true},
        {key : 3, value : '3. Kuralı kabul ediyorum', checked : false},
    ])
    const checkRule = (key, checked) => {
        setKurallar(rules => rules.map(rule => {
            if(key === rule.key){
                rule.checked  = checked
            }
            return rule
        }))
    }
    return(
        <div style={{border: '1px solid black', paddin: '1%', margin:'1%'}}>
            <h1>This component includes second lesson of Forms</h1>
            <div>
                <label htmlFor="name" style={{margin : '1%'}} >Name: </label>
                <input
                    style={{margin : '1%'}}
                    id="name"
                    value={name}
                    placeholder='Write here your name'
                    onChange={handleChange}
                />
            </div>
            <div>
                <textarea style={{margin : '1%' , paddin: '1%'}} value={description} onChange={(e) => setCategories(setDescription(e.target.value))}></textarea>
            </div>
            <div>
                <select  value={subling} onChange={handleOptionChange} style={{margin : '1%' , paddin: '1%'}}>
                    <option value="">-- Seçin -- </option>
                    <option value="Meral">Meral</option>
                    <option value="Ferat">Ferat</option>
                    <option value="Gurbet">Gurbet</option>
                </select>
            </div>
            <div>
                <select style={{margin : '1%' , paddin: '1%'}} value={categories} multiple={true} onChange={e => setCategories([...e.target.selectedOptions].map(option => option.value))}>
                    {categoryList.map(category => (
                        <option style={{paddin: '1%'}} value={category.value} key={category.key} >{category.value}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked = {rules} onChange={e => setRules(e.target.checked)} />
                    Kuralları kabul ediyorum.
                </label>
                <br></br>
                <button disabled={!rules} >Gönder</button>
            </div>
            <div>
                {kurallar.map(rule => (
                    <label key={rule.key}>
                    <input  
                        type="checkbox"
                        checked={rule.checked}
                        onChange={e => checkRule(rule.key, e.target.checked)}
                    />
                    {rule.value}
                </label>
                )
                    
                )}
                <br></br>
                <pre>{JSON.stringify(kurallar, null, 2)}</pre>
            </div>
            <div>
                
            </div>
        </div>
    )
}