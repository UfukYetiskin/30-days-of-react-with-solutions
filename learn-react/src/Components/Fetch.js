import {useEffect, useState} from 'react'




const Fetch = () => {
    const [users, setUsers] = useState(false)

    //Post metodu için kullanılır
    const addPost = data => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            //Kullanulmak istenilen method, method propertysi ile belirtilir. Burada POST metodunu kullacanğımızı belirtiyoruz.
            method: 'POST',
            //body ile nasıl gönderilmek istendiği belirtilir. Json formatında göndermek istiyoruz ve bunun için parametre olarak bir data almamız gerek.
            body: JSON.stringify(data) 
        })
    }



    //Get metodu için kullanılır.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            {users && users.map((user, index) => (
                <li key={index}>
                   id: {user.id}  name:{user.name}
                </li>
            ))}
        </div>
    )

}
export default Fetch