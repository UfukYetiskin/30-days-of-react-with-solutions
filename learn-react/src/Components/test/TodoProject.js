import { useState } from "react";
import React from 'react'

function TodoProject() {
    const defaultItems = [
        {
            name : "Item A"
        },
        {
            name : "Item B"
        },
        {
            name : "Item C"
        }

    ]
    const [list, setList] = useState(defaultItems)
    const [todo, setTodo] = useState('')

    const handleClick = (e) => {
        e.preventDefault()
        // setList((prev) => [...prev, {name : todo}])
        setList([...list, {name : todo}])
        setTodo("")
        console.log(list)
    }
  return (
    <div>
        <h1>To Do Project Created for Test</h1>
        <form>
            <label>
                Text
            <input 
                value={todo}
                type= "text"
                onChange={(e) => setTodo(e.target.value)}
            />
            </label>
            <button onClick={handleClick}>Add</button>
        </form>
            {list.map((item, index) => (
                <div key={index}>
                    {item.name}
                </div>
            ))}
    </div>
  )
}

export default TodoProject
