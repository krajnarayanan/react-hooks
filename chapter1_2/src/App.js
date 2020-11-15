import React, {useState} from 'react'

export default function App() {
  const [name, setName] = useState('');
  function handleChange(evt) {
    setName(evt.target.value);
  }


  return(
    <div>test
      <h1>My name is {name}</h1>
      <input type="text" onChange={handleChange} />

    </div>

  )
}