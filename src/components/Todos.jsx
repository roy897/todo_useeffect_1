import React, { useState,useEffect } from 'react'

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [newtodo, setNewTodos] = useState("");

//Delete data from api (delete_method)

//===================================

//updating changes made by user (patch_method)
    
    const patchInfo = (id) => {
        fetch("http://localhost:8000/todos" + id,{
            method: "PUT",
            headers: {
                "content-type":"application/json",
            },
            body:JSON.stringify({
                id: id,
                text: newtodo,                
            }),
        })
        .then((r)=>r.json())
        .then((d)=>{
            console.log(d);
            // setTodos([...todos,d]);
            setNewTodos("");
        });
    }

//=============================================

//setting data on API on user input (post_Api) method

    const saveInfo = () => {       
        if(newtodo!=""){
            fetch("http://localhost:8000/todos",{
            method: "POST",
            headers: {
                "content-type":"application/json",
            },
            body:JSON.stringify({
                text: newtodo,
                isCompleted: false,
            }),
            })
            .then((r)=>r.json())
            .then((d)=>{
                setTodos([...todos,d]);
                setNewTodos("");
            });
        }else{
            alert("please add todo!");
        }        
    };
    
//===================================


 //fetching data from API on own
 //fetch("http://localhost:8000/todos?_page=1&_limit=2")
  useEffect(()=>{

    fetch("http://localhost:8000/todos?_page=1&_limit=2")
    .then((r)=>r.json())
    .then((d)=>{
    //   console.log(d);
      setTodos(d)
    });

  },[]);
//=============================

  return (
    <div>
      Todos
      <div>
          <input type="text" value={newtodo} onChange={({target}) => setNewTodos(target.value) } placeholder="✍️write todo..."/>
          <button onClick={saveInfo}>+</button>          
      </div>
      
       {todos.map((el)=>(           
          <div key={el.id}>              
                <div>
                <p> {el.text} <span><button onClick={()=>patchInfo(el.id)}>📝Update</button></span> </p>                     
                </div>         
          </div>
      ))}
    </div>
  )
}

export default Todos
