import "./App.css";
import ReminderList from "./components/ReminderList";

const reminders = [
  { id: 1, title: "Reminder 1" },
  { id: 2, title: "Reminder 2" },
];

function App() {
  return (
    <div>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
