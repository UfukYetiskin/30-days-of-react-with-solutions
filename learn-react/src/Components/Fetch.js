import {useEffect, useState} from 'react'




const Fetch = () => {
    const [users, setUsers] = useState(false)

    

    //Post metodu için kullanılır
    const addPost = data => {
        //const headers = new Headers()
        //headers.append('Content-type', 'application/json')

        //Form data göndermek için 
        const formData = new FormData()
        formData.append('userId', data.usersId)
        formData.append('title', data.title)
        formData.append('body', data.body)


        fetch('https://jsonplaceholder.typicode.com/posts', {
            //Kullanulmak istenilen method, method propertysi ile belirtilir. Burada POST metodunu kullacanğımızı belirtiyoruz.
            method: 'POST',
            //body ile nasıl gönderilmek istendiği belirtilir. Json formatında göndermek istiyoruz ve bunun için parametre olarak bir data almamız gerek.
            body: JSON.stringify(data),
            headers : {
                'Content-type' : 'application/json',
            }
            //heards : heards.headers
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
           
    }


    //Get metodu için kullanılır.
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(err => console.log(err))
        
        addPost({
            userId : 1,
            title : 'Post metodu deneme',
            body: 'post method içeriği'
        })
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