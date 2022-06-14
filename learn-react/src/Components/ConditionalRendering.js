import React from 'react'

export default class ConditionalRendering extends React.Component{
    state = {
        isim : "",
        message : "",
        value : "",
        color : ""
    }

    //Burada isim state'ine girilen isimleri  tutması için setState'i ayaraldık
    handleChange = (event) => {
        this.setState({isim : event.target.value})
    }

    // Burada ise butona basğtımız takdirde isim state'inin uzunluğuna göre bize mesaj gösteriyor.
    handleSubmit = (isim) => {
        if(isim.length < 6){
            this.setState({message : "Girilen isim 6 harften küçüktür."})
        }else{
            this.setState({message :""})
        }
    }
    handleSeason = (event) => {
        this.setState({value : event.target.value})
    }
    handleNow = (value) => {
        
        switch(value){
            case  "winter" : 
                this.setState({color : "white"})
                break;
            case "spring": 
                this.setState({color : "green"})
                break
            case "summer": 
                this.setState({color : "yellow"})
                break
            case "autmn":
                this.setState({color: "orange"})
                break
            default:
                this.setState({color: "red"})
        }
    }
    render(){

        const { firstName, lastName, age, husband, parents : {mother, father} , birthDay} =this.props.whoUmmuhan
        const errorMessage = this.state.message ? <h2>{this.state.message}</h2> : <h2>Giriş Yapınız.</h2>
        
        return (
            <div style={{border: "1px solid black", margin : "1%", backgroundColor: this.state.color }}>
                <div>
                    <h1>This component is about of Conditional Rendering</h1>
                    <h1>{firstName}</h1>
                    <input 
                        placeholder='Write here something'
                        value={this.state.isim}
                        onChange={this.handleChange}
                    />
                    {/* buton içerisinde onClick metoduna fonksiyon tanımladık.  */}
                    <button onClick={() => this.handleSubmit(this.state.isim)} >Submit</button>
                    <span>{this.state.isim}</span>
                    {/*<span>{this.state.message}</span> */}
                    <div>{errorMessage}</div>
                </div>
                <div>
                    <h1>Exercises Level 2</h1>
                    <input 
                        placeholder='Write here something'
                        value={this.state.value}
                        onChange={this.handleSeason}
                    />
                    <button onClick={()=> this.handleNow(this.state.value)}>Season</button>
                    
                </div>
            </div>
        )
    }
}