import { useEffect, useState } from "react"

const HomeWork = () => {

    const [cats, setCats] = useState(false)

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => setCats(data))
            .catch(err => console.log(err))
    }, [])


    return(
        <div>
            <h1>This work about the Cats API</h1>
            <ul>

            </ul>
        </div>
    )
}

export default HomeWork