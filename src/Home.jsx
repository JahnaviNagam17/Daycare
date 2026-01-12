import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Home() {

  const [doc,setDoc]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
   loadDoctor()
  },[])

  async function loadDoctor(){
    await axios.get("https://doc-back.onrender.com/doctors")
    .then((res)=>{
      console.log(res)
      setDoc(res.data)
      setLoading(false)
    })
    .catch((er)=>{
      console.log("server error")
    })
  }

  async function deleteDoctor(id){
      await axios.delete(`https://doc-back.onrender.com/doctors/${id}`)
      .then((res)=>{
        console.log(res)
        if(res.status===200){
          loadDoctor()
        }
      })
  }

  return (
    <>
    {
      loading?(<p className='mt-5'>loading</p>):(
        <div className="container mt-3">
           <h1>Doctor</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
           
            {
              doc.map((i)=>(
                <div className="col" key={i.id}>
                  <div className="card">
                    <div className="card-body ">
                      <div className="card-title">
                        <h5 className=''>Specialization : {i.specialization}</h5>
                        <p className="card-text ">Name : {i.name} </p>
                        <p className="card-text ">Age : {i.age} </p>
                        <p className="card-text ">Gender : {i.gender} </p>
                        <p className="card-text">Salary : {i.salary} </p>
                        <button className='btn btn-outline-danger ' onClick={()=>deleteDoctor(i.id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              )

              )
            }
          </div>
        </div>
      )
    }
    
    </>
  )
}
