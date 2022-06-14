import React from "react";

class DogorCat extends React.Component{
    state = {
        image : 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
        color : {
            backgroundColor : 'blue'
        },
        bg : true

    }

    changeAnimalImage = () => {
        let dogURL = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
        let catURL = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
        let image = this.state.image === catURL ? dogURL : catURL
        this.setState({image})
    }
    changeBackgroundColor = () => {
        let bgBlue = {
            backgroundColor : 'blue'
            
        }
        let bgBlack = {
            backgroundColor : 'black',
            color: 'white'
        }
        let color = this.state.color === bgBlack ? bgBlue : bgBlack
        this.setState({color})
        console.log(color)
    }
    render(){
        return(
            <div >
                <h1>This Component is second example. The example is about Dog or Cat</h1>
                <div>
                    <img src={this.state.image} alt="AnimalImage"/>
                </div>
                <div style={this.state.color}>
                    Bu elementin arka plan rengi değişmeli
                </div>
                <button onClick={this.changeAnimalImage}>Change Image</button>
                <button onClick={this.changeBackgroundColor} >Change Color</button>
                <button onClick={this.changeBackgroundColor} >Change Color</button>
            </div>
        )
    }
}

export default DogorCat