import React from 'react'
import ReactDOM from 'react-dom'

//Class base component

class ClassComponents extends React.Component{
    constructor(props){
        super(props)
        //Constructor içersindeki kod diğer kodlardan önce çalışır
    }
    getDenizInfo= () => {
        alert(`
        Deniz'in Dünyasına Hoşgeldiniz.\n
        Ben ${this.props.whoDeniz.firstName} ${this.props.whoDeniz.lastName} \n
        ${this.props.whoDeniz.age} yaşındayım. Annemin ismi, ${this.props.whoDeniz.parents.mother}. Babamın ismi ise  ${this.props.whoDeniz.parents.father}
        `)
    }
    render() {
        /* 
        props'tan veri almak için her seferinde props.data yazıyoruz . Yıkım kullanarak bu tekrarı önleyebiliriz.
        
        const {
            firstName,
            lastName,
            age,
            parents,
            birthDay
        } = this.props.whoDeniz
        
        */
        const techs = ['HTML', 'CSS', 'JS']
        const listTechs = techs.map((tech) => <li key={tech}>{tech}</li>)
        return(
            <div>
                <h1>This is Class Components</h1>
                <h2>Getting From Component Folder</h2>
                <p>Azem Yetişkin</p>
                <ul>
                    {listTechs}
                </ul>
                <div>
                    <h2>Sınıf bileşenlerinde aksesuarlara erişme</h2>
                    <h1>Who is Deniz ?</h1>
                    <h3>Deniz'in Adı: {this.props.whoDeniz.firstName}</h3>
                    <h3>Deniz'in Soyadı: {this.props.whoDeniz.lasttName}</h3>
                    {/* <h3>{parents}</h3> */}
                    <h3>Deniz'in yaşı{this.props.whoDeniz.age}</h3>
                    <h3>Annesi: {this.props.whoDeniz.parents.mother}</h3>
                    {/* <h3>{birthDay}</h3> */}
                    <h3>{this.props.whoDeniz.birthDay}</h3>
                    <button onClick={this.getDenizInfo} >Click for Deniz info</button>
                </div>
            </div>
        )
    }
}

export default ClassComponents