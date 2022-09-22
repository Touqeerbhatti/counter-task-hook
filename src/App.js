import React, { useState } from "react";
import "./index.css";

const App =() =>{
  
const [count,updatecount]=useState(0);

const incount = () =>{
  updatecount(count + 1);
 };
 const resetbtn = () =>{
  if(count>0)
  {
    updatecount(count - 1);
  }
    
   };
  
return(
 <>

<div className="main-div">


<div className="card1">

<h1  className="heading"> {count} </h1>

<button className="btn1" onClick={incount} >ADD</button>

<button className="btn1" onClick={resetbtn}>Subtract</button>
</div>

</div>
</>
);
};

export default App;