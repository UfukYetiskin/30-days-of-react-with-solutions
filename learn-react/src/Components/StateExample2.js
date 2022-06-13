import React from "react";

class DogorCat extends React.Component{
    state = {
        image : 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
    }

    changeAnimalImage = () => {
        let dogURL = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
        let catURL = 'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg'
        let image = this.state.image === catURL ? dogURL : catURL
        this.setState({image})
    }

    render(){
        return(
            <div>
                <h1>This Component is second example. The example is about Dog or Cat</h1>
                <div>
                    <img src={this.state.image} alt="AnimalImage"/>
                </div>
                <button onClick={this.changeAnimalImage}>Change Image</button>
            
            </div>
        )
    }
}

export default DogorCat