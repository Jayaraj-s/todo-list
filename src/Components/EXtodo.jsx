import React from "react";

function Extodo(props){
    return(<div onClick={()=>{props.onChecked(props.id)} } >
        <li>{props.todo}</li>
    </div>)
}

export default Extodo;