import React from 'react'
import ReactDOM from 'react-dom'

//Class base component

class ClassComponents extends React.Component{
    constructor(props){
        super(props)
        //Constructor içersindeki kod diğer kodlardan önce çalışır
    }
    render() {
        const techs = ['HTML', 'CSS', 'JS']
        const listTechs = techs.map((tech) => <li>{tech}</li>)
        return(
            <div>
                <h1>This is Class Components</h1>
                <h2>Getting From Component Folder</h2>
                <p>Azem Yetişkin</p>
                <ul>
                    {listTechs}
                </ul>
            </div>
        )
    }
}

export default ClassComponents