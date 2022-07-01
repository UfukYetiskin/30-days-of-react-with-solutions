import {useEffect, useState} from 'react'




const Fetch = () => {
    const [users, setUsers] = useState(false)
    const [name, setName] = useState("")
    const [avatar, setAvatar] = useState(false)
    

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
    
    // form içerisinde inputlar ile alınan verileri istediğimiz api'ya göndermeye yarıyor
    const submitHandle = (e) => {
        console.log('Submit Edildi.')
        e.preventDefault()
        const data = {
            name,
            avatar
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('avatar', avatar)
        //verilerimizi fetch ile istenilen adrese gönderiyoruz. Post methodunu kullanarak formData tipinde gönderiyoruz.
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method : 'POST',
            body : formData
        })
    }
    return(
        <div style={{border : '1px solid black', margin : '1%', padding : '1%'}}>
            <h1>Fetch</h1>
            <form >
                <input 
                    type='text'
                    value={name}
                    name = 'name'
                    onChange={(e)=> setName(e.target.value)}
                />
                <input 
                    type='file'
                    name ='avatar'
                    onChange= {(e) => setAvatar(e.target.files[0])}
                />
                <button type='submit' disabled={!name || !avatar} onClick={submitHandle}>Submit</button>
            </form>

            <h1>User List</h1>
            <ul>
                {users && users.map((user, index) => (
                    <li key={index}>
                        id: {user.id}  name:{user.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default Fetch