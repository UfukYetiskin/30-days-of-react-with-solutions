import React from "react";
import ReactDOM from "react-dom"

class States extends React.Component {

    state = {
        count : 0,
    }

    increaseCount = () => {
        this.setState({count : this.state.count + 1})
    }
    decreaseCount = () => {
        this.setState({count : this.state.count - 1})
    }
    render(){
        const count = this.state.count
        return(
            <div>
                <h1>This Component is first example. The example is about increase span text or decrease span text</h1>
                <button onClick={this.increaseCount}>Increase</button>
                <button onClick={this.decreaseCount}>Decrease</button>
                <span>{count}</span>
            </div>
        )
    }
}

export default States