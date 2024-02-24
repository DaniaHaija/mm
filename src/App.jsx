import { useState } from "react";
import './App.css';

function App(){
  

let [count,setcount] = useState(0);
let ghange=()=>{
  setcount(count+1);
   
}
return(
<>


<h2>COUNTER</h2>
<div className="main">
  
     
    
     <button onClick={ghange}>Dania :  {count}</button>
     </div>
  </>
  
    
   
);
}
export default App;