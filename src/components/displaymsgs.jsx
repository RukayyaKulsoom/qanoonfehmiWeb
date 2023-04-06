import React, { useState,useEffect ,useRef} from "react";

import axios from "axios";
import "./App.css";
import Navbar from "./navbar";



const Displaymessages = (props) => {
     const [messages, setmessages] = useState([]);
     const [search, setsearch] = useState('');
     const [searchResults, setSearchResults] = useState([]);
   
        const getmessages= async (e) => {
       
           await axios.get("http://localhost:3000/getallmessage").then((response) => {  
           
            setmessages(response.data);
            //  console.log(messages)
              
            
            });
        } 
        useEffect(() => {
            getmessages();
            searchfunc();
        }, [messages])
        const handleInputChange = (event) => {
          setsearch(event.target.value);
          searchfunc(event.target.value);
        }

       const searchfunc= () => {
        if (search !== "") {
        const newarray = messages.filter((msg) => {
          return Object.values(msg)
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase());
        });
        setSearchResults(newarray)
      }else {
      setSearchResults(messages);
    }
    } 
 
return(
    <div >
        <Navbar />
    
    <div>
    <div style={{flexDirection:'row',marginTop:5,marginBottom:5, width: '100%', height:60 ,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',borderRadius:0,border: 'none'}}>
      
        <div className="ui search " >
        <div className="ui icon input">
          <input style={{padding:20,marginLeft: '25%',marginTop:5,marginBottom:5, width: '50%', height:50 ,boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',borderRadius:20,border: 'none'}}
          // style={{ width:'50%', marginLeft:'30%', marginTop:3, height:40, borderRadius:20}}
         msg={search.length<1 ? messages : searchResults}
       value={search}
            placeholder=" Filter Messages"
        dir="rtl"
            onChange={handleInputChange}
            
          />
          {/* <i class="fa fa-search"
                        style={{marginLeft:'100%', }}></i> */}
        </div>
       
      </div>

</div>
    
{searchResults != [] ? (
  <div >
    {searchResults.map((elem) => {
      return (
        <div style={{backgroundColor:'white',width: '100%', height:40,  alignContent:'center',  justifyContent: "center",margin:10}}>
        <div key={elem._id}  style={{direction:'rtl',backgroundColor:'white',width: '97%',boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)', height:50, alignContent:'center',  justifyContent: "center",margin:20,borderRadius:10}} >
          <h5 style={{padding:10}}>{elem.msg}</h5>
  </div>
  </div>
      );
    })}
  </div>
) : (
  <div>No messages data available</div>
)}
</div>

</div>
);
};
export default Displaymessages