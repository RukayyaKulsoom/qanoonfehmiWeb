
import React from 'react'

import Navbar from "./navbar";
import { useState} from "react";
import axios from 'axios'


const Login = () => { 
    const [email, setemail] = useState("");
    const [password,setpassword]=useState("");
    
const getuser = async () => {
           console.log('abc')
            await axios.post('http://localhost:3000/loginuser', {
                email,password
                
            })
          
        }

  return (
    <div>
   <Navbar />

   <div class="container  p-5 mt-5 mb-4" 
   style={{backgroundColor: 'white',borderRadius: 20,width: '100%',borderwidth:2,height: '800%',  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
   <h1 class="text-center mb-lg-5">Login</h1>
   <form action="#"  >
      

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

       <center> <button type="button"  class="btn btn-dark mt-3" style={{width: "30%" ,borderRadius:20}} onSubmit={getuser()} > Login</button>
       </center>
   </form>
</div>

</div>


  )

 

}

export default Login