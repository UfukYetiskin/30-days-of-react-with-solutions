import ClickCounter from "./ClickCounter";
import { useState} from "react"
import HoverCounter from "./HoverCounter";



const HighOrderComponents = () => {
    
    return(
        <div>
            <h1>HighOrderComponents</h1>
            <ClickCounter/>
            <HoverCounter/>
        </div>
    )
}
export default HighOrderComponents;