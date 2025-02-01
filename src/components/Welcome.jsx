import React from 'react'

const Welcome = (props) => {
  const handleClick=()=>{
    alert("Fuck you")
  }
  return (
    <>
      <h1>Welcome ,{props.name}</h1>
      <button className='text-2xl px-4 py-2 bg-gray-900 rounded-full text-white' onClick={handleClick}>Click me</button>
    </>
  )
}

export default Welcome
