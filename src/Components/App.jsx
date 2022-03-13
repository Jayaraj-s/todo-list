import React, { useState } from "react";
import Extodo from "./EXtodo";
import InputArea from "./InputArea";

function App() {
    const [items,setItems]=useState([]);

    function onCl(inputText){
        setItems((preValue)=>{
            return [...preValue , inputText]
        });
    }
    
    function deleteItems(id){
        console.log(id);
        setItems((prevValue)=>{
            return prevValue.filter((items,index)=>{
                return index !== id ;
            })
        })
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      
      <InputArea onAdd={onCl}/>
      <div>
        <ul>
          {items.map((item,index)=>(
              <Extodo
               key = {index} 
               id = {index} todo =
               {item} 
               onChecked={deleteItems}   
              />))}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
