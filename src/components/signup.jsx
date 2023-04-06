
import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Navbar from "./navbar";
import { useState, useEffect } from "react";
import axios from 'axios'

const Signup = () => {

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password,setpassword]=useState("");
    const [retypepass,setretypepass]=useState("");
    const [contact,setcontact]=useState("");

    const Creatinguser = async (e) => {
        e.preventDefault();
      await axios.post('http://localhost:3000/createuser', {
          fname,lname,email,password,retypepass,contact
          
      }).then((data) => {
          alert('User created')
      })
  }
    function validation(){

        var name=document.getElementById('fname').value
        var last=document.getElementById('lname').value
        var email=document.getElementById('email').value
        var pass=document.getElementById('password').value
        var cpass=document.getElementById('retypepassword').value
        var phone=document.getElementById('contactno').value
  
        if((name.length <= 2) || (name.length > 20)){
            document.getElementById('firstname').innerHTML="Name length must be between 2 and 20!";
            return false;
        }
                     
         if(!(isNaN(name))) {
         document.getElementById('firstname').innerHTML="Only characters are allowed!";
            return false;
   
    }
    if((last.length <= 2) || (last.length > 20)){
            document.getElementById('lastname').innerHTML="Name length must be between 2 and 20!";
            return false;
        }
        if(!(isNaN(last))) {
         document.getElementById('lastname').innerHTML="Only characters are allowed!";
            return false;
   
    }
    if(pass.length<=3 || pass.length>=20){
        document.getElementById('passworddisplay').innerHTML="Password length must be between 3 -and 20!";
            return false;
    }
  
    if(cpass!=pass){
        document.getElementById('displaypassword').innerHTML="Confirm Password does not match!";
            return false;
    }
    if(phone.length<11){
        document.getElementById('contactnumber').innerHTML="Contact length should not be less then 11!";
            return false;
    }
  }
  console.log('abc')
  return (
    <div>
   <Navbar />

   <div class="container  p-5 mt-5 mb-4" 
   style={{backgroundColor: 'white',borderRadius: 20,width: '100%',borderwidth:2,height: '200%',  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
   <h1 class="text-center mb-lg-5">Sign Up</h1>
   <form action="#" onSubmit= {Creatinguser} >
       <div class="form-floating mb-3">
           <input type="text" class="form-control" id="fname" placeholder="firstname" value={fname} onChange={(e) => setfname(e.target.value)}required/>
           <label for="name">First Name</label>
          <span id="firstname" > </span>
       </div>

       <div class="form-floating mb-3">
           <input type="text" class="form-control" id="lname" placeholder="lastname" value={lname} onChange={(e) => setlname(e.target.value)} required/>
           <label for="name">Last Name</label>
          <span id="lastname" > </span>
       </div>

       <div class="form-floating mb-3">
           <input type="email" class="form-control " id="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} required/>
           <label for="floatingInput">Email address</label>
          <span id="emailid" > </span>

       </div>
       <div class="form-floating mb-3">
           <input type="password" class="form-control" id="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} required/>
           <label for="password">Password</label>
        
          <span id="passworddisplay" > </span>

       </div>

       <div class="form-floating mb-3">
           <input type="password" class="form-control" id="retypepassword" placeholder="Password" value={retypepass} onChange={(e) => setretypepass(e.target.value)} required/>
           <label for="retypepassword">Re-Type Password</label>
          <span id="displaypassword" > </span>

       </div>

       <div class="form-floating ">
           <input type="number" class="form-control" id="contactno" placeholder="Contact Number"  value={contact} onChange={(e) => setcontact(e.target.value)} required/>
           <label for="contactnumber">Contact Number</label>
          <span id="contactnumber" > </span>

       </div>
       <center> <button type="submit" class="btn btn-dark mt-3" style={{width: "30%" ,borderRadius:20}} > 
       <Link to="/stats" style={{color: 'white',textDecoration: 'none'  }}>
              Sign up
            </Link>
      </button>
       </center>
   </form>
</div>

</div>


  )

 

}

export default Signup