import { FaTimes } from "react-icons/fa"; // use react-icons FaTimes component

const Task = ({ task, onDelete, onToggle }) => {
  // click FaTimes fires onDelete to Tasks onDelete then fire deleteTask function
  // double click the div fire onToggle
  return (
    <div
      // if the task.reminder true then set className = "reminder"
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
