import { useState } from "react";
import { useReducer } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "ajouter":
      if (action.title !== "") {
        return [...state, { id: Date.now(), title: action.title }];
      }
    case "supprimer":
      return [...state.filter((task) => action.id !== task.id)];
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState("");

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <form id="todoForm" className="mb-4">
        <div className="mb-3">
          <label for="todoInput" className="form-label">
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
        {todo.map((task) => (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {task.title}
            <div>
              <button class="btn btn-success btn-sm">
                <i class="bi bi-check-circle"></i>
              </button>
              <button
                className="btn btn-danger btn-sm mx-2"
                onClick={() => dispatch({ type: "supprimer", id: task.id })}
              >
                <i class="bi bi-trash"></i>
              </button>
              <button className="btn btn-primary btn-sm">
                <i class="bi bi-pencil"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
