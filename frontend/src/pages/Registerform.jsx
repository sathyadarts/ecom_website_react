import React, { useState } from "react";
import'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
//import { Link } from "react-router-dom";

function Registerform() {
    const [name, setName]=useState("")
    const [address, setAddress]=useState("")
    const [username, setUsername]=useState("")
    const [password, setPassword]=useState("")
    const [phonenumber, setPhonenumber]=useState("")

    const addEmp = () => {
       Axios.post ("http://localhost:3000/saveemp" ,
       {
        name : name,
        address:address,
        username: username,
        password : password,
        phonenumber:phonenumber,
       }
       ).then (()=>{
        console.log("insert successfully")
       })

    }

    return (
            <div class = "container mt-5">
                <div class="row justify-content-center ">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <h3>REGISTER HERE</h3>
                            </div>
                            <div class="card-body">
                                <form onSubmit={addEmp}>
                                    <div class="form-group mb-3">
                                        <label for="name" class="form-label">NAME :</label>
                                        <input type="text" class="form-control" placeholder="enter name" onChange={(e)=>{setName(e.target.value)}}/>
                                    </div>

                                    

                                    <div class="form-group  mb-3">
                                        <label for="username" class="form-label">USERNAME :</label>
                                        <input type="text" class="form-control" placeholder="enter username" onChange={(e)=>{setUsername(e.target.value)}}/>
                                    </div>
                                    
                                    <div class="form-group  mb-3">
                                        <label for="password" class="form-label">Password :</label>
                                        <input type="password" class="form-control" placeholder="enter password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                    </div>

                                    <div class="form-group mb-3">
                                        <label for="address" rows="4" class="form-label">Address :</label>
                                        <textarea class="form-control"rows="5" placeholder="enter address" onChange={(e)=>{setAddress(e.target.value)}}/>
                                    </div>

                                   
                                    <div class="form-group  mb-3">
                                        <label for="phonenumber" class="form-label">Phonenumber :</label>
                                        <input type="phonenumber" class="form-control" placeholder="enter phonenumber" onChange={(e)=>{setPhonenumber(e.target.value)}}/>
                                    </div>


                                  
                                 <div class="d-flex gap-2">
                                    <button type="submit" class="btn btn-success">Submit</button>
                            
                                  </div>
                                  <div>
                                
                                  </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>
    )
}

export default Registerform