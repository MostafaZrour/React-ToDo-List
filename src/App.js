import { useState } from "react";
import { useReducer } from "react";
import { v4 } from "uuid";

const initialState = [
  { id: 1, title: "Learn React", done: false },
  { id: 2, title: "Complete the project", done: true },
  { id: 3, title: "Read a JavaScript book", done: false },
  { id: 4, title: "Write a blog post", done: true },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "ajouter":
      if (action.title !== "") {
        return [
          ...state,
          { id: v4().slice(0, 7), title: action.title, done: false },
        ];
      }
      return state;
    case "supprimer":
      return state.filter((task) => action.id !== task.id);
    case "modifier-start":
      return state.map((task) =>
        task.id === action.id ? { ...task, editing: true } : { ...task, editing: false }
      );
    case "modifier-complete":
      return state.map((task) =>
        task.id === action.id
          ? { ...task, title: action.newTitle, editing: false }
          : task
      );
    case "checked":
      return state.map((task) =>
        task.id === action.id ? { ...task, done: !task.done } : task
      );
    default:
      return state;
  }
};

function App() {
  const [todo, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState("");
  const [editingTask, setEditingTask] = useState(null);

  const complete = {
    color: "red",
    textDecoration: "line-through",
  };

  const handleAddOrUpdate = () => {
    if (editingTask) {
      dispatch({ type: "modifier-complete", id: editingTask, newTitle: data });
      setEditingTask(null);
    } else {
      dispatch({ type: "ajouter", title: data });
    }
    setData("");
  };

  return (
    <div className="container mt-5 border p-5 rounded">
      <h1 className="text-center mb-4">Todo List</h1>
      <form id="todoForm" className="mb-4">
        <div className="mb-3">
          <label htmlFor="todoInput" className="form-label">
            {editingTask ? "Update the task" : "Add a new task"}
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
          onClick={handleAddOrUpdate}
          className="btn btn-primary w-100"
        >
          {editingTask ? "Update" : "Add Todo"}
        </button>
      </form>

      <ul id="todoList" className="list-group">
        {todo.map((task) => (
          <li
            key={task.id}
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
                {task.done ? (
                  <i className="bi bi-x-circle"></i>
                ) : (
                  <i className="bi bi-check-circle"></i>
                )}
              </button>
              <button
                className="btn btn-outline-danger btn-sm mx-2"
                onClick={() => dispatch({ type: "supprimer", id: task.id })}
              >
                <i className="bi bi-trash"></i>
              </button>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => {
                  dispatch({ type: "modifier-start", id: task.id });
                  setEditingTask(task.id);
                  setData(task.title);
                }}
              >
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
