import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App =() =>{
  const State= useState();
  const [count,updatecount]=useState(0);

const incount = () =>{
  updatecount(count + 1);
 };
 const resetbtn = () =>{
    updatecount(count - 1);
   };
  
return(
 <>
<div className="card1">
<h1  className="heading"> {count} </h1>
<button className="btn1" onClick={incount} >ADD</button>
<button className="btn1" onClick={resetbtn}>Subtract</button>
</div>
</>
);
};

export default App;