# 📋 React To-Do List with `useReducer`

A simple and interactive To-Do List application built with React. This project demonstrates the use of the `useReducer()` hook for state management, making it easier to handle complex state logic.

---

## ✨ Features

- ✅ Add tasks to your to-do list.
- ✔️ Mark tasks as completed.
- 🗑️ Delete tasks from the list.
- 🧹 Clear all completed tasks.
- 💾 Persist tasks in local storage (optional).

---

## 📸 Demo

![Todo List Demo](demo-image-link)  
_(Replace this with a link or path to your app's demo image or live preview.)_

---

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.
- A package manager like `npm` or `yarn`.

---

### ⚙️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/react-todo-list.git
   cd react-todo-list
   Install the dependencies:
   ```

bash
Copier le code
npm install
Start the development server:

bash
Copier le code
npm start
Open your browser and visit http://localhost:3000 to see the app.

🛠️ How It Works
This project uses the useReducer() hook to manage the to-do list's state. Here’s a quick overview of how it works:

🛠️ Concept 📖 Description
Reducer Function Defines the logic for updating the state based on dispatched actions.
Actions Represent the changes (e.g., adding, toggling, deleting tasks).
Initial State Contains the initial list of tasks to be displayed or manipulated in the app.
🗂️ Project Structure
php
Copier le code
react-todo-list/
├── src/
│ ├── App.js # Main app component
│ ├── TodoReducer.js # Reducer logic for state management
│ ├── index.js # Entry point
│ ├── styles.css # Optional: Custom styles
├── public/
│ ├── index.html # HTML template
├── package.json
└── README.md
🎨 Design Highlights
Clean and minimalist UI using modern React practices.
Fully responsive for desktop and mobile devices.
Uses Bootstrap for consistent styling (optional).
🤝 Contributing
Contributions are welcome! Feel free to:

Fork the repository.
Create a new branch for your feature or bug fix.
Submit a pull request with a detailed explanation of your changes.
📜 License
This project is licensed under the MIT License.
