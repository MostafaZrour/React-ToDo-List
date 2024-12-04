
# React To-Do List with `useReducer`

A simple and interactive To-Do List application built with React. This project demonstrates the use of the `useReducer()` hook for state management, making it easier to handle complex state logic.

---

## Features

- Add tasks to your to-do list.
- Mark tasks as completed.
- Delete tasks from the list.
- Clear all completed tasks.
- Persist tasks in local storage (optional).

---

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- A package manager like `npm` or `yarn`.

---

### Installation

1. Clone the repository:

   git clone https://github.com/your-username/react-todo-list.git
   cd react-todo-list
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the App

Start the development server:

```bash
npm start
```

### Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## How It Works

This project uses `useReducer()` to manage the to-do list's state. Here’s a quick overview:

### Reducer Function:
Defines the logic for updating the state based on dispatched actions.

### Actions:
Represent the changes (e.g., adding, toggling, deleting tasks).

### Initial State:
Contains the initial list of tasks.
