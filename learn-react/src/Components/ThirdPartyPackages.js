import axios from "axios"
import { useEffect, useState } from "react"



export default function ThirdPartyPackages(){
    const [info, setInfo] = useState({})
    useEffect(() => {
        
    }, []);
    
    return(
        <div style={{border : '1px solid black', padding: '1%'}}>
            <h1>This div includes Third Party Packages</h1>
        </div>
    )
}