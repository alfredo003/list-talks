import React,{ useState } from "react";
import './TodoList.css';
import Icone from './assets/icon.webp'
function TodoList(){
  const [list,setList] = useState([]);
  const [newItem,setNewItem]=useState("");

  function addItem(form){
   form.preventDefault();

   if(!newItem){
    return;
   }

   setList([...list,{text:newItem, isCompleted:false}]);
   setNewItem("");
   document.getElementById('input').focus();
  }
  return(
    <div>
      <h1>To Do List</h1>
      <form onSubmit={addItem}>
        <input 
          type="text"
          id="input"
          value={newItem} 
          onChange={(e)=>{setNewItem(e.target.value)}}
          placeholder="Add new task"
        />

      <button type="submit" className="add">Add</button>
      </form>
      <div className="listTask">
        <div>
        {
          list.length < 1
          ?
          <img  className="icone-central" src={Icone}/>
          :
          list.map((item, index)=>(
              <div className="item">
                <span>{item.text}</span>
                <button className="del">Deletar</button>
              </div>

          ))
 }
           <button className="deleteAll">Delete All</button>
       
        </div>
        
      </div>
    </div>
  
  )
}

export default TodoList;