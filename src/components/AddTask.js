import { useState } from "react";

const AddTask = ({ onAdd }) => {
  // initial text, day are empty, reminder to be false
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add a task");
      return;
    }
    onAdd({ text, day, reminder }); // call onAdd then fire addTask
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          name="text"
          value={text}
          onChange={(e) => {
            // when typing in the value will be updated to the new value
            setText(e.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Time</label>
        <input
          type="text"
          name="day"
          placeholder="Add day and time"
          value={day}
          // when typing in the value will be updated to the new value
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
