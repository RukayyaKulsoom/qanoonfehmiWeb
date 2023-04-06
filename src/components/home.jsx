import React from 'react'

import Navbar from "./navbar";
const Home = () => {
  return (
     <div>
        <Navbar />
   <div>
<label class="form-label" for="customFile">Select an excel file</label>
<input type="file" class="form-control" id="customFile" style={{width:'50%', alignItems:'center', marginTop:10}}/>
    </div></div>
  )
}

export default Home