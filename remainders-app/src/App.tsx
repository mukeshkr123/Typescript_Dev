import "./App.css";
import ReminderList, { Reminder } from "./components/ReminderList";
import { useEffect, useState } from "react";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

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

  const addRemainder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setRemainders([newReminder, ...reminders]);
  };

  return (
    <div>
      <NewReminder onAddRemainder={addRemainder} />
      <ReminderList items={reminders} onRemoveRemainder={removeReminder} />
    </div>
  );
}

export default App;
