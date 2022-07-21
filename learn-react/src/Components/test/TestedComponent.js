import { useState } from "react";
import EmojiComponent from "./EmojiComponent";
import TodoProject from "./TodoProject";

const TestedComponent = () => {
    const [count, setCount] = useState(0) 
    return (
        <div style={{border: '2px solid orange', padding :'2%', margin :'0 auto', textAlign : 'center'}}>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <span>{count}</span>
            <button onClick={() => setCount(count-1)}>Decrease</button>
            <TodoProject></TodoProject>
            <EmojiComponent></EmojiComponent>
        </div>
    )
}
export default TestedComponent