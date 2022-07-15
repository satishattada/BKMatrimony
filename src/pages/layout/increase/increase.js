import * as React from"react";

const{useState}=React;
export default function Increment(){
    const[counter,setCounter]=useState(10)
    return(
        <div className="container">
            <p>{counter}</p>
            <button onClick={()=>{
                setCounter(counter+1);
            }}>increase</button>
        </div>
    )
}