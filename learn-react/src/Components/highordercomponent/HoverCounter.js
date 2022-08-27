import React, {useState} from 'react'

function HoverCounter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onMouseOver={() => setCount(count + 1)}>Hovered {count} times</button>
    </div>
  )
}

export default HoverCounter