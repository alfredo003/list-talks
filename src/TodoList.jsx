import React from "react";
import './TodoList.css';

function TodoList(){
  return(
    <div>
      <h1>To Do List</h1>
      <form action="">
        <input type="text" placeholder="Add new task"/>
      <button type="submit">Add</button>
      </form>
      <div className="listTask">
        <div className="item">
          <span>Tarefa de exemplo</span>
          <button>Deletar</button>
        </div>
        <div className="item completo">
          <span>Tarefa de exemplo</span>
          <button>Deletar</button>
        </div>
      </div>
    </div>
  
  )
}

export default TodoList;