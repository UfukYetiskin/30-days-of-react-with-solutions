import React from 'react'
import {useState} from 'react'

function EmojiComponent() {
  const EmojiList = [
    {
      src : "https://emojipedia-us.s3.amazonaws.com/source/skype/289/hundred-points_1f4af.png",
      name : "100"
    },
    {
      src : "https://images.emojiterra.com/google/noto-emoji/v2.034/share/1f522.jpg",
      name : "1234"
    },
    {
      src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRN3AMgiPY7ErodFRxtwhRloqkkIMir6phMA&usqp=CAU",
      name : "Grinning"
    }
  ]
  const [list, setList] = useState(EmojiList)
  const [filter, setFilter] = useState('')

  const handleClick = () => {
    const filt = list.filter(item => item.name === filter).map(item => item ) 
    setList(filt)

    setFilter("")
  }
  return (
    <div>
        <h1>Emoji Search</h1>
        <label>Filter Emoji
        <input 
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        </label>
        <button onClick={handleClick}>Filter</button>
        {list.map((item, index) => {
          return(
            <div key={index}>
            <img style={{width : '10%'}} src={item.src}  alt={item.name} />
            <span>{item.name}</span>
          </div>
          )
        })}
    </div>
  )
}

export default EmojiComponent