import {useEffect} from 'react'


const Request = (url, data = false, method = 'GET') => {
    return new Promise(async (resolve, reject) => {
        const options = {
            method
        }
        if(data && method === 'POST') {
            options.body = JSON.stringify(data)
        }
        const response = await fetch(url, options)
        const result = await response.json()
        if(response.ok){
            resolve(result)
        }else{
            reject(result)
        }
    })
}

const post = (url, data) => Request(url, data, 'POST')
const get = url => Request(url)

//Servisler
const getPosts = () => get('https://jsonplaceholder.typicode.com/posts')
const getPostDetails = id =>  get(`https://jsonplaceholder.typicode.com/posts/${id}`)
const newPost = data => post('https://jsonplaceholder.typicode.com/posts', data)

const Async = () => {

    useEffect(() => {
        getPosts().then(res => console.log(res))
        getPostDetails(2).then(res => console.log(res))
        newPost({
            userId: 5,
            title : 'test',
            body : 'test',
        }).then(res => console.log(res))
        
    },[])

    return(
        <div style={{border : '1px solid black'}}>
            <h1>Async with Services</h1>
        </div>
    )
}
export default Async