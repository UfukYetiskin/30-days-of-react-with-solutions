import React from 'react'

export default class ConditionalRendering extends React.Component{






    render(){

        const { firstName, lastName, age, husband, parents : {mother, father} , birthDay} =this.props.whoUmmuhan
        return (
            <div>
                <h1>This component is about of Conditional Rendering</h1>
                <h1>{firstName}</h1>
            </div>
        )
    }
}