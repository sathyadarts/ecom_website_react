import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login(){

    const [inputs,setInputs]=useState({
        username:'',
        password:''
    })


    const inputHandler=(e)=>{
        setInputs(prev=>({...prev,[e.target.name]:[e.target.value]}))
    }
    const nav=useNavigate()

    const submitHandler=(e)=>{
        e.preventDefault()
        Axios.post("http://localhost:3000/login",inputs)
        .then(res=>{
            if(res.data.Login){
                alert("Login Successful")
                nav('/')

            }else{
                alert("Login Failed")
            }
        })
        .catch(err=>console.log(err))
    }
    
    return(
        <body>
            <h1 class="my-5"align="center">Login Form</h1>
            <div class="container">
                <div class="d-flex justify-content-center">
                <div class="row">
                <form onSubmit={submitHandler}>
                    <div class="form-group">
                        <label for="name">UserName</label>
                        <input type="text" name="username" class="form-control" placeholder="Enter Name" onChange={inputHandler}/>
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password</label>
                        <input type="password" name="password" class="form-control" placeholder="Enter Password" onChange={inputHandler}/>
                    </div>
                    <div class="form-group">
                         <input type="submit" class="btn btn-success my-3" value="Login" />
                    </div>
                </form>
             
                </div>
                </div>
            </div>
    
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
    )
}

export default Login