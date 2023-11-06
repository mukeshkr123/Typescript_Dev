import "./App.css";
import ReminderList, { Reminder } from "./components/ReminderList";
import { useEffect, useState } from "react";
import reminderService from "./services/reminder";

function App() {
  const [reminders, setRemainders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setRemainders(reminders);
  };
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
