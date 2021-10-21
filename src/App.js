import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // create lists with .map()  child list should have key prop
  // tasks variable is the initial value immutatble, use setTasks to update it
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Oct 25th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Oct 21th at 4:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery shopping",
      day: "Oct 26th at 12:30pm",
      reminder: false,
    },
  ]);
  const [showAdd, setShowAdd] = useState(false);

  /*useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []); */

  // Fetch Tasks
  /*   const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  }; */

  // Fetch Task
  // const fetchTask = async (id) => {
  //   const res = await fetch(`http://localhost:5000/tasks/_${id}`);
  //   const data = await res.json();
  //   return data;
  // };

  // add task
  const addTask = (task) => {
    // const res = await fetch("http://localhost:5000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(task),
    // });

    // const data = await res.json();
    // setTasks([...tasks, data]);
    const id = Math.floor(Math.random() * 100 + 1);
    const newTask = { id, ...task }; // create new task with id
    setTasks([...tasks, newTask]); // append new task to tasks
  };

  // Delete Task  use setTasks to change the tasks, use filter(), filter out the clicked id
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder use .map to loop through each tasks element to check
  // if the id is the one cliecked then set reminder to the opposite
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // use onDelete props = deleteTask function to delete the task
  return (
    <div className="container">
      <Header onShowAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task here"
      )}
    </div>
  );
}

export default App;

/*
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Oct 25th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Oct 21th at 4:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Grocery shopping",
      day: "Oct 26th at 12:30pm",
      reminder: false,
    },  */
