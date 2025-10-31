import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState("")
  const getData = () =>{
    axios.get("http://127.0.0.1:8000/")
    .then((res)=>setData(res.data.message))
    .catch((error) => console.error(error))
  }

  useEffect(()=>{
    getData();
  },[])
  
  return (
    <div>
     <h1>{data} </h1>
    </div>
  )
}

export default App
