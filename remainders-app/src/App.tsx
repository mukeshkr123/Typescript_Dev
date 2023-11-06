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

  const removeReminder = (id: number) => {
    setRemainders(reminders.filter((reminder) => reminder.id !== id));
  };
  return (
    <div>
      <ReminderList items={reminders} onRemoveRemainder={removeReminder} />
    </div>
  );
}

export default App;
