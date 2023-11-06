import React, { useState } from "react";

interface NewReminderProps {
  onAddRemainder: (title: string) => void;
}

const NewReminder = ({ onAddRemainder }: NewReminderProps) => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onAddRemainder(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
        className="form-control"
      />
      <button type="submit" className="btn btn-primary my-3 rounded-pill">
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminder;
