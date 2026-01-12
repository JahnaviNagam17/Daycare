import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddPatient() {
    const [name,setName]=useState();
        const [age,setAge]=useState();
        const [weight,setWeight]=useState();
        const [gender,setGender]=useState();
        const [disease,setDisease]=useState();
        const [email,setEmail]=useState();
        const [pass,setPass]=useState();
        const navigate=useNavigate();
        const [doc,setDoc]=useState()
        const [specialization,setSpecialization]=useState()

        function handleEvent(e){
        e.preventDefault();
        console.log(name,age,weight,gender,disease,email,pass);
        let newPatient={
            name:name,
            age:age,
            weight:weight,
            gender:gender,
            email:email,
            password:pass,
            disease:disease,
            doctor:{
                name:doc,
                specialization:specialization
            }
        }
        axios.post("https://doc-back.onrender.com/patients",newPatient)
        .then((res)=>{
            console.log(res);
            if(res.status===200){
                alert("added successfully");
                navigate("/")
            }
        })
        .catch(er=>console.log(er));
    }

  return (
    <>
         <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">

            <div className="card shadow">
              <div className="card-header   text-center">
                <h4>Add Patient</h4>
              </div>

              <div className="card-body">
                <form onSubmit={handleEvent} >

                  {/* Doctor Name */}
                  <div className="mb-3">
                    <label className="form-label">Patient Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Patient name"
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>

                  {/* Age */}
                  <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter age"
                      onChange={(e)=>setAge(e.target.value)}
                    />
                  </div>

                  {/* Salary */}
                  <div className="mb-3">
                    <label className="form-label">Weight</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter weight"
                      onChange={(e)=>setWeight(e.target.value)}
                    />
                  </div>

                  {/* Gender */}
                  <div className="mb-3">
                    <label className="form-label">Gender</label>
                    <select className="form-select" onChange={(e)=>setGender(e.target.value)}>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="others">Other</option>
                    </select>
                  </div>

                    <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter E-mail"
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>

                    <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter Password"
                      onChange={(e)=>setPass(e.target.value)}
                    />
                  </div>

                  {/* Specification */}
                  <div className="mb-3">
                    <label className="form-label">Disease</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Disease"
                      onChange={(e)=>setDisease(e.target.value)}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label">Doctor</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter DOctor"
                      onChange={(e)=>setDoc(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Specialization</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Specialization"
                      onChange={(e)=>setSpecialization(e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button className="btn btn-dark">
                      Add Patient
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
