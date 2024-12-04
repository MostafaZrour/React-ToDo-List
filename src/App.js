import { useState } from "react";
import { useReducer } from "react";

const initialState = [
  { id: 1, title: "Learn React" },
  { id: 2, title: "Complete the project" , done : true},
  { id: 3, title: "Read a JavaScript book" },
  { id: 4, title: "Write a blog post" , done : true }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ajouter":
      if (action.title !== "") {
        return [...state, { id: Date.now(), title: action.title, done: false }];
      }
    case "supprimer":
      return [...state.filter((task) => action.id !== task.id)];
      case "checked":
        return state.map((task) => {
          if (action.id === task.id) {
            return { ...task, done: !task.done };
          }
          return task;
        });
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState("");
console.log(todo);

  const complete = {
    textDecoration: "line-through",
  };
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <form id="todoForm" className="mb-4">
        <div className="mb-3">
          <label htmlFor="todoInput" className="form-label">
            Add a new task
          </label>
          <input
            type="text"
            className="form-control"
            id="todoInput"
            placeholder="Enter your todo"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            setData("");
            dispatch({ type: "ajouter", title: data });
          }}
          className="btn btn-primary w-100"
        >
          Add Todo
        </button>
      </form>

      <ul id="todoList" className="list-group">
        {todo.map((task, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span style={task.done ? complete : {}} className="w-25 fw-bold">
              {task.title}
            </span>
            <span
              className={`badge ${
                task.done ? "text-bg-success" : "text-bg-secondary"
              } w-25 p-2`}
            >
              {task.done ? "Tâche terminée" : "Tâche incomplète"}
            </span>
            <div>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => dispatch({ type: "checked", id: task.id })}
              >
                {task.done ? <i className="bi bi-x-circle"></i> : <i className="bi bi-check-circle"></i>}
              </button>
              <button
                className="btn btn-outline-danger btn-sm mx-2"
                onClick={() => dispatch({ type: "supprimer", id: task.id })}
              >
                <i className="bi bi-trash"></i>
              </button>
              <button className="btn btn-outline-primary btn-sm">
                <i className="bi bi-pencil"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
