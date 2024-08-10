import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    console.log("Handle submitted");
    e.preventDefault();
    setTodos((currentTodo) => {
      return [
        ...currentTodo,
        {
          id: crypto.randomUUID(),
          title: newItem,
          completed: false,
        },
      ];
    });
    setNewItem("");
  }
  function toggleToDo(id,completed){
    setTodos(currentTodo=>{
      return currentTodo.map(todo=>{
          if(todo.id===id){
            return {
              ...todo,completed
          }
          }
          return todo;
        })
      
    })

  }
  function deleteToDo(id){
    setTodos(currentTodo=>{
      return currentTodo.filter(todo=>todo.id!==id);
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item">Enter Your Item </label>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          id="item"
        />
        <button type="submit">Add</button>
      </form>
      <h1>Todo List</h1>
      <h4>{todos.length===0 && "No Todos "}</h4>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label htmlFor="">
                <input
                  type="checkbox"
                  name=""
                  checked={todo.completed}
                  onChange={(e) => toggleToDo(todo.id, e.target.checked)}
                />
                {todo.title}

              </label>
              <button onClick={()=>deleteToDo(todo.id)}>Delete</button>

            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
