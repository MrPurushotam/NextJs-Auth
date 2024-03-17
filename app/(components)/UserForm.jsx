"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
const UserForm = () => {
    const router= useRouter()
    const [formData,setFormData]=useState({})
    const [errorMessage,setErrorMessage]=useState("")
    const handleChange=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setFormData((prevState)=>({
            ...prevState,
            [name]:value
        }))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setErrorMessage("")
        const res=await fetch("/api/Users",{
            method:"POST",
            body:JSON.stringify({formData}),
            "content-type":"application/json",
        })
        if(!res.ok){
            const resp=await res.json()
            setErrorMessage(resp.message)
        }else{
            router.refresh()
            router.push('/')
        }
    }
  return (
    <>
          <form onSubmit={handleSubmit} method='post' className='flex w-1/2 flex-col gap-3 border-2 border-black mx-auto p-5 rounded-md'>
              <h1>Create User here..</h1>
              <label>Full Name</label>
              <input
                  id="name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  required={true}
                  value={formData.name}
                  className="m-2 bg-slate-400 rounded text-gray-800 font-semibold p-3 text-lg"
              />
              <label>Email</label>
              <input
                  id="email"
                  name="email"
                  type="text"
                  onChange={handleChange}
                  required={true}
                  value={formData.email}
                  className="m-2 bg-slate-400 rounded text-gray-800 font-semibold p-3 text-lg"
              />
              <label>Password</label>
              <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  required={true}
                  value={formData.password}
                  className="m-2 bg-slate-400 rounded text-gray-800 font-semibold p-3 text-lg"
              />
              <input
                  type="submit"
                  value="Create User"
                  className="bg-blue-300 hover:bg-blue-200 p-3 my-2 rounded-md text-lg font-bold"
              />
          </form>
          <p className="text-red-500">{errorMessage}</p>
    </>
  )
}

export default UserForm
