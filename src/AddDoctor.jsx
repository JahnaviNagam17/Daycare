import React,{useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function AddDoctor() {
    const [name,setName]=useState();
    const [age,setAge]=useState();
    const [salary,setSalary]=useState();
    const [gender,setGender]=useState();
    const [specialization,setSpecialization]=useState();
    const navigate=useNavigate()

    function handleEvent(e){
        e.preventDefault();
        console.log(name,age,salary,gender,specialization);
        let newDoc={
            name:name,
            age:age,
            salary:salary,
            specialization:specialization,
            gender:gender
        }
        axios.post("https://doc-back.onrender.com/doctors",newDoc)
        .then((res)=>{
            console.log(res);
            if(res.status===201){
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
                <h4>Add Doctor</h4>
              </div>

              <div className="card-body">
                <form onSubmit={handleEvent}>

                  {/* Doctor Name */}
                  <div className="mb-3">
                    <label className="form-label">Doctor Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter doctor name"
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
                    <label className="form-label">Salary</label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Enter salary"
                      onChange={(e)=>setSalary(e.target.value)}
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

                  {/* Specification */}
                  <div className="mb-3">
                    <label className="form-label">specialization</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter specialization"
                      onChange={(e)=>setSpecialization(e.target.value)}
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button className="btn btn-dark">
                      Add Doctor
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
