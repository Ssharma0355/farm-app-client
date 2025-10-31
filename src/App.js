import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const getData = () =>{
    axios.get("http://127.0.0.1:8000/")
    .then((res)=>setData(res.data.message))
    .catch((error) => console.error(error))
  }
  const submitData = ()=>{
    axios.post("http://127.0.0.1:8000/api/v1/createstudent",{
      name,
      email
    })
  }

  useEffect(()=>{
    getData();
  },[])

  const SubmitForm =(e)=>{
    e.preventDefault()
    submitData()

  }
  
  return (
    <div>
     <h1>{data} </h1>
     <input value={name} type='text' onChange={(e)=>setName(e.target.value)} />
     <input value={email} type='text' onChange={(e)=>setEmail(e.target.value)} />
     <button onClick={SubmitForm}>Submit</button>

    </div>
  )
}

export default App
