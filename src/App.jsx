import axios from "axios";
import Student from "./components/Student";
import UserGreeting from "./components/UserGreeting";
import Welcome from "./components/Welcome";
import React, { useEffect, useState } from "react";
import ListComponent from "./components/ListComponent";
import Welcome2 from "./components/Welcome2";
import Welcome3 from "./components/Welcome3";

function App() {
  const [count,setCount]=useState(0)
  const add=()=>{
    setCount(count+1)
  }
  useEffect(()=>{
    axios
    .get('https://fakestoreapi.com/products')
    .then(response=>console.log(response.data))
    .catch(error=>console.llog('Error',error))
  })
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-200 bg-red-400 ">
    Hello world!
  </h1>
  <div className="text-blue-700">
    
  <Welcome name="Ramesh."/>
  </div>
      <Welcome />
      <Student name={"Ramesh"} />
      <UserGreeting isLoggedIn={true} username={"Ramesh"} />

      <p>You clicked {count} times</p>
      <button onClick={add}>Add</button>
      <ListComponent/>
      <Welcome2 name="Ronaldo"/>
      <Welcome3/>
    </>
  );
}

export default App;

// import ListComp from "./components/listComp";

// const App = () => {
//   return (
//     <>
//       <ListComp/>
//     </>
//   )
// }

// export default App
