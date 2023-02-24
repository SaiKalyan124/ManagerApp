import React from 'react';
import './../css/todo.css'

import "./../css/side_Navbar.css";

function Todo({ todo, index, completeTodo , removeTodo}) {
    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div>
          <button class="button-33" onClick={() => completeTodo(index)}>Complete</button>
          <button class="button-88-red" onClick={() => removeTodo(index)}>x</button>
        </div>
      </div>
    );
  }

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        
      />
    </form>
  );
}

export default function Main_todo(){
    const [todos, setTodos] = React.useState([
        {
          text: "learn react werqwetwer",
          isCompleted: false
        },
        {
          text: "add buttons",
          isCompleted: false
        },
        {
          text: "do styling",
          isCompleted: false
        }
      ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
      
        fetch('/api/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
      };


    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
      };
    
    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        fetch(`/api/todos/${index}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
      };
    
    return (
        <div className="app Action-items">
          
        <div className="todo-list">
        <h2>Action Items</h2>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
      );
}