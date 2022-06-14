import React from 'react'

export default class ConditionalRendering extends React.Component{
    state = {
        isim : "",
        message : "",
        value : "",
        color : "",
        date : new Date().getHours(),
        time : "",
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
    
    getHour = (date) => {
        if(date < 5 || date > 20){
            this.setState({time : "black"})
        }else if(date > 5 && date < 18){
            this.setState({time : "yellow"})
        }else{
            this.setState({time: "orange"})
        }
    }
    render(){
        
        const { firstName, lastName, age, husband, parents : {mother, father} , birthDay} =this.props.whoUmmuhan
        const errorMessage = this.state.message ? <h2>{this.state.message}</h2> : <h2>Giriş Yapınız.</h2>
        
        return (
            <div style={{border: "1px solid black", margin : "1%", backgroundColor: this.state.color }}>
                <div style={{margin : "1%", padding : "1%"}}>
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
                <div style={{margin : "1%", padding : "1%"}}>
                    <h1>Exercises Level 2</h1>
                    <p>Input içerisine girilen mevsime göre arka plan rengini değiştirmektedir. Mevsim ismini girdikten sonra submit ediniz.</p>
                    <input 
                        placeholder='Write here something'
                        value={this.state.value}
                        onChange={this.handleSeason}
                    />
                    <button onClick={()=> this.handleNow(this.state.value)}>Season</button>
                </div>
                <div style={{margin : "1%", padding : "1%", backgroundColor : this.state.time}}>
                    <p>Bu görevde saate göre arka plan rengini değiştirecektir.</p>
                    <h5>{this.state.date}</h5>
                    <button onClick={() => this.getHour(this.state.date) }>Hour?</button>
                </div>
            </div>
        )
    }
}