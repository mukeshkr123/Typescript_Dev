import "./App.css";
import ReminderList, { Reminder } from "./components/ReminderList";
import { useState } from "react";

function App() {
  const [reminders, setRemainders] = useState<Reminder[]>([
    {
      id: 1,
      title: "Reminder 1",
    },
  ]);
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
